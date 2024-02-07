import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createPaymentLink, createPrice } from "@/app/actions";

export default function VerticalLinearStepper() {
  async function createCustomPaymentLink() {
    try {
      const price = await createPrice(donationAmount, donationFrequency);
      const paymentLink = await createPaymentLink(price.id);
      if (paymentLink) {
        window.open(paymentLink.url);
      }
    } catch (err) {
      console.error(err);
    }
    return;
  }

  // stepper controls
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // donation amount controls
  const [donationAmount, setDonationAmount] = useState();
  const [donationFrequency, setDonationFrequency] = useState("monthly");

  const handleDonationAmountChange = (event, newDonationAmount) => {
    setDonationAmount(newDonationAmount);
  };

  const handleDonationFrequencyChange = (event, newDonationFrequency) => {
    setDonationFrequency(newDonationFrequency);
  };

  // designation controls
  const [designation, setDesignation] = useState("generalFunds");

  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };

  const steps = [
    {
      label: "Donation Amount",
      description: "Please select a donation amount",
      content: (
        <ToggleButtonGroup
          exclusive
          value={donationAmount}
          onChange={handleDonationAmountChange}
        >
          <ToggleButton value="10">$10</ToggleButton>
          <ToggleButton value="30">$30</ToggleButton>
          <ToggleButton value="50">$50</ToggleButton>
          <ToggleButton value="0">Custom</ToggleButton>
        </ToggleButtonGroup>
      ),
    },
    {
      label: "Donation Frequency",
      description: "Please select your donation frequency",
      content: (
        <ToggleButtonGroup
          exclusive
          value={donationFrequency}
          onChange={handleDonationFrequencyChange}
        >
          <ToggleButton value="oneTime">One Time</ToggleButton>
          <ToggleButton value="week">Weekly</ToggleButton>
          <ToggleButton value="month">Monthly</ToggleButton>
          <ToggleButton value="year">Yearly</ToggleButton>
        </ToggleButtonGroup>
      ),
    },
    {
      label: "Donation Designation",
      description: `Which ministry would you like your gift to fund?`,
      content: (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Designation</InputLabel>
          <Select
            labelId="designation"
            id="designation-select"
            value={designation}
            label="Designation"
            onChange={handleDesignationChange}
          >
            <MenuItem value="generalFunds">General Funds</MenuItem>
            <MenuItem value="education">Education</MenuItem>
            <MenuItem value="pignonClinics">Milk and Feeding Clinic</MenuItem>
            <MenuItem value="housingFund">
              Housing Fund for aged out Children(18+)
            </MenuItem>
          </Select>
        </FormControl>
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {step.content}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    disabled={
                      index === steps.length - 1
                        ? !donationAmount || !donationFrequency || !designation
                        : false
                    }
                    variant="contained"
                    onClick={
                      index === steps.length - 1
                        ? createCustomPaymentLink
                        : handleNext
                    }
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1
                      ? "Enter Payment Details"
                      : "Continue"}
                  </Button>
                  {index !== 0 && (
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Thank you for your donation!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Make another donation
          </Button>
        </Paper>
      )}
    </Box>
  );
}
