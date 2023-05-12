import styles from "./page.module.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

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
    img: "/HHH_compound_2008.jpg",
    title: "HHH Compound 2008",
    rows: 2,
    cols: 2,
  },
  {
    img: "/campfire.jpg",
    title: "Campfire",
  },
  {
    img: "/Kiddos.jpg",
    title: "Kiddos",
  },
  {
    img: "/Devenel.jpg",
    title: "Devenel",
  },
  {
    img: "/Preaching_Gaspar.jpg",
    title: "Preaching in Gaspar",
  },
  {
    img: "/Family_NoText.jpg",
    title: "Family",
    cols: 2,
  },
  {
    img: "/SuckingThumb.jpg",
    title: "Kiddo sucking her thumb",
    rows: 2,
    cols: 2,
  },
  {
    img: "/babyWoody5mths.jpg",
    title: "Baby Woody 5 mths",
  },
  {
    img: "/Lumanes.jpg",
    title: "Lumanes",
  },
  {
    img: "/Kiddo_RedShirt.jpg",
    title: "Kiddo in Red Shirt",
    rows: 2,
    cols: 2,
  },
  {
    img: "/Jenn_Infant.jpg",
    title: "Jennifer holding an infant",
  },
  {
    img: "/CircleOfKiddos.jpg",
    title: "Circle of children",
  },
  {
    img: "/lavi.jpg",
    title: "Lavi",
  },
  {
    img: "/Fricot.jpg",
    title: "Fricot 8 yrs old",
  },
];