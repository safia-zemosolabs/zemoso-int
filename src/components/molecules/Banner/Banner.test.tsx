import React from "react";
import { render, screen } from "@testing-library/react";

import Banner from "./Banner";

test("renders learn react link", () => {
  render(<Banner />);

  const typographyElement = screen.getByText(
    /Explore Books on entrepreneurship/i
  );
  expect(typographyElement).toBeInTheDocument;
});
