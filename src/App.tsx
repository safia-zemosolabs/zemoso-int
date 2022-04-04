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
import Login from "pages/Login";

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
  const [login, setLogin] = useState(false);
  const [bookList, setBookList] = useState<BookCardProps[]>([]);

  useEffect(() => {
    setBookList(data);
  }, [setBookList]);

  return login === false ? (
    <Box data-testid="App Login Page">
      <Login setLogin={setLogin} />
    </Box>
  ) : (
    <Box className="App" data-testid="App Page">
      <bookListContext.Provider value={{ bookList, setBookList }}>
        <ThemeProvider theme={theme}>
          <Header></Header>
          <Routes>
            <Route path="/home" element={<Home setLogin={setLogin} />} />
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
