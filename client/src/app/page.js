"use client";
import styles from "./page.module.css";
import Link from "next/link";
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
    title: "Connect",
    description: "Connect with someone from our team.",
    link: "/connect",
  },
];

export default function Home() {
  return (
    <Grid container>
      <Grid container className={styles.headerGrid}>
        <Grid item xs={10} className={styles.greeting}>
          <Typography variant="h1" align="left">
            Haiti Home of Hope
          </Typography>
          <Typography variant="h5" align="left">
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
