import styled from "styled-components";
import BtnBig from "../../general/buttons/BtnBig";
import BalanceBlock from "../../general/elements/BalanceBlock";

const DashboardTopButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--gap-12px);
  align-items: flex-start;
  -webkit-box-pack: start;
  justify-content: flex-start;

  >button{
    align-self: baseline;
  }
  @media screen and (max-width: 959px) {
    display: flex;
    align-self: stretch;
    width: auto;
    >button{
      flex: 1 1 0%;
    }
}`;

const DashboardTopInfo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-size: var(--text-14-size);
  color: var(--color-text-3lvl);
  padding-bottom: var(--padding-12px);
  @media screen and (max-width: 959px) {
    align-items: flex-start;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-flow: column nowrap;
    gap: var(--gap-12px);
  }
`;

const DashboardTopBlock = () => {

  return (
    <DashboardTopInfo>
      <BalanceBlock
        label="ONEX Account Balance"
        text="$54,599.00"
        change={true}
        changeType="increase"
        changeValue="$3,943.22"
        mobileHorizontal={false}
      />
      <DashboardTopButtons>
        <BtnBig 
          type="primary"
          text="Exchange view"
        />
        <BtnBig 
          type="secondary"
          text="Liquidity"
        />
      </DashboardTopButtons>
    </DashboardTopInfo>
  );
};

export default DashboardTopBlock;
