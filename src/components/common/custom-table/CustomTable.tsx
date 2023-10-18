import React, { SetStateAction } from "react"
import { Button, Form, Pagination, Table } from "react-bootstrap"
import {
  ColumnDef,
  ColumnOrderState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import classNames from "classnames"

export interface IDataTable {
  data: any[]
  currentPage: number
  pageSize: number
  totalItem: number
}
interface CustomTableProps {
  dataTable: IDataTable
  columnsTemplate?: ColumnDef<any>[]
  isLoading?: boolean
  enableRowSelection?: boolean
  rowSelection?: any
  onRowSelectionChange?: any
  sorting?: SortingState
  setSorting?: any
  onPageNumberChange?: (page: number) => void
}

export const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, className, ...rest }: any, ref: any) => {
    const defaultRef = React.useRef();

    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <Form.Check
        type="checkbox"
        className={classNames('form-check fs-0 mb-0', className)}
      >
        <Form.Check.Input type="checkbox" ref={resolvedRef} {...rest} />
      </Form.Check>
    );
  }
);

const CustomTable: React.FC<CustomTableProps> = ({
  dataTable = {
    data: [],
    currentPage: 0,
    pageSize: 10,
    totalItem: 0,
  },
  isLoading,
  columnsTemplate = [],
  enableRowSelection,
  rowSelection = {},
  onRowSelectionChange,
  sorting = [],
  setSorting,
  onPageNumberChange,
}) => {

  const columns = React.useMemo(() => {
    return enableRowSelection ? [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        size: 5,
        cell: ({ row }) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      ...columnsTemplate
    ] : columnsTemplate
  }, [enableRowSelection])

  const totalPage = React.useMemo(() => {
    const result = Number(dataTable?.totalItem) / Number(dataTable.pageSize)
    return result > 0 ? result : 1
  }, [dataTable?.totalItem, dataTable.pageSize])

  const table = useReactTable({
    data: dataTable?.data,
    columns: columns,
    state: {
      rowSelection,
      sorting,
    },
    enableRowSelection: enableRowSelection,
    onSortingChange: setSorting,
    onRowSelectionChange: onRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  })

  const handleClickPrev = () => {
    let page = dataTable?.currentPage
    onPageNumberChange && onPageNumberChange(totalPage - 1)
  }

  const handleClickNext = () => {
    let page = dataTable?.currentPage
    onPageNumberChange && onPageNumberChange(page + 1)
  }

  const handleClickPageNumber = (page: number) => {
    onPageNumberChange && onPageNumberChange(page)
  }

  return (
    <>
      <Table striped hover className="w-100">
        <thead style={{ backgroundColor: '#EDF2F8' }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="text-black" key={header.id} style={{ width: header?.getSize(), backgroundColor: '#EDF2F8' }}>
                  {header.isPlaceholder
                    ? null
                    :
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{ width: cell.column.getSize() }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="w-100 d-flex justify-content-center">
        {dataTable?.totalItem > 0 && <Pagination className="gap-3" size="sm" onChange={(e: any) => {
          const value = e.target.value
          console.log({value})
        }}>
          <Pagination.Prev onClick={handleClickPrev} disabled={dataTable?.currentPage == 0}/>
          {
            [...Array(totalPage)]?.map((_, index) => {
              return (
                <Pagination.Item 
                  linkClassName="" 
                  linkStyle={{}} 
                  key={index + 1} 
                  active={index === dataTable.currentPage}
                  onClick={() => handleClickPageNumber(index)}
                >
                  {index + 1}
                </Pagination.Item>
              )
            })
          }
          <Pagination.Next onClick={handleClickNext} disabled={dataTable?.currentPage == totalPage -1} />
        </Pagination>}
      </div>
    </>
  )
}

export default CustomTable
