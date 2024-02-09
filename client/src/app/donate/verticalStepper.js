import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { createPaymentLink, createPrice } from "@/app/actions";

export default function VerticalLinearStepper() {
  async function createCustomPaymentLink() {
    try {
      let donation =
        donationAmount === "custom" ? customAmount : donationAmount;

      const price = await createPrice(donation, donationFrequency);

      const paymentLink = await createPaymentLink(price.id);
      if (paymentLink) {
        window.open(paymentLink.url);
      }
    } catch (err) {
      console.error(err);
    }
    return;
  }

  // continue controls
  function continueDisabled(index) {
    if (index === steps.length - 1) {
      return false;
    } else {
      if (index === 0) {
        return (
          !donationAmount ||
          (donationAmount === "custom" && Number(customAmount) === 0)
        );
      } else if (index === 1) {
        return !donationFrequency;
      } else if (index === 2) {
        return !designation;
      }
    }
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
  const [donationAmount, setDonationAmount] = useState("10");
  const [donationFrequency, setDonationFrequency] = useState("month");
  const [customSelection, setCustomSelection] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonationAmountChange = (event, newDonationAmount) => {
    if (newDonationAmount === "custom") {
      setCustomSelection(true);
      setDonationAmount(0);
    } else {
      setCustomSelection(false);
      setDonationAmount(newDonationAmount);
    }
    setDonationAmount(newDonationAmount);
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
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
      label: `Donation Amount: $${donationAmount}`,
      description: "Please select a donation amount",
      content: (
        <>
          <ToggleButtonGroup
            exclusive
            value={donationAmount}
            onChange={handleDonationAmountChange}
          >
            <ToggleButton value="10">$10</ToggleButton>
            <ToggleButton value="30">$30</ToggleButton>
            <ToggleButton value="50">$50</ToggleButton>
            <ToggleButton value="custom">Custom</ToggleButton>
          </ToggleButtonGroup>
          {customSelection && (
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            </FormControl>
          )}
        </>
      ),
    },
    {
      label: `Donation Frequency: ${donationFrequency}`,
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
      label: `Donation Designation: ${designation}`,
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
      <Stepper activeStep={activeStep}>
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
            <>
              <Typography>{step.description}</Typography>
              {step.content}
              <Box sx={{ mb: 2 }}>
                <div>
                  <br />
                  {index === steps.length - 1 && (
                    <Typography variant="overline">
                      Donate <b>${donationAmount}</b> every{" "}
                      <b>{donationFrequency}</b> to <b>{designation}</b>
                    </Typography>
                  )}
                  <Button
                    disabled={continueDisabled(index)}
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
            </>
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
