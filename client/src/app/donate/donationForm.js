"use client";
import { Alert, Grid } from "@mui/material";
import { useState } from "react";
// import BasicTabs from "./tabs";
import VerticalLinearStepper from "./verticalStepper";
import HorizontalLinearStepper from "./horizontalStepper";

export default async function DonationForm() {
  // const [showAlert, setShowAlert] = useState(true);

  return (
    <Grid container sx={{ height: "fit-content" }}>
      <Grid item xs={12} sx={{ padding: "3rem", backgroundColor: "white" }}>
        {/* <VerticalLinearStepper /> */}
        <HorizontalLinearStepper />
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
