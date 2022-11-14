import propTypes from "prop-types";
import { ClassNames } from "shared/utils/common.utils";

export const Divider = ({ className }) => (
  <div
    className={ClassNames(`border-b border-mamo-blue-400 ${className}`)}
  ></div>
);
Divider.propTypes = {
  className: propTypes.string,
};
Divider.defaultProps = {
  className: "",
};
