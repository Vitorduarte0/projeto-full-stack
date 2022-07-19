import { TextField, Button, CircularProgress } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import UseForm from "../../hooks/useForm"
import { login } from "../../services/users"
import { InputContainer } from "./styled"

export const LoginForm = () => {
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()

    const { form, onChange, clear } = UseForm({
        email: "",
        password: ""
    })
    const onSubimitForm = (event) => {
        event.preventDefault()
        login(form, navigate, setLoading)

    }
    return (

        <InputContainer>
            <form onSubmit={onSubimitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin="normal"
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"password"}
                    variant={"outlined"}
                    fullWidth
                    margin="normal"
                    required
                    type={"password"}
                />
                <Button type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    {isLoading ? <CircularProgress color="inherit" size={24} /> : <>Login</>}
                </Button>
            </form>
        </InputContainer>
    )

}