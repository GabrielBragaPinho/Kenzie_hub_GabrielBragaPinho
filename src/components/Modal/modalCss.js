import { styled } from "styled-components";

export const AddModalCss = styled.div`
    .modal{
        height:300px;
        width:275px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        
        position:fixed;
        z-index:2;
        left:50%;
        transform: translate(-50%, 50%);
        background: var(--grey-3);
        overflow:hidden;
    
        border-radius: 4px;
    }
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background:var(--grey-2);
        padding-left: 4%;
        padding-right: 6%;
    }
    form{
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding:5%;
    }
    button{
        background: var(--color-primary);
    }
    input{
        color:white;
    }
    .backdrop{
        height:100vh;
        width:100vw;

        background: black;
        opacity: .3;

        position:fixed;
        z-index:0;
        left:0px;
    }
`

export const UDModalCss = styled.div`
    .modal{
        height:300px;
        width:275px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        
        position:fixed;
        z-index:2;
        left:50%;
        transform: translate(-50%, 50%);
        background: var(--grey-3);
        overflow:hidden;
    
        border-radius: 4px;
    }
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background:var(--grey-2);
        padding-left: 4%;
        padding-right: 6%;
    }
    form{
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding:5%;
    }
    input{
        color:white;
    }
    .backdrop{
        height:100vh;
        width:100vw;

        background: black;
        opacity: .3;

        position:fixed;
        z-index:0;
        left:0px;
    }
    .buttonsDiv{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .btn1{
        width:60%;
        background: var(--color-primary);
    }
    .btn2{
        color: white;
        width:35%;
        background: var(--grey-1);
    }
`