import styles from "./scholarshipProgramCommunity.module.css";
import { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import QuiltedImageList from "./imageList";

export default function ScholarshipProgram() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth <= 1100);
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 1100);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);
  const ImageList = (
    <Grid item xs={12} md={6} id={styles.scholarshipDonationImageQuilt}>
      <QuiltedImageList mobile={mobile} />
    </Grid>
  );

  const ScholarshipProgramDescription = (
    <Grid item xs={12} md={6} sx={{ padding: "3rem" }}>
      <a
        id="ScholarshipProgram"
        style={{
          display: "block",
          position: "relative",
          top: "-100px",
          visibility: "hidden",
        }}
      ></a>
      <Typography
        variant="h4"
        sx={{
          marginBottom: "1rem",
          marginTop: "1rem",
          color: "var(--primary-green)",
          fontWeight: "100",
          textTransform: "uppercase",
          letterSpacing: "6px",
          lineHeight: "1.1",
        }}
      >
        Pignon Scholarship Program
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "1rem",
        }}
      >
        The Pignon Scholarship Program provides financial assistance for primary
        education (similar to K-12 education in the United States) for Haitian
        children in the community who graduate out of either the Haiti Home of
        Hope{" "}
        <a
          href="https://haiti-home-of-hope.web.app/ministries#FeedingClinic"
          target="_blank"
          className={styles.clinicLink}
        >
          Feeding
        </a>{" "}
        or{" "}
        <a
          href="https://haiti-home-of-hope.web.app/ministries#MilkClinic"
          target="_blank"
          className={styles.clinicLink}
        >
          Milk Clinic
        </a>
        . Receiving a scholarship is based on need and each case is unique.
        <br />
        <br />
        It costs roughly $130 USD per year, per child for tuition, uniforms,
        books and supplies to attend a primary school in Haiti. Haiti Home of
        Hope currently supports 50 youth with full scholarships. The scholarship
        program has been in effect for over 15 years!
        <br />
        <br />
        Not only does the Scholarship Program provide these children with an
        education, it also gives them greater security in their families as
        Haitian children pursuing an education are often of greater value to
        their parents. Educated Haitians have a better chance of securing a job
        and subsequently an income for their families.
        <br />
        <br />
        Children receiving funding through this program are required to check in
        with Haiti Home of Hope's Field Operators twice a year with their school
        uniform and grade card.
        <br />
        <br />
        We appreciate any amount you feel led to give!
      </Typography>
      <Button
        id={styles.scholarshipDonateButton}
        variant="outlined"
        onClick={() => {
          window.open("https://donate.stripe.com/test_5kA7uLdFigOz9by5km");
        }}
        sx={{
          marginBottom: "2rem",
          marginTop: "1rem",
          backgroundColor: "var(--primary-green)",
          borderColor: "var(--primary-green)",
          color: "white",
        }}
      >
        Donate To the Pignon Scholarship Program
      </Button>
      <Typography>
        <i>
          Please reach out to&nbsp;
          <a
            href="mailto: contact@haithomeofhope.org"
            style={{ color: "var(--primary-green)", fontWeight: "600" }}
          >
            contact@haithomeofhope.org
          </a>
          &nbsp;with any questions regarding the scholarship program.
        </i>
      </Typography>
    </Grid>
  );
  const [first, second] = mobile
    ? [ScholarshipProgramDescription, ImageList]
    : [ImageList, ScholarshipProgramDescription];
  return (
    <Grid
      container
      className={styles.scholarshipDonationsContainer}
      sx={{ minHeight: { xs: "100vh", md: "75vh" }, height: "fit-content" }}
    >
      {first}
      {second}
    </Grid>
  );
}
