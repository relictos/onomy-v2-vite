import styled, {css} from "styled-components";

import { useState } from 'react';

import {TabsList, TabItem} from "../../general/tabs/TabsList";
import BtnSmall from "../../general/buttons/BtnSmall";
import Table from "../../general/tables/TableStyles";
import {Panel} from "../../general/panels/PanelsStyles";
import AssetsIcons from "../../svg/assets/AssetsIcons";

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
const AssetInfoCol = styled.div`
  flex: 1 1 0%;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6px);

  @media screen and (max-width: 959px) {
    font-size: var(--text-14-size);
    >div&:last-child>div{
      justify-content: end;
    }
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
const TableBalanceActionsCols = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6px);

  @media screen and (max-width: 959px) {
    align-items: start;
  }

  >div{
    display: flex;
    flex-direction: row;
    gap: var(--gap-8px);

    @media screen and (max-width: 959px) {
      >button{
        align-self: stretch;
        flex: 1 1 0%;
      }
    }
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

const OrdersTableHeader = styled.div`
  @media screen and (max-width: 959px) {
    display: none;
  }
`;
const BalancesTableRow = styled.div`
  @media screen and (max-width: 959px) {
    flex-direction: column;
    gap: var(--gap-16px);
  }
`;

const BalancesRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16px) 0px;
  border-bottom: 1px solid var(--color-border-default);
  &:first-child{
    padding-top: 0px;
  }
  &:last-child{
    border-bottom: 0px;
    padding-bottom: 0px;
  }
`;

const AssetsethIcon = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
  >svg{
    width: 32px;
    height: 32px;
  }
`;
const BalanceAssetIcon = styled.div`
  border-radius: 48px;
  background-color: var(--bg-element-bg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8px);
`;
const BalanceAssetTitle = styled.b`
  position: relative;
  text-transform: capitalize;
  font-size: var(--text-16-size);
  color: var(--color-text-1lvl);
`;
const BalanceAssetSubtitle = styled.div`
  position: relative;
  font-size: var(--text-12-size);
  text-transform: capitalize;
  font-weight: var(--text-medium);
  color: var(--color-text-2lvl);
`;
const BalanceAssetText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2px);
  ${(p) => p.col == "right" ? css`
      @media screen and (max-width: 959px) {
        align-items: flex-end;
        justify-content: right;
      }
    ` : ''}
`;
const BalanceAssetInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12px);

  @media screen and (max-width: 959px) {
    flex: 1 1 0%;
    ${(p) => p.col == "right" ? css`
      align-items: flex-end;
      justify-content: right;;
    ` : ''}
  }
`;
const BalancesTable = styled.div`
  gap: 0px;
`;

const DashboardInfoTabs = () => {

  const [tab, setTab] = useState('balances');

  const changeTab = (tab) => () => {
    setTab(tab);
  }

  return (
    <Panel>
      <TabsList>
        <TabItem
          text="Balances"
          active={tab=='balances'}
          onClick={changeTab('balances')}
        />
        <TabItem
          text="Liquidity"
          count="4"
          counter
        />
        <TabItem
          text="History"
          active={tab=='history'}
          onClick={changeTab('history')}
        />
      </TabsList>
      {tab == 'balances' && <Table.Root as={BalancesTable}>
        <BalancesRow>
          <Table.Row as={BalancesTableRow}>
            <AssetInfoCol>
              <Table.Col>
                <BalanceAssetInfo>
                  <BalanceAssetIcon>
                    <AssetsethIcon>{AssetsIcons.eth}</AssetsethIcon>
                  </BalanceAssetIcon>
                  <BalanceAssetText>
                    <BalanceAssetTitle>Ethereum</BalanceAssetTitle>
                    <BalanceAssetSubtitle>ERC-20 ETH</BalanceAssetSubtitle>
                  </BalanceAssetText>
                </BalanceAssetInfo>
              </Table.Col>
              <Table.Col>
                <BalanceAssetInfo>
                  <BalanceAssetText>
                    <BalanceAssetSubtitle>$8,329.24</BalanceAssetSubtitle>
                    <BalanceAssetTitle>2.03921</BalanceAssetTitle>
                  </BalanceAssetText>
                </BalanceAssetInfo>
              </Table.Col>
            </AssetInfoCol>
            <TableBalanceActionsCols>
              <Table.Col>
                <BtnSmall
                  type="secondary"
                  text="Refill"
                />
                <BtnSmall
                  type="secondary"
                  text="Withdraw"
                />
                <BtnSmall
                  type="secondary"
                  text="Trade"
                />
              </Table.Col>
            </TableBalanceActionsCols>
          </Table.Row>
        </BalancesRow>
        <BalancesRow>
          <Table.Row as={BalancesTableRow}>
            <AssetInfoCol>
              <Table.Col>
                <BalanceAssetInfo>
                  <BalanceAssetIcon>
                    <AssetsethIcon>{AssetsIcons.eth}</AssetsethIcon>
                  </BalanceAssetIcon>
                  <BalanceAssetText>
                    <BalanceAssetTitle>Ethereum</BalanceAssetTitle>
                    <BalanceAssetSubtitle>ERC-20 ETH</BalanceAssetSubtitle>
                  </BalanceAssetText>
                </BalanceAssetInfo>
              </Table.Col>
              <Table.Col>
                <BalanceAssetInfo>
                  <BalanceAssetText>
                    <BalanceAssetSubtitle>$8,329.24</BalanceAssetSubtitle>
                    <BalanceAssetTitle>2.03921</BalanceAssetTitle>
                  </BalanceAssetText>
                </BalanceAssetInfo>
              </Table.Col>
            </AssetInfoCol>
            <TableBalanceActionsCols>
              <Table.Col>
                <BtnSmall
                  type="secondary"
                  text="Refill"
                />
                <BtnSmall
                  type="secondary"
                  text="Withdraw"
                />
                <BtnSmall
                  type="secondary"
                  text="Trade"
                />
              </Table.Col>
            </TableBalanceActionsCols>
          </Table.Row>
        </BalancesRow>
        <BalancesRow>
          <Table.Row as={BalancesTableRow}>
            <AssetInfoCol>
              <Table.Col>
                <BalanceAssetInfo>
                  <BalanceAssetIcon>
                    <AssetsethIcon>{AssetsIcons.eth}</AssetsethIcon>
                  </BalanceAssetIcon>
                  <BalanceAssetText>
                    <BalanceAssetTitle>Ethereum</BalanceAssetTitle>
                    <BalanceAssetSubtitle>ERC-20 ETH</BalanceAssetSubtitle>
                  </BalanceAssetText>
                </BalanceAssetInfo>
              </Table.Col>
              <Table.Col>
                <BalanceAssetInfo>
                  <BalanceAssetText>
                    <BalanceAssetSubtitle>$8,329.24</BalanceAssetSubtitle>
                    <BalanceAssetTitle>2.03921</BalanceAssetTitle>
                  </BalanceAssetText>
                </BalanceAssetInfo>
              </Table.Col>
            </AssetInfoCol>
            <TableBalanceActionsCols>
              <Table.Col>
                <BtnSmall
                  type="secondary"
                  text="Refill"
                />
                <BtnSmall
                  type="secondary"
                  text="Withdraw"
                />
                <BtnSmall
                  type="secondary"
                  text="Trade"
                />
              </Table.Col>
            </TableBalanceActionsCols>
          </Table.Row>
        </BalancesRow>
        <BalancesRow>
          <Table.Row as={BalancesTableRow}>
            <AssetInfoCol>
              <Table.Col>
                <BalanceAssetInfo>
                  <BalanceAssetIcon>
                    <AssetsethIcon>{AssetsIcons.eth}</AssetsethIcon>
                  </BalanceAssetIcon>
                  <BalanceAssetText>
                    <BalanceAssetTitle>Ethereum</BalanceAssetTitle>
                    <BalanceAssetSubtitle>ERC-20 ETH</BalanceAssetSubtitle>
                  </BalanceAssetText>
                </BalanceAssetInfo>
              </Table.Col>
              <Table.Col>
                <BalanceAssetInfo>
                  <BalanceAssetText>
                    <BalanceAssetSubtitle>$8,329.24</BalanceAssetSubtitle>
                    <BalanceAssetTitle>2.03921</BalanceAssetTitle>
                  </BalanceAssetText>
                </BalanceAssetInfo>
              </Table.Col>
            </AssetInfoCol>
            <TableBalanceActionsCols>
              <Table.Col>
                <BtnSmall
                  type="secondary"
                  text="Refill"
                />
                <BtnSmall
                  type="secondary"
                  text="Withdraw"
                />
                <BtnSmall
                  type="secondary"
                  text="Trade"
                />
              </Table.Col>
            </TableBalanceActionsCols>
          </Table.Row>
        </BalancesRow>
      </Table.Root> }
      {tab == 'history' && <Table.Root>
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
        <Table.Row as={BalancesTableRow}>
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
        <Table.Row as={BalancesTableRow}>
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
        <Table.Row as={BalancesTableRow}>
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

export default DashboardInfoTabs;
