import { CustomTable } from "@shared/common/CustomTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SortingState } from "@tanstack/react-table";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const makeData = (len: number) => {
  const arr: any[] = [];
  for (let i = 0; i < len; i++) {
    arr.push({
      order: i,
      date: i + 1,
      shipTo: i + 2,
      status: i + 3,
      amount: i + 4,
    });
  }
  return arr;
};

const DemoTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const columns = [
    {
      accessorKey: "order",
      header: "Order",
      id: "order",
      cell: (info) => info.getValue(),
      size: 200,
    },
    {
      header: "Date",
      accessorKey: "date",
      id: "date",
      size: 150,
      cell: (info) => info.getValue(),
    },
    {
      header: "Ship To",
      accessorKey: "shipTo",
      id: "shipTo",
      cell: (info) => info.getValue(),
      size: 500,
    },
    {
      header: "Status",
      accessorKey: "status",
      id: "status",
      size: 200,
      cell: (info) => info.getValue(),
    },
    {
      header: "Amount",
      accessorKey: "amount",
      id: "amount",
      size: 100,
      cell: (info) => info.getValue(),
    },
    {
      header: "",
      accessorKey: "action",
      id: "action",
      size: 5,
      cell: (info) => (
        <Button variant="outline-light" className="border-0 shadow-3">
          <FontAwesomeIcon className="text-black" icon="ellipsis" />
        </Button>
      ),
    },
  ];
  const data = {
    data: makeData(20),
    currentPage: 0,
    pageSize: 10,
    totalItem: 20,
  };
  return (
    <CustomTable
      dataTable={data}
      columnsTemplate={columns}
      enableRowSelection={false}
      rowSelection={rowSelection}
      onRowSelectionChange={setRowSelection}
      sorting={sorting}
      setSorting={setSorting}
      onPageNumberChange={(page:number) => {
        console.log({page})
      }}
    />
  );
};

export default DemoTable;
