"use client";
import styles from "./donationForm.module.css";
import { Grid, Typography } from "@mui/material";
import HorizontalLinearStepper from "./horizontalStepper";

export default async function DonationForm() {
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
        <div className={styles.parent}>
          <div className={styles.child}>
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
            </Typography>
          </div>
          <div className={styles.child}>
            <span>
              {" "}
              <img
                src="/images/logos/Powered-by-Stripe-Logo.wine.svg"
                id={styles.stripeBadge}
              ></img>
            </span>
          </div>
        </div>
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
          Give by Check{" "}
        </Typography>
        <Typography variant="overline">
          Please make checks payable to{" "}
          <b id={styles.hhhTitle}>Haiti Home of Hope Inc.</b>
        </Typography>
        <Typography variant="body1">Red Bridge Baptist Church</Typography>
        <Typography variant="body1">
          4901 E Red Bridge Road, Kansas City, MO 64137
        </Typography>
        <Typography variant="body1">p: 816-761-1194</Typography>
        <br />
        <br />
        <Typography>
          Questions or need to edit/cancel a recurring payment? Reach out to{" "}
          <a className={styles.contactEmail}>contact@haitihomeofhope.org</a> and
          we will be glad to help.
        </Typography>
      </Grid>
    </Grid>
  );
}
