import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router";

test("should render seacrh icon", () => {
  render(
    <MemoryRouter>
      <Header></Header>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Search");
  expect(element).toBeTruthy();
});

test("should render Logo icon", () => {
  render(
    <MemoryRouter>
      <Header></Header>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Logo");
  expect(element).toBeTruthy();
});

test("should render Home", () => {
  render(
    <MemoryRouter>
      <Header></Header>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Home");
  expect(element).toBeTruthy();
});

test("should render Explore", () => {
  render(
    <MemoryRouter>
      <Header></Header>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Explore");
  expect(element).toBeTruthy();
});

test("should render My Library", () => {
  render(
    <MemoryRouter>
      <Header></Header>
    </MemoryRouter>
  );
  const element = screen.getByTestId("My Library");
  expect(element).toBeTruthy();
});
