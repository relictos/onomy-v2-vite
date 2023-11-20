import styled from "styled-components";

import Page from "../components/general/page/PageStyles";

import DashboardTopBlock from "../components/exchange/dashboard/DashboardTopBlock";
import DashboardWidgets from "../components/exchange/dashboard/DashboardWidgets";
import DashboardPairsList from "../components/exchange/dashboard/DashboartPairsList";
import ExchangeMyOrdersTabs from "../components/exchange/ExchangeMyOrdersTabs";
import DashboardInfoTabs from "../components/exchange/dashboard/DashboardInfoTabs";

const ExchangeDashboard = () => {
  return (
    <Page.Root>
      <Page.LeftMenu />
      <Page.Content>
        <Page.LeftColumn>
          <DashboardTopBlock />
          <DashboardWidgets />
          <DashboardInfoTabs />
        </Page.LeftColumn>
        <Page.RightColumn>
          <DashboardPairsList />
        </Page.RightColumn>
      </Page.Content>
    </Page.Root>
  );
};

export default ExchangeDashboard;
