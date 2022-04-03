import React, { useContext, useState } from "react";
import theme from "../../themes/";
import PageTitle from "../../components/atoms/PageTitle";
import Tabs from "../../components/molecules/Tabs";
import BookCardBar from "../../components/organisms/BookCard/BookCardBar";
import { BookContextType, bookListContext } from "../../App";
import { Link } from "react-router-dom";
import { BookCardProps } from "../../components/organisms/BookCard/BookCardProps";

const styles = {
  library: {
    padding: `${theme.spacing(6)} ${theme.spacing(9)}`,
  },
  bookCardList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: theme.spacing(6),
    marginBottom: theme.spacing(16),
  },
};

const Library = () => {
  const { bookList } = useContext<BookContextType>(bookListContext);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div style={styles.library} data-testid="Library Page">
      <div className="container" data-testid="Library container">
        <div data-testid="Library PageTitle">
          <PageTitle title={"My Library"} />
        </div>

        <div data-testid="Library Tabs">
          <Tabs setActive={setIsFinished} />
        </div>

        <div style={styles.bookCardList} data-testid="Library bookCardList">
          {bookList.map((data: BookCardProps, index: number) => {
            return data.inLibrary && data.finished === isFinished ? (
              <Link to={`${data.id}`} style={{ textDecoration: "none" }}>
                <div key={index}>
                  <BookCardBar {...data}></BookCardBar>
                </div>
              </Link>
            ) : (
              <></>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Library;
