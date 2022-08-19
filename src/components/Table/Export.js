import React from "react";
// import Button from '../shared/Button';
// import data from '../constants/sampleMovieData';
// import DataTable from '../../src/index';
import { columns } from "../../pages/admin/data";
import DataTable, { createTheme } from "react-data-table-component";
// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function convertArrayOfObjectsToCSV(array, props) {
  let result;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(props.data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

export const Export = ({ onExport }) => (
  <button onClick={(e) => onExport(e.target.value)}>Export</button>
);

export const ExportCSV = (props) => {
  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(props.data)} />,
    []
  );

  return (
    <DataTable
      title="Movie List"
      columns={columns}
      data={props.data}
      actions={actionsMemo}
    />
  );
};

export default {
  title: "Examples/Export CSV",
  component: ExportCSV,
};
