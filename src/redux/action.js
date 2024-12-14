import axios from "axios";

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
      const res = await axios.post(`${baseUrl}/${route}`, formData);

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
      const res = await axios.get(`${baseUrl}${route}`);

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
    }, 2000);
  }
};

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
