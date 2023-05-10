"use client";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Grid container className={styles.headerGrid}>
      <Grid
        item
        xs={10}
        className="verse"
        sx={{ color: "white", zIndex: 100, padding: "1rem", marginTop: "20vh" }}
      >
        <Typography variant="h1" align="left">
          Haiti Home of Hope
        </Typography>
        <Typography variant="h5" align="left" className="verse">
          "A Father of the fatherless and a Judge of the widow is God in His
          holy habitation." -Psalm 68:5
        </Typography>
      </Grid>
      <Grid container spacing={3} item xs={12}>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
}
