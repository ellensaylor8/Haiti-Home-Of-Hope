"use client";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TeamMembers from "./team/team";
import Story from "./story/story";
import Mission from "./mission/mission";

export default function Page() {
  return (
    <Grid container spacing={0}>
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
