import propTypes from "prop-types";

import { ReactComponent as ErrorIcon } from "shared/assets/svgs/error-icon.svg";
import { Text } from "../../text/text";

export const FormFieldError = ({ children }) => {
  return (
    <div className="flex items-center h-8 rounded-lg gap-0.5 bg-bold-red-50">
      <ErrorIcon className="ml-2" />
      <Text type="error">{children}</Text>
    </div>
  );
};
FormFieldError.propTypes = {
  children: propTypes.string,
};
FormFieldError.defaultProps = {
  children: "",
};
