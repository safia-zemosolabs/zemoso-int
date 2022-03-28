import React from "react";
import { Typography } from "@mui/material";
import theme from "../../../themes";

const PageTitle = (props: PageTitleProps) => {
  return (
    <Typography
      variant="heading"
      component="h2"
      style={{
        color: theme.palette.textcolor.main,
        marginBottom: theme.spacing(16),
        marginTop: theme.spacing(6),
      }}
    >
      {props.title}
    </Typography>
  );
};

interface PageTitleProps {
  title: string;
}

export default PageTitle;
