import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logoMarvel.png';
import logoMobile from '../../assets/images/logo-mobile.png';
import profile from '../../assets/images/profile-picture.png';
import {HeaderContainer, HeaderLink, HeaderList, HeaderListItem, HeaderLogo,  HeaderNav, HeaderUser, MenuBars, HeaderLogoMobile} from './HeaderStyles';
import Dropdown from '../Dropdown';


const Header  = () => {


    
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


    return (
        <>
        <Dropdown toggle={toggle} isOpen={isOpen} />
        <HeaderContainer>
            <HeaderLogoMobile src={logoMobile} />
            <MenuBars onClick={toggle}/>
            <HeaderNav >
                <HeaderLogo src={logo} />
                <HeaderList>
                    <HeaderListItem>
                        <HeaderLink to="/personagens">Personagens</HeaderLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderLink to="/filmes">Filmes</HeaderLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderLink to="/hq">HQ</HeaderLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderUser src={profile} />       
                        <HeaderLink to="/login">Sair</HeaderLink>
                    </HeaderListItem>
                </HeaderList>
            </HeaderNav>
        </HeaderContainer>
        </>
    )
}

export default Header
