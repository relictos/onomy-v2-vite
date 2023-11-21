import styled from "styled-components";

const BtnIcon = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;

  >svg{
    height: 16px;
    width: 16px;

    >g>path{
      fill: var(--color-icon-highlight);
    }
  }
`;
const BtnIconXsRoot = styled.button`
  border-radius: var(--br-2px);
  background-color: var(--bg-button-secondary);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4px);
  cursor: pointer;
  transition: var(--transition-default);
  
  &:hover{
    background-color: var(--bg-button-secondary-hover);
  }
`;

const BtnIconXs = ({ 
  icon,
  onClick
}) => {
  return (
    <BtnIconXsRoot onClick={onClick}>
      <BtnIcon>{icon}</BtnIcon>
    </BtnIconXsRoot>
  );
};

export default BtnIconXs;
