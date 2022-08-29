import "./login.style.css"
import Button from "../../components/Button/Button.jsx";
import {useState} from "react";
import Input from "../../components/Form/Input/Input.jsx";
import {useNavigate, useRoutes} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const handleInput = (name, value) => {
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log("Entrando", loginForm)
        navigate('/home')
    }


    return(
        <div className="wrapper">
            <form className="container" onSubmit={handleSubmit}>
                Bem vindo ao LearnAut

                <Input
                    name="username"
                    onChange={handleInput}
                    placeholder="Digite aqui o usuário"
                    label="Usuário"
                    type="text"
                />

                <Input
                    name="password"
                    onChange={handleInput}
                    placeholder="Digite aqui a senha"
                    label="Senha"
                    type="password"
                />
                <Button backgroundColor="#000" type="submit">
                    Entrar
                </Button>
            </form>
        </div>
    )
}

export default Login