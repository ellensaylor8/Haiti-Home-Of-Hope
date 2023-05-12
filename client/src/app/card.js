import styles from "./page.module.css";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import Link from "next/link";

export default function NavigationCard(props) {
  return (
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
  );
}
