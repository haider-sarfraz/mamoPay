import propTypes from "prop-types";

import { Card } from "shared/components/card/card";
import { Text } from "shared/components/text/text";
import { StatusPill } from "../../shared/components/status-pill/status-pill";

export const InvoiceCard = ({ data }) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-3">
        <StatusPill status={data.status} />
        <Text className="text-black-200">...</Text>
      </div>
      <div className="flex items-center justify-between mb-1">
        <Text type="subtitles" className="text-black-500">
          {data.customer}
        </Text>
        <Text type="subtitles" className="text-black-500">
          {data.amount}
        </Text>
      </div>
      <div className="flex items-center justify-between">
        <Text type="paragraph-4" className="text-black-300">
          {data.invoiceID}
        </Text>
        <Text type="paragraph-4" className="text-black-300">
          {data.createdAt}
        </Text>
      </div>
    </Card>
  );
};
InvoiceCard.propTypes = {
  data: propTypes.shape({
    invoiceID: propTypes.string,
    status: propTypes.string,
    createdAt: propTypes.string,
    amount: propTypes.string,
    customer: propTypes.string,
  }),
};
InvoiceCard.defaultProps = {
  data: {},
};
