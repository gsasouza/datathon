import * as React from 'react'
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';
import {
  Box,
} from "@chakra-ui/core";
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import ChartLabel from './ChartLabel';

const Wrapper = styled(Box)`
   margin: 10px;
   border: 1px solid #6928852b;
`;

const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez'
]



const yaxis = {
  title: {
    text: 'Despesas',
    style: {
      fontSize: 16
    }
  },
  labels: {
    style: {
      fontSize: 16,
    }
  }
}

const xaxis = {
  categories: months,
  title: {
    text: 'Mês',
    style: {
      fontSize: 16
    }
  },
  labels: {
    style: {
      fontSize: 16,
    }
  },
}

const options = {
  colors: ['#72c6a2', '#692885', '#ee2e24'],
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
    style: {
      fontSize: 16
    }
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
    offsetX: -5,
    fontSize: 16,
  }
}

const ExpensesByTime = ({ analytics }) => {
  const series = analytics.yearlyExpenses.map(({
    year,
    expenses
  }) => ({
    name: year.toString(),
    data: expenses.map(expense => expense.value)
  }))
  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
      <ChartLabel>
        Histórico de despesas
      </ChartLabel>
      <ApexCharts series={series} options={options}/>
    </Wrapper>
  )
}

export default  createFragmentContainer(ExpensesByTime, {
  analytics: graphql`
    fragment ExpensesByTime_analytics on Analytics {
      yearlyExpenses {
        year
        expenses {
          value
          month
        }
      }
    }
  `,
});
