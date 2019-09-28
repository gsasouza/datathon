import * as React from 'react'
import styled from 'styled-components'
import {Box} from '@chakra-ui/core'
import ReactApexChart from 'react-apexcharts'

import ChartLabel from './ChartLabel';
import {createFragmentContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const Wrapper = styled(Box)`
   margin: 10px;
   width: 100%;
   border: 1px solid #6928852b;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`

const options = {
  chart: {
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: [2019, 2018, 2017],
    title: {
      text: 'Ano'
    },
    labels: {
      formatter: value => `${value}K`
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
  tooltip: {
    y: {
      formatter: value => `${value}K`
    }
  },


  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetX: 40
  }
};
const series =  [
  {
    name: 'Econômica',
    data: [22, 43, 21]
  },
  {
    name: 'Executiva',
    data: [13, 43, 32]
  },
  {
    name: 'Primeira Classe',
    data: [ 15, 11, 20]
  }
];

const UserClass = ({ analytics }) => {
  console.log(analytics);
  return (
    <Row>
      <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
        <ChartLabel>
          Gastos por tipo de passagem
        </ChartLabel>
        <ReactApexChart options={options} series={series} type="bar" height={300}/>
      </Wrapper>
    </Row>
  )
}

export default createFragmentContainer(UserClass, {
  analytics: graphql`
    fragment UserClass_analytics on Analytics {
      expensesByFlightType {
        year
        expenses
      }
    }
  `,
});

