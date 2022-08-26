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
    selector: (row) => (row.aadhar ? <>{row.aadhar}</> : "-"),
    sortable: true,
  },
  {
    name: "Pan Card",
    selector: (row) => (row.pan ? <>{row.pan}</> : "-"),
    sortable: true,
  },
  {
    name: "Bank Details",
    selector: (row) => (row.seeded_bank_acc ? <>{row.seeded_bank_acc}</> : "-"),
    sortable: true,
  },
];
