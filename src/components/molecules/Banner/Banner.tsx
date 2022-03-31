import { Typography } from "@mui/material";
import React from "react";
import Png from "../../../assets/banner.png";
import theme from "../../../themes";

const styles = {
  banner: {
    display: "grid",
    gridTemplateColumns: "auto max-content",
    gap: theme.spacing(12),
    background: theme.palette.backgroundcolor.main,
    padding: theme.spacing(8),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(8),
  },
};

const Banner = () => {
  return (
    <div className="container" style={styles.banner}>
      <div data-testid="Title">
        <Typography
          variant="heading"
          component="h2"
          style={{
            color: theme.palette.textcolor.dark,
            margin: 0,
            marginBottom: theme.spacing(4),
          }}
        >
          Explore Books on entrepreneurship
        </Typography>
        <Typography
          variant="subtitle3"
          component="h2"
          style={{ color: theme.palette.textcolor.light }}
        >
          Everything you need to know about thriving on a shoestring budget,
          making your first million, and hiring right from the start.
        </Typography>
      </div>
      <img src={Png} alt=""></img>
    </div>
  );
};

export default Banner;
