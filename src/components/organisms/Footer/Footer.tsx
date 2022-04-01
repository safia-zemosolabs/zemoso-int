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
      <div className="container" data-testid="Footer">
        <div style={styles.footerContent} data-testid="Footer Content">
          <div>
            <div style={{ marginBottom: "24px" }} data-testid="Footer Logo">
              <Logo />
            </div>

            <Typography
              variant="subtitle1"
              component="h3"
              style={{ color: theme.palette.secondary.main }}
              data-testid="Footer Caption1"
            >
              Big ideas in small packages Start learnign now
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              component="h4"
              style={styles.footerHead}
              data-testid="Footer Editorial"
            >
              Editorial
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
              data-testid="Footer Book lists"
            >
              Book lists
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
              data-testid="Footer Nonfiction"
            >
              What is Nonfiction?
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
              data-testid="Footer next read"
            >
              What to read next?
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
              data-testid="Footer Benefits of reading"
            >
              Benefits of reading
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              component="h4"
              style={styles.footerHead}
              data-testid="Footer Useful links"
            >
              Useful links
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
              data-testid="Footer Blinkist business"
            >
              Blinkist business
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
              data-testid="Footer Pricing"
            >
              Pricing
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              component="h4"
              style={styles.footerHead}
              data-testid="Footer Company"
            >
              Company
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
              data-testid="Footer About"
            >
              About
            </Typography>
            <Typography
              variant="body2"
              component="h5"
              style={styles.footerLink}
              data-testid="Footer Careers"
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
            data-testid="Footer caption2"
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
