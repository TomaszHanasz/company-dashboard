import React from "react";
import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import "./dataTable.style.css";

const DataTable = ({ stockInfo }) => {
  const data = useMemo(() => {
    if (stockInfo) {
      const { timeSeries } = stockInfo;
      return Object.entries(timeSeries).map(([date, values]) => ({
        date,
        ...values,
      }));
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
      accessorKey: "1. open",
    },
    {
      header: "High",
      accessorKey: "2. high",
    },
    {
      header: "Low",
      accessorKey: "3. low",
    },
    {
      header: "Close",
      accessorKey: "4. close",
    },
    {
      header: "Adjusted Close",
      accessorKey: "5. adjusted close",
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
          <tr key={headerGroup.id}>
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
            <tr key={row.id}>
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
