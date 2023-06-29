import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { addModalFormScheme } from "./modalFormScheme"
import { CssError } from "../../styles/styles"

import { AddModalCss, UDModalCss } from "./modalCss"

export const AddModal = () => {
    const { addTech, addModalState, setAddModalState } = useContext(TechContext);

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: zodResolver(addModalFormScheme)
    });

    const submit = async(formData)=> {
        await addTech(formData);
    };
    
    if(addModalState) {
        return  <AddModalCss>
                    <div className="modal">
                        <div className="header">    
                            <h3>Cadastrar Tecnologia</h3>
                            <p onClick={()=>setAddModalState(false)}>X</p>
                        </div>
                        <form onSubmit={handleSubmit(submit)}>
                            <p>Nome</p>
                                <input type="text" placeholder="Nome" {...register("title")}/>
                                <CssError> {errors.title?.message}</CssError>
                            <p>Selecionar Status</p>
                                <select name="select" id="" {...register("status")}>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                                <CssError> {errors.status?.message}</CssError>
                            <button type="submit">Cadastrar Tecnologia</button>
                        </form>
                    </div>
                    <div className="backdrop" onClick={()=>setAddModalState(false)}></div>
                </AddModalCss>
    }
    return null
}


export const UpdateDeleteModal = () => {
    const { updateTech, deleteTech, uDModalState, setUDModalState, cardId, cardName } = useContext(TechContext);

    const { register, handleSubmit } = useForm();

    const updateSubmit = async(formData)=> {
        await updateTech(formData, cardId);
    }

    const deleteSubmit = async(id)=> {
        await deleteTech(id);
    }

    if(uDModalState) {
        return  <UDModalCss>
                    <div className="modal">
                        <div className="header">    
                            <h3>Tecnologia Detalhes</h3>
                            <h3 onClick={()=>setUDModalState(false)}>X</h3>
                        </div>
                        <form onSubmit={handleSubmit(updateSubmit)}>
                            <p>Nome</p>
                            <p>{cardName}</p>
                            <p>Selecionar Status</p>
                                <select name="select" id="" {...register("status")}>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>  
                            <div className="buttonsDiv">
                                <button className="btn1" type="submit">Salvar Alterações</button>
                                <button className="btn2" type="button" onClick={()=>deleteSubmit(cardId)}>Excluir</button>
                            </div>
                        </form>
                    </div>
                    <div className="backdrop" onClick={()=>setUDModalState(false)}></div>
                </UDModalCss>
    }
    return null
}

