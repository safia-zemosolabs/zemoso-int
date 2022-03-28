import { Typography } from "@mui/material";
import React from "react";
import theme from "../../../themes";
import Logo from "../../atoms/Logo";

const styles = {
  footer: {
    background: theme.palette.backgroundcolor.main,
    padding: theme.spacing(12),
  },
  footerContent: {
    display: "grid",
    gridTemplateColumns: "40% auto auto auto",
    gap: theme.spacing(8),
  },
  footerLink: {
    color: theme.palette.textcolor.light,
    marginBottom: theme.spacing(3),
  },
  footerHead: {
    color: theme.palette.textcolor.main,
    marginBottom: theme.spacing(3),
  },
  copyright: {
    color: theme.palette.textcolor.light,
    marginTop: theme.spacing(10),
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.footerContent}>
          <div>
            <div style={{ marginBottom: "24px" }}>
              <Logo />
            </div>

            <Typography
              variant="subtitle1"
              component="h3"
              style={{ color: theme.palette.secondary.main }}
            >
              Big ideas in small packages Start learnign now
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              component="h4"
              style={styles.footerHead}
            >
              Editorial
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
            >
              Book lists
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
            >
              What is Nonfiction?
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
            >
              What to read next?
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
            >
              Benefits of reading
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              component="h4"
              style={styles.footerHead}
            >
              Useful links
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
            >
              Blinkist business
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
            >
              Pricing
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              component="h4"
              style={styles.footerHead}
            >
              Company
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
            >
              About
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
            >
              Careers
            </Typography>
          </div>
        </div>
        <div>
          <Typography
            variant="caption1"
            component="div"
            style={styles.copyright}
          >
            © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
            Policies
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
