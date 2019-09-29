import * as React from 'react';
import styled from 'styled-components';
import { Accordion } from '@chakra-ui/core'

import RequestCard from './RequestCard';
import ChartLabel from '../../dashboard/charts/ChartLabel';
import data from '../data/travels';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const RequestList = () => {
  const [isOpen, setIsOpen] = React.useState(null);

  return (
    <Wrapper>
      <ChartLabel style={{ margin: '10px auto 10px 10px'}}>
        Solicitações de Viagens
      </ChartLabel>
      <Accordion>
        {data.map((item, index) => {
          return (
            <RequestCard
              key={index}
              {...item}
              isAccordionOpen={isOpen === index}
              handleAccordion={() => setIsOpen(index === isOpen ? null : index)}
            />
          )
        })}
      </Accordion>
    </Wrapper>
  )
}

export default RequestList
