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
  week: {
    generalFunds: {
      10: "https://buy.stripe.com/8wM17j2131BFfeMcNz",
      30: "https://buy.stripe.com/dR66rD7ln8037MkbJw",
      50: "https://buy.stripe.com/dR617j7ln0xBc2A4hd",
    },
    hhhEducation: {
      10: "https://buy.stripe.com/3csbLXaxzbcf6Ig3cY",
      30: "https://buy.stripe.com/8wM3fr6hja8bd6E3d1",
      50: "https://buy.stripe.com/bIYbLXgVX6VZ6Ig150",
    },
    pignonEducation: {
      10: "https://buy.stripe.com/28o2bncFH3JN0jSbJt",
      30: "https://buy.stripe.com/5kAg2dcFH8039UseVK",
      50: "https://buy.stripe.com/28o03ffRTgwz5Ec00V",
    },
    pignonClinics: {
      10: "https://buy.stripe.com/3cs7vH3571BF1nW9Bk",
      30: "https://buy.stripe.com/eVacQ1cFH0xB4A87tj",
      50: "https://buy.stripe.com/aEU2bndJLbcf1nWfZS",
    },
    housingFund: {
      10: "https://buy.stripe.com/9AQ5nzcFH6VZ2s03cV",
      30: "https://buy.stripe.com/28oeY9cFH2FJ3w44h8",
      50: "https://buy.stripe.com/8wMg2dfRTeor4A8aFx",
    },
  },
  month: {
    generalFunds: {
      10: "https://buy.stripe.com/bIY17jdJLa8b2s0cMM",
      30: "https://buy.stripe.com/7sI7vHgVX1BF1nW7st",
      50: "https://buy.stripe.com/aEUeY95dfa8b8QoaEG",
    },
    hhhEducation: {
      10: "https://buy.stripe.com/8wM2bn49beoraYwdQV",
      30: "https://buy.stripe.com/fZeg2d49b6VZ9Us004",
      50: "https://buy.stripe.com/dR67vH3579475EcdQT",
    },
    pignonEducation: {
      10: "https://buy.stripe.com/6oEg2d213cgj8Qo28e",
      30: "https://buy.stripe.com/6oEg2d8pr0xBgiQ5kr",
      50: "https://buy.stripe.com/dR68zL3572FJ9UsfZ6",
    },
    pignonClinics: {
      10: "https://buy.stripe.com/4gwbLX357dknd6E28j",
      30: "https://buy.stripe.com/9AQ3frbBD4NRaYw7sC",
      50: "https://buy.stripe.com/fZe03f5dfcgj8QofZ7",
    },
    housingFund: {
      10: "https://buy.stripe.com/8wMbLXcFHdkn1nWbIU",
      30: "https://buy.stripe.com/aEU03fbBD2FJ9UsdR3",
      50: "https://buy.stripe.com/cN203f213gwzd6E00e",
    },
  },
  year: {
    generalFunds: {
      10: "https://buy.stripe.com/dR68zL7lnbcfgiQcNi",
      30: "https://buy.stripe.com/3cs9DP0WZbcfc2A7sX",
      50: "https://buy.stripe.com/8wMbLXaxz4NR4A84gK",
    },
    hhhEducation: {
      10: "https://buy.stripe.com/5kA7vHfRTfsv8Qo6oV",
      30: "https://buy.stripe.com/4gwbLXaxzfsvfeMcNk",
      50: "https://buy.stripe.com/bIY3fr8prfsv7MkbJh",
    },
    pignonEducation: {
      10: "https://buy.stripe.com/bIY8zL7lncgj9UsbJk",
      30: "https://buy.stripe.com/14k5nz9tv0xBaYw8x7",
      50: "https://buy.stripe.com/eVa6rDfRTeor4A87t2",
    },
    pignonClinics: {
      10: "https://buy.stripe.com/bIY8zL5dffsv5Ec00D",
      30: "https://buy.stripe.com/7sI3fraxz1BFc2A3cQ",
      50: "https://buy.stripe.com/3cs4jv8pra8b2s000F",
    },
    housingFund: {
      10: "https://buy.stripe.com/bIY17j6hjcgj2s03cU",
      30: "https://buy.stripe.com/aEUbLX5df5RVgiQ8xd",
      50: "https://buy.stripe.com/5kAbLX7lnfsv8Qo3cS",
    },
  },
  oneTime: {
    generalFunds: {
      10: "https://buy.stripe.com/bIY2bndJL9472s0dRh",
      30: "https://buy.stripe.com/cN28zL6hjfsv7MkcNe",
      50: "https://buy.stripe.com/aEU7vH0WZgwz1nW5kN",
    },
    hhhEducation: {
      10: "https://buy.stripe.com/14k2bnbBDfsvd6E5kK",
      30: "https://buy.stripe.com/fZe8zL9tvdkn7Mk4gF",
      50: "https://buy.stripe.com/8wM03f5dfbcfc2A14s",
    },
    pignonEducation: {
      10: "https://buy.stripe.com/14k3frgVXfsv0jS9AV",
      30: "https://buy.stripe.com/14k5nz6hjeor0jS5kG",
      50: "https://buy.stripe.com/5kAeY99tv2FJ6Ig8wT",
    },
    pignonClinics: {
      10: "https://buy.stripe.com/8wM3frbBDbcfd6E9AS",
      30: "https://buy.stripe.com/9AQ8zLbBD9475Ec8wP",
      50: "https://buy.stripe.com/8wMeY95df2FJeaI28s",
    },
    housingFund: {
      10: "https://buy.stripe.com/00g6rD0WZ3JNc2AeV9",
      30: "https://buy.stripe.com/8wMdU5gVX1BFc2AfZe",
      50: "https://buy.stripe.com/eVa5nzfRTbcfeaIfZf",
    },
  },
};

export default function HorizontalLinearStepper() {
  async function getPaymentLink() {
    // immediately create new window to avoid popup blocker
    let paymentWindow = window.open("", "_blank");

    try {
      const donationInDollars = donationAmountComputation() * 100;
      let link =
        paymentLinks[donationFrequency]?.[designation]?.[donationAmount];
      if (donationAmount === "custom" || !link) {
        console.log("creating custom link");
        const response = await fetch(
          `https://us-central1-haiti-home-of-hope.cloudfunctions.net/createPaymentLink/?donationInDollars=${donationInDollars}&donationFrequency=${donationFrequency}&donationDesignation=${designation}`
        );
        link = await response.text();
        console.log(link);
      }

      paymentWindow.location.href = link;
      // window.open(link);
    } catch (err) {
      console.error(err);
      window.alert(
        "Oops! There was an error creating a payment link. Please contact contact@haitihomeofhope.org if the problem persists."
      );
      paymentWindow.close();
    }
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
