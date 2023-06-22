import logo from "../../assets/kenzie hub logo.png"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginScheme } from "./loginScheme"
import { Link } from "react-router-dom"

import { CssBtnGrey, CssContainer, CssError, CssForm, CssLogo, GreyText } from "../../styles/styles"


export const Login = ({user, setUser}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginScheme)
    })

    const navigate = useNavigate();

    const loginAq = async(formData) => {
        try{
            const {data} = await api.post("/sessions", formData)
            
            setUser(data.user)

            localStorage.setItem("@USERID", data.user.id)
            localStorage.setItem("@TOKEN", data.token)
            
            navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }

    const submit = async(formData) => {
        await loginAq(formData);
    }

    return (
        <>
            <CssLogo src={ logo } alt="" />
            <CssContainer>
                <CssForm onSubmit={handleSubmit(submit)}>
                <h3>Login</h3>
                    <p>E-mail</p>
                        <input type="text" placeholder="Digite seu e-mail aqui" {...register("email")}/>
                        <CssError>{errors.email?.message}</CssError>
                        
                    <p>Senha</p>
                        <input type="text" placeholder="Digite sua senha aqui" {...register("password")}/>
                        <CssError>{errors.password?.message}</CssError>
                    
                    <button  type="submit">Entrar</button>
                </CssForm>
                <GreyText>Ainda não tem uma conta?</GreyText>
                <Link to="/register">
                    <CssBtnGrey >Cadastre-se</CssBtnGrey>

                </Link>
            </CssContainer>
        </>
    )
}