import logo from "../../assets/kenzie hub logo.png"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formScheme } from "./formScheme"
import { Link } from "react-router-dom"
import { CssHeader, CssRegisterForm, ExitBtn, CssError, GreyText } from "../../styles/styles"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const Register = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: zodResolver(formScheme)
    });

    const { userRegister } = useContext(UserContext);
    
    const submit = async(formData) => {
        await userRegister(formData);
        reset();
    }

    return (
        <div>
            <CssHeader>   
                <img src={ logo } alt="" />
                <Link to="/">
                    <ExitBtn >Voltar</ExitBtn>
                </Link>
            </CssHeader>

            <CssRegisterForm onSubmit={handleSubmit(submit)}>
                <h3>Crie sua conta</h3>
                <GreyText>Rápido e grátis, vamos nessa</GreyText>

                <p>Nome</p>
                    <input type="text" placeholder="Digite seu nome aqui" {...register("name")}/>
                    <CssError> {errors.name?.message}</CssError>

                <p>E-mail</p>
                    <input type="text" placeholder="Digite seu e-mail aqui" {...register("email")}/>
                    <CssError> {errors.email?.message}</CssError>

                <p>Senha</p>
                    <input type="text" placeholder="Digite sua senha aqui" {...register("password")}/>
                    <CssError>{errors.password?.message}</CssError>

                <p>Comfirmar Senha</p>
                    <input type="text" placeholder="Digite novamente sua senha" />

                <p>Bio</p>
                    <input type="text" placeholder="Fale sobre voçê" {...register("bio")}/>
                    <CssError>{errors.bio?.message}</CssError>
                    
                <p>Contato</p>
                    <input type="text" placeholder="Opção de contato" {...register("contact")}/>
                    <CssError>{errors.contact?.message}</CssError>
                    
                <p>Selecionar módulo</p>
                    <select name="select" id="" {...register("course_module")}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terçeiro módulo</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                    </select>
                    <CssError>{errors.course_module?.message}</CssError>
                    
                <button type="submit">Cadastrar</button>
            </CssRegisterForm>
        </div>
    )
}