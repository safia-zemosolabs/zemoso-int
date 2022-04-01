import React from "react";
import { render, screen } from "@testing-library/react";

import SynopsisBar from "./SynopsisBar";

test("Testing SynopsisBar", () => {
  render(<SynopsisBar />);
  const element = screen.getByTestId("SynopsisBar");
  expect(element).toBeTruthy();
});

test("Testing SynopsisBar Tab-1", () => {
  render(<SynopsisBar />);
  const element = screen.getByTestId("SynopsisBar Tab-1");
  expect(element).toBeTruthy();
});

test("Testing SynopsisBar Tab-2", () => {
  render(<SynopsisBar />);
  const element = screen.getByTestId("SynopsisBar Tab-2");
  expect(element).toBeTruthy();
});

test("Testing SynopsisBar Tab-3", () => {
  render(<SynopsisBar />);
  const element = screen.getByTestId("SynopsisBar Tab-3");
  expect(element).toBeTruthy();
});
