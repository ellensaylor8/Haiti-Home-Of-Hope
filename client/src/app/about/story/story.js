import styles from "./story.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Story() {
  return (
    <Grid container className={styles.storyContainer}>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <Typography variant="h3">Our Story</Typography>
        <Typography variant="overline">
          Founded January 5th, 2003, Haiti Home of Hope, Inc is a non-profit
          501c(3) with primary operations in Pignon, Haiti.
          <br />
          Haiti Home of Hope operates an Orphanage, Feeding and Milk Clinics,
          and provides outreach to the community.
          <br />
          The ministry sits on 12 acres and consists of a boys dorm, girls dorm,
          missions house, library and others.
        </Typography>
      </Grid>
    </Grid>
  );
}
