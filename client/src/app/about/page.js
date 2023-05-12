"use client";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TeamMembers from "./team/page";
import Story from "./story/page";
import Mission from "./mission/page";

export default function Page() {
  return (
    <Grid container spacing={0}>
      <Typography variant="h3" className={styles.pageTitle}>
        Who We Are
      </Typography>
      <Grid item xs={12}>
        <Story />
      </Grid>
      <Grid item xs={12}>
        <Mission />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" className={styles.teamTitle}>
          Meet Our Team
        </Typography>
        <TeamMembers />;
      </Grid>
    </Grid>
  );
}
