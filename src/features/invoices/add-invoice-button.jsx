import propTypes from "prop-types";

import { Button } from "shared/components/button/button";
import { Text } from "shared/components/text/text";
import { ReactComponent as AddIcon } from "shared/assets/svgs/plus-icon.svg";
import { ClassNames } from "shared/utils/common.utils";

export const AddInvoiceButton = ({ onClick, className }) => {
  return (
    <Button
      variant="pill-primary"
      className={ClassNames(
        `w-42.5 md:w-12 lg:w-42.5 flex p-4 xl:p-0 bg-mamo-blue-500 gap-2 ${className}`
      )}
      onClick={onClick}
    >
      <AddIcon className="min-w-6 min-h-6 lg:w-4.5 lg:h-4.5" />
      <Text
        type="button-2"
        className="flex md:hidden lg:flex text-mamo-white-500"
      >
        New Invoice
      </Text>
    </Button>
  );
};
AddInvoiceButton.propTypes = {
  onClick: propTypes.func.isRequired,
  className: propTypes.string,
};
AddInvoiceButton.defaultProps = {
  className: "",
};
