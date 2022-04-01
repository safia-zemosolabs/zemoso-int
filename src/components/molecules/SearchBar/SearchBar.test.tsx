import React from "react";
import { render, screen } from "@testing-library/react";

import SearchBar from "./SearchBar";

test("Testing Progress", () => {
  render(<SearchBar />);
  const element = screen.getByTestId("Search Bar");
  expect(element).toBeTruthy();
});

test("Testing Progress Bar", () => {
  render(<SearchBar />);
  const element = screen.getByTestId("SearchBar Icon");
  expect(element).toBeTruthy();
});
