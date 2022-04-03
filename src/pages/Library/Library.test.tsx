import React from "react";
import { render, screen } from "@testing-library/react";
import Library from "./Library";

test("Testing Library Page", () => {
  render(<Library />);
  const element = screen.getByTestId("Library Page");
  expect(element).toBeTruthy();
});

test("Testing Library container", () => {
  render(<Library />);
  const element = screen.getByTestId("Library container");
  expect(element).toBeTruthy();
});

test("Testing Library PageTitle", () => {
  render(<Library />);
  const element = screen.getByTestId("Library PageTitle");
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
