"use client";

import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";

export default function ministries() {
  return (
    <Grid container spacing={0} className={styles.parentGrid}>
      <Grid item xs={12} className={styles.banner}></Grid>
      <Grid container spacing={0} className={styles.gridRows}>
        <Grid item xs={12} md={6} className={styles.textGrid}>
          <Typography
            variant="h2"
            className={styles.sectionTitles}
            align="center"
          >
            ORPHAN CARE
          </Typography>
          <Typography variant="body1" align="center">
            Some description about the orphanage
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/images/ministry/Love_the_fatherless.jpg"></img>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        className={styles.gridRows}
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          Hi
        </Grid>
        <Grid item xs={12} md={6} className={styles.textGrid}>
          HI
        </Grid>
      </Grid>
    </Grid>
  );
}
