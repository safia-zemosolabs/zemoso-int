import React from "react";
import { render, screen } from "@testing-library/react";

import BookCardButton from "./BookCardButton";
import { MemoryRouter } from "react-router-dom";

const args = {
  id: 0,
  inLibrary: true,
  finished: true,
  img: "/assets/books/1.svg",
  title: "Bring Your Human to Work",
  author: "Stephen Frost",
  views: "11.12k",
  duration: "16min",
  synopsis:
    "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
};

test("Testing BookCardButton", () => {
  render(
    <MemoryRouter>
      <BookCardButton {...args} />
    </MemoryRouter>
  );
  const element = screen.getByTestId("BookCardButton");
  expect(element).toBeTruthy();
});
