import propTypes from "prop-types";
import { ClassNames } from "../../utils/common.utils";

export const Card = ({ children, className }) => {
  return (
    <div className={ClassNames(`bg-mamo-white-500 rounded-2xl ${className}`)}>
      {children}
    </div>
  );
};
Card.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
};
Card.defaultProps = {
  children: null,
  className: "",
};
