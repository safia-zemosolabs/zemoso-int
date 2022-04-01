import { Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../themes";

const styles = {
  tabs: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    cursor: "pointer",
    marginBottom: theme.spacing(8),
  },
  active: {
    color: theme.palette.primary.dark,
    borderBottom: "2px solid",
    paddingBottom: theme.spacing(5),
  },
  inActive: {
    color: theme.palette.textcolor.light,
    borderBottom: "2px solid #E1ECFC",
    paddingBottom: theme.spacing(5),
  },
};

export interface TabsProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState<boolean>(false);

  const handleClick = (value: boolean) => {
    setActiveTab(value);
    props.setActive(value);
  };

  return (
    <div style={styles.tabs} data-testid="Tabs">
      <Typography
        variant={!activeTab ? "subtitle2" : "subtitle3"}
        component="h3"
        onClick={() => handleClick(false)}
        style={!activeTab ? styles.active : styles.inActive}
        data-testid="Tabs Tab-1"
      >
        Currently Reading
      </Typography>
      <Typography
        variant={activeTab ? "subtitle2" : "subtitle3"}
        component="h3"
        onClick={() => handleClick(true)}
        style={activeTab ? styles.active : styles.inActive}
        data-testid="Tabs Tab-2"
      >
        Finished
      </Typography>
    </div>
  );
};

export default Tabs;
