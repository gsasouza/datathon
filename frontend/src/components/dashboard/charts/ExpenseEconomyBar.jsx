import * as React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import {Box} from '@chakra-ui/core';

import ChartLabel from './ChartLabel';

const Wrapper = styled(Box)`
   margin: 10px;
   border: 1px solid #6928852b;
   justify-content: center;
`;

const options =  {
  colors: ['#692885', '#72c6a2', '#ee2e24'],
  chart: {
    toolbar: {
      show: false
    }
  },
  legend: {
    fontSize: 14
  },
  plotOptions: {
    bar: {
      horizontal: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  yaxis: {
    labels: {
      formatter: value => `R$ ${value}K`,
      style: {
        fontSize: 16,
      }
    }
  },
  xaxis: {
    title: {
      text: '',
      style: {
        fontSize: 16,
      }
    },
    labels: {
      style: {
        fontSize: 16,
      }
    },
    categories: [' '],
  }
}

const series = [
  {
    name: 'Despesa Estimada',
    data: [400]
  },
  {
    name: 'Despesa Efetiva',
    data: [320]
  }
];

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const DeltaLabel = styled.span`
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`

const ExpenseEconomyBarChart = () => {
  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
      <ChartLabel>
        Economia efetiva
      </ChartLabel>
      <Row>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height="350"
        />
        <Wrapper style={{ background: '#72c6a2' }} p={4} m={5} shadow="sm" w={120} h={60} borderWidth="1px" rounded="lg">
          <DeltaLabel>
            Economia de R$ 80K
          </DeltaLabel>
        </Wrapper>
      </Row>
    </Wrapper>
  )
}

export default ExpenseEconomyBarChart
