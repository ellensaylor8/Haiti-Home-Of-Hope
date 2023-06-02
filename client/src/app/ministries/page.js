"use client";

import styles from "./page.module.css";
import { Button, Grid, Typography } from "@mui/material";

export default function ministries() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} className={styles.banner}>
        <Typography
          variant="h4"
          className={styles.pageTitle}
          textAlign="center"
          sx={{
            marginTop: "40vh",
            fontWeight: "100",
            letterSpacing: "6px",
            lineHeight: "1.1",
          }} // custom styles that will be trumped by MUI styles if assigned using CSS name
        >
          WHAT WE DO
        </Typography>
      </Grid>

      <Grid container spacing={0} className={styles.gridRowsRight}>
        <Grid item xs={12} md={6} id={styles.orphanCareImage}></Grid>
        <Grid item xs={12} md={6} className={styles.textGridRight}>
          <Typography
            variant="h4"
            sx={{
              color: "var(--primary-green)",
              zIndex: "200",
              fontWeight: "100",
              textTransform: "uppercase",
              letterSpacing: "6px",
              lineHeight: "1.1",
              marginTop: "3rem",
            }}
          >
            ORPHAN CARE
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: "2rem 0 4rem 0",
              lineHeight: "2",
              fontWeight: "300",
              color: "grey",
            }}
          >
            Haiti Home of Hope orphanage currently cares for 30+ children full
            time. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0} className={styles.gridRowsLeft}>
        <Grid item xs={12} md={6} className={styles.textGridLeft}>
          <Typography
            variant="h4"
            sx={{
              color: "var(--primary-green)",
              zIndex: "200",
              fontWeight: "100",
              textTransform: "uppercase",
              letterSpacing: "6px",
              lineHeight: "1.1",
              marginTop: "5rem",
            }}
          >
            MILK CLINIC
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: "2rem 6rem 0 0",
              lineHeight: "2",
              fontWeight: "300",
              color: "grey",
            }}
          >
            {" "}
            Haiti Home of Hope provides baby formula to infants that are
            severely malnourished. The majority of the time the infants mothers
            have either passed away or are not able to nurse them due to their
            own malnourishment. Children are required to attend a bi-monthly
            checkup to ensure nutritional needs are being met. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} id={styles.milkClinicImage}></Grid>
      </Grid>
      <Grid container spacing={0} className={styles.gridRowsRight}>
        <Grid item xs={12} md={6} id={styles.communityOutreachImage}></Grid>
        <Grid item xs={12} md={6} className={styles.textGridRight}>
          <Typography
            variant="h4"
            sx={{
              color: "var(--primary-green)",
              zIndex: "200",
              fontWeight: "100",
              textTransform: "uppercase",
              letterSpacing: "6px",
              lineHeight: "1.1",
              marginTop: "3rem",
            }}
          >
            COMMUNITY OUTREACH
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: "2rem 0 4rem 0",
              lineHeight: "2",
              fontWeight: "300",
              color: "grey",
            }}
          >
            HHH Field Directors routinely interact with the community. We
            support several local churches in the area and partner with other
            ministries to help raise the level of living for those in need while
            at the same time sharing the love of Christ.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0} className={styles.gridRowsLeft}>
        <Grid item xs={12} md={6} className={styles.textGridLeft}>
          <Typography
            variant="h4"
            sx={{
              color: "var(--primary-green)",
              zIndex: "200",
              fontWeight: "100",
              textTransform: "uppercase",
              letterSpacing: "6px",
              lineHeight: "1.1",
              marginTop: "5rem",
            }}
          >
            FEEDING CLINIC
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: "2rem 6rem 0 0",
              lineHeight: "2",
              fontWeight: "300",
              color: "grey",
            }}
          >
            We provide nutrition assistance to families that have successfully
            graduated from the Milk Program. Children are required to attend
            bi-monthly checkups to ensure nutritional needs are being met. Most
            babies from the milk clinic graduate out, and do not go onto the
            feeding program. The children receiving help from the feeding clinic
            range in age from 1 to 10 years old. Children of school age are also
            offered scholarships to attend their local primary school in an
            effort to help them establish consistent education.
          </Typography>
          <Button id={styles.learnMoreButton}>
            Support the Scholarship Program
          </Button>
        </Grid>
        <Grid item xs={12} md={6} id={styles.feedingClinicImage}></Grid>
      </Grid>
    </Grid>
  );
}
