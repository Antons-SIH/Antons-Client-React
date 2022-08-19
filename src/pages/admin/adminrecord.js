import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Requests } from "../../utils/Index";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "./data";
import { customStyles } from "../../components/Table/CustomStyles";
import FilterComponent from "../../components/Table/FilterComponent";

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
    divider: {
      default: "#073642",
    },
    button: {
      default: "#2aa198",
      hover: "rgba(0,0,0,.08)",
      focus: "rgba(255,255,255,.12)",
      disabled: "rgba(255, 255, 255, .34)",
    },
    sortFocus: {
      default: "#2aa198",
    },
  },
  "dark"
);

function AdminRecord() {
  const [data, setData] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const tableData = {
    columns,
    data,
  };
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  useEffect(() => {
    const token = localStorage.getItem("userinfo");
    if (token) {
      Requests.getAdminDetails(token)
        .then((res) => {
          setData(res.data.data);
          console.log(res.data.data);
          console.log(res.data.data[0].user_type);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
    }
  }, []);

  return (
    <div className="p-8 px-12">
      <DataTableExtensions {...tableData}>
        <div className="py-8">
          <DataTable
            columns={columns}
            data={filteredItems}
            noHeader
            progressPending={isLoading}
            customStyles={customStyles}
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
            theme="solarized"
            fixedHeader
            fixedHeaderScrollHeight="700px"
          />
        </div>
      </DataTableExtensions>
    </div>
  );
}

export default AdminRecord;
