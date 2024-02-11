"use client";

import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Slide,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BasicModal from "./modal";

export default function TeamMembers() {
  const modalRef = useRef();
  const imgListItemRef = useRef();

  const [visibleTeamMemberName, setVisibleTeamMemberName] = useState();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth <= 500);
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 500);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);
  return (
    <Grid item xs={12} className={styles.teamContainer}>
      <BasicModal ref={modalRef} />
      <ImageList cols={mobile ? 1 : 5} gap={16}>
        {itemData.map((item) => (
          <ImageListItem
            sx={{ overflowY: "hidden" }}
            ref={imgListItemRef}
            className={styles.listItem}
            key={item.img}
            onMouseEnter={() => setVisibleTeamMemberName(item.name)}
            onMouseLeave={() => setVisibleTeamMemberName(null)}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => modalRef.current.handleOpen(item)}
            />
            <Slide
              direction="up"
              in={mobile || item.name === visibleTeamMemberName}
              container={imgListItemRef.current}
            >
              <ImageListItemBar
                position={mobile ? "below" : "bottom"}
                title={item.name}
                subtitle={item.title}
                actionIcon={
                  <>
                    {item.facebook && (
                      <IconButton
                        className={styles.iconButton}
                        aria-label={`info about ${item.name}`}
                        onClick={() => window.open(item.facebook)}
                      >
                        <FacebookIcon
                          sx={{ fill: mobile ? "black" : "white" }}
                        />
                      </IconButton>
                    )}
                    {item.linkedIn && (
                      <IconButton
                        className={styles.iconButton}
                        aria-label={`info about ${item.name}`}
                        onClick={() => window.open(item.linkedIn)}
                      >
                        <LinkedInIcon
                          sx={{ fill: mobile ? "black" : "white" }}
                        />
                      </IconButton>
                    )}
                  </>
                }
              />
            </Slide>
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
    bio: "Bill and Jennifer were commissioned to the field on January 5, 2003 by Red Bridge Baptist Church. They have led and directed the ministry since the foundation. Bill and Jennifer direct all aspects of the work on the ground at Haiti Home of Hope. Their ministry involves full time care for over 30 orphans, running the Feeding Program and Milk Clinic every week, maintenance of the property, directing the Haitian staff, and many more tasks. Their dedication and servant attitude towards the Lord through serving these children is truly an inspiration for all.",
  },
  {
    img: "/images/bio/Clebert_Bio.jpg",
    name: "Pastor Clebert",
    title: "",
    facebook: null,
    linkedIn: null,
    bio: "",
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
