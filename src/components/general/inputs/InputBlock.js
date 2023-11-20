import styled from "styled-components";
import BtnSmall from "../buttons/BtnSmall";
import { Children } from "react";
import { useState } from 'react';

const InputLabel = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-medium);
`;
const InputText = styled.input`
  background: none;
  position: relative;
  border: 0px;
  font-size: var(--text-16-size);
  text-transform: capitalize;
  font-weight: var(--text-semibold);
  color: var(--color-text-1lvl);
  width: 100%;
  
  ::placeholder {
    color: var(--color-text-2lvl);;
    opacity: 1; 
  }
  &:focus{
    outline: none;
    border: 0px;
  }
`;
const InputLeftText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8px) 0px 0px;
  gap: var(--gap-4px);
`;
const RightText = styled.b`
  position: relative;
  font-size: var(--text-16-size);
  text-transform: capitalize;
  font-weight: var(--text-semibold);
`;
const InputRightText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-4px);
  text-align: right;
`;
const InputBlockRoot = styled.div`
  border-radius: var(--br-4px);
  background-color: var(--bg-element-bg);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-12px) var(--padding-16px);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--text-12-size);
  color: var(--color-text-3lvl);
  
  align-self: stretch;
`;

const InputBlock = ({
  label = "Price, USDT",
  text = "28,991.00",
  placeholder = "0.00",
  rightLabel = "Balance",
  rightText = "57,982.00",
  showRightText = false,
  disabled = false,
  children
}) => {

  const [value, setValue] = useState(text)
  const handleChange = (e) => {
    setValue(e.currentTarget.value)
  }

  return (
    <InputBlockRoot>
      <InputLeftText>
        <InputLabel>{label}</InputLabel>
        <InputText disabled={disabled} type="text" value={value} placeholder={placeholder} onChange={handleChange}></InputText>
      </InputLeftText>
      {showRightText && (
        <InputRightText>
          <InputLabel>{rightLabel}</InputLabel>
          <RightText>{rightText}</RightText>
        </InputRightText>
      )}
      {children}
    </InputBlockRoot>
  );
};

export default InputBlock;
