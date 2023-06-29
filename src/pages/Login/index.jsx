import logo from "../../assets/kenzie hub logo.png"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginScheme } from "./loginScheme"
import { Link } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"

import { CssBtnGrey, CssContainer, CssError, CssForm, CssLogo, GreyText } from "../../styles/styles"


export const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginScheme)
    })

    const { userLogin } = useContext(UserContext);

    const submit = async(formData) => {
        await userLogin(formData);
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