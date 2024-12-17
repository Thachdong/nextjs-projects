'use client'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import style from "./index.module.scss";

interface ITableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  showFooter?: boolean;
  tableClassName?: string;
  theadClassName?: string;
  tbodyClassName?: string;
  tfootClassName?: string;
  thClassName?: string;
  tdClassName?: string;
}

export function Table<T>({
  data,
  columns,
  showFooter = false,
  ...classNames
}: ITableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const header = useMemo(() => {
    const headerGroups = table.getHeaderGroups();

    return headerGroups.map(({ id, headers }) => (
      <tr key={id}>
        {headers.map((header) => (
          <th className={classNames?.thClassName || ""} key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </th>
        ))}
      </tr>
    ));
  }, [table]);

  const body = useMemo(() => {
    const { rows } = table.getRowModel();

    return rows.map((row) => {
      const cells = row.getVisibleCells();
      return (
        <tr key={row.id}>
          {cells.map((cell) => (
            <td className={classNames.tdClassName || ""} key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      );
    });
  }, [table]);

  const footer = useMemo(() => {
    const footerGroups = table.getFooterGroups();

    return footerGroups.map(({ id, headers }) => {
      return (
        <tr key={id}>
          {headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      );
    });
  }, [table]);

  return (
    <table
      className={`${style["app-table"]} ${classNames.tableClassName || ""}`}
    >
      <thead className={`bg-gray-300 ${classNames?.theadClassName || ""}`}>
        {header}
      </thead>
      <tbody className={classNames?.tbodyClassName || ""}>{body}</tbody>

      {showFooter && (
        <tfoot className={classNames?.tfootClassName || ""}>{footer}</tfoot>
      )}
    </table>
  );
}
