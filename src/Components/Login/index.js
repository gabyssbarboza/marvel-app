import React from 'react';
import logo from '../../assets/images/logoMarvel.png';
import {LoginContainer, LoginWrapper, LoginPassword, LoginForm, LoginLogo, LoginTitle, LoginSubtitle, LoginButton, LoginLinks, LoginInput} from './LoginStyles';


const Login  = ({title, subtitle, button}) => {

    const item = window.localStorage.getItem('isUserLogged');
    if(item != null){
        window.location.href = '/personagens'
    }

    function handleSaveLogin(e){
        e.preventDefault();
        if(e.target.checked){
           localStorage.setItem('isUserLogged', true);    
        }
    }

  

    return (
        <LoginContainer>
            <LoginWrapper>
            <LoginLogo src={logo} />
            <LoginForm>
            <LoginTitle>
                {title}
            </LoginTitle> 
            <LoginSubtitle>
                {subtitle}
            </LoginSubtitle>
                <LoginInput  placeholder="Usuário" type="text" />
                <LoginInput  placeholder="Senha" type="password" />
                <LoginPassword>
                    <label htmlFor="">
                        Salvar Login
                    <LoginInput type="checkbox" onChange={handleSaveLogin} />
                    </label>
                    <LoginLinks href="/">
                        Esqueci a senha
                    </LoginLinks>
                </LoginPassword>
                <LoginButton type="button" >
                    <a href="/personagens">
                    {button}
                    </a>
                </LoginButton>
                <LoginLinks href="/">
                    Ainda não tem o login? <span>Cadastre-se</span>
                </LoginLinks>
            </LoginForm>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default Login