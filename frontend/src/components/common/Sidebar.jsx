import * as React from 'react'
import { Box } from "@chakra-ui/core";
import styled from 'styled-components';
import { faChartBar } from '@fortawesome/free-solid-svg-icons'

import SidebarItem from './SidebarItem';

const Wrapper = styled(Box)`
  min-height: calc(100vh - 142px);  
  border-right: 1px solid #6928852b;
  align-items: center;
`

const Sidebar = () => {
  return (
    <Wrapper bg="#fafafa" w="14em" p="4" color="#692885">
      <SidebarItem icon={faChartBar}>
        Dashboard
      </SidebarItem>
    </Wrapper>
  )
}

export default Sidebar
