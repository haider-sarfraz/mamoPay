import propTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

import { FormFieldError } from "../form-field-error/form-field-error";
import { Text } from "../../text/text";
import { ClassNames } from "shared/utils/common.utils";

export const AmountField = ({
  label,
  labelClass,
  name,
  placeHolder,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <Text type="headline-3" className="text-black-500">
          {label}
        </Text>
      )}
      <div className="w-full sm:w-1/2">
        <Field name={name}>
          {({ meta, field }) => {
            const { error, touched } = meta;
            const borderColor =
              touched && error ? "border-bold-red-500" : "border-black-100";

            return (
              <div
                className={`flex items-center gap-2 border-b ${borderColor} mb-3`}
              >
                <Text
                  type="paragraph-1"
                  className={ClassNames(`text-black-200 ${labelClass}`)}
                >
                  AED
                </Text>
                <input
                  id={name}
                  name={name}
                  autoComplete="off"
                  type="number"
                  placeholder={placeHolder}
                  className="w-full h-[38px] focus-visible:outline-none"
                  {...inputProps}
                  {...field}
                />
              </div>
            );
          }}
        </Field>
        <ErrorMessage name={name} component={FormFieldError} />
      </div>
    </div>
  );
};
AmountField.propTypes = {
  label: propTypes.string,
  labelClass: propTypes.string,
  name: propTypes.string,
  placeHolder: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
};
AmountField.defaultProps = {
  labelClass: "",
};
