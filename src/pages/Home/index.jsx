import logo from "../../assets/kenzie hub logo.png"
import { Link } from "react-router-dom"
import { ExitBtn } from "../../styles/styles"
import { CssHomeMain } from "./home"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Card } from "../../components/Card"
import { TechContext } from "../../providers/TechContext"
import { AddModal, UpdateDeleteModal } from "../../components/Modal/Modal"

export const Home = () => {
    const { user, userLogout, techs } = useContext(UserContext);

    const { setAddModalState } = useContext(TechContext);

    return (
        <>
            <AddModal/>
            <UpdateDeleteModal/>
            <span>
                <img src={ logo } alt="" />
                <Link to="/">
                    <ExitBtn onClick={()=> userLogout()}>Sair</ExitBtn>
                </Link>
            </span>
            <CssHomeMain>
                <div className="container1">
                    <h2>Olá, {user?.name}</h2>
                    <p>{user?.course_module}</p>
                </div>
                <div className="container2">
                    <div className="tecnologias">
                        <h1>Tecnologias</h1>
                        <div className="sumSymbol">
                            <h3 className="sumSymbol" onClick={()=> setAddModalState(true)}>+</h3>
                        </div>
                    </div>
                    <ul>      
                        {techs.map((tech) =>
                            <Card
                            key={tech.id}
                            tech={tech}
                            />
                        )}
                    </ul>
                </div>
            </CssHomeMain>
        </>
    )
}