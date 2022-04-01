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
      data-testid="Blink Page"
    >
      <Typography
        variant="body1"
        color={theme.palette.textcolor.main}
        mb={theme.spacing(9)}
        mt={theme.spacing(6)}
        data-testid="Blink Page Get the key ideas"
      >
        Get the key ideas from
      </Typography>
      <Box style={styles.blink} data-testid="Blink Page extension">
        <Box>
          <Typography
            variant="heading"
            component="h1"
            color={theme.palette.textcolor.main}
            mb={theme.spacing(8)}
            data-testid="Blink Page Title"
          >
            {book.title}
          </Typography>
          <Typography
            variant="subtitle3"
            color={theme.palette.textcolor.main}
            component="div"
            mb={theme.spacing(3)}
            data-testid="Blink Page Turning Your Business"
          >
            Turning Your Business into an Enduring Great Company
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.textcolor.light}
            component="div"
            mb={theme.spacing(3)}
            data-testid="Blink Page Author"
          >
            {book.author}
          </Typography>

          <span style={styles.cardInfo}>
            <UserIcon />
            <Typography
              variant="caption1"
              component="span"
              data-testid="Blink Page Views"
            >
              {book.views}
            </Typography>
          </span>

          <span style={styles.cardInfo}>
            <TimeIcon />
            <Typography
              variant="caption1"
              component="span"
              data-testid="Blink Page Duration"
            >
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
                <Typography
                  style={styles.button}
                  data-testid="Blink Page Read Again"
                >
                  Read Again
                </Typography>
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
                <Typography
                  style={styles.button}
                  data-testid="Blink Page Finish Reading"
                >
                  Finish Reading
                </Typography>
              </Box>
            )}

            <Box
              onClick={() => handleSendToKindle(book.id)}
              style={{ marginTop: theme.spacing(8) }}
            >
              <Typography
                variant="body2"
                color={theme.palette.textcolor.light}
                data-testid="Blink Page Send to Kindle"
              >
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
              data-testid="Blink Page SynopsisBar"
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
