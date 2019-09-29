import * as React from 'react';
import styled from 'styled-components';

import InProgressCard from './InProgressCard';
import ChartLabel from '../../dashboard/charts/ChartLabel';
import data from '../data/travels';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InProgressList = () => {
  const [isOpen, setIsOpen] = React.useState(null);

  return (
    <Wrapper>
      <ChartLabel style={{ margin: '10px auto 10px 10px'}}>
        Viagens em Andamento
      </ChartLabel>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {data.map((item, index) => {
          return (
            <InProgressCard
              key={index}
              {...item}
              isAccordionOpen={isOpen === index}
              handleAccordion={() => setIsOpen(index === isOpen ? null : index)}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

export default InProgressList
