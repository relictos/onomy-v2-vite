import styled, {css} from "styled-components";
import Logo from '../../svg/menu/onomy.svg?react';
import Burger from '../../svg/menu/burger.svg?react';

import Wallet from '../../svg/menu/wallet.svg?react';
import Exchange from '../../svg/menu/exchange.svg?react';
import Governance from '../../svg/menu/governance.svg?react';
import Bridge from '../../svg/menu/bridge.svg?react';

const OnomyLogoIcon = styled(Logo)`
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
`;
const MenuItemDefault = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  transition: var(--transition-default);
  cursor: pointer;

  >svg{
    width: 24px;
    height: 24px;
    >g>path{
      fill: var(--color-icon-default);
    }
  }
  &:hover{
    >svg{
      >g>path{
        fill: var(--color-icon-highlight);
      }
    }
  }
`;
const MenuItemActive = styled(MenuItemDefault)`
  cursor: default;
  >svg{
    >g>path{
      fill: var(--color-icon-highlight);
    }
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-32px);

  @media screen and (max-width: 1199px) {
    flex-direction: row;
  }

  @media screen and (max-width: 959px) {
    display: none;
  }
`;
const MenuProfileIcon = styled.img`
  position: relative;
  border-radius: var(--br-4px);
  width: 40px;
  height: 40px;
  object-fit: cover;

  @media screen and (max-width: 959px) {
    display: none;
  }
`;
const MobileIcon = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;

  >svg{
    width: 32px;
    height: 32px;
    >g>path{
      fill: var(--color-icon-default);
    }
  }
  &:hover{
    >svg{
      >g>path{
        fill: var(--color-icon-highlight);
      }
    }
  }

  @media screen and (max-width: 959px) {
    display: block;
  }
`;

const LeftMenuRoot = styled.div`
  background-color: var(--bg-block-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-24px) var(--padding-20px);
  box-sizing: border-box;
  align-self: stretch;

  @media screen and (min-width: 1200px) {
    position: fixed;
    height: 100vh;
    left: 0px;
  }

  @media screen and (max-width: 1199px) {
    flex-direction: row;
  }
`;

const LeftMenu = () => {
  return (
    <LeftMenuRoot>
      <OnomyLogoIcon />
      <MenuItems>
        <MenuItemDefault>
          <Wallet />
        </MenuItemDefault>
        <MenuItemActive>
          <Exchange />
        </MenuItemActive>
        <MenuItemDefault>
          <Governance />
        </MenuItemDefault>
        <MenuItemDefault>
          <Bridge />
        </MenuItemDefault>
      </MenuItems>
      <MenuProfileIcon alt="" src="/menuprofileicon@2x.png" />
      <MobileIcon>
        <Burger />
      </MobileIcon>
    </LeftMenuRoot>
  );
};

export default LeftMenu;
