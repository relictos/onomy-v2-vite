import styled, {css} from "styled-components";
import { useState } from 'react';

import BgTabsBlock from "../general/bg-tabs/BgTabsBlock";
import {TabsList, TabItem} from "../general/tabs/TabsList";

import BuyMarketForm from "./forms/BuyMarketForm";
import BuyLimitForm from "./forms/BuyLimitForm";
import SellMarketForm from "./forms/SellMarketForm";
import SellLimitForm from "./forms/SellLimitForm";
import {Panel} from "../general/panels/PanelsStyles";

const ExchangeOrderFormRoot = styled(Panel)`
  ${(p) => p.mobile == false ? css`
    @media screen and (max-width: 959px) {
      display: none;
    }
  ` : css`
    @media screen and (max-width: 959px) {
      padding: 0px;
    }
  `}
`;

const ExchangeOrderForm = ({
  mobile = false,
  formByType = {
    buy: {
      market: <BuyMarketForm/>,
      limit: <BuyLimitForm/>
    },
    sell: {
      market: <SellMarketForm/>,
      limit: <SellLimitForm/>
    }
  }
}) => {

  const [side, setSide] = useState('buy');
  const [type, setType] = useState('market');

  const changeType = (type) => () => {
    setType(type);
  }
  const changeSide = (side) => () => {
    setSide(side);
  }

  return (
    <ExchangeOrderFormRoot side={side} type={type} mobile={mobile}>
      <BgTabsBlock 
        item1Text="Buy"
        item1Click={changeSide('buy')}
        item2Text="Sell"
        item2Click={changeSide('sell')}
        activeItem={side == 'buy' ? 1 : 2}
        showItem3={false} 
      />
      <TabsList>
        <TabItem
          text="Market"
          active={type=='market'}
          onClick={changeType('market')}
        />
        <TabItem
          text="Limit"
          active={type=='limit'}
          onClick={changeType('limit')}
        />
        <TabItem
          text="Stop Limit"
        />
      </TabsList>
      {formByType[side][type]}
    </ExchangeOrderFormRoot>
  );
};

export default ExchangeOrderForm;
