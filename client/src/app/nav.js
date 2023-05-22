"use client";
import styles from "./page.module.css";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const pages = [
  { name: "Who We Are", link: "/about" },
  { name: "What We Do", link: "/ministries" },
  { name: "Connect", link: "/connect" },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        color: "rgb(76, 127, 100)",
        position: "sticky",
        zIndex: 300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "rgb(76, 127, 100)",
              textDecoration: "none",
            }}
          >
            HHH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="rgb(76, 127, 100)"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link href={page.link} key={page.name}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "rgb(76, 127, 100)",
              textDecoration: "none",
            }}
          >
            HHH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link href={page.link} key={page.name}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "rgb(76, 127, 100)", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              onClick={() => {
                window.location.href = "mailto:contact@haitihomeofhope.org";
              }}
            >
              <EmailIcon size="large" />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              onClick={() => {
                window.open("https://www.facebook.com/HaitiHomeOfHope");
              }}
            >
              <FacebookIcon size="large" />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              id={styles.donateButton}
              sx={{ color: "white", background: "rgb(76, 127, 100)" }}
              onClick={() => {
                window.open(
                  "https://donate.stripe.com/test_dR6g1h44IeGr0F2000"
                );
              }}
            >
              Donate
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
