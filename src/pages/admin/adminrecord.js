import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Requests } from "../../utils/Index";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "./data";
import { customStyles } from "../../components/Table/CustomStyles";
import { toast } from "react-toastify";
import { CSVLink } from "react-csv";
createTheme(
  "solarized",
  {
    text: {
      primary: "#268bd2",
      secondary: "#2aa198",
    },
    background: {
      default: "#1a202c;",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    sortFocus: {
      default: "#2aa198",
    },
  },
  "dark"
);

function AdminRecord() {
  const [data, setData] = useState("");
  const tableData = {
    columns,
    data,
  };
  useEffect(() => {
    const token = localStorage.getItem("userinfo");
    if (token) {
      Requests.getAdminDetails(token)
        .then((res) => {
          setData(res.data.data);
          console.log(res);
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
    }
  }, []);
  return (
    <div className="p-8 px-12">
      <div className="text-right text-center">
        <CSVLink
          data={data}
          filename={"admin-record.csv"}
          className="py-2 px-6 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold rounded"
          target="_blank"
        >
          Download CSV
        </CSVLink>
      </div>
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          customStyles={customStyles}
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          theme="solarized"
        />
      </DataTableExtensions>
    </div>
  );
}

export default AdminRecord;
