import { useMemo, useState } from "react";

import Table from "shared/components/table/table";
import { TableFooter } from "../../shared/components/table/table-footer";
import { DATA } from "./invoices-fixtures";
import { COLUMNS } from "./invoices-table-columns";
import { InvoiceTableTabsPanel } from "./invoices-table-tabs-panel";
import { Divider } from "shared/components/divider/divider";
import { AddInvoiceModal } from "./add-invoice-modal";
import { Card } from "../../shared/components/card/card";
import { InvoiceCards } from "./invoice-cards";
import { AddInvoiceButton } from "./add-invoice-button";
import { useScreenDimension } from "../../shared/hooks/window.hooks";

export const InvoicesPage = () => {
  const [showAddInvoiceModal, setShowAddInvoiceModal] = useState(false);
  const { isMobile } = useScreenDimension();

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  return (
    <Card className="bg-black-25 md:bg-mamo-white-500">
      <InvoiceTableTabsPanel
        onAddInvoice={() => setShowAddInvoiceModal(true)}
      />
      <Divider className="border-black-50 -mt-px" />
      <Table
        columns={columns}
        data={data}
        tableClass="hidden md:table mt-8"
        containerClass="px-8"
        headerRowClass="bg-black-25"
        headerCellClass="h-12 text-xs text-black-200 first:pl-4 first:rounded-l-xl last:rounded-r-xl"
        cellClass="h-16 text-sm text-black-500 first:pl-4"
      />
      <InvoiceCards
        data={data}
        className="flex md:hidden flex-col gap-3 mt-4 mx-5"
      />
      <Divider className="border-black-50" />
      <TableFooter className="hidden md:flex items-center justify-between px-8" />

      {isMobile ? (
        <AddInvoiceButton
          className="absolute bottom-5 right-5"
          onClick={() => setShowAddInvoiceModal(true)}
        />
      ) : null}

      <AddInvoiceModal
        isOpen={showAddInvoiceModal}
        onClose={() => setShowAddInvoiceModal(false)}
        onSubmit={() => setShowAddInvoiceModal(false)}
      />
    </Card>
  );
};
