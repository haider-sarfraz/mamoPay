import propTypes from "prop-types";

import Modal from "shared/components/modal/modal";
import { Text } from "../../shared/components/text/text";
import { InvoiceForm } from "./invoice-form";

// eslint-disable-next-line no-unused-vars
export const AddInvoiceModal = ({ isOpen, onSubmit, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4 text-center">
        <Text type="headline-1" className="text-black-500">
          Create and send invoice
        </Text>
        <Text type="paragraph-2" className="text-black-300">
          Create a resuable link with unlimited payments, or set a capacity for
          how many times it can be used
        </Text>
      </div>
      <InvoiceForm onSubmit={() => onSubmit()} />
    </Modal>
  );
};
AddInvoiceModal.propTypes = {
  isOpen: propTypes.bool,
  onSubmit: propTypes.func,
  onClose: propTypes.func,
};
