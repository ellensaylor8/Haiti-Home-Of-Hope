import styles from "./page.module.css";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme({
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "rgb(76, 127, 100)",
        },
      },
    },
  },
});

export default function NavigationCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ maxWidth: 345, color: "white" }}
        className={styles.navigationCard}
      >
        <CardActionArea>
          <Link href={props.link}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2">{props.description}</Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}
