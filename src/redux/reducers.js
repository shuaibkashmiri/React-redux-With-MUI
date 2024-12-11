import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const getDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("userDataRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("userDataSuccess", (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase("userDataError", (state, action) => {
      state.message = "Server Error";
    });
});

export const registerRequest = createReducer(initialState, (builder) => {
  builder
    .addCase("registerRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("registerSuccess", (state, action) => {
      state.loading = false;
      state.message = action.message;
    })
    .addCase("registerError", (state, action) => {
      state.message = "Server Error";
    })
    .addCase("removeError", (state, action) => {
      state.message = null;
    });
});
