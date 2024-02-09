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
          HHH Donations
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
              including food and clothing and help with general maintenance and
              upkeep of the orphanage property. Choose <b>General Funds</b> as
              your designation when donating.
            </li>
            <li>
              Provide primary education (simliar to K-12 education in the United
              States) for all orphans under Haiti Home of Hope's care. Choose{" "}
              <b>HHH Education</b> as your designation when donating.
            </li>
            <li>
              Provide baby formula, whole milk and food for babies and children
              in the Pignon community. Choose <b>Food & Milk Clinic</b> as your
              designation when donating. Read more about our{" "}
              <a
                href="https://haiti-home-of-hope.web.app/ministries#FeedingClinic"
                target="_blank"
                className={styles.clinicLink}
              >
                Feeding
              </a>{" "}
              &{" "}
              <a
                href="https://haiti-home-of-hope.web.app/ministries#MilkClinic"
                target="_blank"
                className={styles.clinicLink}
              >
                Milk Clinic
              </a>
              .
            </li>
            <li>
              Provide primary education for children in the local Pignon
              community. Read more about our scholarship program for Pignon
              children below.
            </li>
          </ul>
        </Typography>

        <Button
          variant="outlined"
          id={styles.donateButton}
          onClick={() => {
            window.open("http://localhost:3000/give#donate");
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
