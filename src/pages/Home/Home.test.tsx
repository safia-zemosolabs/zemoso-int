import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "./Home";

test("Testing Home", () => {
  render(<Home />);
  const element = screen.getByTestId("Home");
  expect(element).toBeTruthy();
});
