import React from "react";
import Tabs, { TabsProps } from "./Tabs";

export default {
  title: "molecules/Tabs",
  component: Tabs,
};

export const component = (props: TabsProps) => <Tabs {...props}></Tabs>;

component.args = {
  setActive: () => {},
};
