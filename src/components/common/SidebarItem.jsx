import * as React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    color: black;
  }
`;

const Label = styled.span`
  font-size: 18px;
  margin: 0 10px;
`;

const SidebarItem = ({
  children,
  icon
}) => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={icon}/>
      <Label>
        {children}
      </Label>
    </Wrapper>
  )
}

export default SidebarItem;
