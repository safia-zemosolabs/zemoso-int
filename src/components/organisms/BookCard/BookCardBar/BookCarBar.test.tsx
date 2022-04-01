import React from "react";
import { render, screen } from "@testing-library/react";

import BookCardBar from "./BookCardBar";
import { ReactComponent as img } from "../../../../assets/books/1.svg";
import { MemoryRouter } from "react-router-dom";

const args = {
  id: 0,
  inLibrary: true,
  finished: true,
  img: <img />,
  title: "Bring Your Human to Work",
  author: "Stephen Frost",
  views: "11.12k",
  duration: "16min",
  synopsis:
    "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
};

test("Testing BookCardBar", () => {
  render(
    <MemoryRouter>
      <BookCardBar {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("BookCardBar");
  expect(element).toBeTruthy();
});

test("Testing BookCardBar Title", () => {
  render(
    <MemoryRouter>
      <BookCardBar {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("BookCardBar Title");
  expect(element).toBeTruthy();
});

test("Testing BookCardBar Author", () => {
  render(
    <MemoryRouter>
      <BookCardBar {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("BookCardBar Author");
  expect(element).toBeTruthy();
});

test("Testing BookCardBar UserIcon", () => {
  render(
    <MemoryRouter>
      <BookCardBar {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("BookCardBar UserIcon");
  expect(element).toBeTruthy();
});

test("Testing BookCardBar Views", () => {
  render(
    <MemoryRouter>
      <BookCardBar {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("BookCardBar Views");
  expect(element).toBeTruthy();
});

test("Testing BookCardBar TimeIcon", () => {
  render(
    <MemoryRouter>
      <BookCardBar {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("BookCardBar TimeIcon");
  expect(element).toBeTruthy();
});

test("Testing BookCardBar Duration", () => {
  render(
    <MemoryRouter>
      <BookCardBar {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("BookCardBar Duration");
  expect(element).toBeTruthy();
});

test("Testing BookCardBar Read Again", () => {
  render(
    <MemoryRouter>
      <BookCardBar {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("BookCardBar Read Again");
  expect(element).toBeTruthy();
});
