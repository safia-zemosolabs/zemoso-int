import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NavMenuLink from "./NavMenuLink";
import Entrepreneurship from "components/atoms/icons/Entrepreneurship";

const args = {
  text: "Entrepreneurship",
  url: "/explore/entrepreneurship",
  icon: <Entrepreneurship />,
};

test("Testing NavMenuLink", () => {
  render(
    <MemoryRouter>
      <NavMenuLink {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("NavMenuLink");
  expect(element).toBeTruthy();
});
