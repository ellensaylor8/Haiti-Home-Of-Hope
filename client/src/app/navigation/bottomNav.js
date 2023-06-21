"use client";

import styles from "./bottomNav.module.css";
import { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

export default function BottomNav() {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ maxWidth: "50px" }}
          icon={
            <FacebookIcon
              size="large"
              sx={{ color: "grey" }}
              onClick={() => {
                window.open("https://www.facebook.com/HaitiHomeOfHope");
              }}
            />
          }
        />
        <BottomNavigationAction
          sx={{ maxWidth: "50px" }}
          icon={
            <EmailIcon
              size="large"
              sx={{ color: "grey" }}
              onClick={() => {
                window.location.href = "mailto:contact@haitihomeofhope.org";
              }}
            />
          }
        />
      </BottomNavigation>
      <div id={styles.fillerDiv}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: ".7rem",
            padding: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontWeight: "100",
            color: "grey",
          }}
        >
          © COPYRIGHT 2020 HAITI HOME OF HOPE INC.
        </Typography>
      </div>
    </Box>
  );
}
