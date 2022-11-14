import React from "react";
import IntlTelInput from "react-intl-tel-input";
import { Field, ErrorMessage } from "formik";

import { FormFieldError } from "../form-field-error/form-field-error";
import { Text } from "shared/components/text/text";
import { ClassNames } from "shared/utils/common.utils";
import "react-intl-tel-input/dist/main.css";

// eslint-disable-next-line react/prop-types
export const PhoneField = ({ name, className }) => {
  return (
    <div className={ClassNames(`flex flex-col gap-2 ${className}`)}>
      <Text type="paragraph-4" className="text-black-200">
        Phone (optional)
      </Text>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue, setFieldTouched } = form;
          const { value } = field;
          return (
            <IntlTelInput
              input
              type="tel"
              value={value}
              preferredCountries={["tw"]}
              onPhoneNumberChange={(_, phoneNumber) => {
                setFieldValue(name, phoneNumber);
              }}
              onPhoneNumberBlur={() => {
                setFieldTouched(name);
              }}
              inputClassName="w-full pb-2 border-b border-black-100 focus-visible:outline-none"
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FormFieldError} />
    </div>
  );
};
