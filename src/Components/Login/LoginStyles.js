import styled from 'styled-components';



export const LoginContainer = styled.section`
       height: 100vh; 
       @media (max-width: 996px) {
        height: 100%;
    }

`;

export const LoginWrapper = styled.div`
        width: 50%;
        background-color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        @media (max-width: 996px) {
            width: 100%;
    }
`;

export const LoginForm = styled.form`
        display: flex;
        width: 60%;
        flex-direction: column;
        margin-top: 57px;
        font-family: AxiformaLigth;
        @media (max-width: 996px) {
            width: 95%;
            margin-top: 37px;

    }


`;



export const LoginLogo = styled.img`

    @media (max-width: 720px) {
                margin-top: 1rem;
        }
`;

export const LoginPassword = styled.div`

    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    

        label{
            font-family: AxiformaMedium;
            display: flex;
            flex-direction: row-reverse;
            color: #84848D;
            align-items: baseline;
        }
`;

export const LoginTitle = styled.h1`
       font-size: 1.875rem;
       color: #FF0000;
       font-family: AxiformaBold;
       margin-bottom: 16px;
     
`;


export const LoginSubtitle = styled.p`
       font-size: 1.25rem;
       color: #84848D;
       margin-bottom: 21px;
`;


export const LoginInput = styled.input`
       height: 73px;
       border-radius: 33px;  
       font-family: AxiformaLigth;  
       border: none;
       margin-bottom: 18px;
       padding: 1rem;
       display: block;

       &:not([type='text'], [type='password']){
           background-color: pink;
           border: 1px solid red;
           height:  auto;
           margin-right: 5px;
           border: 1px solid #ff0000;
       }

       &::placeholder{
        color: #D1D1D6;
        font-size: 1.375rem;
       }
`;


export const LoginButton = styled.button`
    background-color: #FF0000;
    color: #FFFFFF;
    font-size: 1.75rem;
    border-radius: 33px;
    font-weight: 500;
    height: 65px;
    border: none;
    margin-bottom: 30px;
    font-family: AxiformaMedium;

    a{
        text-decoration: none;

        &:visited{
            color: #FFFFFF;
        }
    }
`;



export const LoginLinks = styled.a`
        font-size: 0.9375rem;
        font-weight: 500;
        text-decoration: none;
        color: #84848D;
        font-family: AxiformaMedium;
        text-align: center;

        span{
            color: #FF0000;
        }

`;
