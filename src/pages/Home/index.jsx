import logo from "../../assets/kenzie hub logo.png"
import { Link } from "react-router-dom"
import { ExitBtn } from "../../styles/styles"
import { CssHomeMain } from "./home"

export const Home = ({user, setUser}) => {

    const logOut = () => {
        localStorage.removeItem("@USERID")
        localStorage.removeItem("@TOKEN")
        setUser("")
    }

    return (
        <>
            <span>
                <img src={ logo } alt="" />
                <Link to="/">
                    <ExitBtn onClick={()=>logOut()}>Sair</ExitBtn>
                </Link>
            </span>
            <CssHomeMain>
                <h2>Olá, {user.name}</h2>
                <p>{user.course_module}</p>
            </CssHomeMain>
        </>
    )
}