import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  Box,
  Button,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { createPaymentLink, createPrice } from "@/app/actions";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

async function createCustomPaymentLink() {
  try {
    const price = await createPrice(donationAmount, "month");
    const paymentLink = await createPaymentLink(price.id);
    if (paymentLink) {
      window.open(paymentLink.url);
    }
  } catch (err) {
    console.error(err);
  }
  return;
}

export default function BasicTabs() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // recurring donation amount controls
  const [donationAmount, setDonationAmount] = useState();
  const [donationFrequency, setDonationFrequency] = useState("monthly");

  const handleDonationAmountChange = (event, newDonationAmount) => {
    setDonationAmount(newDonationAmount);
  };

  const handleDonationFrequencyChange = (event, newDonationFrequency) => {
    setDonationFrequency(newDonationFrequency);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="One Time" {...a11yProps(0)} />
          <Tab label="Recurring" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabValue} index={0}>
        <Button
          variant="outlined"
          onClick={() => window.open()}
          sx={{
            marginBottom: "2rem",
            marginTop: "1rem",
            borderColor: "var(--primary-green)",
            backgroundColor: "var(--primary-green)",
            color: "white",
          }}
        >
          Make a one time donation
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        1. Select Donation Amount
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
        2. Select Donation Frequency
        <ToggleButtonGroup
          exclusive
          value={donationFrequency}
          onChange={handleDonationFrequencyChange}
        >
          <ToggleButton value="weekly">Weekly</ToggleButton>
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton value="yearly">Yearly</ToggleButton>
        </ToggleButtonGroup>
        <Button
          disabled={!donationAmount || !donationFrequency}
          variant="outlined"
          onClick={createCustomPaymentLink}
          sx={{
            marginBottom: "2rem",
            marginTop: "1rem",
            borderColor: "var(--primary-green)",
            backgroundColor: "var(--primary-green)",
            color: "white",
          }}
        >
          Enter your payment details
        </Button>
      </CustomTabPanel>
    </Box>
  );
}
