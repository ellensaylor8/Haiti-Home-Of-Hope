import styles from "./page.module.css";
import { ImageList, ImageListItem } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      className={styles.imgList}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            className={styles.imgListItem}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/images/ministry/HHH_compound_2008.jpg",
    title: "HHH Compound 2008",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/ministry/campfire.jpg",
    title: "Campfire",
  },
  {
    img: "/images/ministry/Kiddos.jpg",
    title: "Kiddos",
  },
  {
    img: "/images/ministry/Devenel.jpg",
    title: "Devenel",
  },
  {
    img: "/images/ministry/Preaching_Gaspar.jpg",
    title: "Preaching in Gaspar",
  },
  {
    img: "/images/ministry/Family_NoText.jpg",
    title: "Family",
    cols: 2,
  },
  {
    img: "/images/ministry/SuckingThumb.jpg",
    title: "Kiddo sucking her thumb",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/ministry/babyWoody5mths.jpg",
    title: "Baby Woody 5 mths",
  },
  {
    img: "/images/ministry/Lumanes.jpg",
    title: "Lumanes",
  },
  {
    img: "/images/ministry/Kiddo_RedShirt.jpg",
    title: "Kiddo in Red Shirt",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/ministry/Jenn_Infant.jpg",
    title: "Jennifer holding an infant",
  },
  {
    img: "/images/ministry/CircleOfKiddos.jpg",
    title: "Circle of children",
  },
  {
    img: "/images/ministry/lavi.jpg",
    title: "Lavi",
  },
  {
    img: "/images/ministry/Fricot.jpg",
    title: "Fricot 8 yrs old",
  },
];
