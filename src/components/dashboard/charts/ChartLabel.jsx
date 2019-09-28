import * as React from 'react';
import styled from 'styled-components'

const Label = styled.span`
  font-size: 22px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChartLabel = ({ children, ...props }) => {
  return (
    <Row {...props}>
      <Label>
        {children}
      </Label>
    </Row>
  )
}

export default ChartLabel;
