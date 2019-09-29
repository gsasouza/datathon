import * as React from 'react';
import { Box } from '@chakra-ui/core';
import format from 'date-fns/format';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const Row = styled.div`
  display: flex;
`;

const CardWrapper = styled(Box)`
   margin: 10px;
   border: 1px solid #6928852b;
    width: 100%;
`;

const LabelWrapper = styled(Row)`
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
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
  
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.rating >= 5 ? '#ee2e24' : '#72c6a2'};   
  }
`;

const InProgressCard = ({ from, to, rating, isAccordionOpen, handleAccordion, employee, date, price, estimatedPrice }) => {

  return (
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
          <Label>
            <legend>Funcionário</legend>
            {employee}
          </Label>
          <Label rating={rating}>
            <legend> Expenses </legend>
            R$ {price}
          </Label>
          <Label rating={rating}>
            <legend>Verba utilizada</legend>
            <span style={{ width: '100%'}}>
              {rating * 10}%
            <FontAwesomeIcon size={'lg'} icon={rating < 5 ? faThumbsUp : faThumbsDown}/>
            </span>
          </Label>

        </LabelWrapper>

      </Row>
    </CardWrapper>
  )
}

export default InProgressCard;
