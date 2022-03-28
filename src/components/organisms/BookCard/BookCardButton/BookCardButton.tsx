import React from "react";
import TimeIcon from "../../../atoms/icons/Time";
import UserIcon from "../../../atoms/icons/User/User";
import { Typography } from "@mui/material";
import theme from "../../../../themes";
import Button from "../../../molecules/Button/Secondary";
import Add from "../../../atoms/icons/Add";
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
};

const BookCardButton = (props: BookCardProps) => {
  return (
    <div style={styles.bookCard}>
      <img src={props.img} alt="book" style={styles.img}></img>
      <div style={styles.bookCardDiv}>
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

        <div style={styles.cardInfoDiv}>
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
        </div>
        <div
          onClick={() => {
            props.handleAddtoLibrary?.(props.id);
          }}
        >
          <Button icon={<Add color={"inherit"} />} text={"Add to library"} />
        </div>
      </div>
    </div>
  );
};

export default BookCardButton;
