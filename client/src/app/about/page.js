"use client";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TeamMembers from "./team/team";
import Story from "./story/page";
import Mission from "./mission/page";

export default function Page() {
  return (
    <Grid container spacing={0}>
      <Typography variant="h3" className={styles.title}>
        Who We Are
      </Typography>
      <Grid item xs={12}>
        <Story />
      </Grid>
      <Grid item xs={12}>
        <Mission />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Meet Our Team</Typography>
        <TeamMembers />;
      </Grid>
    </Grid>
  );
}
