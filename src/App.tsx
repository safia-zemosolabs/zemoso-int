import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/organisms/Header";
import Home from "./pages/Home";
import Library from "./pages/Library/";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./themes";
import Footer from "./components/organisms/Footer";
import Explore from "./pages/Explore";
import Blink from "./pages/Blink";

import { BookCardProps } from "./components/organisms/BookCard/BookCardProps";

import data from "data";

export const bookListContext = createContext<BookContextType>({
  bookList: [],
  setBookList: () => {},
});

export interface BookContextType {
  bookList: BookCardProps[];
  setBookList: Function;
}

function App() {
  const [bookList, setBookList] = useState<BookCardProps[]>([]);

  useEffect(() => {
    setBookList(data);
  }, [setBookList]);

  return (
    <Box className="App" data-testid="App Page">
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <ThemeProvider theme={theme}>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="library/:blink" element={<Blink />} />
            <Route path="explore/:category" element={<Explore />} />
          </Routes>

          <Footer></Footer>
        </ThemeProvider>
      </bookListContext.Provider>
    </Box>
  );
}

export default App;
