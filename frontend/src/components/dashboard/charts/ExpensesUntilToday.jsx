import * as React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import {Box} from '@chakra-ui/core'

import ChartLabel from './ChartLabel';

const options =  {
  plotOptions: {
    radialBar: {
      hollow: {
        size: '60%',
      },
      dataLabels:{
        value: {
          fontSize: '40px',
          formatter: v => `R$ ${v}K`,
          offsetY: -3,
        },
      }
    },
  },
  labels: ['']
}

const Wrapper = styled(Box)`
   margin: 10px;
   border: 1px solid #6928852b;
`;

const ExpensesUntilToday = () => {
  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
      <ChartLabel>
        Despesas totais até agora
      </ChartLabel>
      <ReactApexChart
        options={options}
        series={[70]}
        type="radialBar"
        height="350"
      />
    </Wrapper>
  )
}

export default ExpensesUntilToday;
