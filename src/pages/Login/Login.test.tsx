import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

const setLogin = () => {};

test("Testing Login Page", () => {
  render(<Login setLogin={setLogin} />);
  const element = screen.getByTestId("Login Page");
  expect(element).toBeTruthy();
});
