import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { alerts } from "../constants/alerts";

const useRequestData = (initialState, url,version) => {
  const [data, setData] = useState(initialState);
  const [carregando, setCarregando] = useState(false);
  useEffect(() => {
    setCarregando(true);
    axios
      .get(`${BASE_URL}${url}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setCarregando(false);
        setData(response.data);
      })
      .catch((e) => {
        alerts("error", `${e.response.data.message}`);
      });
  }, [url,version]);

  return [data, setData, carregando];
};
export default useRequestData;
