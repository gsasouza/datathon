import * as React from 'react'
import { Box } from '@chakra-ui/core';
import styled from 'styled-components';

const Wrapper = styled(Box)`
  border: 1px solid black;
  border-radius: 5px;
`;

const Card = ({ children }) => {

  return (
    <Wrapper p={5}>
      {children}

    </Wrapper>
  )
}

export default Card;
