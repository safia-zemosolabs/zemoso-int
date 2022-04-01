import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../../themes";
import Entrepreneurship from "../../atoms/icons/Entrepreneurship";
import Building from "../../atoms/icons/Building/Building";
import Stats from "../../atoms/icons/Stats/Stats";
import Flask from "../../atoms/icons/Flask/Flask";
import Health from "../../atoms/icons/Health";
import PersonalDevelopment from "../../atoms/icons/PersonalDevelopment";
import Economics from "../../atoms/icons/Economics";
import History from "../../atoms/icons/History";
import Communication from "../../atoms/icons/Communication";
import Corporate from "../../atoms/icons/Corporate";
import Motivation from "../../atoms/icons/Motivation";
import Money from "../../atoms/icons/Money";
import Psychology from "../../atoms/icons/Psychology";
import Productivity from "../../atoms/icons/Productivity";
import Relationship from "../../atoms/icons/Relationship";
import Nature from "../../atoms/icons/Nature";
import Carrier from "../../atoms/icons/Carrier";
import Education from "../../atoms/icons/Education";

import NavMenuLink from "../../molecules/NavMenuLink/NavMenuLink";

const styles = {
  dropDown: {
    background: theme.palette.backgroundcolor.main,
    padding: theme.spacing(9),
    position: "relative" as "relative",
  },
  filterDiv: {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gap: theme.spacing(12),
  },
  filterActive: {
    color: theme.palette.secondary.main,
  },
  category: {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
  },
  row: {
    margin: `${theme.spacing(7)} 0`,
  },
};

let navMenuLinkArr: any[] = [
  {
    text: "Entrepreneurship",
    url: "/explore/entrepreneurship",
    icon: <Entrepreneurship />,
  },
  {
    text: "Politics",
    url: "#",
    icon: <Building />,
  },
  {
    text: "Marketing & Sales",
    url: "#",
    icon: <Stats />,
  },
  {
    text: "Science",
    url: "#",
    icon: <Flask />,
  },
  {
    text: "Health & Nutrition",
    url: "#",
    icon: <Health />,
  },
  {
    text: "Personal Development",
    url: "#",
    icon: <PersonalDevelopment />,
  },
  {
    text: "Economics",
    url: "#",
    icon: <Economics />,
  },
  {
    text: "History",
    url: "#",
    icon: <History />,
  },
  {
    text: "Communication Skills",
    url: "#",
    icon: <Communication />,
  },
  {
    text: "Corporate Culture",
    url: "#",
    icon: <Corporate />,
  },
  {
    text: "Motivation & Inspiration",
    url: "#",
    icon: <Motivation />,
  },
  {
    text: "Money & Investments",
    url: "#",
    icon: <Money />,
  },
  {
    text: "Psychology",
    url: "#",
    icon: <Psychology />,
  },
  {
    text: "Productivity",
    url: "#",
    icon: <Productivity />,
  },
  {
    text: "Sex & Relationship",
    url: "#",
    icon: <Relationship />,
  },
  {
    text: "Nature & Environment",
    url: "#",
    icon: <Nature />,
  },
  {
    text: "Career & Success",
    url: "#",
    icon: <Carrier />,
  },
  {
    text: "Education",
    url: "#",
    icon: <Education />,
  },
];

const HeaderDropDown = () => {
  return (
    <Box style={styles.dropDown}>
      <Box className="container" style={{ zIndex: 1 }}>
        <Box style={styles.filterDiv}>
          <Typography
            variant="body1"
            style={styles.filterActive}
            data-testid="HeaderDropDown Explore"
          >
            Explore by category
          </Typography>
          <Typography variant="body1" data-testid="HeaderDropDown recently">
            See recently added titles
          </Typography>
          <Typography variant="body1" data-testid="HeaderDropDown popular">
            See popular titles
          </Typography>
        </Box>

        <hr style={styles.row}></hr>

        <Box style={styles.category}>
          {navMenuLinkArr.map((item, i) => (
            <NavMenuLink
              text={item.text}
              url={item.url}
              icon={item.icon}
            ></NavMenuLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderDropDown;
