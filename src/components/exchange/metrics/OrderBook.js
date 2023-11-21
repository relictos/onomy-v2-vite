import styled, {css} from "styled-components";
import Table from "../../general/tables/TableStyles";
import BtnSmall from "../../general/buttons/BtnSmall";
import BtnSelectSmall from "../../general/buttons/BtnSelectSmall";

import OrderbookAskIcon from '../../svg/exchange/orderbook-ask.svg?react';
import OrderbookBidIcon from '../../svg/exchange/orderbook-bid.svg?react';
import OrderbookBothIcon from '../../svg/exchange/orderbook-both.svg?react';

const OrderBookLeftButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--gap-6px);
`;
const OrderBookButtonsBlock = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
`;

const OrderBookBgBarGreen = styled.div`
  position: absolute;
  right: 0px;
  border-radius: var(--br-2px);
  background: var(--color-green-transparent);
  height: 100%;

  ${(p) => p.width ? css`
      width: ${p.width}
    ` : ''}
`;
const OrderBookBgBarRed = styled.div`
  position: absolute;
  left: 0px;
  border-radius: var(--br-2px);
  background: var(--color-red-transparent);
  height: 100%;

  ${(p) => p.width ? css`
      width: ${p.width}
    ` : ''}
`;

const OrderBookRowLeft = styled.div`
  padding: var(--padding-6px) var(--padding-4px);
  position: relative;
  padding-left: 0px;
`;
const OrderBookRowRight = styled.div`
  padding: var(--padding-6px) var(--padding-4px);
  position: relative;
  padding-right: 0px;
`;

const OrderBookTable = styled.div`
  gap: var(--gap-6px);
`;

const TablesContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8px);
  >div{
    flex: 1 1 0%;
    align-self: stretch;
  }
`;

const selectData = [
  { text: '1.0' },
  { text: '0.1' },
  { text: '0.01' },
  { text: '0.001' },
  { text: '0.0001' },
];

const OrderBook = () => {
  return (
    <>
    <OrderBookButtonsBlock>
      <OrderBookLeftButtons>
        <BtnSmall 
          disabled
          type="secondary"
          showLeftIcon={true}
          leftIcon={ <OrderbookBothIcon /> }
          showText={false}
        />
        <BtnSmall 
          type="bordered"
          showLeftIcon={true}
          leftIcon={ <OrderbookBidIcon /> }
          showText={false}
        />
        <BtnSmall 
          type="bordered"
          showLeftIcon={true}
          leftIcon={ <OrderbookAskIcon /> }
          showText={false}
        />
      </OrderBookLeftButtons>
      <BtnSelectSmall 
        data={selectData}
        selectedDefault={3}
      />
    </OrderBookButtonsBlock>
    <TablesContainer>
      <Table.Root as={OrderBookTable}>
        <Table.Header>
          <Table.ColLeft>Amount</Table.ColLeft>
          <Table.ColRight>Price</Table.ColRight>
        </Table.Header>
        <Table.Row as={OrderBookRowLeft}>
          <OrderBookBgBarGreen width="64%" />
          <Table.ColLeft>0.036000</Table.ColLeft>
          <Table.ColRight>
            <Table.Text.Green>28,991.00</Table.Text.Green>
          </Table.ColRight>
        </Table.Row>
        <Table.Row as={OrderBookRowLeft}>
          <OrderBookBgBarGreen width="43%" />
          <Table.ColLeft>0.036000</Table.ColLeft>
          <Table.ColRight>
            <Table.Text.Green>28,991.00</Table.Text.Green>
          </Table.ColRight>
        </Table.Row>
        <Table.Row as={OrderBookRowLeft}>
          <OrderBookBgBarGreen width="36%" />
          <Table.ColLeft>0.036000</Table.ColLeft>
          <Table.ColRight>
            <Table.Text.Green>28,991.00</Table.Text.Green>
          </Table.ColRight>
        </Table.Row>
        <Table.Row as={OrderBookRowLeft}>
          <OrderBookBgBarGreen width="83%" />
          <Table.ColLeft>0.036000</Table.ColLeft>
          <Table.ColRight>
            <Table.Text.Green>28,991.00</Table.Text.Green>
          </Table.ColRight>
        </Table.Row>
        <Table.Row as={OrderBookRowLeft}>
          <OrderBookBgBarGreen width="72%" />
          <Table.ColLeft>0.036000</Table.ColLeft>
          <Table.ColRight>
            <Table.Text.Green>28,991.00</Table.Text.Green>
          </Table.ColRight>
        </Table.Row>
      </Table.Root>
      <Table.Root as={OrderBookTable}>
        <Table.Header>
          <Table.ColLeft>Price</Table.ColLeft>
          <Table.ColRight>Amount</Table.ColRight>
        </Table.Header>
        <Table.Row as={OrderBookRowRight}>
          <OrderBookBgBarRed width="34%" />
          <Table.ColLeft>
            <Table.Text.Red>28,991.00</Table.Text.Red>
          </Table.ColLeft>
          <Table.ColRight>0.036000</Table.ColRight>
        </Table.Row>
        <Table.Row as={OrderBookRowRight}>
          <OrderBookBgBarRed width="56%" />
          <Table.ColLeft>
            <Table.Text.Red>28,991.00</Table.Text.Red>
          </Table.ColLeft>
          <Table.ColRight>0.036000</Table.ColRight>
        </Table.Row>
        <Table.Row as={OrderBookRowRight}>
          <OrderBookBgBarRed width="72%" />
          <Table.ColLeft>
            <Table.Text.Red>28,991.00</Table.Text.Red>
          </Table.ColLeft>
          <Table.ColRight>0.036000</Table.ColRight>
        </Table.Row>
        <Table.Row as={OrderBookRowRight}>
          <OrderBookBgBarRed width="24%" />
          <Table.ColLeft>
            <Table.Text.Red>28,991.00</Table.Text.Red>
          </Table.ColLeft>
          <Table.ColRight>0.036000</Table.ColRight>
        </Table.Row>
        <Table.Row as={OrderBookRowRight}>
          <OrderBookBgBarRed width="48%" />
          <Table.ColLeft>
            <Table.Text.Red>28,991.00</Table.Text.Red>
          </Table.ColLeft>
          <Table.ColRight>0.036000</Table.ColRight>
        </Table.Row>
      </Table.Root>
    </TablesContainer>
    </>
  );
};

export default OrderBook;
