import styled, {css} from "styled-components";

const LeftIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const BtnText = styled.div`
  flex: 1;
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-semibold);
`;
const BtnTextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-12px);
`;
const BtnBigRoot = styled.button`
  border: 0px;
  border-radius: var(--br-4px);
  background-color: var(--bg-button-primary);
  box-shadow: var(--btn-primary-inner-shadow);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-16px) var(--padding-12px);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--text-14-size);
  color: var(--color-text-1lvl);
  
  align-self: stretch;
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
      border: 1px solid var(--color-border-highlight);
    ` : ''}
`;

const BtnBig = ({
  text = "Add Liquidity",
  type = "secondary",
  showRightIcon = false,
  showLeftIcon = false,
  disabled = false,
  onClick
}) => {
  return (
    <BtnBigRoot disabled={disabled} type={type} onClick={onClick}>
      {showLeftIcon && <LeftIcon alt="" src="/lefticon.svg" />}
      <BtnTextBlock>
        <BtnText>{text}</BtnText>
      </BtnTextBlock>
      {showRightIcon && <LeftIcon alt="" src="/righticon.svg" />}
    </BtnBigRoot>
  );
};

export default BtnBig;
