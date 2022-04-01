import React from "react";
import { render, screen } from "@testing-library/react";

import Blink from "./Blink";
import { bookListContext } from "../../App";
import data from "../../data";

import { MemoryRouter } from "react-router";

const bookList = data;

const setBookList = () => {};

test("Testing Blink Page", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Get the key ideas", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Get the key ideas");
  expect(element).toBeTruthy();
});

test("Testing Blink Page extension", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page extension");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Turning Your Business", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Turning Your Business");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Author", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Author");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Views", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Views");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Duration", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Duration");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Read Again", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Read Again");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Finish Reading", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Finish Reading");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Send to Kindle", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Send to Kindle");
  expect(element).toBeTruthy();
});

test("Testing Blink Page SynopsisBar", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page SynopsisBar");
  expect(element).toBeTruthy();
});
