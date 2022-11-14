import { Formik } from "formik";
import * as Yup from "yup";
import propTypes from "prop-types";

import { Button } from "shared/components/button/button";
import { InputField } from "shared/components/form/input-field/input-field";
import { PhoneField } from "shared/components/form/phone-field/phone-field";
import { AmountField } from "../../shared/components/form/amount-field/amount-field";
import { Text } from "../../shared/components/text/text";
import { Form } from "../../shared/components/form/form";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  amount: "",
  description: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Please enter your customer's first name"),
  lastName: Yup.string().required("Please enter your customer's last name"),
  email: Yup.string()
    .email("Email must be valid")
    .required("Please enter your customer's "),
  phone: Yup.string().optional(),
  amount: Yup.number().required("An amount is required"),
  description: Yup.string().required("Please add a description"),
});

export const InvoiceForm = ({ onSubmit }) => {
  return (
    <div className="mt-8">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit?.(values);
        }}
      >
        {({ isValid, dirty }) => {
          return (
            <Form>
              <Text type="headline-3" className="text-black-500">
                Customer name
              </Text>
              <div className="flex flex-col gap-12 mt-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 lg:col-span-1">
                    <InputField name="firstName" placeholder="First name" />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <InputField name="lastName" placeholder="Last name" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 lg:col-span-1">
                    <InputField name="email" placeholder="Email" />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <PhoneField name="phone" className="mt-0 lg:-mt-[19px]" />
                  </div>
                </div>
                <AmountField label="Amount" name="amount" placeHolder="0.00" />
                <InputField
                  label="Description"
                  name="description"
                  placeholder="What's payment for"
                />
                <Button
                  type="submit"
                  variant="pill-primary"
                  disabled={!(isValid && dirty)}
                  className="bg-mamo-blue-500 w-full sm:w-42.5 sm:place-self-center disabled:bg-black-100"
                >
                  <Text type="button-1" className="text-mamo-white-500">
                    Send Invoice
                  </Text>
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
InvoiceForm.propTypes = {
  onSubmit: propTypes.func,
};
