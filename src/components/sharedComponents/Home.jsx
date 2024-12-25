import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataRequest } from "../../redux/action";

const Home = () => {
  const userData = useSelector((state) => state.userDataRequest.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDataRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log("Current userData:", userData);
  }, [userData]);

  return (
    <>
      <h1>Home</h1>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </>
  );
};

export default Home;
