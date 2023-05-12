"use client";

import styles from "./page.module.css";
import { useRef } from "react";
import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material/Grid";
import { FacebookIcon, LinkedInIcon } from "@mui/icons-material";
import BasicModal from "./modal";

export default function TeamMembers() {
  const ref = useRef();
  return (
    <Grid item xs={12} className={styles.teamContainer}>
      <BasicModal ref={ref} />
      <ImageList cols={4}>
        {itemData.map((item) => (
          <ImageListItem className={styles.imgListItem} key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => ref.current.handleOpen(item)}
            />
            <ImageListItemBar
              title={item.name}
              subtitle={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.name}`}
                >
                  {item.facebook && (
                    <FacebookIcon
                      className={styles.facebookIcon}
                      onClick={() => window.open(item.facebook)}
                    />
                  )}
                  {item.linkedIn && (
                    <LinkedInIcon
                      className={styles.linkedInIcon}
                      onClick={() => window.open(item.linkedIn)}
                    />
                  )}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}

const itemData = [
  {
    img: "/images/bio/Webb_Bio.jpg",
    name: "Web Chenault",
    title: "Founder & Visionary",
    facebook: null,
    linkedIn: null,
    bio: "The late Webb Chenault had a passion and heart for the Haitian children. His vision to create an orphanage in Haiti, and his willingness to entrust his property to Red Bridge Baptist Church, allowed Haiti Home of Hope to be founded. Only eternity will reveal the fruitfulness of this man’s faithfulness.",
  },
  {
    img: "/images/bio/Campbell_Bio.jpg",
    name: "Bill and Jennifer Campbell",
    title: "Directors of Field Operations",
    facebook: "https://www.facebook.com/jennifer.w.campbell.98",
    linkedIn: null,
    bio: "Bill and Jennifer were commissioned to the field on January 5, 2003 by Red Bridge Baptist Church. They have led and directed the ministry since the foundation. Bill and Jennifer direct all aspects of the work on the ground at the Haiti Home of Hope. Their ministry involves full time care for 44 orphans, running the Feeding Clinic and Milk Clinic every week, maintenance of the property, directing the Haitian staff, and many more tasks. Their dedication and servant attitude towards the Lord through serving these children is truly an inspiration for all.",
  },
  {
    img: "/images/bio/Pastor_Bio.jpg",
    name: "Dr. Victor Borden",
    title: "President",
    facebook: "https://www.facebook.com/vic.borden",
    linkedIn: null,
    bio: `Dr. Victor B. Borden became the Senior Pastor of Red Bridge Baptist Church in Kansas City, MO in 1993. Prior to serving as Senior Pastor, he was RBBC's Associate Pastor from 1986 to 1993.
    \n As the vision and inspiration of Webb Chenault was presented to RBBC, Vic had the privilege of being one of the first boots on the ground to evaluate the possibility of starting the ministry. Upon returning from Haiti in 2001(in 2001 added), Vic was jazzed at the blessing God had entrusted to this small Midwestern church.
    \n Vic still wears many hats in the ministry serving in roles such as trip coordinator, community liaison, organizing fundraisers, and chief cheerleader.  He is always willing to share with others what the Lord has done in Haiti. Vic Borden serves as President of the Board of Directors.`,
  },
  {
    img: "/images/bio/Chris_Bio.jpg",
    name: "Chris Brennan",
    title: "Chairman",
    facebook: "https://www.facebook.com/brenny007",
    linkedIn: "https://www.linkedin.com/in/chris-brennan-405a6034",
    bio: "Chris has been the Chairman of the Haiti Home of Hope, Inc since 2012. He has served with the ministry in multiple roles since 2007. Chris has a Bachelor’s of Science in Computer Information Systems from DeVry University. After graduating, he went on to work at Cerner, a healthcare technology company, for 10 years as a Manager/Software Architect customizing back office solutions for Cerner and multiple health systems. He currently serves as the Director of Technology at Ascension, the largest nonprofit health system in the U.S.",
  },
];
