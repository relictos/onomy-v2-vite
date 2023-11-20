import styled from "styled-components";

export const TableRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);
  font-size: var(--text-12-size);
`;
export const TableHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6px);
  color: var(--color-text-3lvl);
`;
export const TableRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6px);
  color: var(--color-text-2lvl);
`;
export const TableCol = styled.div`
  flex: 1;
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-medium);
`;
export const LeftCol = styled(TableCol)`
  text-align: left;
`;
export const RightCol = styled(TableCol)`
  text-align: right;
`;

export const Text1lvl = styled.span`
  color: var(--color-text-1lvl);
`;
export const TextGreen = styled.span`
  color: var(--color-green);
`;
export const TextRed = styled.span`
  color: var(--color-red);
`;
export const Text3lvl = styled.span`
  color: var(--color-text-3lvl);
`;

const TableTextStyles = ({
  Primary: Text1lvl,
  Caption: Text3lvl,
  Green: TextGreen,
  Red: TextRed
});

const Table = ({
  Root: TableRoot,
  Header: TableHeader,
  Row: TableRow,
  Col: TableCol,
  ColLeft: LeftCol,
  ColRight: RightCol,
  Text: TableTextStyles
});

export default Table;
