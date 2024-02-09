"use client";
import styles from "./donationForm.module.css";
import { Alert, Grid, Typography } from "@mui/material";
import { useState } from "react";
// import BasicTabs from "./tabs";
import VerticalLinearStepper from "./verticalStepper";
import HorizontalLinearStepper from "./horizontalStepper";

export default async function DonationForm() {
  // const [showAlert, setShowAlert] = useState(true);

  return (
    <Grid container sx={{ height: "fit-content" }} className={styles.formDiv}>
      <Grid item xs={12} sx={{ padding: "3rem", backgroundColor: "white" }}>
        <a
          id="donate"
          style={{
            display: "block",
            position: "relative",
            top: "-100px",
            visibility: "hidden",
          }}
        ></a>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1rem",
            marginTop: "1rem",
            color: "var(--primary-green)",
            fontWeight: "100",
            textTransform: "uppercase",
            letterSpacing: "6px",
            lineHeight: "1.1",
          }}
        >
          Give Online
          <span>
            {" "}
            <img
              src="/images/logos/Powered-by-Stripe-Logo.wine.svg"
              id={styles.stripeBadge}
            ></img>
          </span>
        </Typography>

        <HorizontalLinearStepper />
        <br />
        <br />
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1rem",
            marginTop: "1rem",
            color: "var(--primary-green)",
            fontWeight: "100",
            textTransform: "uppercase",
            letterSpacing: "6px",
            lineHeight: "1.1",
          }}
        >
          Pay by Check{" "}
        </Typography>
        <Typography variant="overline">
          Please make checks payable to 'Haiti Home of Hope, Inc.'
        </Typography>
        <Typography variant="body1">Red Bridge Baptist Church</Typography>
        <Typography variant="body1">
          4901 E Red Bridge Road, Kansas City, MO 64137
        </Typography>
        {/* {showAlert && (
          <Alert severity="error" onClose={setShowAlert(false)}>
            Oops, there was an error processing this request. Please contact
            esaylor@haitihomeofhope.org if the problem persists.
          </Alert>
        )} */}
      </Grid>
    </Grid>
  );
}
