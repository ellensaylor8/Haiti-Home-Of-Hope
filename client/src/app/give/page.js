"use client";

import styles from "./page.module.css";
import { Button, Grid, Typography } from "@mui/material";

export default function give() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} className={styles.banner}>
        <Typography
          variant="h4"
          className={styles.pageTitle}
          textAlign="center"
          sx={{
            marginTop: "40vh",
            fontWeight: "100",
            letterSpacing: "6px",
            lineHeight: "1.1",
          }} // custom styles that will be trumped by MUI styles if assigned using CSS name
        >
          GIVE
        </Typography>
      </Grid>
      <Grid container className={styles.generalDonationsContainer}>
        <Grid item xs={12} md={6} sx={{ padding: "3rem" }}>
          <Button
            variant="outlined"
            className={styles.donateButton}
            sx={{ marginBottom: "1rem" }}
          >
            Donate
          </Button>
          <Typography variant="h4">
            Your generosity directly supports the work on the field.{" "}
          </Typography>
          <Typography variant="subtitle1">
            By donating to general funds of Haiti Home of Hope, you enable us
            to:
          </Typography>
          <Typography>
            Buy basic necessities for children in care at the orphanage
            including food, clothing, bedding etc.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Grid>
  );
}
