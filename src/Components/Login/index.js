import React from 'react';
import logo from '../../assets/images/logoMarvel.png';
import {LoginContainer, LoginWrapper, LoginPassword, LoginForm, LoginLogo, LoginTitle, LoginSubtitle, LoginButton, LoginLinks, LoginInput} from './LoginStyles';
import Header from './../Header'


const Login  = ({title, subtitle, button}) => {
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
                <LoginInput placeholder="Usuário" type="text" />
                <LoginInput placeholder="Senha" type="password" />
                <LoginPassword>
                    <label htmlFor="">
                        Salvar Login
                    <LoginInput type="checkbox" />
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