import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Explore from "./Explore";

import { bookListContext } from "../../App";
import data from "../../data";

const bookList = data;
const setBookList = () => {};

test("Testing Explore Page", () => {
  render(
    <MemoryRouter initialEntries={["/Explore/0"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Explore />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Explore Page");
  expect(element).toBeTruthy();
});

test("Testing Explore Banner", () => {
  render(
    <MemoryRouter initialEntries={["/Explore/0"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Explore />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Explore Banner");
  expect(element).toBeTruthy();
});

test("Testing Explore SearchBar", () => {
  render(
    <MemoryRouter initialEntries={["/Explore/0"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Explore />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Explore SearchBar");
  expect(element).toBeTruthy();
});

test("Testing Explore Trending", () => {
  render(
    <MemoryRouter initialEntries={["/Explore/0"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Explore />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Explore Trending");
  expect(element).toBeTruthy();
});

test("Testing Explore BookCardBar", () => {
  render(
    <MemoryRouter initialEntries={["/Explore/0"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Explore />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Explore BookCardBar");
  expect(element).toBeTruthy();
});
