import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseProtectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null || token === "") {
      navigate("/");
    }
  }, [navigate]);
  return <></>;
};
export default UseProtectPage;
