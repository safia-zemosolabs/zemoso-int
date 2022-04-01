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
    <div style={styles.progress} data-testid="Progress">
      <div style={styles.progressBar} data-testid="Progress Bar"></div>
    </div>
  );
};

export default ProgressBar;
