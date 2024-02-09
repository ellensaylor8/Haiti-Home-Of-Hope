import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { createPaymentLink, createPrice } from "@/app/actions";

const theme = createTheme({
  components: {
    // Name of the component
    MuiSelect: {
      styleOverrides: {
        // Name of the slot
        "MuiSelect-outlined": {
          color: "var(--primary-green)",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        // Name of the slot
        root: {
          "&.Mui-active": {
            color: "var(--primary-green)",
          },
          "&.Mui-completed": {
            color: "var(--primary-green)",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          "&.Mui-selected": {
            backgroundColor: "var(--light-green)",
          },
        },
      },
    },
  },
});

export default function HorizontalLinearStepper() {
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
  const [activeStep, setActiveStep] = React.useState(0);

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

  const isStepFailed = (index) => {
    if (index === 0) {
      return (
        !donationAmount ||
        (donationAmount === "custom" && Number(customAmount) === 0)
      );
    }
  };

  function donationAmountComputation() {
    return donationAmount === "custom" ? customAmount : donationAmount;
  }
  function donationFrequencyLabel() {
    switch (donationFrequency) {
      case "month":
        return "Monthly";
      case "week":
        return "Weekly";
      case "year":
        return "Yearly";
      case "oneTime":
        return "One Time";
    }
  }

  function donationDesignationLabel(designation) {
    switch (designation) {
      case "generalFunds":
        return "General Funds";
      case "education":
        return "Education";
      case "pignonClinics":
        return "Milk & Feeding Clinic";
      case "housingFund":
        return "Housing Fund for aged out Children(18+)";
    }
  }

  const steps = [
    {
      label: `Donation Amount: $${donationAmountComputation()}`,
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
      label: `Donation Frequency: ${donationFrequencyLabel()}`,
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
      label: `Donation Designation: ${donationDesignationLabel(designation)}`,
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
            <MenuItem value="generalFunds">
              {donationDesignationLabel("generalFunds")}
            </MenuItem>
            <MenuItem value="education">
              {donationDesignationLabel("education")}
            </MenuItem>
            <MenuItem value="pignonClinics">
              {donationDesignationLabel("pignonClinics")}
            </MenuItem>
            <MenuItem value="housingFund">
              {donationDesignationLabel("housingFund")}
            </MenuItem>
          </Select>
        </FormControl>
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} sx={{ color: "var(--primary-green)" }}>
          {steps.map((step, index) => {
            const labelProps = {};
            if (isStepFailed(index)) {
              labelProps.optional = (
                <Typography variant="caption" color="error">
                  Donation amount cannot be $0.00
                </Typography>
              );

              labelProps.error = true;
            }
            return (
              <Step key={step.label}>
                <StepLabel {...labelProps}>{step.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>Thank you for your donation!</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Make another donation
            </Button>
          </Paper>
        )}
        :
        {
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {steps[activeStep].description}
            </Typography>
            {steps[activeStep].content}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: "var(--primary-green)" }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                sx={{ color: "var(--primary-green)" }}
                onClick={
                  activeStep === steps.length - 1
                    ? createCustomPaymentLink
                    : handleNext
                }
                disabled={continueDisabled(activeStep)}
              >
                {activeStep === steps.length - 1
                  ? "Enter Payment Details"
                  : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        }
      </Box>
    </ThemeProvider>
  );
}