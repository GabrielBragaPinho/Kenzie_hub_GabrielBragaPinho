import { styled } from "styled-components";

export const CssForm = styled.form`
    height:275px;
    width:270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: var(--grey-3);
`
export const CssContainer = styled.div`
    height:400px;
    width:300px;
    background:var(--grey-3);
    border-radius: 4px;
    padding: 5%;
    margin-bottom: 20%;
    padding-bottom: 20px;
`
export const CssBtnGrey = styled.button`
    background: var(--grey-1);
   
    width:270px;
    border-bottom: 30px;
`
export const GreyText = styled.p`
    padding-left: 20%;
    font-size: 12px;
    color:grey;
    margin-top: 15px;
    margin-bottom: 15px;
`
export const ExitBtn = styled.button`
    width:55px;
    height:33px;
    background: var(--grey-3);
`


export const CssRegisterForm = styled.form`
    height:750px;
    width:300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: var(--grey-3);
    border-radius: 4px;
    padding: 5%;
    margin-bottom: 20%;
    padding-bottom: 20px;
`

export const CssHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height:70px;
`
export const CssError = styled.p`
color:red;
font-size: 10px;
line-height: 15px;
`

export const CssLogo = styled.img`
    padding-left: 33%;
`