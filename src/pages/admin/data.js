import React from "react";
import { Link } from "react-router-dom";
export const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  // {
  //   name: "College",
  //   selector: (row) => row.college,
  //   sortable: true,
  // },
  {
    name: "Aadhar",
    selector: (row) => row.aadhar_remark,
    sortable: true,
  },
  {
    name: "Pan Card",
    selector: (row) => row.pan_remark,
    sortable: true,
  },
  {
    name: "Bank Details",
    selector: (row) => row.seeded_remark,
    sortable: true,
  },
];
