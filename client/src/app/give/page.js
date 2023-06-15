"use client";

import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import GeneralFunds from "./generalFunds";
import ScholarshipProgram from "./scholarshipProgram";

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
      <GeneralFunds />
      <ScholarshipProgram />
    </Grid>
  );
}
