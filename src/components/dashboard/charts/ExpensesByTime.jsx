import * as React from 'react'
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';
import {
  Box,
} from "@chakra-ui/core";

import ChartLabel from './ChartLabel';

const Wrapper = styled(Box)`
   margin: 10px;
   border: 1px solid #6928852b;
`;

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]



const yaxis = {
  title: {
    text: 'Despesas',
  }
}

const xaxis = {
  categories: months,
  title: {
    text: 'Mês',
    fontSize: 16
  }
}

const options = {
  chart: {
    shadow: {
      enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: ' . ',
    align: 'left',
    color: '#fff',
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      // colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 4
  },
  xaxis,
  yaxis,
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
}

const data = [
  {
    name: "2019",
    data: [28, 29, 33, 36, 32, 32, 33, 28, 29, 33, 36, 32]
  },
  {
    name: "2018",
    data: [32, 33, 28, 29, 33, 36, 32, 28, 29, 33, 36, 32, ]
  },
  {
    name: "2017",
    data: [29, 33, 36, 32, 28, 29, 32, 33, 28, 33, 36, 32, ]
  },
];



const ExpensesByTime = () => {
  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
      <ChartLabel>
        Histórico de despesas
      </ChartLabel>
      <ApexCharts series={data} options={options}/>
    </Wrapper>
  )
}

export default ExpensesByTime;
