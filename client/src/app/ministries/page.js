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

      <Grid
        container
        className={styles.gridRowsRight}
        sx={{ minHeight: { xs: "100vh", md: "75vh" }, height: "fit-content" }}
      >
        <Grid item xs={12} md={6} id={styles.orphanCareImage}></Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={styles.textGridRight}
          sx={{
            padding: { xs: "3rem", md: "6rem" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "var(--primary-green)",
              zIndex: "200",
              fontWeight: "100",
              textTransform: "uppercase",
              letterSpacing: "6px",
              lineHeight: "1.1",
              marginTop: { xs: "2rem", md: "3rem" },
            }}
          >
            ORPHAN CARE
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: { xs: "2rem 0rem 0 0", md: "2rem 0 4rem 0" },
              lineHeight: "2",
              fontWeight: "300",
              color: "grey",
            }}
          >
            One of the primary ministries of Haiti Home of Hope is the operation
            of an Orphanage. Our mission is to raise and nurture children at
            until they can step out and be productive Haitian citizens. As they
            transition out into the community, we pray that the things they
            learned while at HHH as well as the things they learned from the
            Lord will guide them to help the people of Haiti to make the right
            decisions to turn the country from an impoverished nation into a
            productive one. Haiti Home of Hope orphanage currently cares for 30+
            children full time.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        className={styles.gridRowsLeft}
        sx={{
          minHeight: { xs: "100vh", md: "75vh" },
          height: "fit-content",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          className={styles.textGridLeft}
          sx={{
            padding: { xs: "3rem", md: "3rem 6rem" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "var(--primary-green)",
              zIndex: "200",
              fontWeight: "100",
              textTransform: "uppercase",
              letterSpacing: "6px",
              lineHeight: "1.1",
              marginTop: { xs: "2rem", md: "3rem" },
            }}
          >
            MILK CLINIC
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: { xs: "2rem 0rem 0 0", md: "2rem 6rem 0 0" },
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
            checkup to ensure nutritional needs are being met.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} id={styles.milkClinicImage}></Grid>
      </Grid>
      <Grid container spacing={0} className={styles.gridRowsRight}>
        <Grid item xs={12} md={6} id={styles.communityOutreachImage}></Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={styles.textGridRight}
          sx={{
            padding: { xs: "3rem", md: "6rem" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "var(--primary-green)",
              zIndex: "200",
              fontWeight: "100",
              textTransform: "uppercase",
              letterSpacing: "6px",
              lineHeight: "1.1",
              marginTop: { xs: "2rem", md: "3rem" },
            }}
          >
            COMMUNITY OUTREACH
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: { xs: "2rem 0rem 0 0", md: "2rem 0 4rem 0" },
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
        <Grid
          item
          xs={12}
          md={6}
          className={styles.textGridLeft}
          sx={{
            padding: { xs: "3rem", md: "3rem 6rem" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "var(--primary-green)",
              zIndex: "200",
              fontWeight: "100",
              textTransform: "uppercase",
              letterSpacing: "6px",
              lineHeight: "1.1",
              marginTop: { xs: "2rem", md: "3rem" },
            }}
          >
            FEEDING CLINIC
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: { xs: "2rem 0rem 0 0", md: "2rem 6rem 0 0" },
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
          <Button
            id={styles.learnMoreButton}
            onClick={() =>
              window.open(
                "https://haiti-home-of-hope.web.app/give#ScholarshipProgram"
              )
            }
          >
            Learn more about the Scholarship Program
          </Button>
        </Grid>
        <Grid item xs={12} md={6} id={styles.feedingClinicImage}></Grid>
      </Grid>
    </Grid>
  );
}
