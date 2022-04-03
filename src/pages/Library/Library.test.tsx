import React from "react";
import { render, screen } from "@testing-library/react";
import Library from "./Library";

test("Testing Library Page", () => {
  render(<Library />);
  const element = screen.getByTestId("Library Page");
  expect(element).toBeTruthy();
});

test("Testing Library Page", () => {
  render(<Library />);
  const element = screen.getByTestId("Library Page");
  expect(element).toBeTruthy();
});

test("Testing Library Tabs", () => {
  render(<Library />);
  const element = screen.getByTestId("Library Tabs");
  expect(element).toBeTruthy();
});

test("Testing Library bookCardList", () => {
  render(<Library />);
  const element = screen.getByTestId("Library bookCardList");
  expect(element).toBeTruthy();
});

test("Testing Library Page", () => {
  render(<Library />);
  const element = screen.getByTestId("Library Page");
  expect(element).toBeTruthy();
});
