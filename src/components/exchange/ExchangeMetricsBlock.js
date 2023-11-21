import styled from "styled-components";
import { useState } from 'react';

import {TabsList, TabItem} from "../general/tabs/TabsList";
import BtnIconXs from "../general/buttons/BtnIconXs";
import {Panel} from "../general/panels/PanelsStyles";
import TradeHistory from "./metrics/TradeHistory";
import OrderBook from "./metrics/OrderBook";

import FullscreenIcon from '../svg/fullscreen.svg?react';

const ExchangeTabsRightBlock = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: right;
`;

const ExchangeMetricsBlock = ({
  expanded = false,
  changeExpanded,
  listByType = {
    history: <TradeHistory/>,
    orderbook: <OrderBook/>
  }
}) => {

  const [list, setList] = useState('history');
  const changeList = (list) => () => {
    setList(list);
  }

  return (
  <Panel>
    <TabsList>
      <TabItem
        text="Trade History"
        active={list == 'history'}
        onClick={changeList('history')}
      />
      <TabItem
        text="Order Book"
        active={list == 'orderbook'}
        onClick={changeList('orderbook')}
      />
      <ExchangeTabsRightBlock>
        <BtnIconXs icon={ <FullscreenIcon /> } onClick={changeExpanded(!expanded)}/>
      </ExchangeTabsRightBlock>
    </TabsList>
      
    {listByType[list]}
  </Panel>
  );
};

export default ExchangeMetricsBlock;
