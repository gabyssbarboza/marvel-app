
import styled from 'styled-components/macro';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';



export const SlideSection = styled.section`
    height: calc(95vh - 114px);
    margin-top: 2.1875rem;
`

export const SlideWrapper = styled.div`
        position: relative;
        display: flex!important;
        align-items: center;
        justify-content: center;
        

`

export const SlideInfos= styled.div`
        padding: 0.5rem;
        bottom:  0;
        text-align: center;
        position: absolute;
        width: 300px;
        border-radius: 30px;
        overflow: hidden;
        background-color: rgb(255,0,0);
        background: linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(64,14,14,0.29175420168067223) 61%);

`

export const SlideImg = styled.img`
        margin: 0 auto;
        border-radius: 30px;
        overflow: hidden;
`;


export const SlideTitle = styled.h3`
        font-size: 1.25rem;
        text-align: center;
        font-weight:  bold;
        color: #fff;
        font-family: AxiformaBold;

`;


export const SlideSubtitle = styled.p`
        font-family: AxiformaLigth;
        font-size: 0.75rem;
        color: #fff;
`;

export const SlideLink = styled.a`
       
        color: #fff;
        font-family: AxiformaLigth;
        font-size: 1.25rem;
        width: 100%;
        cursor: pointer;
`;


export const SlideArrowLeft = styled(FaArrowLeft)`
        color: #FF0000;
        width: 2rem;
        height: 2rem;

        &:hover{
         color: #FF2000;
        
        }

`;
export const SlideArrowRight = styled(FaArrowRight)`
        color: #FF0000;
        width: 2rem;
        height: 2rem;

        &:hover{
         color: #FF2000;
        
        }

`;