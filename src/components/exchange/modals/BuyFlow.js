import styled from "styled-components";
import { useState } from 'react';

import ModalDialog, {DialogStep, DialogState} from "../../general/modals/ModalDialog";
import BtnBig from "../../general/buttons/BtnBig";
import Form from "../../general/form/FormStyles";
import BtnSmall from "../../general/buttons/BtnSmall";

const BuyFlow = ({
  isOpen = false,
  step,
  closeModal,
  changeStep
}) => {

  const titleByStep = {
    confirm: 'Confirm Transaction',
    inproccess: 'Transaction in proccess',
    success: 'Transaction succeed'
  }

  let [title, setTitle] = useState(titleByStep[step]);
  const changeTitle = (title) => () => {
    setTitle(title);
  }

  const closeDialog = () => () => {
    if(step == 'inproccess') {
      return;
    }
    closeModal();
    changeTitle(titleByStep['confirm'])()
  }

  const changeStepHandler = (newStep) => () => {
    changeTitle(titleByStep[newStep])()  
    return changeStep(newStep)();
  }

  return (
    <ModalDialog
      isOpen={isOpen}
      closeModal={closeDialog()}
      pretitle="Buy BTC"
      title={title}
    >
      <DialogStep active={step == 'confirm'}>
        <Form.Root>
          <Form.Content>
            <Form.Input
              label="You're buying"
              text="2.000"
              disabled
            >
              <BtnSmall text="BTC" disabled />
            </Form.Input>
            <Form.Input
              label="In exchange of"
              text="51,321.00"
              disabled
            >
              <BtnSmall text="USDT" disabled />
            </Form.Input>

            <Form.Details.Root>
              <Form.Details.Rec label="Order type">Market</Form.Details.Rec>
              <Form.Details.Rec label="Price">1 BTC = 25,653.00 USDT</Form.Details.Rec>
              <Form.Details.Rec label="Est. Transaction Fee">$0.1 (0.0034 ETH)</Form.Details.Rec>
            </Form.Details.Root>
            <Form.ButtonsGroup>
              <BtnBig
                type="primary"
                onClick={changeStepHandler("inproccess")}
                text="Confirm"
              />
              <BtnBig
                onClick={closeDialog()}
                text="Cancel"
              />
            </Form.ButtonsGroup>
          </Form.Content>
        </Form.Root>
      </DialogStep>
      <DialogStep active={(step == 'inproccess')}>
        <DialogState
          title="Please,wait"
          type="progress"
          text="You're buying 2.000 BTC in exchange of 51,321.00 USDT"
          onClick={changeStepHandler("success")}
        ></DialogState>
      </DialogStep>
      <DialogStep active={(step == 'success')}>
        <DialogState
          type="success"
          title="Transaction Completed!"
          text="You've bought 2.000 BTC in exchange of 51,321.00 USDT"
        >
          <BtnBig
              type="primary"
              onClick={closeDialog()}
              text="Done"
            />
        </DialogState>
      </DialogStep>
    </ModalDialog>
  );
};

export default BuyFlow;
