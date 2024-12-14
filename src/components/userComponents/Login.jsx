import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
  Paper,
} from "@mui/material";
import { loginRequest } from "../../redux/action"; // Assuming there's a loginRequest action
import { createTheme, ThemeProvider } from "@mui/material/styles";
import toast from "react-hot-toast";

// Custom Dark Theme with Violet
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7a4ef7", // Violet color for primary button and accents
    },
    background: {
      default: "#1b0d34", // Darker background
      paper: "#2c1a45", // Slightly lighter container background
    },
    text: {
      primary: "#fff", // White text color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const dispatch = useDispatch();
  const message = useSelector((state) => state.loginRequest.message); // Use message instead of message

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.password) formErrors.password = "Password is required.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      dispatch(loginRequest(formData)); // Dispatch login action
      if (message === "User Logged In Successfully") {
        toast.success(message); // Using message for success
      } else {
        toast.error(message); // Using message for error
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Paper
          elevation={12}
          sx={{
            padding: 4,
            backgroundColor: "background.paper",
            borderRadius: 4,
            marginTop: 6,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Login to Your Account
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Please enter your credentials to continue.
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ width: "100%", mt: 2 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 3,
                  mb: 2,
                  padding: "12px",
                  borderRadius: 2,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
