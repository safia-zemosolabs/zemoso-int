import React, { useContext } from "react";
import Banner from "../../components/molecules/Banner";
import SearchBar from "../../components/molecules/SearchBar";
import { Typography } from "@mui/material";
import theme from "../../themes";
import { BookContextType, bookListContext } from "../../App";
import BookCardBar from "../../components/organisms/BookCard/BookCardBar";
import BookCardButton from "../../components/organisms/BookCard/BookCardButton";
import { BookCardProps } from "../../components/organisms/BookCard/BookCardProps";

const styles = {
  bookCardList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: theme.spacing(6),
    marginBottom: theme.spacing(16),
  },
};

const Explore = () => {
  const { bookList, setBookList } =
    useContext<BookContextType>(bookListContext);
  const handleAddtoLibrary = (val: number) => {
    bookList[val].inLibrary = true;
    setBookList([...bookList]);
  };

  return (
    <div>
      <div className="container">
        <Banner />
        <SearchBar />
        <Typography
          variant="subtitle1"
          component="h2"
          style={{
            color: theme.palette.textcolor.dark,
            marginTop: theme.spacing(12),
            marginBottom: theme.spacing(6),
          }}
        >
          Trending blinks
        </Typography>
        <div style={styles.bookCardList}>
          {bookList.map((data: BookCardProps, index: number) => {
            return data.inLibrary ? (
              <div key={index}>
                <BookCardBar {...data}></BookCardBar>
              </div>
            ) : (
              <div key={index}>
                <BookCardButton
                  handleAddtoLibrary={handleAddtoLibrary}
                  {...data}
                ></BookCardButton>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
