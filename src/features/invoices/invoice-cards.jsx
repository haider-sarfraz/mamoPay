import propTypes from "prop-types";
import { InvoiceCard } from "./invoice-card";

export const InvoiceCards = ({ data, className }) => {
  if (data?.length > 0) {
    return (
      <div className={className}>
        {data.map((invoice, index) => {
          return (
            <InvoiceCard key={`${data.invoiceID}-${index}`} data={invoice} />
          );
        })}
      </div>
    );
  }
  return null;
};
InvoiceCards.propTypes = {
  className: propTypes.string,
  data: propTypes.arrayOf(
    propTypes.shape({
      invoiceID: propTypes.string,
      customer: propTypes.string,
      amount: propTypes.string,
      status: propTypes.string,
      createdAt: propTypes.string,
    })
  ),
};
InvoiceCards.defaultProp = {
  className: "",
  data: [],
};
