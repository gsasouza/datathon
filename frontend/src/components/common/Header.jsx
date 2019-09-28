import * as React from 'react'
import { Box } from "@chakra-ui/core";
import styled from 'styled-components';

const Image = styled.img`
  height: 40px;
  margin: 0 20px;
  filter: brightness(10);
`

const Header = () => {
  return (
    <Box bg="#692885" p={3} color="white">
      <Image src="http://www.useargo.com/wp-content/uploads/2019/05/logo_useargo.png" alt="argo-logo" />
    </Box>
  )
}

export default Header
