import React from "react";
import Primary, { PrimaryProps } from "./Primary/Primary";
import Add from "../../atoms/icons/Add";
import Secondary, { SecondaryProps } from "./Secondary/Secondary";

export default {
  title: "molecules/Button",
  component: Primary,
};

export const primary = (props: PrimaryProps) => <Primary {...props} />;
export const secondary = (props: SecondaryProps) => <Secondary {...props} />;

primary.args = {
  text: "Add to library",
  icon: <Add color={"inherit"} />,
};

secondary.args = {
  text: "Add to library",
};
