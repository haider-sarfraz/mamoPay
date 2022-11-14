/* eslint-disable react/prop-types */
import propTypes from "prop-types";
import { StatusPill } from "../../shared/components/status-pill/status-pill";
import { Text } from "../../shared/components/text/text";
import { ClassNames } from "../../shared/utils/common.utils";

const Cell = ({ children, className }) => {
  return <div className={ClassNames(`${className}`)}>{children}</div>;
};
Cell.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.string]),
  className: propTypes.string,
};
Cell.defaultProps = {
  children: null,
  className: "",
};

const WithControlButtonsCell = ({ row }) => {
  return (
    <Cell className="flex items-center justify-between pr-4.5">
      <Text>{row.original.createdAt}</Text>
      <Text>...</Text>
    </Cell>
  );
};

const WithStatusCell = ({ row }) => {
  return <StatusPill status={row.original.status} />;
};

export const COLUMNS = [
  {
    Header: "Invoice ID",
    accessor: "invoiceID",
    Cell: (props) => <Cell>{props.row.original.invoiceID}</Cell>,
  },
  {
    Header: "Customer",
    accessor: "customer",
    Cell: (props) => <Cell>{props.row.original.customer}</Cell>,
  },
  {
    Header: "Amount",
    accessor: "amount",
    Cell: (props) => <Cell>{props.row.original.amount}</Cell>,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: WithStatusCell,
  },
  {
    Header: "Created",
    accessor: "createdAt",
    Cell: WithControlButtonsCell,
  },
];
