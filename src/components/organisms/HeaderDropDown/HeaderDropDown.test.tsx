import React from "react";
import { render, screen } from "@testing-library/react";

import HeaderDropDown from "./HeaderDropDown";
import { MemoryRouter } from "react-router";

test("Testing HeaderDropDown", () => {
  render(
    <MemoryRouter>
      <HeaderDropDown />
    </MemoryRouter>
  );
  const element = screen.getByTestId("HeaderDropDown");
  expect(element).toBeTruthy();
});

test("Testing HeaderDropDown container", () => {
  render(
    <MemoryRouter>
      <HeaderDropDown />
    </MemoryRouter>
  );
  const element = screen.getByTestId("HeaderDropDown container");
  expect(element).toBeTruthy();
});

test("Testing HeaderDropDown Titles", () => {
  render(
    <MemoryRouter>
      <HeaderDropDown />
    </MemoryRouter>
  );
  const element = screen.getByTestId("HeaderDropDown Titles");
  expect(element).toBeTruthy();
});

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

test("Testing HeaderDropDown hr", () => {
  render(
    <MemoryRouter>
      <HeaderDropDown />
    </MemoryRouter>
  );
  const element = screen.getByTestId("HeaderDropDown hr");
  expect(element).toBeTruthy();
});

test("Testing HeaderDropDown NavMenuLink", () => {
  render(
    <MemoryRouter>
      <HeaderDropDown />
    </MemoryRouter>
  );
  const element = screen.getByTestId("HeaderDropDown NavMenuLink");
  expect(element).toBeTruthy();
});
