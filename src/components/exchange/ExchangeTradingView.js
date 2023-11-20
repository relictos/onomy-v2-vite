import styled from "styled-components";

const TradingviewText = styled.b`
  position: relative;
  text-transform: capitalize;
`;
const TradingviewBlock = styled.div`
  align-self: stretch;
  border-radius: var(--br-6px);
  background-color: var(--bg-element-bg);
  height: 406px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 959px) {
    height: 376px;
  }
`;

const ExchangeTradingView = () => {
  return (
    <TradingviewBlock>
      <TradingviewText>TradingView</TradingviewText>
    </TradingviewBlock>
  );
};

export default ExchangeTradingView;
