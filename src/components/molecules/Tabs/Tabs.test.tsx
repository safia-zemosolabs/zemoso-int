import React from "react";
import { render, screen } from "@testing-library/react";

import Tabs from "./Tabs";

const setActiveDummy = () => {};

test("Testing Tabs", () => {
  render(<Tabs setActive={setActiveDummy} />);
  const element = screen.getByTestId("Tabs");
  expect(element).toBeTruthy();
});

test("Testing Tabs Tab-1", () => {
  render(<Tabs setActive={setActiveDummy} />);
  const element = screen.getByTestId("Tabs Tab-1");
  expect(element).toBeTruthy();
});

test("Testing Tabs Tab-2", () => {
  render(<Tabs setActive={setActiveDummy} />);
  const element = screen.getByTestId("Tabs Tab-2");
  expect(element).toBeTruthy();
});
