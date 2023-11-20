import styled, {css} from "styled-components";

const BgTabItemText = styled.div`
  flex: 1;
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-semibold);
`;
const BgTabItem = styled.div`
  flex: 1;
  border-radius: var(--br-4px);
  background-color: var(--bg-element-bg);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8px) var(--padding-12px);
  transition: var(--transition-default);
  cursor: pointer;

  &:hover{
    color: var(--color-text-1lvl);
  }

  ${(p) => p.active ? css`
      background-color: var(--bg-button-secondary);
      color: var(--color-text-1lvl);
      cursor: default;
    ` : ''}
`;
const BgTabsBlockRoot = styled.div`
  border-radius: var(--br-6px);
  background-color: var(--bg-element-bg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4px);
  box-sizing: border-box;
  gap: var(--gap-4px);
  text-align: center;
  font-size: var(--text-14-size);
  color: var(--color-text-2lvl);
  
  align-self: stretch;
`;

const BgTabsBlock = ({
    item1Text = "",
    item2Text = "",
    item3Text = "",
    showItem3 = false,
    activeItem = 1,
    item1Click,
    item2Click,
    item3Click
  }) => {
  return (
    <BgTabsBlockRoot>
      <BgTabItem active={activeItem == 1} onClick={item1Click}>
        <BgTabItemText>{item1Text}</BgTabItemText>
      </BgTabItem>
      <BgTabItem active={activeItem == 2} onClick={item2Click}>
        <BgTabItemText>{item2Text}</BgTabItemText>
      </BgTabItem>
      {showItem3 && (
        <BgTabItem active={activeItem == 3} onClick={item3Click}>
          <BgTabItemText>{item3Text}</BgTabItemText>
        </BgTabItem>
      )}
    </BgTabsBlockRoot>
  );
};

export default BgTabsBlock;
