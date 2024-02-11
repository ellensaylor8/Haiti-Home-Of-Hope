import styles from "./page.module.css";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Slide,
} from "@mui/material";
import { useRef, useState } from "react";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList(props) {
  const imgListItemRef = useRef();
  const [visibleTitle, setVisibleTitle] = useState();

  return (
    <ImageList variant="quilted" cols={props.mobile ? 1 : 2}>
      {itemData.map((item) => (
        <ImageListItem
          ref={imgListItemRef}
          onMouseEnter={() => setVisibleTitle(item.title)}
          onMouseLeave={() => setVisibleTitle(null)}
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 150, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          {/* <Slide
            direction="up"
            in={props.mobile || item.title === visibleTitle}
            container={imgListItemRef.current}
          >
            <ImageListItemBar
              position="bottom"
              title={item.name}
              subtitle={item.title}
            />
          </Slide> */}
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/images/ministry/pignonBoy_School.jpeg",
    // title: "",
  },
  {
    img: "/images/ministry/pignonGirls.jpeg",
    // title: "Twin Pignon girls with their adopted mother",
  },
  {
    img: "/images/ministry/pignonKiddos_School.jpeg",
    // title: "",
  },
  {
    img: "/images/ministry/twinPignonChildren_School.jpeg",
    // title: "Twin Pignon Girls",
  },
];
