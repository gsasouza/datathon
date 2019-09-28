import * as React from 'react';
import styled from 'styled-components'
import { Box, Tooltip } from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import ChartLabel from './ChartLabel';

const Wrapper = styled(Box)`
  margin: 10px;
  border: 1px solid #6928852b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  font-size: 60px;
`;

const RelativeValue = styled.span`
  align-self: flex-end;
  margin: 0 30px auto 30px;
  color: ${props => props.value <= 0 ? `#72c6a2` : 'red'};
  font-size: 25px;
  > svg {
    margin 0 5px;
  }
`;

const ExpensesLastMonth = () => {

  const value = 10
  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg" w={300}>
      <ChartLabel style={{ marginBottom: 'auto'}}>
        Depesas no último mês
      </ChartLabel>
      <Label>
        R$ 120K
      </Label>
      <Tooltip label={'Diferença em relação ao mês anterior'}>
        <RelativeValue value={value}>
          10%
          <FontAwesomeIcon icon={value > 0 ? faArrowUp : faArrowDown }/>
        </RelativeValue>
      </Tooltip>
    </Wrapper>
  )
}

export default ExpensesLastMonth;
