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

export const ExpensesByTime = ({ analytics, label = 'Histórico de despesas', ...props }) => {
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
        {label}
      </ChartLabel>
      <ApexCharts series={series} options={options} {...props}/>
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
