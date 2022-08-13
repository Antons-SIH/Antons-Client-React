import React from "react";

export const columns = [
  {
    name: "Id",
    selector: "id",
    sortable: true,
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Document Verified",
    selector: "document",
    sortable: true,
    cell: (d) => <span>{d.document.join(", ")}</span>,
  },
  {
    name: "Year",
    selector: "year",
    sortable: true,
  },
];

export const data = [
  {
    id: 1,
    year: "1988",
    document: ["Aadhar", "Pan Card"],
    name: "Aadhar",
  },
  {
    id: 2,
    year: "1984",
    document: ["Aadhar"],
    name: "Aadhar",
  },
  {
    id: 3,
    year: "1994",
    document: ["Aadhar", "Pan Card"],
    name: "Pan Card",
  },
  {
    id: 4,
    year: "1986",
    document: ["Aadhar", "Pan Card", "Bank"],
    name: "Pan Card",
  },
  {
    id: 5,
    year: "2008",
    document: ["Pan Card"],
    name: "Aadhar",
  },
  {
    id: 6,
    year: "2007",
    document: ["Aadhar", "Pan Card"],
    name: "Aadhar",
  },
  {
    id: 7,
    year: "2002",
    document: ["Aadhar", "Pan Card"],
    name: "Pan Card",
  },
];
