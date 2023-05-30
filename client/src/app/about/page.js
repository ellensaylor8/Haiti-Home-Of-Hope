"use client";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import TeamMembers from "./team/page";
import Story from "./story/page";
import Mission from "./mission/page";

export default function Page() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} className={styles.banner}>
        <Typography
          variant="h4"
          className={styles.pageTitle}
          textAlign="center"
        >
          Who We Are
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Story />
      </Grid>
      <Grid item xs={12}>
        <Mission />
      </Grid>
      <Grid item xs={12} className={styles.teamGrid}>
        <Typography variant="h4" className={styles.teamTitle}>
          Meet Our Team
        </Typography>
        <TeamMembers />;
      </Grid>
    </Grid>
  );
}
