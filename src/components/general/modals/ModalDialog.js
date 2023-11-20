import styled from "styled-components";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import SpinnerIcon from '../../svg/states/loading-spinner.svg?react';
import DoneIcon from '../../svg/states/done.svg?react';


const DialogRoot = styled.div`
  position: relative;
  z-index: 10;
`;
const DialogDarkOverlay = styled.div`
  position: fixed;
  inset: 0px;
  background: var(--dialog-dark-overlay);
`;
const DialogOuterContainer = styled.div`
  position: fixed;
  inset: 0px;
  overflow-y: auto;
`;
const DialogInnerContainer = styled.div`
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--padding-12px);
`;
const DialogPanel = styled.div`
  max-width: 700px;
  width: 100%;
  overflow: hidden;
  vertical-align: middle;
  text-align: left;
  border-radius: var(--br-6px);
  background-color: var(--bg-block-bg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`;
const DialogTitleBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4px);
  box-sizing: border-box;
  padding: var(--padding-20px);
  border-bottom: 1px solid var(--color-border-default);

  @media screen and (max-width: 959px) {
    padding: var(--padding-16px);
  }
`;
const DialogPretitle = styled.div`
  font-size: var(--text-12-size);
  color: var(--color-text-2lvl);
  font-weight: var(--text-medium);
`;
const DialogTitle = styled.div`
  font-size: var(--text-16-size);
  color: var(--color-text-1lvl);
  font-weight: var(--text-semibold);
`;
const DialogBody = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-20px);
  gap: var(--gap-20px);
  box-sizing: border-box;

  @media screen and (max-width: 959px) {
    padding: var(--padding-16px);
  }
`;

const DialogStepRoot = styled.div`
  align-self: stretch;
  display: ${(p) => p.active? 'block': 'none'};
`;

const DialogStateText = styled.div`
  align-self: stretch;
  font-size: var(--text-14-size);
  color: var(--color-text-3lvl);
  font-weight: var(--text-medium);
`;

const DialogStateTitle = styled.div`
  align-self: stretch;
  font-size: var(--text-16-size);
  color: var(--color-text-1lvl);
  font-weight: var(--text-semibold);
`;

const DialogStateTextContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: var(--gap-8px);
  text-align: center;
`;

const DialogStateIconContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-8px);
`;

const DoneIconModal = styled(DoneIcon)`
  >rect{
    fill: var(--color-green);
  }
  >g>path{
    fill: var(--color-text-black)
  }
`;
const SpinnerIconModal = styled(SpinnerIcon)`
  stroke: var(--color-text-1lvl);
`;
const DialogStateIcon = styled.div`
  position: relative;
  width: 144px;
  height: 144px;
  overflow: hidden;
  flex-shrink: 0;

  >svg{
    width: 144px;
    height: 144px;
  }
`;

const DialogExtraContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-16px);
  >*{
    align-self: center;
  }
`;

const DialogStateRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: var(--gap-20px);

  @media screen and (max-width: 959px) {
    gap: var(--gap-12px);
  }
`;

export const DialogState = ({
  type = "progress",
  title = "Title",
  text = "some text",
  onClick,
  children
}) => {
  return (
    <DialogStateRoot onClick={onClick}>
      <DialogStateIconContainer>
        {type == 'progress' && <DialogStateIcon><SpinnerIconModal /></DialogStateIcon>}
        {type == 'success' && <DialogStateIcon><DoneIconModal /></DialogStateIcon>}
      </DialogStateIconContainer>
      <DialogStateTextContainer>
        <DialogStateTitle>{title}</DialogStateTitle>
        <DialogStateText>{text}</DialogStateText>
      </DialogStateTextContainer>
      <DialogExtraContainer>
        {children}
      </DialogExtraContainer>
    </DialogStateRoot>
  );
}

export const DialogStep = ({
  active = false,
  children
}) => {
  return (
    <DialogStepRoot active={active}>{children}</DialogStepRoot>
  );
}

const ModalDialog = ({
  isOpen = false,
  closeModal,
  pretitle = "Pretitle",
  title = "Modal Title",
  children
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as={DialogRoot} onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogDarkOverlay />
        </Transition.Child>

        <DialogOuterContainer>
          <DialogInnerContainer>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel as={DialogPanel}>
                <DialogTitleBlock>
                  <DialogPretitle>{pretitle}</DialogPretitle>
                  <Dialog.Title as={DialogTitle}>
                    {title}
                  </Dialog.Title>
                </DialogTitleBlock>
                <DialogBody>
                  {children}
                </DialogBody>
              </Dialog.Panel>
            </Transition.Child>
          </DialogInnerContainer>
        </DialogOuterContainer>
      </Dialog>
    </Transition>
  );
};

export default ModalDialog;
