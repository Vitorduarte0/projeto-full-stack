
import { Button } from "@mui/material"
import { goToSignUpPage } from "../../routes/coordinator"
import { LoginForm } from "./LoginForm"
import { ScreenContainer, SignUpButtonContainer, LogoImage } from "./styled"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import { useNavigate } from "react-router-dom"
import logoEcomercce from "../../assets/logoEcomercce.jpg"
export const LoginPage = () => {
    useUnProtectedPage()
    const navigate = useNavigate()

    return (

        <ScreenContainer>
            <LogoImage src={logoEcomercce} alt={"Logo"} />
            <LoginForm />
            <SignUpButtonContainer >
                <Button
                    onClick={() => goToSignUpPage(navigate)}
                    fullWidth
                    color="primary"
                >
                    Não possui conta? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )

}