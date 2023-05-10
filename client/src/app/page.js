"use client";
import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CustomCard from "./card";

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
        <Grid
          item
          xs={10}
          className="verse"
          sx={{
            color: "white",
            zIndex: 100,
            padding: "1rem",
            marginTop: "20vh",
          }}
        >
          <Typography variant="h1" align="left">
            Haiti Home of Hope
          </Typography>
          <Typography variant="h5" align="left" className="verse">
            "A Father of the fatherless and a Judge of the widow is God in His
            holy habitation." -Psalm 68:5
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} item xs={12}>
        {cards.map((card) => (
          <Grid item xs={2}>
            <CustomCard
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
