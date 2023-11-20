import styled, {css} from "styled-components";
import BalanceChangeIcon from '../../svg/balancechange.svg?react';

const BalanceLabel = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-semibold);
`;
const BalanceValue = styled.b`
  position: relative;
  font-size: var(--text-24-size);
  color: var(--color-text-1lvl);
`;
const BalanceChangeBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4px) 0px 0px;
  gap: var(--gap-2px);
  font-size: var(--text-14-size);
  color: var(--color-green);

  >svg{
    height: 6px;
    width: 6px;
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
const BalanceBlockContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8px);
`;
const BalanceBlockRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2px);

  ${(p) => p.mobileHorizontal ? css`
      @media screen and (max-width: 959px) {
        align-self: stretch;
        width: auto;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        gap: var(--gap-0px);
      }
    ` : ''}
`;

const BalanceBlock = ({
  label = "$28,990.00",
  text = "28,990.00",
  change = false,
  changeValue = "13%",
  changeType = "increase",
  mobileHorizontal = true
}) => {

  return (
    <BalanceBlockRoot mobileHorizontal={mobileHorizontal}>
      <BalanceLabel>{label}</BalanceLabel>
      <BalanceBlockContent>
        <BalanceValue>{text}</BalanceValue>
        {change && (
          <BalanceChangeBlock change={changeType}>
            <BalanceLabel>{changeValue}</BalanceLabel>
            <BalanceChangeIcon />
          </BalanceChangeBlock>
        )}
      </BalanceBlockContent>
    </BalanceBlockRoot>
  );
};

export default BalanceBlock;
