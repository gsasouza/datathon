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

const labels =  [
  {
    name: 'Econômica',
  },
  {
    name: 'Executiva',
  },
  {
    name: 'Primeira Classe',
  }
];

const UserClass = ({ analytics }) => {
  const series = labels.map(({ name }, index) => ({
    name,
    data: analytics.expensesByFlightType.map(({ expenses }) => expenses[index])
  }))

  const categories = analytics.expensesByFlightType.map(({ year }) => year);

  const options = {
    colors: ['#72c6a2', '#692885', '#ee2e24'],
    chart: {
      stacked: true,
      toolbar: {
        show: false
      },
      formatter: value => `R$ ${value}K`
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'],
        fontSize: 16
      },
      formatter: function(val, opt) {
        return `R$ ${val}K`
      },

    },
    stroke: {
      width: 1,
      colors: ['#fff'],
      formatter: value => `R$ ${value}K`,
      style: {
        fontSize: 16,
      }
    },
    xaxis: {
      categories,
      title: {
        text: 'Ano',
        style: {
          fontSize: 16,
        }
      },
      labels: {
        formatter: value => `R$ ${value}K`,
        style: {
          fontSize: 16,
        }
      }
    },
    yaxis: {
      title: {
        text: undefined,
        style: {
          fontSize: 16,
        }
      },
      labels: {
        style: {
          fontSize: 16,
        }
      }
    },
    tooltip: {
      y: {
        formatter: value => `R$ ${value}K`
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetX: 40,
      fontSize: 16

    },
  };
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

