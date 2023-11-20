import styled from "styled-components";

import Page from "../components/general/page/PageStyles";

import ExchangePairInfo from "../components/exchange/ExchangePairInfo";
import ExchangeTradingView from "../components/exchange/ExchangeTradingView";
import ExchangeWidgets from "../components/exchange/ExchangeWidgets";
import ExchangeMyOrdersTabs from "../components/exchange/ExchangeMyOrdersTabs";
import ExchangeOrderForm from "../components/exchange/ExchangeOrderForm";
import ExchangeMetricsBlock from "../components/exchange/ExchangeMetricsBlock";

const ExchangeTrading = () => {
  return (
    <Page.Root>
      <Page.LeftMenu />
      <Page.Content>
        <Page.LeftColumn>
          <ExchangePairInfo />
          <ExchangeTradingView />
          <ExchangeWidgets />
          <ExchangeMyOrdersTabs />
        </Page.LeftColumn>
        <Page.RightColumn>
          <ExchangeOrderForm />
          <ExchangeMetricsBlock />
        </Page.RightColumn>
      </Page.Content>
    </Page.Root>
  );
};

export default ExchangeTrading;
