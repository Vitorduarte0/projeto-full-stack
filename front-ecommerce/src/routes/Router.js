import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/signup" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )

}