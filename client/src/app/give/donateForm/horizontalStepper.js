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
    MuiStepLabel: {
      styleOverrides: {
        root: {},
      },
    },
    MuiSelect: {
      styleOverrides: {
        "MuiSelect-outlined": {
          color: "var(--primary-green)",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
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
        root: {
          "&.Mui-selected": {
            backgroundColor: "var(--light-green)",
          },
        },
      },
    },
  },
});

theme.components.MuiStepLabel = {
  styleOverrides: {
    root: {
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        display: "block",
      },
    },
  },
};

const paymentLinks = {
  week: {},
  month: {
    generalFunds: {
      10: "https://buy.stripe.com/test_bIYaHacDt9oba7S8wF",
      30: "https://buy.stripe.com/test_dR6g1u46X57V7ZK00j",
      50: "https://buy.stripe.com/test_aEUdTmgTJ8k7fscfZi",
    },
    hhhEducation: {
      10: "https://buy.stripe.com/test_7sI02w7j9eIvfsc7sO",
      30: "https://buy.stripe.com/test_4gw02wcDtcAn4NybJ5",
      50: "https://buy.stripe.com/test_7sI4iMcDtbwj5RCeVi",
    },
    pignonEducation: {},
    pignonClinics: {
      10: "https://buy.stripe.com/test_5kA6qU7j943R7ZK00q",
      30: "https://buy.stripe.com/test_5kA5mQ9rh8k793O3cD",
      50: "https://buy.stripe.com/test_3cs9D6dHxdErdk4fZq",
    },
    housingFund: {},
  },
  year: {},
  oneTime: {
    generalFunds: {
      10: "https://buy.stripe.com/test_fZe7uY9rh2ZNa7S28B",
      30: "https://buy.stripe.com/test_fZe2aE7j98k7dk4eVo",
      50: "https://buy.stripe.com/test_5kAbLe5b157Va7S28f",
    },
    hhhEducation: {},
    pignonClinics: {},
    housingFund: {},
  },
};

export default function HorizontalLinearStepper() {
  async function getPaymentLink() {
    try {
      const donationInDollars = donationAmountComputation() * 100;
      let link = paymentLinks[donationFrequency][designation][donationAmount];
      if (donationAmount === "custom" || !link) {
        console.log("creating custom link");
        link = await createCustomPaymentLink(donationInDollars);
      }
      window.open(link);
    } catch (err) {
      console.error(err);
      window.alert(
        "Oops! There was an error creating a payment link. Please contact contact@haitihomeofhope.org if the problem persists."
      );
    }
  }

  async function createCustomPaymentLink(donationInDollars) {
    const priceId = await createPrice(
      donationInDollars,
      donationFrequency,
      designation
    );

    return await createPaymentLink(priceId, donationFrequency, designation);
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
      case "hhhEducation":
        return "HHH Education";
      case "pignonEducation":
        return "Pignon Education";
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
            <MenuItem value="hhhEducation">
              {donationDesignationLabel("hhhEducation")}
            </MenuItem>
            <MenuItem value="pignonEducation">
              {donationDesignationLabel("pignonEducation")}
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
                  activeStep === steps.length - 1 ? getPaymentLink : handleNext
                }
                disabled={continueDisabled(activeStep)}
              >
                {activeStep === steps.length - 1 ? "Stripe Checkout" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        }
      </Box>
    </ThemeProvider>
  );
}
