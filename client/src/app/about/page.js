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
          variant="h3"
          className={styles.pageTitle}
          textAlign="center"
          sx={{
            marginTop: "20vh",
            fontWeight: "100",
            letterSpacing: "6px",
            lineHeight: "1.1",
          }} // custom styles that will be trumped by MUI styles if assigned using CSS name
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
        <Typography
          variant="h4"
          className={styles.teamTitle}
          sx={{
            fontWeight: "100",
            letterSpacing: "6px",
            lineHeight: "1.1",
          }} // custom styles that will be trumped by MUI styles if assigned using CSS name
        >
          Meet Our Team
        </Typography>
        <TeamMembers />;
      </Grid>
    </Grid>
  );
}
