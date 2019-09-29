import * as React from 'react';
import {AccordionHeader, AccordionItem, AccordionPanel, Box, Button} from '@chakra-ui/core';
import format from 'date-fns/format';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import  { ExpensesByTime } from '../../dashboard/charts/ExpensesByTime'
import ChartLabel from '../../dashboard/charts/ChartLabel'

const Row = styled.div`
  display: flex;
`;

const CardWrapper = styled(AccordionHeader)`
   margin: 10px;
   border: 1px solid #6928852b;
`;

const ApprovalSection = styled.div`
  display: flex;
  flex-direction: column; 
  button {
    background: transparent;
    margin: 5px;
  }
`;

const LabelWrapper = styled(Row)`
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 100%;
`;

const SuggestionCard = styled(Box)`
  margin: 10px;
  border: 1px solid #6928852b;
  background-color: #72c6a2;
  color: #fff;
`;

const SuggestionCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 18px;
  }
  button {
    background-color: #fff;
    color: #72c6a2;
  }
`;

const Label = styled.fieldset`
  font-size: 18px;
  margin: 0 10px 5px 10px;
  padding: 12px 20px 15px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #6928852b;
  color:  #692885;
  border-radius: 5px;
  background-color: #fafafa;
  legend {
    font-weight: bold;
    font-size: 14px;
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 50px;
    color: ${props => props.rating <= 5 ? '#ee2e24' : '#72c6a2'};

    > svg {
      font-size: 4rem;
    }
  }
`;

const Column = styled(Row)`
  width: 100%;
  flex-direction: column;
`

const RequestCard = ({ from, to, rating, isAccordionOpen, handleAccordion, employee, date, price, estimatedPrice }) => {

  const data = {
    yearlyExpenses: [{
      year: '2019',
      expenses: [
        { value: 10 },
        { value: 10 },
        { value: 10 },
        { value: 10 },
        { value: 10 },
        { value: 10 },
        { value: 10 },
        { value: 10 },
        { value: 10 },
        { value: 10 },
        { value: 10 },
        { value: 10 },
      ]
    }]
  }
  return (
    <AccordionItem>
      <CardWrapper p={4} as={Box} shadow="sm" borderWidth="1px" rounded="lg">
        <Row>
          <LabelWrapper isOpen={isAccordionOpen}>
            <Label>
              <legend>Origem</legend>
              {from}
            </Label>
            <Label>
              <legend>Destino</legend>
              {to}
            </Label>

            <Label>
              <legend>Data</legend>
              {format(date, 'dd/MM/uuuu')}
            </Label>

            <Label rating={rating}>
              <legend>Despesa fixa</legend>
              R$ {price}
            </Label>
            <Label rating={rating}>
              <legend> Despesa estimada</legend>
              R$ {estimatedPrice}
            </Label>
            <Label>
              <legend>Funcionário</legend>
              {employee}
            </Label>

          </LabelWrapper>
          <Label rating={rating} style={{ marginLeft: 'auto', height: '90px', minWidth: '220px' }}>
            <legend>Avaliação da solicitação</legend>
            <span style={{ width: '100%'}}>
                {rating * 10}%
              <FontAwesomeIcon size={'lg'} icon={rating > 5 ? faThumbsUp : faThumbsDown}/>
              </span>
          </Label>

          <ApprovalSection>
            <Button rightIcon={'check'} variant="outline" size="sm">
              Aprovar
            </Button>
            <Button rightIcon={'close'} variant="outline" size="sm">
              Recusar
            </Button>
            <Button onClick={handleAccordion} rightIcon={isAccordionOpen ? 'view-off' : 'view'} variant="outline" size="sm">
              {isAccordionOpen ? 'Fechar Detalhes' : 'Mostar Detalhes'}
            </Button>
          </ApprovalSection>
        </Row>
        <AccordionPanel isOpen={isAccordionOpen} defaultIsOpen={false}>
          <Column>
            <ExpensesByTime label={'Histórico de despesas do funcionário'} height={300} analytics={data}/>
            <SuggestionCard  p={4} as={Box} shadow="sm" borderWidth="1px" rounded="lg">
              <ChartLabel>
                Sugestões
              </ChartLabel>
              <SuggestionCardContent>
                <span>
                  Provável economia se a data da viagem for alterada para <strong> 30/09/2019 </strong>
                </span>
                <Button rightIcon={'repeat'} variant="outline" size="sm">
                  Alterar data
                </Button>
              </SuggestionCardContent>
            </SuggestionCard>
          </Column>
        </AccordionPanel>
      </CardWrapper>

    </AccordionItem>
  )
}

export default RequestCard;
