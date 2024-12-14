import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  msg: null, // Replaced message with msg
  users: [], // For user data state
};

// General User Data Reducer
export const getDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("userDataRequest", (state) => {
      state.loading = true;
    })
    .addCase("userDataSuccess", (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase("userDataError", (state, action) => {
      state.loading = false;
      state.msg = action.msg || "Server Error"; // Replaced message with msg
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
      state.msg = action.msg || "Registration Successful"; // Replaced message with msg
    })
    .addCase("registerError", (state, action) => {
      state.loading = false;
      state.msg = action.msg || "Registration Failed"; // Replaced message with msg
    })
    .addCase("removeError", (state) => {
      state.msg = null; // Replaced message with msg
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
      state.msg = action.msg || "Login Successful"; // Replaced message with msg
    })
    .addCase("loginError", (state, action) => {
      state.loading = false;
      state.msg = action.msg || "Login Failed"; // Replaced message with msg
    })
    .addCase("removeError", (state) => {
      state.msg = null; // Replaced message with msg
    });
});
