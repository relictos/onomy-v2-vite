import styled from "styled-components";
import Form from "../../general/form/FormStyles";
import BtnSmall from "../../general/buttons/BtnSmall";
import BtnBig from "../../general/buttons/BtnBig";
import InputBlock from "../../general/inputs/InputBlock";

const SellLimitForm = () => {
  return (
    <Form.Root>
      <Form.Content>
        <InputBlock
          label="Price, USDT"
          text="28,991.00"
        >
          <BtnSmall text="Market" />
        </InputBlock>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <InputBlock
            label="BTC"
            text="2.00"
            rightLabel="Balance"
            rightText="3.22013"
            showRightText
          />
          <InputBlock
            label="USDT"
            text="57,982.00"
            rightLabel="Price (BTC)"
            rightText="0.00003"
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
        text="Sell BTC"
        type="primary"
      />
    </Form.Root>
  );
};

export default SellLimitForm;
