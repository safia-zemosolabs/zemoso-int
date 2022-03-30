import React from "react";
import { render, screen } from "@testing-library/react";

import NavMenuLink from "./NavMenuLink";

test("renders learn react link", () => {
  render(
    <NavMenuLink
      text="Testing NavMenuLink"
      url="sonarcloud"
      icon="testIcon"
    ></NavMenuLink>
  );
  const typographyElement = screen.getByText(/Testing NavMenuLink/i);
  expect(typographyElement).toBeInTheDocument;
});
