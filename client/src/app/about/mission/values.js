import styles from "./page.module.css";
import { Grid, Typography, Paper, Box } from "@mui/material";
import ChurchIcon from "@mui/icons-material/Church";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublicIcon from "@mui/icons-material/Public";

export default function Values() {
  const values = [
    { name: "Christ-centered", icon: <ChurchIcon /> },
    { name: "Gospel-focused", icon: <AutoStoriesIcon /> },
    { name: "Love-motivated", icon: <FavoriteIcon /> },
    { name: "Mission-driven", icon: <PublicIcon /> },
    { name: "Servant-minded", icon: <ChurchIcon /> },
  ];

  return (
    <Grid container spacing={1}>
      {values.map((value) => (
        <Grid item xs={12} md={6} lg={2} key={value}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
              },
            }}
          >
            <Paper elevation={15} className={styles.valuePaper}>
              {value.icon}
              <Typography variant="h6" component="div">
                {value.name}
              </Typography>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
