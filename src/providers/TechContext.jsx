import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

import { useContext } from "react"
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [ addModalState, setAddModalState ] = useState(false);
    const [ uDModalState, setUDModalState ] = useState(false);
    const [ cardId, setCardId ] = useState("");
    const [ cardName, setCardName ] = useState("");
    const token = localStorage.getItem("@TOKEN");

    const { user, setTechs, techs } = useContext(UserContext);

    const currentPath = window.location.pathname;

    const navigate = useNavigate();

    const addTech = async(formData) => {
        try{
            const body={
                title: formData.title,
                status: formData.status
            };
            const headers={
                Authorization: `Bearer ${token}`
            }
            const {data}=await api.post("/users/techs", body, {headers})
            setTechs([...techs, data])
            setAddModalState(false);
        } catch(error){
            console.log(error)
        }
    };

    const updateTech = async (formData, id) => {
        try{
            const body={
                status: formData.status
            };
            const headers={
                Authorization: `Bearer ${token}`
            }
            const {data} = await api.put(`/users/techs/${id}`, body, {headers});
            setTechs(techs.map((item)=>{
                if(item.id==data.id){
                    return data
                } return item
            }))
            setUDModalState(false)
        } catch(error) {
            console.log(error)
        }
    };

    const deleteTech = async (id) => {
        try {
            const headers={
                Authorization: `Bearer ${token}`
            }
            await api.delete(`/users/techs/${id}`, {headers});
            setTechs(techs.filter((item)=>item.id!==id))
            setUDModalState(false)
        } catch(error) {
            console.log(error)
        }
    };

    return (
        <TechContext.Provider value={{ addTech, updateTech, deleteTech, addModalState, setAddModalState, uDModalState, setUDModalState, cardId, setCardId, cardName, setCardName }}>
            { children }
        </TechContext.Provider>
    );
}