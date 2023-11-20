import styled from "styled-components";
import { useState } from 'react';

import Form from "../../general/form/FormStyles";
import BtnSmall from "../../general/buttons/BtnSmall";
import BtnBig from "../../general/buttons/BtnBig";
import InputBlock from "../../general/inputs/InputBlock";

import BuyFlow from "../modals/BuyFlow";

const BuyMarketForm = () => {

  let [step, setStep] = useState('confirm');
  const changeStep = (step) => () => {
    setStep(step);
  }

  let [isOpen, setIsOpen] = useState(false);
  const openModal = () => () =>  {
    setStep('confirm')
    setIsOpen(true)
  }

  const closeModal = () => () => {
    setIsOpen(false)
  }
  
  return (
    <Form.Root>
      <Form.Content>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <InputBlock
            label="USDT"
            text="57,982.00"
            rightLabel="Balance"
            rightText="57,982.00"
            showRightText
          />
          <InputBlock
            label="BTC"
            text="2.00"
            rightLabel="Price (USDT)"
            rightText="29,432.00"
            showRightText
          />
        </Form.Group>
        <Form.Details.Root>
          <Form.Details.Rec label="Est. Transaction Fee">$0.1 (0.0034 ETH)</Form.Details.Rec>
          <Form.Details.Rec label="Slippage limit">
            <Form.Details.RightButtons>
              <BtnSmall
                text="No"
                disabled
              />
              <BtnSmall
                text="1%"
                type="bordered"
              />
              <BtnSmall
                text="2.5%"
                type="bordered"
              />
              <BtnSmall
                text="5%"
                type="bordered"
              />
            </Form.Details.RightButtons>
          </Form.Details.Rec>
        </Form.Details.Root>
      </Form.Content>
      <BtnBig
        text="Buy BTC"
        type="primary"
        onClick={openModal()}
      />
      <BuyFlow isOpen={isOpen} step={step} closeModal={closeModal()} changeStep={changeStep} />
    </Form.Root>
  );
};

export default BuyMarketForm;
