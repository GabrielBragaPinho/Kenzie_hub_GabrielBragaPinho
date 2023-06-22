import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --negative: #E83F5B;
        --success: #3FE864;
        --font-family: 'Inter', sans-serif;
    }
    h1 {
        font-weight: 700;
        font-size: 18.273px;
        line-height: 28px;
        color: var(--grey-0);   
    }
    h2 {
        font-weight: 600;
        font-size: 16.2426px;
        line-height: 26px;
        color: var(--grey-0);
    }
    h3 {
        font-weight: 700;
        font-size: 14.2123px;
        line-height: 24px;
        color: var(--grey-0);
        margin-top: 15px;
        margin-bottom: 15px;
        align-self: center;
    }
    p {
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        color: var(--grey-0);
    }

    body{
        font-family:var(--font-family);

        background: var(--grey-4);
        
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        padding-top: 10%;
        padding-bottom: 10%;
    }
    button{
        color:white;
        font-weight: 700;
        height:38px;
        border-radius: 4px;
        background: var(--color-primary);
    }
    input{
        border-radius: 4px;

        height:38px;
        background: var(--grey-2);
        padding-left: 10px;
    }
    span{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--grey-2);
        height:70px;
        width:320px;
    }
    select{
        border-radius: 4px;
        color:var(--grey-1);
        height:38px;
        background: var(--grey-2);
        padding-left: 10px;
    }
`