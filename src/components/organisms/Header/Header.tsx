import React, { useState } from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

import Logo from "../../atoms/Logo";
import Search from "../../atoms/icons/Search";
import CaretDown from "../../atoms/icons/CaretDown";
import Ellipse from "../../atoms/icons/Ellipse";

import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";

import HeaderStyles from "./HeaderStyles";

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
        <Grid item xs={12} style={HeaderStyles.nav} spacing={2} container>
          <Grid item xs={12} sm={6} md={6} style={HeaderStyles.links}>
            <Box data-testid="Logo">
              <Logo />
            </Box>

            <Box data-testid="Search">
              <Search />
            </Box>

            <Box data-testid="Home">
              <Link
                to="/"
                style={
                  activeLink === "/"
                    ? HeaderStyles.linkItemActive
                    : HeaderStyles.linkItemNonActive
                }
                onClick={() => handleActive("/")}
              >
                <Typography variant="body2">Home</Typography>
              </Link>
            </Box>

            <Box data-testid="Explore">
              <Typography
                variant="body2"
                onClick={showNavMenu}
                style={
                  navMenu
                    ? HeaderStyles.linkItemActive
                    : HeaderStyles.linkItemNonActive
                }
              >
                {" "}
                Explore <CaretDown />
              </Typography>
            </Box>

            <Box data-testid="My Library">
              <Link
                to="/library"
                style={
                  activeLink === "/library"
                    ? HeaderStyles.linkItemActive
                    : HeaderStyles.linkItemNonActive
                }
                onClick={() => handleActive("/library")}
              >
                <Typography variant="body2">My Library</Typography>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} style={HeaderStyles.profile}>
            <Ellipse />
            <CaretDown />
          </Grid>
        </Grid>
      </Container>

      <Grid
        style={
          navMenu ? HeaderStyles.activeNavMenu : HeaderStyles.nonActiveNavMenu
        }
      >
        <HeaderDropDown></HeaderDropDown>
      </Grid>
    </Box>
  );
}
export default Header;
