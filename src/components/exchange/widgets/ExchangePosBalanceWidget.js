import styled from "styled-components";
import {Panel} from "../../general/panels/PanelsStyles";
import { Line } from "react-chartjs-2";

const PositionsBalanceTitle = styled.b`
  position: relative;
  text-transform: capitalize;
  font-size: var(--text-16-size);
  color: var(--color-text-1lvl);
`;
const PositionsBalanceSubtitle = styled.div`
  position: relative;
  font-size: var(--text-12-size);
  text-transform: capitalize;
  font-weight: var(--text-medium);
  color: var(--color-text-3lvl);
`;
const PositionsBalanceText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4px);
`;
const PosBalanceNumber = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-medium);
  font-size: var(--text-12-size);
  color: var(--color-text-3lvl);
`;
const PosBalanceNumberActive = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-medium);
  font-size: var(--text-12-size);
  color: var(--color-text-2lvl);
`;
const PosBalanceNumbers = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-8px);
`;
const PosBalanceChartIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 38px;
  flex-shrink: 0;
`;
const DepthChartContent = styled.div`
  height: 75px;
  position: relative;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  >div{
    align-self: center;
  }
`;
const PosBalanceBlock = styled(Panel)`
  width: 60%;
  background: none;
  border: 1px solid var(--color-border-default);
  flex-direction: column;
  align-items: stretch;
  align-self: stretch;
  justify-content: stretch;
  padding: var(--padding-16px);
  gap: var(--gap-16px);
  @media screen and (max-width: 959px) {
    width: 100%;
    flex: unset;
    align-self: stretch;
  }
`;

const ExchangePosBalanceWidget = () => {

  const data = {
    labels: ['1000', '1500', '2000', '2500', '3000', '3500', '4000', '4500', '5000', '5500', '6000'],
    labelsColor: '#fff',
    datasets: [
      {
        label: 'Depth Buy Side',
        data: [9, 7, 4, 2, 1, 1, NaN, NaN, NaN, NaN, NaN],
        borderWidth: 2,
        fill: true,
        stepped: true,
        borderColor: '#a6cfb8',
        backgroundColor: 'rgba(166,207,184,0.2)',
        tension: 0.4,
        pointStyle: false,
      },
      {
        label: 'Depth Sell Side',
        data: [NaN, NaN, NaN, NaN, NaN, 1, 3, 4, 6, 8, 9],
        borderWidth: 2,
        fill: true,
        stepped: true,
        borderColor: '#f5754d',
        backgroundColor: 'rgba(245,117,77,0.2)',
        tension: 0.4,
        pointStyle: false,
      }
    ]
  }

  return (
    <PosBalanceBlock>
      <DepthChartContent>
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
                }
              },
              x: {
                ticks: { 
                  color: '#5b5a5d',
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
      </DepthChartContent>
    </PosBalanceBlock>
  );
};

export default ExchangePosBalanceWidget;
