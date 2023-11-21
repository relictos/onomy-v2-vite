import styled, {css} from "styled-components";
import { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';

import BgTabsBlock from "../general/bg-tabs/BgTabsBlock";
import {TabsList, TabItem} from "../general/tabs/TabsList";

import BuyMarketForm from "./forms/BuyMarketForm";
import BuyLimitForm from "./forms/BuyLimitForm";
import SellMarketForm from "./forms/SellMarketForm";
import SellLimitForm from "./forms/SellLimitForm";
import {Panel} from "../general/panels/PanelsStyles";

const ExchangeOrderFormRootDesktop = styled(Panel)`
  @media screen and (max-width: 959px) {
    display: none;
  }
`;
const ExchangeOrderFormRootMobile = styled(Panel)`
  @media screen and (max-width: 959px) {
    padding: 0px;
  }
`;

const ExchangeOrderForm = ({
  isMobile = false,
  hide = false,
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

  const ExchangeOrderFormRoot = isMobile ? ExchangeOrderFormRootMobile : ExchangeOrderFormRootDesktop;

  return (
    <Transition show={!hide} as={Fragment}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <ExchangeOrderFormRoot type={type}>
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
      </Transition.Child>
    </Transition>
  );
};

export default ExchangeOrderForm;
