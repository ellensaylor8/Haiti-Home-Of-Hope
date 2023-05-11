import styles from "./mission.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Mission() {
  return (
    <Grid container className={styles.missionContainer}>
      <Grid item xs={12} md={6} className={styles.missionStatement}>
        <Typography variant="h3">Our Mission</Typography>
        <br />
        <Typography variant="h6">
          The mission of Haiti Home of Hope, Inc. is to provide spiritual,
          physical, and emotional well-being for those most in need, through
          sharing the gospel, community outreach, orphan prevention, and orphan
          care. <br /> <br /> Our values: Christ-centered, Gospel-focused,
          Love-motivated, Mission-driven, Servant-minded.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          className={styles.missionImage}
          src="/Love_the_fatherless.jpg"
          alt="Picture of staff member holding orphan"
        ></img>
      </Grid>
    </Grid>
  );
}
