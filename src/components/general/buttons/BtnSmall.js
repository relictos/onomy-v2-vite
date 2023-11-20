import styled, {css} from "styled-components";

export const BtnIcon = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;

  >svg{
    height: 18px;
    width: 18px;

    >g:first-child>path{
      fill: var(--color-icon-highlight);
    }
  }
`;
export const BtnText = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-medium);
`;
export const BtnTextBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-8px);
`;
export const BtnSmallRoot = styled.button`
  border: 0px;
  -webkit-box-sizing: border-box; 
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: var(--br-4px);
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8px);
  text-align: center;
  font-size: var(--text-12-size);
  color: var(--color-text-1lvl);
  
  transition: var(--transition-default);
  cursor: pointer;

  pointer-events: ${(p) => p.disabled?'none':null};

  ${(p) => p.type == "secondary" ? css`
      background: var(--bg-button-secondary);
      box-shadow: var(--btn-secondary-inner-shadow);
      &:hover {
        background: var(--bg-button-secondary-hover);
      }
    ` : ''}

  ${(p) => p.type == "primary" ? css`
      color: var(--color-text-black);
      background: var(--bg-button-primary);
      box-shadow: var(--btn-primary-inner-shadow);
      &:hover {
        background: var(--bg-button-primary-hover);
      }
    ` : ''}

  ${(p) => p.type == "bordered" ? css`
      background: none;
      padding: calc(var(--padding-8px) - 1px);
      border: 1px solid var(--color-border-default);
      &:hover{
        border-color: var(--color-border-highlight);
      }
    ` : ''}
`;

const BtnSmall = ({
  text = "Add Liquidity",
  showText = true,
  showRightIcon = false,
  showLeftIcon = false,
  leftIcon,
  rightIcon,
  type = "secondary",
  disabled = false
}) => {
  return (
    <BtnSmallRoot disabled={disabled} type={type}>
      {showLeftIcon && <BtnIcon>{leftIcon}</BtnIcon>}
      {showText &&
        <BtnTextBlock>
          <BtnText>{text}</BtnText>
        </BtnTextBlock>
      }
      {showRightIcon && <BtnIcon>{rightIcon}</BtnIcon>}
    </BtnSmallRoot>
  );
};

export default BtnSmall;
