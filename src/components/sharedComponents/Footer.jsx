import React from "react";
import { Container, Grid, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2e1a47",
        color: "#fff",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          {/* Footer Text */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" align="center" gutterBottom>
              MyWebsite
            </Typography>
            <Typography variant="body2" align="center">
              © 2024 MyWebsite. All rights reserved.
            </Typography>
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Follow Us
            </Typography>
            <div style={{ textAlign: "center" }}>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Quick Links
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Link
                href="/"
                color="inherit"
                style={{ display: "block", marginBottom: "8px" }}
              >
                Home
              </Link>
              <Link
                href="/about"
                color="inherit"
                style={{ display: "block", marginBottom: "8px" }}
              >
                About
              </Link>
              <Link
                href="/services"
                color="inherit"
                style={{ display: "block", marginBottom: "8px" }}
              >
                Services
              </Link>
              <Link
                href="/contact"
                color="inherit"
                style={{ display: "block", marginBottom: "8px" }}
              >
                Contact
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
