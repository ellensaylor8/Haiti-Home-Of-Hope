"use client";

import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";

export default function ministries() {
  return (
    <Grid container spacing={0}>
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
          <Typography
            variant="body1"
            align="center"
            className={styles.ministryDescription}
          >
            Haiti Home of Hope orphanage currently cares for 30+ children full
            time. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} id={styles.orphanImage}></Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        className={styles.gridRows}
        alignItems="center"
      >
        <Grid item xs={12} md={6} id={styles.milkClinicImage}></Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={styles.textGrid}
          id={styles.milkClinicDescription}
        >
          <Typography
            variant="h2"
            className={styles.sectionTitles}
            align="center"
          >
            MILK CLINIC
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={styles.ministryDescription}
          >
            Haiti Home of Hope provides baby formula to infants that are
            severely malnourished. The majority of the time the infants mothers
            have either passed away or are not able to nurse them due to their
            own malnourishment. Children are required to attend a bi-monthly
            checkup to ensure nutritional needs are being met.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
