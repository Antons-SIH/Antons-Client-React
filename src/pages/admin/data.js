export const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "User Type",
    selector: (row) => row.user_type,
    sortable: true,
  },
  {
    name: "Aadhar",
    selector: (row) => row.aadhar,
    sortable: true,
  },
  {
    name: "Pan Card",
    selector: (row) => row.pan,
    sortable: true,
  },
  {
    name: "Bank Details",
    selector: (row) => row.seeded,
    sortable: true,
  },
];
