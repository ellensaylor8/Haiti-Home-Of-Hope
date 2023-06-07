"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import NavigationCard from "./navigationCard";

const cards = [
  {
    title: "Who We Are",
    description: "Learn about our mission and people.",
    link: "/about",
  },
  {
    title: "What We Do",
    description: "Learn about the Haiti Home of Hope ministries.",
    link: "/ministries",
  },
  {
    title: "Give",
    description:
      "Give directly to the different ministries at Haiti Home of Hope, Inc.",
    link: "/give",
  },
];

export default function Home() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth <= 500);
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 500);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);
  return (
    <Grid container>
      <Grid container className={styles.headerGrid}>
        <Grid
          item
          xs={10}
          className={styles.greeting}
          sx={{ marginTop: { xs: "50vh", md: "20vh" } }}
        >
          <Typography variant={mobile ? "h4" : "h1"} align="left">
            Haiti Home of Hope
          </Typography>
          <Typography variant={mobile ? "body2" : "h5"} align="left">
            Raising a generation of Godly young men and women, equipped to go
            out and live and thrive in their community and share the Hope of the
            Gospel.
          </Typography>
          <Link href="/about" passHref>
            <Button size="large" variant="outlined" id={styles.learnMoreButton}>
              Learn More
            </Button>
          </Link>
          {/* <Typography variant="overline" align="left" className="verse">
            "A Father of the fatherless and a Judge of the widow is God in His
            holy habitation." -Psalm 68:5
          </Typography> */}
        </Grid>
      </Grid>
      <Grid container spacing={2} className={styles.cardsContainer}>
        {cards.map((card) => (
          <Grid item xs={12} md={4} key={card.title}>
            <NavigationCard
              title={card.title}
              description={card.description}
              link={card.link}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
