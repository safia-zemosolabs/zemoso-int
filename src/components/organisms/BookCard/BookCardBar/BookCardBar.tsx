import React from "react";
import TimeIcon from "../../../atoms/icons/TimeIcon";
import UserIcon from "../../../atoms/icons/User/User";
import { Box, Typography } from "@mui/material";
import theme from "../../../../themes";
import ProgressBar from "../../../atoms/ProgressBar";
import { BookCardProps } from "../BookCardProps";

const styles = {
  img: {
    width: "100%",
  },
  cardInfo: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    color: "#666",
  },
  bookCard: {
    border: "1px solid #E1ECFC",
    borderRadius: theme.spacing(2),
    maxWidth: "320px",
  },
  bookCardDiv: {
    padding: `${theme.spacing(5)} ${theme.spacing(4)}`,
  },
  cardInfoDiv: {
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    gap: theme.spacing(2),
    justifyContent: "space-between",
  },
  author: {
    margin: `${theme.spacing(4)} 0`,
    color: theme.palette.textcolor.light,
  },
  action: {
    textAlign: "center" as "center",
    color: theme.palette.secondary.main,
  },
};

const BookCardBar = (props: BookCardProps) => {
  return (
    <Box style={styles.bookCard}>
      <img src={props.img} alt="book" style={styles.img}></img>

      <Box style={styles.bookCardDiv}>
        <Typography
          variant="subtitle2"
          component="h3"
          style={{ color: theme.palette.textcolor.main }}
        >
          {props.title}
        </Typography>

        <Typography variant="body1" component="h5" style={styles.author}>
          {props.author}
        </Typography>

        <Box style={styles.cardInfoDiv}>
          <span style={styles.cardInfo}>
            <UserIcon />
            <Typography variant="caption1" component="span">
              {props.views}
            </Typography>
          </span>

          <span style={styles.cardInfo}>
            <TimeIcon />
            <Typography variant="caption1" component="span">
              {props.duration}
            </Typography>
          </span>
        </Box>

        <Box>
          {props.finished ? (
            <Typography variant="body1" component="h5" style={styles.action}>
              Read again
            </Typography>
          ) : (
            <Typography variant="body1" component="h5" style={styles.action}>
              Finished
            </Typography>
          )}
        </Box>

        <div
          style={{
            marginTop: theme.spacing(3),
            marginLeft: "auto",
            width: "max-content",
          }}
        ></div>
      </Box>

      <ProgressBar />
    </Box>
  );
};

export default BookCardBar;
