import React from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/sharedComponents/Navbar"; // Assuming Navbar is in the same directory
import Footer from "./components/sharedComponents/Footer"; // Assuming Footer is in the same directory
import "./styles/global.css";
import Register from "./components/userComponents/Register";
import Login from "./components/userComponents/Login";
import Home from "./components/sharedComponents/Home";
import WriteBlog from "./components/userComponents/WriteBlog";
const App = () => {
  // Creating a violet-based dark theme
  const darkVioletTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#2e1a47", // Dark violet background
        paper: "#3f2a62", // Slightly lighter violet for paper elements
      },
      primary: {
        main: "#7a4ef7", // Violet main color
      },
      text: {
        primary: "#fff", // White text for high contrast
        secondary: "#ddd", // Light gray text for secondary content
      },
    },
  });

  return (
    <ThemeProvider theme={darkVioletTheme}>
      <Toaster
        position="top-right" // You can change the position
        reverseOrder={false} // Keeps toasts in order
      />
      <Router>
        <Navbar />
        <div style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addblog" element={<WriteBlog />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
