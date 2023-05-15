"use client";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import Values from "./values";

export default function Mission() {
  return (
    <Grid container className={styles.missionContainer}>
      <Grid container item xs={12} md={8} className={styles.missionStatement}>
        <Grid item xs={12}>
          <Typography variant="h3">Our Mission</Typography>
          <br />
          <Typography variant="h6">
            The mission of Haiti Home of Hope, Inc. is to provide spiritual,
            physical, and emotional well-being for those most in need, through
            sharing the gospel, community outreach, orphan prevention, and
            orphan care. <br /> <br />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Values />
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <img
          className={styles.missionImage}
          src="/images/ministry/Love_the_fatherless.jpg"
          alt="Picture of staff member holding orphan"
        ></img>
      </Grid>
    </Grid>
  );
}
