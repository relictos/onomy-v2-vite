import styled from "styled-components";
import { useState } from 'react';

import {TabsList, TabItem} from "../general/tabs/TabsList";
import BtnIconXs from "../general/buttons/BtnIconXs";
import Table from "../general/tables/TableStyles";
import {Panel} from "../general/panels/PanelsStyles";

import CloseIcon from '../svg/close.svg?react';

const ColContent = styled.div`
  flex: 1;
  position: relative;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--gap-2px);
`;
const ColContentItem = styled.div`
  flex: 1;
  position: relative;
`;
const ColContentItemMobile = styled.div`
  flex: 1;
  position: relative;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
const TablePairCols = styled.div`
  width: 80px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6px);

  @media screen and (max-width: 959px) {
    font-size: var(--text-14-size);
  }
`;
const TableDataCols = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6px);

  @media screen and (max-width: 959px) {
    align-items: start;
  }
`;
const TableBotCols = styled.div`
  //flex: 1;
  width: 104px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6px);

  @media screen and (max-width: 959px) {
    width: auto;
  }
`;

const TableTitleActions = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-medium);
  display: inline-block;
  width: 24px;
  flex-shrink: 0;
`;
const OrdersTableHeader = styled.div`
  @media screen and (max-width: 959px) {
    display: none;
  }
`;
const OrdersTableRow = styled.div`
  @media screen and (max-width: 959px) {
    flex-direction: column;
    gap: var(--gap-8px);
  }
`;
const OrderProgress = styled.div`
  position: relative;
  border-top: 3px solid var(--bg-button-secondary);
  box-sizing: border-box;
  width: 65%;
  height: 3px;
`;
const ActiveOrdersRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8px);
`;
const ActiveOrdersTable = styled.div`
  @media screen and (max-width: 959px) {
    gap: var(--gap-16px);
  }
`;

const ExchangeMyOrdersTabs = () => {

  const [tab, setTab] = useState('activeorders');

  const changeTab = (tab) => () => {
    setTab(tab);
  }

  return (
    <Panel>
      <TabsList>
        <TabItem
          text="Active Orders"
          count="3"
          counter
          active={tab=='activeorders'}
          onClick={changeTab('activeorders')}
        />
        <TabItem
          text="History"
          active={tab=='history'}
          onClick={changeTab('history')}
        />
      </TabsList>
      {tab == 'activeorders' && <Table.Root as={ActiveOrdersTable}>
        <Table.Header as={OrdersTableHeader}>
          <TablePairCols>
            <Table.Col>Pair</Table.Col>
          </TablePairCols>
          <TableDataCols>
            <Table.Col>Side</Table.Col>
            <Table.Col>Type</Table.Col>
            <Table.Col>Price</Table.Col>
            <Table.Col>Amount</Table.Col>
            <Table.Col>Total</Table.Col>
          </TableDataCols>
          <TableBotCols>
            <Table.Col>Date</Table.Col>
            <TableTitleActions></TableTitleActions>
          </TableBotCols>
        </Table.Header>
        <ActiveOrdersRow>
          <Table.Row as={OrdersTableRow}>
            <TablePairCols>
              <Table.Col>
                <Table.Text.Primary>NOM</Table.Text.Primary> / ETH
              </Table.Col>
            </TablePairCols>
            <TableDataCols>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Side</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem><Table.Text.Red>SELL</Table.Text.Red></ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Type</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>Limit</ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Price</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>0.000313</ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Amount</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>2,094.22</ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Total</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>0.65542 ETH</ColContentItem>
                </ColContent>
              </Table.Col>
            </TableDataCols>
            <TableBotCols>
              <Table.Col>29.06.22</Table.Col>
              <BtnIconXs icon={ <CloseIcon /> } />
            </TableBotCols>
          </Table.Row>
          <OrderProgress />
        </ActiveOrdersRow>
        <ActiveOrdersRow>
          <Table.Row as={OrdersTableRow}>
            <TablePairCols>
              <Table.Col>
                <Table.Text.Primary>NOM</Table.Text.Primary> / ETH
              </Table.Col>
            </TablePairCols>
            <TableDataCols>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Side</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem><Table.Text.Green>BUY</Table.Text.Green></ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Type</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>Limit</ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Price</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>0.000313</ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Amount</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>2,094.22</ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Total</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>0.65542 ETH</ColContentItem>
                </ColContent>
              </Table.Col>
            </TableDataCols>
            <TableBotCols>
              <Table.Col>29.06.22</Table.Col>
              <BtnIconXs icon={ <CloseIcon /> } />
            </TableBotCols>
          </Table.Row>
          <OrderProgress />
        </ActiveOrdersRow>
        <ActiveOrdersRow>
          <Table.Row as={OrdersTableRow}>
            <TablePairCols>
              <Table.Col>
                <Table.Text.Primary>NOM</Table.Text.Primary> / ETH
              </Table.Col>
            </TablePairCols>
            <TableDataCols>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Side</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem><Table.Text.Red>SELL</Table.Text.Red></ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Type</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>Limit</ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Price</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>0.000313</ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Amount</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>2,094.22</ColContentItem>
                </ColContent>
              </Table.Col>
              <Table.Col>
                <ColContent>
                  <ColContentItemMobile><Table.Text.Caption>Total</Table.Text.Caption></ColContentItemMobile>
                  <ColContentItem>0.65542 ETH</ColContentItem>
                </ColContent>
              </Table.Col>
            </TableDataCols>
            <TableBotCols>
              <Table.Col>29.06.22</Table.Col>
              <BtnIconXs icon={ <CloseIcon /> } />
            </TableBotCols>
          </Table.Row>
          <OrderProgress />
        </ActiveOrdersRow>
      </Table.Root> }
      {tab == 'history' && <Table.Root as={ActiveOrdersTable}>
        <Table.Header as={OrdersTableHeader}>
          <TablePairCols>
            <Table.Col>Pair</Table.Col>
          </TablePairCols>
          <TableDataCols>
            <Table.Col>Side</Table.Col>
            <Table.Col>Type</Table.Col>
            <Table.Col>Price</Table.Col>
            <Table.Col>Amount</Table.Col>
            <Table.Col>Total</Table.Col>
          </TableDataCols>
          <TableBotCols>
            <Table.Col>Date</Table.Col>
          </TableBotCols>
        </Table.Header>
        <Table.Row as={OrdersTableRow}>
          <TablePairCols>
            <Table.Col>
              <Table.Text.Primary>NOM</Table.Text.Primary> / ETH
            </Table.Col>
          </TablePairCols>
          <TableDataCols>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Side</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem><Table.Text.Red>SELL</Table.Text.Red></ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Type</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>Limit</ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Price</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>0.000313</ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Amount</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>2,094.22</ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Total</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>0.65542 ETH</ColContentItem>
              </ColContent>
            </Table.Col>
          </TableDataCols>
          <TableBotCols>
            <Table.Col>29.06.22</Table.Col>
          </TableBotCols>
        </Table.Row>
        <Table.Row as={OrdersTableRow}>
          <TablePairCols>
            <Table.Col>
              <Table.Text.Primary>NOM</Table.Text.Primary> / ETH
            </Table.Col>
          </TablePairCols>
          <TableDataCols>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Side</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem><Table.Text.Green>BUY</Table.Text.Green></ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Type</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>Limit</ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Price</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>0.000313</ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Amount</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>2,094.22</ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Total</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>0.65542 ETH</ColContentItem>
              </ColContent>
            </Table.Col>
          </TableDataCols>
          <TableBotCols>
            <Table.Col>29.06.22</Table.Col>
          </TableBotCols>
        </Table.Row>
        <Table.Row as={OrdersTableRow}>
          <TablePairCols>
            <Table.Col>
              <Table.Text.Primary>NOM</Table.Text.Primary> / ETH
            </Table.Col>
          </TablePairCols>
          <TableDataCols>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Side</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem><Table.Text.Red>SELL</Table.Text.Red></ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Type</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>Limit</ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Price</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>0.000313</ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Amount</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>2,094.22</ColContentItem>
              </ColContent>
            </Table.Col>
            <Table.Col>
              <ColContent>
                <ColContentItemMobile><Table.Text.Caption>Total</Table.Text.Caption></ColContentItemMobile>
                <ColContentItem>0.65542 ETH</ColContentItem>
              </ColContent>
            </Table.Col>
          </TableDataCols>
          <TableBotCols>
            <Table.Col>29.06.22</Table.Col>
          </TableBotCols>
        </Table.Row>
      </Table.Root> }
    </Panel>
  );
};

export default ExchangeMyOrdersTabs;
