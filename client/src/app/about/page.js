"use client";
import Grid from "@mui/material/Grid";
import TeamMembers from "./team";

export default function Page() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TeamMembers />;
      </Grid>
    </Grid>
  );
}
