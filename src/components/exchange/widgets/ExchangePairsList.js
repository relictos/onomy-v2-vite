import styled from "styled-components";
import Table from "../../general/tables/TableStyles";
import BtnSmall from "../../general/buttons/BtnSmall";

const AssetsListTableRec = styled.div`
  cursor: pointer;
  border-radius: var(--br-4px);
  align-self: stretch;
  transition: var(--transition-default);
  padding: var(--padding-4px) 0px;
  &:hover{
    padding: var(--padding-8px) var(--padding-12px);
    margin: calc(var(--padding-4px)*-1) calc(var(--padding-12px)*-1);
    background: var(--bg-element-bg)
  }
`;
const SelectAssetButtonsGroup =  styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6px);
  >button{
    align-self: stretch;
  }
`;

const ExhcnagePairsList = () => {
  return (
    <>
    <SelectAssetButtonsGroup>
      <BtnSmall
        text="BTC"
        type="primary"
        disabled
      />
      <BtnSmall
        text="ETH"
        type="secondary"
      />
      <BtnSmall
        text="USDT"
        type="secondary"
      />
      <BtnSmall
        text="NOM"
        type="secondary"
      />
    </SelectAssetButtonsGroup>
    <Table.Root>
      <Table.Header>
        <Table.ColLeft>Pair</Table.ColLeft>
        <Table.ColRight>Price</Table.ColRight>
        <Table.ColRight>Volume</Table.ColRight>
      </Table.Header>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Green>28,990.00</Table.Text.Green>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Green>$18.24B</Table.Text.Green>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Red>28,990.00</Table.Text.Red>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Red>$18.24B</Table.Text.Red>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Green>28,990.00</Table.Text.Green>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Green>$18.24B</Table.Text.Green>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Red>28,990.00</Table.Text.Red>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Red>$18.24B</Table.Text.Red>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Red>28,990.00</Table.Text.Red>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Red>$18.24B</Table.Text.Red>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Green>28,990.00</Table.Text.Green>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Green>$18.24B</Table.Text.Green>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Red>28,990.00</Table.Text.Red>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Red>$18.24B</Table.Text.Red>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Green>28,990.00</Table.Text.Green>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Green>$18.24B</Table.Text.Green>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Red>28,990.00</Table.Text.Red>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Red>$18.24B</Table.Text.Red>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Green>28,990.00</Table.Text.Green>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Green>$18.24B</Table.Text.Green>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Red>28,990.00</Table.Text.Red>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Red>$18.24B</Table.Text.Red>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Green>28,990.00</Table.Text.Green>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Green>$18.24B</Table.Text.Green>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Red>28,990.00</Table.Text.Red>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Red>$18.24B</Table.Text.Red>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
      <AssetsListTableRec>
      <Table.Row>
        <Table.ColLeft>
          <Table.Text.Primary>BTC / </Table.Text.Primary> USDT
        </Table.ColLeft>
        <Table.ColRight>
          <Table.Text.Green>28,990.00</Table.Text.Green>
        </Table.ColRight>
        <Table.ColRight>
          <Table.Text.Green>$18.24B</Table.Text.Green>
        </Table.ColRight>
      </Table.Row>
      </AssetsListTableRec>
    </Table.Root>
    </>
  );
};

export default ExhcnagePairsList;
