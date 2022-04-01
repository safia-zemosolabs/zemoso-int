import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

test("Testing Footer", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer");
  expect(element).toBeTruthy();
});

test("Testing Footer Content", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Content");
  expect(element).toBeTruthy();
});

test("Testing Footer Logo", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Logo");
  expect(element).toBeTruthy();
});

test("Testing Footer Caption1", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Caption1");
  expect(element).toBeTruthy();
});

test("Testing Footer Editorial", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Editorial");
  expect(element).toBeTruthy();
});

test("Testing Footer Book lists", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Book lists");
  expect(element).toBeTruthy();
});

test("Testing Footer Nonfiction", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Nonfiction");
  expect(element).toBeTruthy();
});

test("Testing Footer next read", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer next read");
  expect(element).toBeTruthy();
});

test("Testing Footer Benefits of reading", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Benefits of reading");
  expect(element).toBeTruthy();
});

test("Testing Footer Useful links", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Useful links");
  expect(element).toBeTruthy();
});

test("Testing Footer Blinkist business", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Blinkist business");
  expect(element).toBeTruthy();
});

test("Testing Footer Pricing", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Pricing");
  expect(element).toBeTruthy();
});

test("Testing Footer Company", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Company");
  expect(element).toBeTruthy();
});

test("Testing Footer About", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer About");
  expect(element).toBeTruthy();
});

test("Testing Footer Careers", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer Careers");
  expect(element).toBeTruthy();
});

test("Testing Footer caption2", () => {
  render(<Footer />);
  const element = screen.getByTestId("Footer caption2");
  expect(element).toBeTruthy();
});
