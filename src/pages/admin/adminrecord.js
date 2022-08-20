import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Requests } from "../../utils/Index";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "./data";
import { customStyles } from "../../components/Table/CustomStyles";
import jsPDF from "jspdf";
import "jspdf-autotable";

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
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Admin Record";
    const headers = [["Name", "Aadhar", "Pan Card", "Bank Details"]];

    const data = data.map((elt) => [
      elt.name,
      elt.aadhar_remark,
      elt.pan_remark,
      elt.seeded_remark,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };
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
  const tableData = {
    columns,
    data,
  };

  return (
    <div className="p-8 px-12">
      <button onClick={() => exportPDF()}>Generate Report</button>
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          customStyles={customStyles}
          defaultSortField="Name"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          theme="solarized"
        />
      </DataTableExtensions>
    </div>
  );
}

export default AdminRecord;
