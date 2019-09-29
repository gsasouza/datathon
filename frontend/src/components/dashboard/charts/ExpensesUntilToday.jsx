import * as React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import {Box} from '@chakra-ui/core'

import ChartLabel from './ChartLabel';
import {createFragmentContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'



const Wrapper = styled(Box)`
   margin: 10px;
   border: 1px solid #6928852b;
`;

const ExpensesUntilToday = ({ analytics }) => {

  const options =  {
    stroke: {
      lineCap: 'round'
    },
    fill: {
      colors: ['#692885']
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        dataLabels:{
          value: {
            fontSize: '40px',
            formatter: () => `R$ ${analytics.totalExpenses}K`,
            offsetY: -3,
          },
        }
      },
    },
    labels: ['']
  }

  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
      <ChartLabel>
        Despesas totais até agora
      </ChartLabel>
      <ReactApexChart
        colors={['#692885']}
        options={options}
        series={[75]}
        type="radialBar"
        height="350"
      />
    </Wrapper>
  )
}

export default createFragmentContainer(ExpensesUntilToday, {
  analytics: graphql`
    fragment ExpensesUntilToday_analytics on Analytics {
      totalExpenses
    }
  `,
});
