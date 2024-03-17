"use client";

import styles from "./page.module.css";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function contact() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} className={styles.banner}>
          <Typography
            variant="h3"
            className={styles.pageTitle}
            textAlign="center"
            sx={{
              marginTop: "10vh",
              fontWeight: "100",
              letterSpacing: "6px",
              lineHeight: "1.1",
            }} // custom styles that will be trumped by MUI styles if assigned using CSS name
          >
            Contact Us
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={styles.body}
        container
        spacing={2}
        sx={{ borderBottom: "40px solid var(--light-green)" }}
      >
        <Grid item md={4} xs={12}>
          <Typography className={styles.sectionTitles} variant="h6">
            <LocationOnIcon
              className={styles.icon}
              size="large"
              sx={{ color: "var(--primary-green" }}
            />
            <p className={styles.child}>ADDRESS</p>
          </Typography>
          <br />
          <Typography variant="body1">Red Bridge Baptist Church</Typography>
          <Typography variant="body1">
            4901 E Red Bridge Road, Kansas City, MO 64137
          </Typography>
          <Typography variant="body1">p: 816-761-1194</Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography className={styles.sectionTitles} variant="h6">
            <EmailIcon
              className={styles.icon}
              size="large"
              sx={{ color: "var(--primary-green" }}
              onClick={() => {
                window.location.href = "mailto:contact@haitihomeofhope.org";
              }}
            />
            <p className={styles.child}>EMAIL</p>
          </Typography>
          <br />
          <Typography variant="body1">contact@haitihomeofhope.org</Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography className={styles.sectionTitles} variant="h6">
            <FacebookIcon
              className={styles.icon}
              size="large"
              sx={{ color: "var(--primary-green" }}
              onClick={() => {
                window.open("https://www.facebook.com/HaitiHomeOfHope");
              }}
            />
            <p className={styles.child}>FACEBOOK</p>
          </Typography>
          <br />
          <Typography variant="body1">
            Visit our{" "}
            <a
              href="https://www.facebook.com/HaitiHomeOfHope"
              target="_blank"
              style={{ color: "var(--primary-green)" }}
            >
              facebook page
            </a>{" "}
            to stay up to date!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
