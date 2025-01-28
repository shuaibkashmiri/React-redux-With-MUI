import { configureStore } from "@reduxjs/toolkit";
import {
  createBlogReducer,
  getAllBlogs,
  getDataReducer,
  loginRequest,
  logoutReducer,
  registerRequest,
} from "./reducers";

const store = configureStore({
  reducer: {
    userDataRequest: getDataReducer,
    registerRequest: registerRequest,
    loginRequest: loginRequest,
    logoutRequest: logoutReducer,
    blogsRequest: getAllBlogs,
    createBlogRequest: createBlogReducer,
  },
});

export default store;
