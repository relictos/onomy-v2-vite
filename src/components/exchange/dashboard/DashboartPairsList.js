import styled from "styled-components";
import { Panel } from "../../general/panels/PanelsStyles";
import ExhcnagePairsList from "../widgets/ExchangePairsList";
import { TabsList, TabItem } from "../../general/tabs/TabsList";

const DashboardPairsList = () => {

  return (
    <Panel>
      <TabsList>
        <TabItem
          text="Trading Pairs"
          active
        />
      </TabsList>
      <ExhcnagePairsList />
    </Panel>
  );
};

export default DashboardPairsList;
