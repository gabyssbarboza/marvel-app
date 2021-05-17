import styled from 'styled-components';
import { RiStarSFill } from 'react-icons/ri';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export const ModalContainer = styled.div`
      position: fixed;
      z-index: 999;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0) 59%, rgba(64,14,14, 0.1) 89%);
      display: grid;
      top:0;
      align-items: center;
      left:  ${({ setModal }) => (setModal ? '0' : '-100%')};
      transition: 0.8s ease-in-out;
      opacity:  ${({ setModal }) => (setModal ? '1' : '0')};

      

`;


export const ModalContent = styled.div`
              background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(64,14,14,1) 89%);
              padding: 20px;
              border-radius: 30px;
              height: 70%;
              width: 55%; 
              display: flex;

       @media (max-width: 996px) {
              flex-direction: column;
              width: 95%; 
              height: auto;
              margin: 0 auto;
              overflow: auto;
              }


`;


export const ModalImg = styled.img`
        @media (max-width: 996px) {
              margin: 0 auto;
              width: 50%; 
       }

`;



export const ModalInfos = styled.div`
       padding: 2rem;

`;
export const ModalTitle = styled.h1`
       font-size: 1.875rem;
       margin-bottom: 25px;
       line-height: 1.3;
       color: #fff;
       font-family: AxiformaBold;
`;
export const ModalDescription = styled.p`
        font-size: 0.75rem;
        color: #fff;
        font-family: AxiformaLigth;
        margin-bottom: 25px;
`;

export const ModalAvaliable = styled.div`
        font-size: 0.75rem;
        color: #fff;
        font-family: AxiformaLigth;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

`;

export const ModalCritica = styled.h3`
       font-size: 1.625rem;
       color: #fff;
       font-family: AxiformaLigth;
       display: flex;
       flex-direction: column;

       div{
           display: flex;
           flex-direction: row;
           justify-content: space-between;
       }

`;

export const ModalIcon = styled.img`
        cursor: pointer;
`;



export const ModalStars = styled(RiStarSFill)`
       width: 2rem;
       height: 2rem;
       color: #FFB300;

`;

export const ModalClose = styled(IoMdCloseCircleOutline)`
       width: 2rem;
       height: 2rem;
       cursor: pointer;

`;
