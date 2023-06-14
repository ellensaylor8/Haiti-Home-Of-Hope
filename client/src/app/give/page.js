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
      <Grid
        container
        className={styles.generalDonationsContainer}
        sx={{ minHeight: { xs: "100vh", md: "75vh" }, height: "fit-content" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ padding: "3rem", backgroundColor: "rgba(211, 224, 216, 1)" }}
        >
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
            HHH General Funds
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            Your generosity directly supports the work on the field at Haiti
            Home of Hope.
          </Typography>
          <Typography variant="h6">By donating, you enable us to:</Typography>
          <Typography
            component={
              "span"
            } /* prevents 'Warning: validateDOMnesting(...): <ul> cannot appear as a descendant of <p>.' */
          >
            <ul>
              <li>
                Buy basic necessities for children in care at the orphanage
                including food, clothing, bedding etc.
              </li>
              <li>2nd Example</li>
              <li>3rd Example</li>
              <li>4th Example</li>
            </ul>
          </Typography>

          <Button
            variant="outlined"
            id={styles.donateButton}
            onClick={() => {
              window.open("https://donate.stripe.com/test_dR6g1h44IeGr0F2000");
            }}
            sx={{
              marginBottom: "2rem",
              marginTop: "1rem",
              borderColor: "var(--primary-green)",
              backgroundColor: "var(--primary-green)",
              color: "white",
            }}
          >
            Donate Now
          </Button>
          <Typography>
            Read more about our scholarship program and how to donate below.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} id={styles.generalDonationsImage}></Grid>
      </Grid>
      <Grid
        container
        className={styles.scholarshipDonationsContainer}
        sx={{ minHeight: { xs: "100vh", md: "75vh" }, height: "fit-content" }}
      >
        <Grid item xs={12} md={6} id={styles.scholarshipDonationImage}></Grid>
        <Grid item xs={12} md={6} sx={{ padding: "3rem" }}>
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
            HHH Scholarship Program
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "1rem",
              lineHeight: "2",
              fontWeight: "300",
              color: "grey",
            }}
          >
            The Haiti Home of Hope Scholarship Program provides financial
            assistance for higher education to children who progress out of
            either the food or milk clinic. Scholarships are based on need, each
            case is unique.
            <br />
            <br />
            Haiti Home of Hope currently supports 50 children with full
            scholarships. The scholarship program has been in effect for over 15
            years.
          </Typography>

          <Button
            id={styles.scholarshipDonateButton}
            variant="outlined"
            onClick={() => {
              window.open("https://donate.stripe.com/test_5kA7uLdFigOz9by5km");
            }}
            sx={{
              marginBottom: "2rem",
              marginTop: "1rem",
              borderColor: "var(--primary-green)",
              color: "var(--primary-green)",
            }}
          >
            Donate To the HHH Scholarship Program
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
