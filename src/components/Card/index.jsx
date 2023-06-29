import { useContext } from "react"
import { TechCard } from "./Card"
import { TechContext } from "../../providers/TechContext";

export const Card = ({tech}) => {
    const { setUDModalState, setCardId, setCardName } = useContext(TechContext);
    
    return (
        <TechCard onClick={()=> { setUDModalState(true); setCardId(tech.id); setCardName(tech.title) }}>
            <h1>{tech.title}</h1>
            <p>{tech.status}</p>
        </TechCard>
    )
}