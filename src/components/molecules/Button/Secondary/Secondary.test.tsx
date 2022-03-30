import React from "react";
import { render, screen } from "@testing-library/react";

import Secondary from "./Secondary";

test("renders learn react link", () => {
  render(<Secondary text="Testing" />);
  const typographyElement = screen.getByText(/Testing/i);
  expect(typographyElement).toBeInTheDocument;
});
