import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Banner from "./Banner";

test("should render Banner", () => {
  render(<Banner />);
  const element = screen.getByTestId("Title");
  expect(element).toBeTruthy();
});
