import React from "react";
import { useMemo, useContext } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ThemeContext } from "../../App";
import "./dataTable.style.css";

const DataTable = ({ stockInfo }) => {
  const { theme } = useContext(ThemeContext);
  const data = useMemo(() => {
    if (stockInfo) {
      const { timeSeries } = stockInfo;
      const formattedData = Object.entries(timeSeries).map(([date, values]) => {
        return {
          date,
          open: values["1. open"],
          high: values["2. high"],
          low: values["3. low"],
          close: values["4. close"],
          adjustedClose: values["5. adjusted close"],
          volume: values["6. volume"],
          dividendAmount: values["7. dividend amount"],
          splitCoefficient: values["8. split coefficient"],
        };
      });
      console.log(formattedData);
      return formattedData;
    } else {
      return [];
    }
  }, [stockInfo]);

  const columns = [
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Open",
      accessorKey: "open",
    },
    {
      header: "High",
      accessorKey: "high",
    },
    {
      header: "Low",
      accessorKey: "low",
    },
    {
      header: "Close",
      accessorKey: "close",
    },
    {
      header: "Adjusted Close",
      accessorKey: "adjustedClose",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className="stock__data-table">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr className={`table-row-${theme}`} key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr className={`table-row-${theme}`} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
