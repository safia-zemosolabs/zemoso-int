import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useLocation } from "react-router";
import { BookContextType, bookListContext } from "../../App";
import theme from "../../themes";
import TimeIcon from "../../components/atoms/icons/TimeIcon";
import UserIcon from "../../components/atoms/icons/User";
import Button from "../../components/molecules/Button/Primary/";
import ArrowRight from "../../components/atoms/icons/ArrowRight";
import SynopsisBar from "components/molecules/SynopsisBar";

const styles = {
  blink: {
    display: "grid",
    gridTemplateColumns: "auto max-content",
    gap: theme.spacing(12),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(12),
  },
  cardInfo: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    color: "#666",
    marginBottom: theme.spacing(2),
  },
  nav: {
    padding: "20px 0",
    display: "grid",
    gridTemplateColumns: "repeat(3, max-content)",
    gap: theme.spacing(8),
    alignItems: "center",
  },
  SynopsisBarStyle: {
    alignItems: "center",
    marginTop: theme.spacing(8),
  },
  button: {
    display: "grid",
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    textAlign: "center" as "center",
    color: theme.palette.textcolor.main,
    width: "max-content",
  },
};

const Blink = () => {
  const { bookList, setBookList } =
    useContext<BookContextType>(bookListContext);
  const location = useLocation();
  const book =
    bookList[parseInt(location.pathname[location.pathname.length - 1])];

  const handleFinish = (val: number) => {
    bookList[val].finished = true;
    setBookList([...bookList]);
  };

  const handleReadAgain = (val: number) => {
    bookList[val].finished = false;
    setBookList([...bookList]);
  };

  const handleSendToKindle = (val: number) => {
    setBookList([...bookList]);
  };

  return (
    <Box
      className="container"
      style={{ padding: `${theme.spacing(7)} ${theme.spacing(9)}` }}
    >
      <Typography
        variant="body1"
        color={theme.palette.textcolor.main}
        mb={theme.spacing(9)}
        mt={theme.spacing(6)}
      >
        Get the key ideas from
      </Typography>
      <Box style={styles.blink}>
        <Box>
          <Typography
            variant="heading"
            component="h1"
            color={theme.palette.textcolor.main}
            mb={theme.spacing(8)}
          >
            {book.title}
          </Typography>
          <Typography
            variant="subtitle3"
            color={theme.palette.textcolor.main}
            component="div"
            mb={theme.spacing(3)}
          >
            Turning Your Business into an Enduring Great Company
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.textcolor.light}
            component="div"
            mb={theme.spacing(3)}
          >
            {book.author}
          </Typography>

          <span style={styles.cardInfo}>
            <UserIcon />
            <Typography variant="caption1" component="span">
              {book.views}
            </Typography>
          </span>

          <span style={styles.cardInfo}>
            <TimeIcon />
            <Typography variant="caption1" component="span">
              {book.duration}
            </Typography>
          </span>

          <Grid item xs={12} style={styles.nav} spacing={3} container>
            {book.finished ? (
              <Box
                onClick={() => handleReadAgain(book.id)}
                style={{ marginTop: theme.spacing(8) }}
              >
                <Button text={"Read Again"}></Button>
              </Box>
            ) : (
              <Box
                style={{
                  marginTop: theme.spacing(8),
                  border: "2px solid black",
                }}
              >
                <Typography style={styles.button}>Read Again</Typography>
              </Box>
            )}

            {!book.finished ? (
              <Box
                onClick={() => handleFinish(book.id)}
                style={{ marginTop: theme.spacing(8) }}
              >
                <Button text={"Finish Reading"}></Button>
              </Box>
            ) : (
              <Box
                style={{
                  marginTop: theme.spacing(8),
                  border: "2px solid black",
                }}
              >
                <Typography style={styles.button}>Finish Reading</Typography>
              </Box>
            )}

            <Box
              onClick={() => handleSendToKindle(book.id)}
              style={{ marginTop: theme.spacing(8) }}
            >
              <Typography variant="body2" color={theme.palette.textcolor.light}>
                Send to Kindle <ArrowRight />
              </Typography>
            </Box>
          </Grid>

          <Box style={{ marginTop: theme.spacing(8) }}>
            <SynopsisBar />
            <Typography
              variant="body2"
              color={theme.palette.textcolor.light}
              component="div"
              mb={theme.spacing(3)}
            >
              {book.synopsis}
            </Typography>
          </Box>
        </Box>

        <Box>
          <img src={book.img} alt=""></img>
        </Box>
      </Box>
    </Box>
  );
};

export default Blink;
