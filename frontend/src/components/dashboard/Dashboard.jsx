import * as React from 'react';
import styled from 'styled-components';
import { Heading } from '@chakra-ui/core'

import TabContent from './TabContent';


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1em 2em;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Heading>
        Cake
      </Heading>
      <Content>
        <TabContent/>
      </Content>
    </Wrapper>
  )
}

export default Dashboard;
