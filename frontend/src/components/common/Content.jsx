import * as React from 'react'
import styled from 'styled-components';

import Header from './Header'
import Sidebar from './Sidebar'

const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  height: 100%;
  flex-direction: column;
`

const Column = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Content = ({ children }) => {
  return (
    <Wrapper>
      <Header/>
      <Column>
        <Sidebar />
        { children }
      </Column>
    </Wrapper>
  )
}

export default Content
