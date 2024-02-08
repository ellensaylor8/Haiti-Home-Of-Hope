"use client";
import { Alert, Grid } from "@mui/material";
import { useState } from "react";
// import BasicTabs from "./tabs";
import VerticalLinearStepper from "./verticalStepper";

export default async function DonationForm() {
  // const [showAlert, setShowAlert] = useState(true);

  return (
    <Grid
      container
      sx={{ minHeight: { xs: "100vh", md: "75vh" }, height: "fit-content" }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{ padding: "3rem", backgroundColor: "rgba(211, 224, 216, 1)" }}
      >
        <VerticalLinearStepper />

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
