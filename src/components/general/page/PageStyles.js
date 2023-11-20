import styled from "styled-components";
import LeftMenu from "../menu/LeftMenu";

const PageLeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16px);
  @media screen and (max-width: 959px) {
    flex: unset;
    align-self: stretch;
    gap: var(--gap-12px);
  }
`;
const PageRightColumn = styled.div`
  width: 407px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);

  @media screen and (max-width: 1199px) {
    width: 320px;
  }
  @media screen and (max-width: 959px) {
    align-self: stretch;
    width: auto;
    gap: var(--gap-12px);
  }
`;
const BodyContentBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-24px) var(--padding-32px);
  gap: var(--gap-24px);
  @media screen and (max-width: 1199px) {
    padding: 0px var(--padding-24px);
    box-sizing: border-box;
  }

  @media screen and (max-width: 959px) {
    flex-direction: column;
    gap: var(--gap-12px);
    padding: var(--padding-16px) var(--padding-12px);
    box-sizing: border-box;
  }
  @media screen and (max-width: 350px) {
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
`;
const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: 1920px) {
    max-width: 1800px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 80px;
  }
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 959px) {
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 350px) {
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
`;
const PageRoot = styled.div`
  position: relative;
  background-color: var(--bg-body-bg);
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: middle;
  justify-content: center;
  text-align: left;
  
  @media screen and (max-width: 1199px) {
    flex-direction: column;
    gap: var(--gap-24px);
  }
  @media screen and (max-width: 959px) {
    height: auto;
    gap: var(--gap-0px);
  }
`;

const PageContent = ({
  children
}) => {
  return(
    <BodyContainer>
      <BodyContentBlock>
        {children}
      </BodyContentBlock>
    </BodyContainer>
  )
}
const Page = ({
  Root: PageRoot,
  LeftMenu: LeftMenu,
  Content: PageContent,
  LeftColumn: PageLeftColumn,
  RightColumn: PageRightColumn
});

export default Page;
