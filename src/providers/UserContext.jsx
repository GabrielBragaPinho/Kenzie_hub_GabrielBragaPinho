import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ techs, setTechs]= useState([]);

    const currentPath = window.location.pathname;

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");

        const loadUser = async () => {
            try {
                setLoading(true);
                const {data} = await api.get(`/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data);
                setTechs(data.techs);
                navigate(currentPath);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        if(token) {
            loadUser();
        }
    }, []);

    const navigate = useNavigate();

    const userRegister = async(formData) => {
        try {
            const {data} = await api.post("/users", formData);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const userLogin = async(formData) => {
        try{
            setLoading(true);
            const {data} = await api.post("/sessions", formData);
            localStorage.setItem("@USERID", data.user.id);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
            // setTechs(data.techs)
            navigate("/home");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const userLogout = () => {
        localStorage.removeItem("@USERID");
        localStorage.removeItem("@TOKEN");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider value={{ user, userRegister, userLogin, userLogout, loading, techs, setTechs }}>
            { children }
        </UserContext.Provider>
    );
};