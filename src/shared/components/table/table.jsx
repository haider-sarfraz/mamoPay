/* eslint-disable react/prop-types */
import { useTable } from "react-table";

import { TableFooter } from "./table-footer";
import { ClassNames } from "shared/utils/common.utils";

export { TableFooter };

const Table = ({
  columns,
  data,
  rowKey,
  containerClass,
  tableClass,
  cellClass,
  headerRowClass,
  headerCellClass,
}) => {
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={containerClass}>
      <table
        {...getTableProps()}
        className={ClassNames(`min-w-full ${tableClass}`)}
      >
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr
              key={index}
              {...headerGroup.getHeaderGroupProps()}
              className={headerRowClass}
            >
              {headerGroup.headers.map((column, index) => {
                return (
                  <th
                    key={index}
                    {...column.getHeaderProps()}
                    className={ClassNames(`text-left ${headerCellClass}`)}
                  >
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-black-50">
          {rows.map((row) => {
            prepareRow(row);
            const key = row[rowKey] || row.getRowProps().key;
            return (
              <tr {...row.getRowProps()} key={key}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      key={index}
                      {...cell.getCellProps()}
                      className={ClassNames(`whitespace-nowrap ${cellClass}`)}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.Footer = TableFooter;

export default Table;
