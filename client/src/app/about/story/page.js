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
          <i>
            {" "}
            "A Father of the fatherless, and a Judge of the widows, is God in
            His holy habitation."
          </i>
          - Psalm 68:5
          <br /> <br />
          Founded January 5th, 2003, Haiti Home of Hope (HHH) is an orphanage
          ministry in Pignon, Haiti - a small, peaceful village located in the
          mountains of the North Central Plateau. In January of 2003, Red Bridge
          Baptist Church commissioned Bill and Jennifer Campbell as Directors of
          Field Operations to the orphanage in Pignon, Haiti.
          <br /> <br />
          The HHH ministry sits on 4 acres and houses and provides total care
          for orphaned children. Not only are the children served 3 nutritious
          meals a day, they are provided with an education, clothing, medical
          care and lots of love.
          <br /> <br />
          The ministry also supports other infants and children in the
          surrounding community through the{" "}
          <a
            href="https://haiti-home-of-hope.web.app/ministries#FeedingClinic"
            target="_blank"
            className={styles.clinicLink}
          >
            Feeding
          </a>{" "}
          and{" "}
          <a
            href="https://haiti-home-of-hope.web.app/ministries#MilkClinic"
            target="_blank"
            className={styles.clinicLink}
          >
            Milk Clinic
          </a>
          .
        </Typography>
      </Grid>
    </Grid>
  );
}
