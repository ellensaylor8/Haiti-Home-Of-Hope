import styles from "./generalFunds.module.css";
import { Button, Grid, Typography } from "@mui/material";

export default function GeneralFunds() {
  return (
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
          Your generosity directly supports the work on the field at Haiti Home
          of Hope.
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
            <li>
              Provide primary education (simliar to K-12 education in the United
              States) for all orphans under Haiti Home of Hope's care.
            </li>
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
  );
}
