import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "App";

const setLogin = () => {};

test("Testing App Login Page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const element = screen.queryByTestId("App Login Page");
  expect(element).toBeFalsy();
});

test("Testing App Page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const element = screen.getByTestId("App Page");
  expect(element).toBeTruthy();
});
