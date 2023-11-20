import styled, {css} from "styled-components";
import {Panel} from "../../general/panels/PanelsStyles";
import BalanceChangeIcon from '../../svg/balancechange.svg?react';

const InfoWidgetChangeBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: var(--padding-6px);
  padding-right: var(--padding-6px);

  >svg{
    height: 8px;
    width: 8px;
    >g>path{
      fill: var(--color-green)
    }
  }

  ${(p) => p.change == "decrease" ? css`

    >svg{
      transform: rotate(180deg);
    }
    >svg>g>path{
      fill: var(--color-red)
    }

  ` : ``}
`;
const InfoWidgetTitle = styled.b`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  font-size: var(--text-16-size);
  color: var(--color-text-1lvl);
`;
const InfoWidgetSubtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--text-12-size);
  text-transform: capitalize;
  font-weight: var(--text-medium);
  color: var(--color-text-3lvl);
`;
const InfoWidgetText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16px);
  padding-right: var(--padding-24px);
  gap: var(--gap-4px);
`;
const InfoWidgetRoot = styled(Panel)`
  width: auto;
  padding: var(--padding-0px);
  &:first-child{
    background: var(--bg-block-highlighted-bg);
  }
`;

const ExchangeInfoWidget = ({
  stateArrow,
  title = "$120.3M",
  subtitle = "Volume 24h",
  change = "increase"
}) => {
  return (
    <InfoWidgetRoot>
      <InfoWidgetChangeBlock change={change}>
        <BalanceChangeIcon />
      </InfoWidgetChangeBlock>
      <InfoWidgetText>
        <InfoWidgetTitle>{title}</InfoWidgetTitle>
        <InfoWidgetSubtitle>{subtitle}</InfoWidgetSubtitle>
      </InfoWidgetText>
    </InfoWidgetRoot>
  );
};

export default ExchangeInfoWidget;
