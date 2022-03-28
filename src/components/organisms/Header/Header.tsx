import React, { useState } from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

import Logo from "../../atoms/Logo";
import Search from "../../atoms/icons/Search";
import CaretDown from "../../atoms/icons/CaretDown";
import Ellipse from "../../atoms/icons/Ellipse";

import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";

import styles from "./HeaderStyles";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [navMenu, setNavMenu] = useState(false);

  const handleActive = (path: string) => {
    setActiveLink(path);
  };

  const showNavMenu = () => {
    if (navMenu) handleActive(location.pathname);
    else handleActive("/explore");

    setNavMenu(!navMenu);
  };

  return (
    <Box>
      <Container maxWidth={false} disableGutters={true} className="container">
        <Grid item xs={12} style={styles.nav} spacing={2} container>
          <Grid item xs={12} sm={6} md={6} style={styles.links}>
            <Logo />
            <Search />

            <Link
              to="/"
              style={
                activeLink === "/"
                  ? styles.linkItemActive
                  : styles.linkItemNonActive
              }
              onClick={() => handleActive("/")}
            >
              <Typography variant="body2">Home</Typography>
            </Link>

            <Typography
              variant="body2"
              onClick={showNavMenu}
              style={navMenu ? styles.linkItemActive : styles.linkItemNonActive}
            >
              {" "}
              Explore <CaretDown />
            </Typography>

            <Link
              to="/library"
              style={
                activeLink === "/library"
                  ? styles.linkItemActive
                  : styles.linkItemNonActive
              }
              onClick={() => handleActive("/library")}
            >
              <Typography variant="body2">My Library</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={12} md={12} style={styles.profile}>
            <Ellipse />
            <CaretDown />
          </Grid>
        </Grid>
      </Container>

      <Grid style={navMenu ? styles.activeNavMenu : styles.nonActiveNavMenu}>
        <HeaderDropDown></HeaderDropDown>
      </Grid>
    </Box>
  );
}
export default Header;
