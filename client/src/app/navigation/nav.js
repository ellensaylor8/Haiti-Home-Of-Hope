"use client";
import styles from "./nav.module.css";
import { useEffect, useState } from "react";
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

import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Who We Are", link: "/about" },
  { name: "What We Do", link: "/ministries" },
  { name: "Give", link: "/give" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        background: colorChange ? "white" : "transparent",
        color: colorChange ? "var(--primary-green)" : "white",
        boxShadow: colorChange
          ? "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);"
          : "none",
        position: "sticky",
        zIndex: 300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              "&:hover": {
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease-in-out",
              mr: { md: 2 },
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: colorChange ? "var(--primary-green)" : "white",
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
              color={colorChange ? "var(--primary-green)" : "white"}
            >
              <MenuIcon
                sx={{ color: colorChange ? "var(--primary-green)" : "white" }}
              />
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
              {pages.map((page) => {
                const isActive = pathname === page.link;
                return (
                  <Link
                    href={page.link}
                    key={page.name}
                    className={isActive ? styles.active : ""}
                  >
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      className={styles.menuButton}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              "&:hover": {
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease-in-out",
              mr: { md: 2 },
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: colorChange ? "var(--primary-green)" : "white",
              textDecoration: "none",
            }}
          >
            HHH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              const isActive = pathname === page.link;
              return (
                <Link
                  href={page.link}
                  key={page.name}
                  className={isActive ? styles.active : ""}
                >
                  <Button
                    className={styles.menuButton}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: colorChange ? "var(--primary-green)" : "white",
                      display: "block",
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              );
            })}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              id={styles.donateButton}
              variant="outlined"
              sx={{
                color: "white",
                background: colorChange ? "var(--primary-green)" : "none",
                borderColor: colorChange ? "var(--primary-green)" : "white",
                fontSize: ".8rem",
                padding: "5px 10px",
              }}
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
