import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToHomePage } from "../routes/coordinator"
const useUnProtectedPage = () => {
    const navegando = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            goToHomePage(navegando)
        }
    }, [navegando])
}
export default useUnProtectedPage