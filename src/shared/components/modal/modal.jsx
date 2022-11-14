import ReactModal from "react-modal";
import PropTypes from "prop-types";

import { ReactComponent as CrossIcon } from "shared/assets/svgs/cross-icon.svg";
import { ClassNames } from "shared/utils/common.utils";

export function Modal({ isOpen, onClose, className, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      overlayClassName="modal-overlay"
      className="modal-wrapper"
    >
      <div className={ClassNames(`modal-content ${className}`)}>
        <CrossIcon
          className="modal-close-icon cursor-pointer"
          onClick={onClose}
        />
        {children}
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  variant: PropTypes.oneOf(["base", "large"]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Modal.defaultProps = {
  variant: "base",
  isOpen: true,
  className: "",
};

export default Modal;
