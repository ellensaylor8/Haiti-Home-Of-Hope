"use client";

import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import Values from "./values";

export default function Mission() {
  return (
    <Grid container className={styles.missionContainer}>
      <Grid container item xs={12} md={6} className={styles.missionTxt}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className={styles.sectionTitle}
            sx={{
              fontWeight: "100",
              letterSpacing: "6px",
              lineHeight: "1.1",
            }} // custom styles that will be trumped by MUI styles if assigned using CSS name
          >
            Our Mission
          </Typography>
          <br />
          <Typography variant="body1" className={styles.missionStatement}>
            The mission of Haiti Home of Hope Inc. is to provide spiritual,
            physical, and emotional well-being for those most in need, through
            sharing the gospel, community outreach, orphan prevention, and
            orphan care. <br /> <br />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Values />
        </Grid>
      </Grid>
      <Grid
        sx={{ display: { xs: "none", md: "block" } }}
        item
        xs={12}
        md={6}
        className={styles.missionImage}
      ></Grid>
    </Grid>
  );
}
