import * as React from 'react';
import styled from 'styled-components';
import { Box } from '@chakra-ui/core';

import ChartLabel from '../charts/ChartLabel';

const Wrapper = styled(Box)`
   margin: 10px;
   width: 90%;
   border: 1px solid #6928852b;
   display: flex;
   flex-direction: column;
`;

const CardItemWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #6928852b;
  margin: 5px 0;
  span:last-child {
    color: #692885;
    font-weight: bold;
    
  }
`

const CardItemLabel = styled.span`
  font-size: 22px;
`;

const CardItem = ({ children, value = 'R$ 3.000' }) => {
  return (
    <CardItemWrapper p={3} borderWidth="1px" rounded="lg">
      <CardItemLabel>
        {children}
      </CardItemLabel>
      <CardItemLabel>
        {value}
      </CardItemLabel>
    </CardItemWrapper>
  )
}

const users = [
  {
    label: 'User 1'
  },
  {
    label: 'User 2'
  },
  {
    label: 'User 3'
  },
  {
    label: 'User 4'
  },

]

const InsightCard  = ({ children }) => {
  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
      <ChartLabel style={{ marginBottom: 15 }}> Funcionários com as maiores despesas </ChartLabel>
      {users.map((user, index) => (
        <CardItem key={index}>
          {user.label}
        </CardItem>
      ))}
    </Wrapper>
  )
}

export default InsightCard;
