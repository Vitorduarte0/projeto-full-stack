import axios from "axios";

import { BASE_URL } from "../constants/url";
import { goToHomePage } from "../routes/coordinator";

export const login = (body, navigate, setLoading) => {

    setLoading(true)
    axios.post(`${BASE_URL}/users/login`, body, navigate)
        .then((response) => {

            localStorage.setItem("token", response.data.token)
            setLoading(false)
            // clear();
            goToHomePage(navigate)
        })
        .catch((error) => {
            alert(error)
            setLoading(false)
        })
}