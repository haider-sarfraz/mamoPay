import propTypes from "prop-types";
import { useState } from "react";

import { TabItem } from "shared/components/tab-item/tab-item";
import { useScreenDimension } from "../../shared/hooks/window.hooks";
import { AddInvoiceButton } from "./add-invoice-button";

export const InvoiceTableTabsPanel = ({ filters, onAddInvoice }) => {
  const { isMobile } = useScreenDimension();
  const [selectedTab, setSelectedTab] = useState(filters[0].label);

  return (
    <div className="flex items-center justify-between pl-5 pr-3 md:px-8">
      <div className="flex gap-6 max-w-tab-filters-tablet lg:max-w-tab-filters overflow-x-auto">
        {filters.length > 0
          ? filters.map((filter) => {
              return (
                <TabItem
                  key={filter.label}
                  isSelected={selectedTab === filter.label}
                  onClick={() => setSelectedTab(filter.label)}
                >
                  {filter.label} ({filter.count})
                </TabItem>
              );
            })
          : null}
      </div>
      {!isMobile ? <AddInvoiceButton onClick={onAddInvoice} /> : null}
    </div>
  );
};
InvoiceTableTabsPanel.propTypes = {
  filters: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      count: propTypes.number,
    })
  ),
  onAddInvoice: propTypes.func.isRequired,
};
InvoiceTableTabsPanel.defaultProps = {
  filters: [
    { label: "All invoices", count: 32 },
    { label: "Outstanding", count: 5 },
    { label: "Paid", count: 25 },
    { label: "Cancelled", count: 2 },
  ],
};
