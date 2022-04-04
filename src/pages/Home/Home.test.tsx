import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "./Home";

const setLogin = () => {};

test("Testing Home", () => {
  render(<Home setLogin={setLogin} />);
  const element = screen.getByTestId("Home");
  expect(element).toBeTruthy();
});
