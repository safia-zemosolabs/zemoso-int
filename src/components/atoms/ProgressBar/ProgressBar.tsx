import React from "react";
import theme from "../../../themes";

const styles = {
  progress: {
    height: theme.spacing(4),
    background: theme.palette.backgroundcolor.light,
  },
  progressBar: {
    height: "100%",
    background: "#E1ECFC",
    width: "40%",
  },
};

const ProgressBar = () => {
  return (
    <div style={styles.progress}>
      <div style={styles.progressBar}></div>
    </div>
  );
};

export default ProgressBar;
