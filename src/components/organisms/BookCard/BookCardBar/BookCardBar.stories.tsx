import React from "react";
import BookCard from "./BookCardBar";
import img from "../../../../assets/books/1.svg";
import { BookCardProps } from "../BookCardProps";

export default {
  title: "organisms/BookCard",
  component: BookCard,
};

export const component = (props: BookCardProps) => (
  <BookCard {...props}></BookCard>
);

component.args = {
  id: 0,
  img: img,
  title: "Book Name",
  author: "Author",
  views: "11k",
  duration: "16min",
  inLibrary: false,
  finished: false,
};
