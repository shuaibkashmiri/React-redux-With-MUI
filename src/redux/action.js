import axios from "axios";
import Cookies from "js-cookie";

const apiCall = (request, success, error, reset, route, formData) => async (
  action
) => {
  try {
    action({
      type: request,
    });

    // method post
    if (formData) {
      const baseUrl = "http://localhost:8080";
      const res = await axios.post(`${baseUrl}/${route}`, formData, {
        withCredentials: true,
      });

      if (res.status === 200) {
        action({
          type: success,
          payload: res.data.payload,
          message: res.data.message, // Updated message to message
        });
      } else {
        action({
          type: error,
          message: res.data.message, // Updated message to message
        });
      }

      // method get
    } else {
      const baseUrl = "http://localhost:8080";
      const token = Cookies.get("token");
      const res = await axios.get(`${baseUrl}/${route}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      if (res.status === 200) {
        action({
          type: success,
          payload: res.data.payload,
          message: res.data.message, // Updated message to message
        });
      } else {
        action({
          type: error,
          message: res.data.message, // Updated message to message
        });
      }
    }
  } catch (err) {
    console.log(err);
    // Updated to properly reference the error object (err) instead of res
    action({
      type: error,
      message: err.response?.data?.message || "An error occurred", // Fallback error message
    });
  } finally {
    setTimeout(() => {
      action({
        type: reset,
        message: null, // Updated message to message
      });
    }, 4000);
  }
};

export const getAllBlogs = () =>
  apiCall(
    "blogDataRequest",
    "blogDataSuccess",
    "blogDataError",
    "removeError",
    "api/blog/allblogs"
  );

export const registerRequest = (formData) =>
  apiCall(
    "registerRequest",
    "registerSuccess",
    "registerError",
    "registerReset",
    "api/user/register",
    formData
  );
export const loginRequest = (formData) =>
  apiCall(
    "loginRequest",
    "loginSuccess",
    "loginError",
    "loginReset",
    "api/user/login",
    formData
  );

export const userDataRequest = () =>
  apiCall(
    "userDataRequest",
    "userDataSuccess",
    "userDataError",
    "userDataReset",
    "api/user/userdata"
  );

// Separate function to handle login success and user data fetch
export const handleLoginSuccess = () => async (dispatch) => {
  try {
    // First dispatch login success
    await dispatch(loginRequest());
    // Then fetch user data
    await dispatch(userDataRequest());
  } catch (error) {
    console.error("Login error:", error);
  }
};

// logout Request
export const logoutRequest = () => (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" }); // Indicate that logout is being processed

    // Remove token from cookies
    Cookies.remove("token");
    localStorage.removeItem("token");

    // Reset user data or any other sensitive state
    dispatch({ type: "logoutSuccess" });
  } catch (error) {
    console.error("Logout Error:", error);
    dispatch({
      type: "logoutError",
      message: "Failed to logout. Try again.",
    });
  } finally {
    // Optionally remove any messages after a timeout
    setTimeout(() => {
      dispatch({ type: "removeMessage" });
    }, 4000);
  }
};
