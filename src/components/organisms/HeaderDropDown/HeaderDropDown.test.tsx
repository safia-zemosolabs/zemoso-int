import React from "react";
import { render, screen } from "@testing-library/react";

import HeaderDropDown from "./HeaderDropDown";
import { MemoryRouter } from "react-router";

test("Testing HeaderDropDown Explore", () => {
  render(
    <MemoryRouter>
      <HeaderDropDown />
    </MemoryRouter>
  );
  const element = screen.getByTestId("HeaderDropDown Explore");
  expect(element).toBeTruthy();
});

test("Testing HeaderDropDown recently", () => {
  render(
    <MemoryRouter>
      <HeaderDropDown />
    </MemoryRouter>
  );
  const element = screen.getByTestId("HeaderDropDown recently");
  expect(element).toBeTruthy();
});

test("Testing HeaderDropDown popular", () => {
  render(
    <MemoryRouter>
      <HeaderDropDown />
    </MemoryRouter>
  );
  const element = screen.getByTestId("HeaderDropDown popular");
  expect(element).toBeTruthy();
});
