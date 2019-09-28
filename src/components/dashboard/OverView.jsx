import * as React from 'react';
import styled from 'styled-components';

import ExpensesByTime from './charts/ExpensesByTime';
import UserClass from './charts/UserClass';
import InsightCard from './charts/InsigthCard';
import ExpensesUntilToday from './charts/ExpensesUntilToday';
import ExpensesLastMonth from './charts/ExpensesLastMonth';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InsightsWrapper = styled.div`
  width: 35%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '65%'};
`;

const Row = styled.div`
  display: flex;
`;


const OverView = () => {
  return (
    <Column width={'100%'}>
      <Row>
        <ExpensesUntilToday/>
        <ExpensesLastMonth/>
      </Row>
      <Wrapper>
      <Column>
        <ExpensesByTime />
        <UserClass/>
      </Column>
      <InsightsWrapper>
        <InsightCard>
          NUMBERS
        </InsightCard>
      </InsightsWrapper>
      </Wrapper>
    </Column>
  )
}

export default OverView;
