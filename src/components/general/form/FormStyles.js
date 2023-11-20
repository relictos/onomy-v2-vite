import styled from "styled-components";
import InputBlock from "../inputs/InputBlock";

const FormInfoBlock = styled.div`
  background: var(--bg-element-bg);
  border-radius: var(--br-4px);
  padding: var(--padding-16px) var(--padding-12px);
  font-size: var(--text-14-size);
  color: var(--color-text-3lvl);
  font-weight: var(--text-medium);
  align-self: stretch;
`;

const DetailsRecLabel = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-medium);
`;
const DetailsRecText = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: var(--text-medium);
  color: var(--color-text-2lvl);
  text-align: right;
`;
const FormDetailsRecRoot = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: var(--text-12-size);
  color: var(--color-text-3lvl);
  
  align-self: stretch;
  gap: var(--gap-4px);
`;
const FormDetailsRightButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6px);
  >button{
    align-self: stretch;
  }
`;

const FormButtonsGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);

  >button{
    flex: 1 1 0%;
  }
`;

const FormFieldsGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);
`;
const FormLabel = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: var(--text-medium);
  font-size: var(--text-14-size);
  color: var(--color-text-3lvl);
`;
const FormDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12px);
  font-size: var(--text-12-size);
`;
const FormContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16px);
`;
const FormBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-20px);
`;

const FormDetailsRec = ({
  label = "Est. Transaction Fee",
  children
}) => {
  return (
    <FormDetailsRecRoot>
      <DetailsRecLabel>{label}</DetailsRecLabel>
      <DetailsRecText>{children}</DetailsRecText>
    </FormDetailsRecRoot>
  );
};

const FormDetailsClass = ({
  Root: FormDetails,
  Rec: FormDetailsRec,
  RightButtons: FormDetailsRightButtons
});

const Form = ({
  Root: FormBlock,
  Content: FormContent,
  Group: FormFieldsGroup,
  Details: FormDetailsClass,
  Label: FormLabel,
  Info: FormInfoBlock,
  Input: InputBlock,
  ButtonsGroup: FormButtonsGroup
});

export default Form;
