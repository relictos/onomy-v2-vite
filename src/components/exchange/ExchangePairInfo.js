import styled, {css} from "styled-components";
import BtnSmall from "../general/buttons/BtnSmall";
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Panel } from "../general/panels/PanelsStyles";
import ExhcnagePairsList from "./widgets/ExchangePairsList";
import BalanceBlock from "../general/elements/BalanceBlock";

import AssetsIcons from "../svg/assets/AssetsIcons";
import ExpandIcon from "../svg/expand.svg?react";

const AssetIcon = styled.div`
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
const CurrentAssetIcon = styled.div`
  border-radius: 48px;
  background-color: var(--bg-element-bg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8px);
`;
const CurrentAssetTitle = styled.b`
  position: relative;
  text-transform: capitalize;
  font-size: var(--text-16-size);
  color: var(--color-text-1lvl);
`;
const CurrentAssetSubtitle = styled.div`
  position: relative;
  font-size: var(--text-12-size);
  text-transform: capitalize;
  font-weight: var(--text-medium);
  color: var(--color-text-2lvl);
`;
const CurrentAssetText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2px);
`;
const CurrentAssetInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12px);

  @media screen and (max-width: 959px) {
    flex: 1 1 0%;
  }
`;
const ExpandIconContainerDefault = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  
  >svg{
    width: 24px;
    height: 24px;
    >g>path{
      fill: var(--color-icon-highlight);
    }
  }
`;
const ExpandIconContainerExpanded = styled(ExpandIconContainerDefault)`
  >svg{
    transform: rotate(180deg);
  }
`;

const CurrentAssetSelect = styled.div`
  border-right: 1px solid var(--color-border-default);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12px) 0px 0px;
  gap: var(--gap-32px);
  cursor: pointer;

  @media screen and (max-width: 959px) {
    flex: 1 1 0%;
    gap: var(--gap-12px);
  }
`;
const CurrentAssetBlock = styled.div`
  border-radius: var(--br-6px);
  border: 1px solid var(--color-border-default);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12px);
  gap: var(--gap-16px);
  position: relative;
  
  @media screen and (max-width: 959px) {
    align-self: stretch;
    width: auto;
    gap: var(--gap-12px);
  }
`;
const CurrentAssetPopover = styled.div`
  position: relative;
  @media screen and (max-width: 959px) {
    align-self: stretch;
  }
`;
const ExchangeTopInfo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-size: var(--text-14-size);
  color: var(--color-text-3lvl);
  @media screen and (max-width: 959px) {
    flex-direction: column-reverse;
    gap: var(--gap-12px);
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const PopoverPanel = styled.div`
  background: var(--bg-block-highlighted-bg);
`;

const PopoverPanelRoot = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  margin-top: var(--padding-12px);
`;

const ExchangePairInfo = () => {

  return (
    <ExchangeTopInfo>
      <BalanceBlock 
        label="$28,990.00"
        text="28,990.00"
        change={true}
        changeType="increase"
        changeValue="15%"
      />
      <Popover as={CurrentAssetPopover}>
      {({ open }) => {
        const ExpandIconContainer = open ? ExpandIconContainerExpanded : ExpandIconContainerDefault;
        return (
          <>
          <CurrentAssetBlock>
            <Popover.Button as={CurrentAssetSelect}>
              <CurrentAssetInfo>
                <CurrentAssetIcon>
                  <AssetIcon>{AssetsIcons.eth}</AssetIcon>
                </CurrentAssetIcon>
                <CurrentAssetText>
                  <CurrentAssetTitle>BTC/USDT</CurrentAssetTitle>
                  <CurrentAssetSubtitle>Onomy</CurrentAssetSubtitle>
                </CurrentAssetText>
              </CurrentAssetInfo>
              <ExpandIconContainer>
                <ExpandIcon />
              </ExpandIconContainer>
            </Popover.Button>
            <BtnSmall
              text="Add Liquidity"
              type="secondary"
            />
          </CurrentAssetBlock>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel as={PopoverPanelRoot}>
                <Panel as={PopoverPanel}>
                  <ExhcnagePairsList />
                </Panel>
              </Popover.Panel>
            </Transition>
          </>
        )
      }}
      </Popover>
    </ExchangeTopInfo>
  );
};

export default ExchangePairInfo;
