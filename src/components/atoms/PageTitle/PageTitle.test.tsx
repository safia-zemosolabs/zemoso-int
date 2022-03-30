import React from "react";
import { render, screen } from "@testing-library/react";

import PageTitle from "./PageTitle";

test("renders learn react link", () => {
  render(<PageTitle title="Testing" />);
  const typographyElement = screen.getByText(/Testing/i);
  expect(typographyElement).toBeInTheDocument;
});
