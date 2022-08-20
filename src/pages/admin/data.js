import React from "react";
import { Link } from "react-router-dom";
export const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => (
      <div>
        {row.name} - {row.user_type}
        <br />
        <i>{row.email}</i>
      </div>
    ),
  },
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
  // {
  //   name: "View",
  //   button: true,
  //   cell: (row) => (
  //     <div className="text-center">
  //       <Link to={`${row._id}`}>
  //         <button
  //           type="button"
  //           className="text-white bg-gray-800 hover:bg-gray-900  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
  //         >
  //           View
  //         </button>
  //       </Link>
  //     </div>
  //   ),
  // },
];
