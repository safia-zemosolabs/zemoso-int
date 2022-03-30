import React from "react";
import { render, screen } from "@testing-library/react";

import Primary from "./Primary";

test("renders learn react link", () => {
  render(<Primary text="Testing" />);
  const typographyElement = screen.getByText(/Testing/i);
  expect(typographyElement).toBeInTheDocument;
});
