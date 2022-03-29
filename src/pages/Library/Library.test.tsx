import React from "react";
import { render, screen } from "@testing-library/react";
import Library from "./Library";

test("renders learn react link", () => {
  render(<Library />);
  const pageTitle = screen.getByText(/My Library/i);
  expect(pageTitle).toBeInTheDocument;
});
