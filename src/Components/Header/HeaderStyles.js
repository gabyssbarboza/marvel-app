import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';

export const HeaderContainer = styled.header`
`;

export const HeaderNav = styled.nav`
       height: 114px;
       display: grid;
        grid-template-columns: 1fr 2fr;
       position: relative;
       align-items: center;
       z-index: 100;
       background: #000;
       box-shadow: 0px 3px 6px rgba(255, 0, 0, 0.53);

       @media screen and (max-width: 768px){
      display: none;
    }
        
`;

export const HeaderLogo = styled.img`
 display: block;
 width: 144px;
 margin-left: 1rem;
  @media screen and (max-width: 768px){
      display: none;
    }
`;

export const HeaderList = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

  
`;
export const HeaderListItem = styled.li`
        display:flex;
        align-items: center;   
`;
export const HeaderLink = styled(Link)`
        font-family: AxiformaBold;
        font-size: 1.875rem;
        text-decoration: none;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.2);

        &:active{
            color: #fff;
        }

     @media screen and (max-width: 1280px){
      font-size: 1.375rem;
    }

`;

export const HeaderUser = styled.img``;


export const HeaderLogoMobile = styled.img`
        display: none;
  @media screen and (max-width: 768px){
      display: block;
    }

`;

export const MenuBars = styled(FaBars)`
        display: none; 
        @media screen and (max-width: 768px){
        display: block;
        color: #fff;
        height:40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        }

`;