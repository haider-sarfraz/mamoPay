import propTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

import { FormFieldError } from "../form-field-error/form-field-error";

export const InputField = ({ name, placeHolder, ...inputProps }) => {
  return (
    <div className="w-full">
      <Field name={name}>
        {({ meta, field }) => {
          const { error, touched } = meta;
          const borderColor =
            touched && error ? "border-bold-red-500" : "border-black-100";

          return (
            <input
              id={name}
              name={name}
              autoComplete="off"
              placeholder={placeHolder}
              className={`w-full h-[38px] focus-visible:outline-none border-b ${borderColor} mb-3`}
              {...inputProps}
              {...field}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FormFieldError} />
    </div>
  );
};

InputField.propTypes = {
  name: propTypes.string,
  placeHolder: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
};
