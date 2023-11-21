import styled, {css} from "styled-components";

export const TabsList = styled.div`
  flex: 1 1 0%;
  align-self: stretch;
  border-bottom: 1px solid var(--color-border-default);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-20px);
`;

const TabText = styled.div`
  position: relative;
  font-weight: var(--text-medium);
`;
const CounterText = styled.div`
  position: relative;
  font-weight: var(--text-medium);
`;
const TabCounter = styled.div`
  border-radius: var(--br-24px);
  background-color: var(--bg-element-bg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6px);
  color: var(--color-text-2lvl);
`;
const TabItemRootDefault = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-20px);
  gap: var(--gap-8px);
  text-align: left;
  font-size: var(--text-14-size);
  color: var(--color-text-3lvl);
  
  cursor: pointer;
  transition: color var(--transition-default);
  
  &:hover {
    color: var(--color-text-1lvl);
  }
`;
const TabItemRootActive = styled(TabItemRootDefault)`
  border-bottom: 3px solid var(--color-border-highlight);
  cursor: default;
  font-weight: var(--text-semibold);
  color: var(--color-text-1lvl);
`;

export const TabItem = ({
  text = "Active Orders",
  count = "3",
  counter = false,
  active = false,
  onClick
}) => {

  const TabItemRoot = active ? TabItemRootActive : TabItemRootDefault;

  return (
    <TabItemRoot onClick={onClick}>
      <TabText>
        {text}
      </TabText>
      {counter && (
        <TabCounter>
          <CounterText>
            {count}
          </CounterText>
        </TabCounter>
      )}
    </TabItemRoot>
  );
};