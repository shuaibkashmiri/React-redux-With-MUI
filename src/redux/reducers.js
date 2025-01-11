import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  message: null, // Replaced message with message
  user: {}, // For user data state
};

// General User Data Reducer
export const getDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("userDataRequest", (state) => {
      state.loading = true;
    })
    .addCase("userDataSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("userDataError", (state, action) => {
      state.loading = false;
      state.message = action.message || "Server Error"; // Replaced message with message
    });
});

// Register Reducer
export const registerRequest = createReducer(initialState, (builder) => {
  builder
    .addCase("registerRequest", (state) => {
      state.loading = true;
    })
    .addCase("registerSuccess", (state, action) => {
      state.loading = false;
      state.message = action.message || "Registration Successful"; // Replaced message with message
    })
    .addCase("registerError", (state, action) => {
      state.loading = false;
      state.message = action.message || "Registration Failed"; // Replaced message with message
    })
    .addCase("removeError", (state) => {
      state.message = null; // Replaced message with message
    });
});

// Login Reducer
export const loginRequest = createReducer(initialState, (builder) => {
  builder
    .addCase("loginRequest", (state) => {
      state.loading = true;
    })
    .addCase("loginSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.message = action.message || "Login Successful"; // Replaced message with message
    })
    .addCase("loginError", (state, action) => {
      state.loading = false;
      state.message = action.message || "Login Failed"; // Replaced message with message
    })
    .addCase("removeError", (state) => {
      state.message = null; // Replaced message with message
    });
});

// Logout Reducer

export const logoutReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("logoutRequest", (state) => {
      state.message = "Processing logout...";
    })
    .addCase("logoutSuccess", (state) => {
      state.message = "Logout successful";
    })
    .addCase("logoutError", (state, action) => {
      state.message = action.message || "Logout failed";
    })
    .addCase("removeMessage", (state) => {
      state.message = null;
    });
});
