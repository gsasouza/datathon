import * as React from 'react';
import {AccordionHeader, AccordionItem, AccordionPanel, Box, Button} from '@chakra-ui/core'
import format from "date-fns/format"
import styled, {css} from 'styled-components'

import  { ExpensesByTime } from '../dashboard/charts/ExpensesByTime'

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
  margin-left: auto;
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
  ${props => !props.isOpen && css`max-width: 700px`};
`;

const Label = styled.fieldset`
  font-size: 18px;
  margin: 0 10px 5px 10px;
  padding: 12px 20px 0 20px;
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
`;

const Column = styled(Row)`
  width: 100%;
  flex-direction: column;

`


const RequestCard = ({ from, to, isAccordionOpen, handleAccordion, employee, date, price }) => {

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
              <legend>Funcionário</legend>
              {employee}
            </Label>
            <Label>
              <legend>Data</legend>
              {format(date, 'dd/MM/uuuu')}
            </Label>
            <Label>
              <legend>Preço</legend>
              R$ {price}
            </Label>

          </LabelWrapper>
          <ApprovalSection>
            <Button rightIcon={'check'} variant="outline" size="sm">
              Aprovar
            </Button>
            <Button rightIcon={'close'} variant="outline" size="sm">
              Recusar
            </Button>
            <Button onClick={handleAccordion} rightIcon={'view'} variant="outline" size="sm">
              {isAccordionOpen ? 'Fechar Detalhes' : 'Mostar Detalhes'}
            </Button>
          </ApprovalSection>
        </Row>
        <AccordionPanel isOpen={isAccordionOpen} defaultIsOpen={false}>
          <Column>
            <ExpensesByTime height={300} analytics={data}/>
          </Column>
        </AccordionPanel>
      </CardWrapper>

    </AccordionItem>
  )
}

export default RequestCard;
