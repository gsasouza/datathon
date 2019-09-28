import * as React from 'react';
import styled from 'styled-components'
import {Box} from '@chakra-ui/core'

const Wrapper = styled(Box)`
   margin: 10px;
   width: 90%;
   border: 1px solid #6928852b;
`;

const InsightCard  = ({ children }) => {
  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
      { children }
    </Wrapper>
  )
}

export default InsightCard;
