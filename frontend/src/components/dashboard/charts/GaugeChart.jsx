import * as React from 'react';
import ReactGaugeChart from 'react-gauge-chart'
import styled from 'styled-components'
import { Box } from '@chakra-ui/core'

import ChartLabel from './ChartLabel';

const Wrapper = styled(Box)`
  margin: 10px;
  border: 1px solid #6928852b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text {
    display: none;
  }
  > div:last-child {
    margin-bottom: auto;
  }
`;

const getPercentColor = (value) => {
  if (value < 0.33) return '#ee2e24';
  if (value < 0.66) return '#692885';
  return '#72c6a2';
}

const Percent = styled.span`
  margin-bottom: auto;
  font-size: 22px;
  color: ${props => getPercentColor(props.value)}
`

const GaugeChart = () => {
  const percent = 0.63;
  return (
    <Wrapper p={4} shadow="sm" borderWidth="1px" rounded="lg">
      <ChartLabel style={{ marginBottom: 'auto' }}>
        Eficiência das despesas
      </ChartLabel>
      <ReactGaugeChart
        marginInPercent={0.03}
        needleColor={getPercentColor(percent)}
        colors={['#ee2e24', '#692885', '#72c6a2']}
        percent={1 - percent}
        id={'teste'}
      />
      <Percent value={1 - percent}>
        {(1 - percent) * 100}%
      </Percent>
    </Wrapper>
  )
}

export default GaugeChart;
