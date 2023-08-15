"use client";

import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import QuiltedImageList from "./imageList.js";

export default function Story() {
  return (
    <Grid container className={styles.storyContainer}>
      <Grid item xs={12} md={6} className={styles.imgListGrid}>
        <QuiltedImageList />
      </Grid>
      <Grid item xs={12} md={6} className={styles.storyDescription}>
        {" "}
        <Typography
          variant="h4"
          className={styles.sectionTitle}
          sx={{
            fontWeight: "100",
            letterSpacing: "6px",
            lineHeight: "1.1",
          }} // custom styles that will be trumped by MUI styles if assigned using CSS name
        >
          Our Story
        </Typography>
        <br />
        <Typography variant="body1">
          Founded January 5th, 2003, Haiti Home of Hope, Inc is a non-profit
          501c(3) with primary operations in Pignon, Haiti.
          <br /> <br />
          Haiti Home of Hope operates an Orphanage, Feeding and Milk Clinics,
          and provides outreach to the community.
          <br /> <br />
          The ministry sits on 4 acres and consists of a boys dorm, girls dorm,
          missions house, library and others.
        </Typography>
      </Grid>
    </Grid>
  );
}
