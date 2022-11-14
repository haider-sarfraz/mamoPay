import propTypes from "prop-types";
import { Form as FormikForm } from "formik";

export const Form = ({ children, className }) => {
  return <FormikForm className={className}>{children}</FormikForm>;
};
Form.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
};
Form.defaultProps = {
  className: "",
};
