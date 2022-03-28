import React, { useState } from "react";

import { Typography } from "@mui/material";
import theme from "../../../../themes";
import { red } from "@material-ui/core/colors";

const styles = {
  button: {
    display: "grid",
    cursor: "pointer",
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    textAlign: "center" as "center",
    color: theme.palette.textcolor.main,
    background: theme.palette.primary.main,
    width: "max-content",
  },
  buttonHover: {
    display: "grid",
    cursor: "pointer",
    textAlign: "center" as "center",
    background: theme.palette.primary.dark,
    width: "max-content",
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  },
};

export interface PrimaryProps {
  text: string;
}

const Primary = (props: PrimaryProps) => {
  const [buttonHover, setButtonHover] = useState(false);

  const handleHover = (val: boolean) => {
    setButtonHover(val);
  };

  return (
    <div
      style={buttonHover ? styles.buttonHover : styles.button}
      onMouseOver={() => handleHover(true)}
      onMouseOut={() => handleHover(false)}
    >
      <Typography variant="body2" color={"inherit"}>
        {props.text}
      </Typography>
    </div>
  );
};

export default Primary;
