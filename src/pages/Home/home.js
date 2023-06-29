import { styled } from "styled-components";

export const CssHomeMain = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;

    margin-top: 20px;
    p{
        color: var(--grey-1);
    }
    ul{
        background: var(--grey-3);

        border-radius: 4px;
        padding: 5% 2%;

    }
    .tecnologias{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .sumSymbol{
        border-radius: 4px ;

        background: var(--grey-3);
        width: 30px;
        height:30px;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container1{
        display: flex;
        flex-direction: column;
        gap:10px;
        margin-bottom: 7px;
    }
    .container2{
        padding-top: 20px;
        border-top: 1px solid var(--grey-2);
    }
    @media (min-width:800px) {
        .container1{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height:60px;
        }
    }
`