import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from "styled-components";



export const DropdownContainer = styled.div`
      position: fixed;
      z-index: 999;
      width: 100%;
      height: 100%;
      background:  #000;
      display: none;
      align-items: center;
      top:  ${({ isOpen }) => (isOpen ? '0' : '-100%')};
      left: 0;
      transition: all  0.3s ease-in-out;
      opacity:  ${({ isOpen }) => (isOpen ? '1' : '0')};

    @media screen and (max-width: 1180px){
        display: grid;
    }
`


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
      color: #ff0000;
`


export const DropdownWrapper = styled.div`
`


export const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align:center;
    margin-bottom:  4rem;
    @media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
    }
`



export const DropdownLink = styled(Link)`
       display: flex;
       color: #fff; 
       align-items: center;
       justify-content: center;
       font-size: 1.5rem;
       text-decoration: none;
       cursor: pointer;
       font-family: AxiformaBold;
       transition: 0.2s ease-in-out;
       &:hover{
          color: #000d1a;
       }
`

