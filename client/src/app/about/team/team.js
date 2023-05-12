"use client";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function TeamMembers() {
  return (
    <>
      <ImageList cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <FacebookIcon />
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: "/Webb_Bio.jpg",
    title: "Web Chenault",
    author: "Founder & Visionary",
    cols: 4,
  },
  {
    img: "/Pastor_Bio.jpg",
    title: "Dr. Victor Borden",
    author: "President",
  },
  {
    img: "/Campbell_Bio.jpg",
    title: "Bill and Jennifer Campbell",
    author: "Directors of Field Operations",
  },
  {
    img: "/Chris_Bio.jpg",
    title: "Chris Brennan",
    author: "Chairman",
  },
];
