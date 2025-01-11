import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { logoutRequest } from "../../redux/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDataRequest); // Redux user state
  const token = Cookies.get("token"); // Token check from cookies
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutRequest()); // Call the logout action
    setAnchorEl(null); // Close the dropdown
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#3f2a62", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyWebsite
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {token ? (
                <>
                  <MenuItem onClick={handleMenuClose}>
                    <Typography>{user?.email}</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Login
                  </Link>
                </MenuItem>
              )}
              <MenuItem onClick={handleMenuClose}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  to="/services"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Services
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/services">
              Services
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>

            {token ? (
              <>
                <Button color="inherit" onClick={handleMenuClick}>
                  {user?.email}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
