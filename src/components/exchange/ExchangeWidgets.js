import styled from "styled-components";
import { useState } from "react";

import BtnBig from "../general/buttons/BtnBig";
import ExchangeInfoWidget from "./widgets/ExchangeInfoWidget";
import ExchangePosBalanceWidget from "./widgets/ExchangePosBalanceWidget";
import BuySellMobile from "./modals/BuySellMobile";

const MobileBuysellBtns = styled.div`
  width: 351px;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);
  @media screen and (max-width: 959px) {
    display: flex;
    align-self: stretch;
    width: auto;
    >button{
      flex: 1 1 0%;
    }
  }
`;
const ExchangeInfoWidgets = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);
  >div{
    flex: 1 1 0%;
  }
  @media screen and (max-width: 959px) {
    align-self: stretch;
    width: auto;
    >div{
      flex: 1 1 0%;
      gap: 0px;
    }
  }
`;
const ExchangeWidgetsBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);
  @media screen and (max-width: 959px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: var(--gap-12px);
  }
`;

const ExchangeWidgets = () => {

  let [isOpen, setIsOpen] = useState(false);
  const openModal = () => () =>  {
    setIsOpen(true)
  }

  const closeModal = () => () => {
    setIsOpen(false)
  }

  return (
    <ExchangeWidgetsBlock>
      <MobileBuysellBtns>
        <BtnBig
          text="Buy"
          type="primary"
          onClick={openModal()}
        />
        <BtnBig
          text="Sell"
          type="primary"
          onClick={openModal()}
        />
        <BuySellMobile isOpen={isOpen} closeModal={closeModal()} />
      </MobileBuysellBtns>
      <ExchangeInfoWidgets>
        <ExchangeInfoWidget
          title="$120.3M"
          subtitle="Volume 24h"
        />
        <ExchangeInfoWidget
          title="$18.24B"
          subtitle="Pair Liquidity"
          change="decrease"
        />
      </ExchangeInfoWidgets>
      <ExchangePosBalanceWidget/>
    </ExchangeWidgetsBlock>
  );
};

export default ExchangeWidgets;
