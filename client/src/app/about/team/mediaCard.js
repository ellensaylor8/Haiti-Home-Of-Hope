import { forwardRef } from "react";
import styles from "./page.module.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default forwardRef(function MediaCard(props, ref) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        className={styles.cardMedia}
        image={props.img}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {props.title}
        </Typography>
        <Typography variant="body2" color="body2" className={styles.bio}>
          {props.bio}
        </Typography>
      </CardContent>
    </Card>
  );
});
