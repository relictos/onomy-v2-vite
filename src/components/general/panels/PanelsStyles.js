import styled from "styled-components";

export const Panel = styled.div`
  align-self: stretch;
  border-radius: var(--br-6px);
  background-color: var(--bg-block-bg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-20px);
  gap: var(--gap-20px);
  box-sizing: border-box;
  
  @media screen and (max-width: 959px) {
    padding-left: var(--padding-12px);
    padding-right: var(--padding-12px);
  }
`;