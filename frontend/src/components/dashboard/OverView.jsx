import * as React from 'react';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import ExpensesByTime from './charts/ExpensesByTime';
import UserClass from './charts/UserClass';
import InsightCard from './charts/InsigthCard';
import ExpensesUntilToday from './charts/ExpensesUntilToday';
import ExpensesLastMonth from './charts/ExpensesLastMonth';
import GaugeChart from './charts/GaugeChart';
import ExpenseEconomyBar from './charts/ExpenseEconomyBar';
import { createQueryRenderer } from '../../relay/createQueryRenderer';

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
  justify-content: center;
  flex-wrap: wrap;
`;


const OverView = ({ query: { analytics } }) => {
  return (
    <Column width={'100%'}>
      <Row>
        <ExpensesUntilToday analytics={analytics}/>
        <ExpensesLastMonth analytics={analytics}/>
        <GaugeChart />
        <ExpenseEconomyBar />
      </Row>
      <Wrapper>
      <Column>
        <ExpensesByTime analytics={analytics} height={400}/>
        <UserClass analytics={analytics}/>
      </Column>
      <InsightsWrapper>
        <InsightCard />
      </InsightsWrapper>
      </Wrapper>
    </Column>
  )
}

const FragmentContainer = createFragmentContainer(OverView, {
  query: graphql`
    fragment OverView_query on Query {
      analytics {
        ...ExpensesByTime_analytics
        ...ExpensesLastMonth_analytics
        ...ExpensesUntilToday_analytics
        ...UserClass_analytics
      }      
    }
  `,
});

export default createQueryRenderer(FragmentContainer, {
  query: graphql`
    query OverViewQuery {
      ...OverView_query
    }
  `,
});
