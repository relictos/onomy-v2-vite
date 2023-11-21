import styled, {css} from "styled-components";
import {Panel} from "../../general/panels/PanelsStyles";
import { Line } from "react-chartjs-2";
import BalanceChangeIcon from '../../svg/balancechange.svg?react';

const AccountValueChart = styled.div`
  height: 150px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  >div{
    align-self: center;
  }
`;

const AccountValueChangeValue = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--text-12-size);
  text-transform: capitalize;
  font-weight: var(--text-semibold);
  color: var(--color-green);
`;

const AccountValueChangeBlockIncrease = styled.div`
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
const AccountValueChangeBlockDecrease = styled(AccountValueChangeBlockIncrease)`
  >svg{
    transform: rotate(180deg);
  }
  >svg>g>path{
    fill: var(--color-red)
  }
`;

const AccountValueTitle = styled.b`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  font-size: var(--text-20-size);
  color: var(--color-text-1lvl);
`;
const AccountValueTitleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8px);
`;

const AccountValueSubtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--text-12-size);
  text-transform: capitalize;
  font-weight: var(--text-medium);
  color: var(--color-text-1lvl);
`;
const AccountValueContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4px);
`;

const AccountValueWidget = styled(Panel)`
  width: 400px;
  background: var(--color-blue);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1199px) {
    width: 300px;
  }
  @media screen and (max-width: 959px) {
    align-self: stretch;
    width: auto;
    gap: var(--gap-12px);
    padding: var(--padding-12px);
  }
`;

const ExchangeAccountValue = () => {

  const data = {
      labels: ['Nov 1', 'Nov 2', 'Nov 3', 'Nov 4', 'Nov 5', 'Nov 6', 'Nov 7', 'Nov 8', 'Nov 9', 'Nov 10'],
      labelsColor: '#fff',
      datasets: [
          {
            label: 'Account Value',
            data: [6, 5, 3, 4, 6, 7, 6, 4, 5, 8],
            borderWidth: 3,
            fill: false,
            borderColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, context.chart.width, 0);
              gradient.addColorStop(0, "rgba(255,255,255,0.3)");
              gradient.addColorStop(1, "rgba(255,255,255,1)");
              return gradient;
            },
            color: '#fff',
            tension: 0.4,
            pointStyle: 'circle',
            pointRadius: 4,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#2B78EC',
            pointHoverRadius: 5
          }
      ]
  }

  const change = "increase";
  const AccountValueChangeBlock = (change == "increase") ? AccountValueChangeBlockIncrease : AccountValueChangeBlockDecrease;

  return (
    <AccountValueWidget>
      <AccountValueContent>
        <AccountValueTitleContent>
          <AccountValueTitle>$32,582.00</AccountValueTitle>
          <AccountValueChangeBlock>
            <AccountValueChangeValue>15.2%</AccountValueChangeValue>
            <BalanceChangeIcon />
          </AccountValueChangeBlock>
        </AccountValueTitleContent>
        <AccountValueSubtitle>Historical Account Value</AccountValueSubtitle>
      </AccountValueContent>
      <AccountValueChart>
        <Line
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                ticks: { display: false },
                border: {
                  display: false
                },
                grid: {
                  color: 'rgba(255,255,255,0.1)'
                  //display: false,
                }
              },
              x: {
                ticks: { 
                  color: 'rgba(255,255,255,0.5)',
                  beginAtZero: true,
                  autoSkip: true,
                  maxRotation: 0,
                  minRotation: 0
                },
                border: {
                  display: false
                },
                grid: {
                  color: 'rgba(255,255,255,0.1)'
                  //display: false,
                }
              }
            },
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </AccountValueChart>
    </AccountValueWidget>
  );
};

export default ExchangeAccountValue;
