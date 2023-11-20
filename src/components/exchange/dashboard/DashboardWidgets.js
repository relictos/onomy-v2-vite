import styled from "styled-components";
import BtnBig from "../../general/buttons/BtnBig";
import ExchangeInfoWidget from "../widgets/ExchangeInfoWidget";
import ExchangeAccountValue from "../widgets/ExchangeAccountValue";

const DashboardWidgetsRow = styled.div`
  flex: 1 1 0%;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);
  >div{
    flex: 1 1 0%;
    justify-content: space-between;
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

const DashboardWidgetsCol = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);
  @media screen and (max-width: 959px) {
    align-self: stretch;
    width: auto;
    >div{
      flex: 1 1 0%;
    }
  }
`;

const DashboardWidgetsBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);
  @media screen and (max-width: 959px) {
    flex-flow: column nowrap;
    gap: var(--gap-12px);
  }
`;

const DashboardWidgets = () => {
  return (
    <DashboardWidgetsBlock>
      <ExchangeAccountValue />
      <DashboardWidgetsCol>
        <DashboardWidgetsRow>
          <ExchangeInfoWidget
            title="1.232"
            subtitle="NOM / USDT"
          />
          <ExchangeInfoWidget
            title="0.00345"
            subtitle="NOM / ETH"
            change="decrease"
          />
        </DashboardWidgetsRow>
        <DashboardWidgetsRow>
          <ExchangeInfoWidget
            title="$17.32B"
            subtitle="NOM / USDT Volume"
          />
          <ExchangeInfoWidget
            title="$18.24B"
            subtitle="NOM / ETH Volume"
            change="decrease"
          />
        </DashboardWidgetsRow>
      </DashboardWidgetsCol>
    </DashboardWidgetsBlock>
  );
};

export default DashboardWidgets;
