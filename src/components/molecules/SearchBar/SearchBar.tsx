import React from "react";
import theme from "../../../themes";
import Search from "../../atoms/icons/Search";

const styles = {
  search: {
    display: "grid",
    gridTemplateColumns: "max-content auto",
    marginBottom: theme.spacing(6),
    maxWidth: "512px",
  },
  input: {
    border: 0,
    borderBottom: `2px solid ${theme.palette.textcolor.light}`,
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    outline: 0,
  },
  icon: {
    borderBottom: `2px solid ${theme.palette.textcolor.light}`,
    display: "flex",
    alignItems: "center",
    padding: `${theme.spacing(2)} 0`,
  },
};

const SearchBar = () => {
  return (
    <div style={styles.search}>
      <span style={styles.icon}>
        <Search></Search>
      </span>
      <input
        type="text"
        placeholder="Search by title or author"
        style={styles.input}
      ></input>
    </div>
  );
};

export default SearchBar;
