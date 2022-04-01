import { Box, Typography } from "@mui/material";
import React from "react";
import BannerIcon from "../../atoms/icons/BannerIcon";
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
    <>
      <Box className="container" style={styles.banner} data-testid="Banner">
        <Box>
          <Box data-testid="Banner Title">
            <Typography
              variant="heading"
              component="h2"
              style={{
                color: theme.palette.textcolor.dark,
                margin: 0,
                marginBottom: theme.spacing(4),
              }}
            >
              png Explore Books on entrepreneurship
            </Typography>
          </Box>

          <Box data-testid="Banner Description">
            <Typography
              variant="subtitle3"
              component="h2"
              style={{ color: theme.palette.textcolor.light }}
            >
              Everything you need to know about thriving on a shoestring budget,
              making your first million, and hiring right from the start.
            </Typography>
          </Box>
        </Box>

        <Box data-testid="Banner Image">
          <BannerIcon />
        </Box>
      </Box>
    </>
  );
};

export default Banner;
