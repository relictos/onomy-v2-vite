import styled from "styled-components";

import ModalDialog from "../../general/modals/ModalDialog";
import ExchangeOrderForm from "../ExchangeOrderForm";

const BuySellMobile = ({
  isOpen = false,
  closeModal,
}) => {

  const closeDialog = () => () => {
    closeModal();
  }

  return (
    <ModalDialog
      isOpen={isOpen}
      closeModal={closeDialog()}
      pretitle="Operations"
      title="Buy / Sell BTC"
    >
      <ExchangeOrderForm isMobile={true} />
    </ModalDialog>
  );
};

export default BuySellMobile;
