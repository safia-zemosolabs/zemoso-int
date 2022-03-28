import React, { ReactElement, useState } from "react";

import { Typography } from "@mui/material";
import theme from "../../../../themes";

const styles = {
  button: {
    display: "grid",
    gridTemplateColumns: "max-content auto",
    alignItems: "center",
    gap: theme.spacing(3),
    cursor: "pointer",
    margin: "12px -16px -20px",
    padding: "16px",
    textAlign: "center" as "center",
    justifyContent: "center",
    borderTop: "1px solid rgb(225, 236, 252)",
    color: theme.palette.secondary.main,
    fill: theme.palette.secondary.main,
  },
  buttonHover: {
    display: "grid",
    gridTemplateColumns: "max-content auto",
    alignItems: "center",
    gap: theme.spacing(3),
    cursor: "pointer",
    margin: "12px -16px -20px",
    padding: "16px",
    textAlign: "center" as "center",
    justifyContent: "center",
    borderTop: "1px solid rgb(225, 236, 252)",
    color: theme.palette.backgroundcolor.light,
    background: theme.palette.secondary.main,
    fill: theme.palette.backgroundcolor.light,
  },
};

export interface SecondaryProps {
  icon?: ReactElement;
  text: string;
}

const Secondary = (props: SecondaryProps) => {
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
      {props.icon ? props.icon : <></>}
      <Typography variant="body2" color={"inherit"}>
        {props.text}
      </Typography>
    </div>
  );
};

export default Secondary;
