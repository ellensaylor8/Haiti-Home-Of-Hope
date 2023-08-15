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

  return (
    <Grid
      container
      className={styles.scholarshipDonationsContainer}
      sx={{ minHeight: { xs: "100vh", md: "75vh" }, height: "fit-content" }}
    >
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
          <a id="ScholarshipProgram">HHH Scholarship Program</a>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "1rem",
          }}
        >
          The Haiti Home of Hope Scholarship Program provides financial
          assistance for higher education to HHH Orphanage graduates.
          Scholarships are based on need, each case is unique.
          <br />
          <br />
          HHH is consistently seeking individuals who would be interested in
          sponsoring a child. It costs approximately $2,500/year for tuition,
          lodging, books and fees to attend a university in Haiti. The
          application process is similar to that in the US; upon graduating they
          have to take a national exam, similar to the SAT. If they pass that
          exam they then have to pass an entrance exam into the university they
          choose to attend. Once they successfully pass these exams it is up to
          us to find funding to help them with their education.
          <br />
          <br />
          Current need for university scholarships?
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
    </Grid>
  );
}
