import React from "react";
import Building from "../../atoms/icons/Building";
import NavMenuLink, { NavMenuLinkProps } from "./NavMenuLink";

export default {
  title: "molecules/NavMenuLink",
  component: NavMenuLink,
};

export const component = (props: NavMenuLinkProps) => (
  <NavMenuLink {...props} />
);

component.args = {
  text: "Add to library",
  icon: <Building />,
  url: "/",
};
