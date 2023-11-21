import styled, {css} from "styled-components";
import { useState } from 'react';

import ExchangeOrderForm from "./ExchangeOrderForm";
import ExchangeMetricsBlock from "./ExchangeMetricsBlock";

const ExchangeRightColumn = () => {

  const [expanded, setExpanded] = useState(false);
  const changeExpanded = (expanded) => () => {
    setExpanded(expanded);
  }

  return (
    <>
      <ExchangeOrderForm hide={expanded} />
      <ExchangeMetricsBlock expanded={expanded} changeExpanded={changeExpanded} />
    </>
  );
};

export default ExchangeRightColumn;
