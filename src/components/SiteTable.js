import React, { useContext } from "react";
import { useTable } from "react-table";
import SiteContext from "./SiteContext";

function SiteTable({ tableData }) {
    //sarea:區域 ar:站點 sbi: 場站目前車輛數量 bemp: 空位數量
    const data = React.useMemo(() => tableData, [tableData]);
    const columns = React.useMemo(
        () => [
            { Header: "縣市", accessor: "city" },
            { Header: "區域", accessor: "sarea" },
            { Header: "站點名稱", accessor: "ar" },
            { Header: "可借車輛", accessor: "sbi" },
            { Header: "可還空位", accessor: "bemp" },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    const ctx = useContext(SiteContext);

    return (
        <div
            className="flex justify-start mx-[32px] md:mx-[124px] mb-[34px] sm:mb-[44px] md:justify-center max-h-[500px] 
            mt-8 box-border overflow-y-auto overflow-x-auto
            border-collapse rounded-[8px] md:rounded-[18px] border-[0.5px] border-solid border-[#AEAEAE]"
        >
            <table
                className="whitespace-nowrap w-[100%] m-0 px-[40px] flex-row justify-evenly"
                {...getTableProps()}
            >
                <thead className="font-[500]">
                    {headerGroups.map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            {...headerGroup.getHeaderGroupProps()}
                            className="bg-[#B5CC22] h-[66px] m-0 p-0"
                        >
                            {headerGroup.headers.map((column) => (
                                <th
                                    key={headerGroup.headers}
                                    {...column.getHeaderProps()}
                                    className="text-[16px] md:text-[18px] text-white leading-6"
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody
                    {...getTableBodyProps}
                    className="text-[14px] md:text-[16px] font-[400]"
                >
                    {rows.map((row) => {
                        prepareRow(row);
                        return row.cells[2].value.includes(
                            ctx.searchSiteInput
                        ) ? (
                            <tr
                                key={row.id}
                                {...row.getRowProps()}
                                className="
                                    even:bg-[#F7F7F7]
                                    h-[66px] text-center"
                            >
                                {row.cells.map((cell) => (
                                    <td
                                        key={cell.row.id}
                                        {...cell.getCellProps()}
                                        className={
                                            typeof cell.value === "number"
                                                ? "text-[#B5CC22] p-2"
                                                : "p-2"
                                        }
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        ) : (
                            false
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SiteTable;
