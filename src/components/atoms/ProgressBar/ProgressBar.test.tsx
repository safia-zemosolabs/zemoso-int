import React from "react";
import { render, screen } from "@testing-library/react";

import ProgressBar from "./ProgressBar";

test("Testing Progress", () => {
  render(<ProgressBar />);
  const element = screen.getByTestId("Progress");
  expect(element).toBeTruthy();
});

test("Testing Progress Bar", () => {
  render(<ProgressBar />);
  const element = screen.getByTestId("Progress Bar");
  expect(element).toBeTruthy();
});
