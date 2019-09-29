import * as React from 'react';
import styled from 'styled-components'
import { Box, Tooltip } from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import ChartLabel from './ChartLabel';
import {createFragmentContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const Wrapper = styled(Box)`
  margin: 10px;
  border: 1px solid #6928852b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  font-size: 54px;
  margin-left: 50px;
  margin-right: 25px;
`;

const RelativeValue = styled.span`
  align-self: flex-end;
  margin: 0 30px auto 30px;
  color: ${props => props.value <= 0 ? `#72c6a2` : '#ee2e24'};
  font-size: 25px;
  > svg {
    margin: 0 5px;
  }
`;

const ExpensesLastMonth = ({ analytics }) => {

  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
      <ChartLabel style={{ marginBottom: 'auto'}}>
        Depesas no último mês
      </ChartLabel>
      <Label>
        R$ {analytics.lastMonthExpenses.value}K
      </Label>
      <Tooltip label={'Diferença em relação ao mês anterior'}>
        <RelativeValue value={analytics.lastMonthExpenses.relativeDiff}>
          {analytics.lastMonthExpenses.relativeDiff}%
          <FontAwesomeIcon icon={analytics.lastMonthExpenses.relativeDiff > 0 ? faArrowUp : faArrowDown }/>
        </RelativeValue>
      </Tooltip>
    </Wrapper>
  )
}

export default createFragmentContainer(ExpensesLastMonth, {
  analytics: graphql`
    fragment ExpensesLastMonth_analytics on Analytics {
      lastMonthExpenses {
        value
        relativeDiff
      }
    }
  `,
});
