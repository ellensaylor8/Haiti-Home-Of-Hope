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
        <a id="ScholarshipProgram">Community Scholarship Program</a>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "1rem",
        }}
      >
        The Community Scholarship Program provides financial assistance for
        primary education (similar to K-12 education in the United States) for
        Haitian children in the community who progress out of either the food or
        milk clinics.
        <br />
        <br />
        It costs approximately $?/year per child for tuition, uniforms,
        supplies, books and supplies to attend a primary school in Haiti. Haiti
        Home of Hope currently supports over 50 youth with full scholarships.
        <br />
        <br />
        Children receiving funding through this program are required to check-in
        with our Haiti Home of Hope Head of Operations twice a year with their
        school uniform and grade-card. The scholarship program has been in
        effect for over 15 years!
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
        Donate To the HHH Scholarship Program
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
