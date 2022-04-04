import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Blink from "./Blink";

import { bookListContext } from "../../App";
import data from "../../data";

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

test("Testing Blink Page Read Again Button Active", () => {
  render(
    <MemoryRouter initialEntries={["/library/0"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Read Again Button Active");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Read Again Button Non-Active", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Read Again Button Non-Active");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Read Again text", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Read Again text");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Finish Reading Button Active", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Finish Reading Button Active");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Finish Reading Button Non-Active", () => {
  render(
    <MemoryRouter initialEntries={["/library/0"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId(
    "Blink Page Finish Reading Button Non-Active"
  );
  expect(element).toBeTruthy();
});

test("Testing Blink Page Finish Reading text", () => {
  render(
    <MemoryRouter initialEntries={["/library/0"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Finish Reading text");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Send to Kindle Button", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Send to Kindle Button");
  expect(element).toBeTruthy();
});

test("Testing Blink Page Send to Kindle text", () => {
  render(
    <MemoryRouter initialEntries={["/library/1"]}>
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <Blink />
      </bookListContext.Provider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("Blink Page Send to Kindle text");
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
