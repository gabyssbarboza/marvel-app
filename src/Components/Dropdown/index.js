import React from 'react';
import {DropdownContainer, Icon, CloseIcon, DropdownLink, DropdownMenu, DropdownWrapper} from './DropdownStyle';

const Dropdown = ({ isOpen, toggle }) => {
    return (
      <DropdownContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <DropdownWrapper>
          <DropdownMenu>
            <DropdownLink  onClick={toggle} to="/personagens">Personagens</DropdownLink>
            <DropdownLink  onClick={toggle} to="/filmes">Filmes</DropdownLink>
            <DropdownLink  onClick={toggle} to="/hq">HQ</DropdownLink>    
            <DropdownLink  onClick={toggle} to="/login"> 
                Sair
            </DropdownLink>
          </DropdownMenu>
        </DropdownWrapper>
      </DropdownContainer>
    )
  }
  

export default Dropdown
