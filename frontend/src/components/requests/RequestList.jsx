import * as React from 'react';
import styled from 'styled-components';
import { Accordion } from '@chakra-ui/core'

import RequestCard from './RequestCard';
import ChartLabel from '../dashboard/charts/ChartLabel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const items = [
  {
    from: 'Aracaju(SE)',
    to: 'São Paulo(SP)',
    price: 953.99,
    estimatedPrice: 1013,
    date: new Date(),
    employee: 'Gabriel Santos Souza',
    rating: 8
  },
  {
    from: 'Aracaju(SE)',
    to: 'São Paulo(SP)',
    price: 953.99,
    estimatedPrice: 1050,
    date: new Date(),
    employee: 'Gabriel Santos Souza',
    rating: 3
  }
]

const RequestList = () => {
  const [isOpen, setIsOpen] = React.useState(null);

  return (
    <Wrapper>
      <ChartLabel style={{ margin: '10px auto 10px 10px'}}>
        Solicitações de Viagem
      </ChartLabel>
      <Accordion>
        {items.map((item, index) => {
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
