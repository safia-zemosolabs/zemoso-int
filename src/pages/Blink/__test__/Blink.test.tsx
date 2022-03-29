import React from "react";
import { createMemoryHistory } from "history";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../themes";
import Blink from "../Blink";

test("renders learn react link", () => {
  const history = createMemoryHistory();
  const route = "library/:blink";
  history.push(route);

  render(
    <BrowserRouter>
      <Routes>
        <Route path="library/:blink" element={<Blink />} />
      </Routes>
    </BrowserRouter>
  );
  const typographyElement = screen.getAllByText(/Get the key ideas from/i);
  expect(typographyElement).toBeInTheDocument();
});
