import theme from "../../../themes";

const styles = {
  nav: {
    padding: "20px 0",
    display: "grid",
    gridTemplateColumns: "max-content max-content",
    justifyContent: "space-between",
    gap: theme.spacing(10),
    alignItems: "center",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  links: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "repeat(5, max-content)",
    gap: theme.spacing(10),
  },
  linkItemNonActive: {
    textDecoration: "none",
    color: theme.palette.textcolor.main,
    borderBottom: `2px solid #fff`,
    borderTop: `2px solid #fff`,
    cursor: "pointer",
  },
  linkItemActive: {
    textDecoration: "none",
    borderTop: `2px solid #fff`,
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
    color: theme.palette.textcolor.main,
  },
  activeNavMenu: {
    display: "inline-block",
    width: "100%",
    position: "absolute" as "absolute",
  },
  nonActiveNavMenu: {
    display: "none",
  },
  shadow: {
    position: "absolute" as "absolute",
    background: "#9da3a673",
    width: "100%",
    height: "100vh",
  },
};

export default styles;
