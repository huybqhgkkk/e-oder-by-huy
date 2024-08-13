// avatar
import avatar1 from "@/assets/images/avatars/avatar1.png";
import avatar2 from "@/assets/images/avatars/avatar2.png";
import avatar5 from "@/assets/images/avatars/avatar5.png";
import avatar10 from "@/assets/images/avatars/avatar10.jpg";

// basic tables
const records = [
  {
    id: 1,
    name: "Risa D. Pearson",
    phoneNo: "336-508-2157",
    dob: "July 24, 1950",
    country: "India",
    accountNo: "AC336 508 2157",
    image: avatar1,
    cell: "Cell",
    activeClass: "bg-gray-50 dark:bg-gray-900",
  },
  {
    id: 2,
    name: "Ann C. Thompson",
    phoneNo: "646-473-2057",
    dob: "January 25, 1959",
    country: "USA",
    accountNo: "SB646 473 2057",
    image: avatar10,
    cell: "Cell",
  },
  {
    id: 3,
    name: "Paul J. Friend",
    phoneNo: "281-308-0793",
    dob: "September 1, 1939",
    country: "Canada",
    accountNo: "DL281 308 0793",
    image: avatar5,
    cell: "Cell",
  },
  {
    id: 4,
    name: "Linda G. Smith",
    phoneNo: "606-253-1207",
    dob: "May 3, 1962",
    country: "Brazil",
    accountNo: "CA269 714 6825",
    image: avatar2,
    cell: "Cell",
  },
];

const expandablerecords = [
  {
    product: "ASOS Ridley High Waist",
    courier: "FedEx",
    variant: "success",
    now: 100,
    status: "Delivered",
    price: "$79.49",
    Quantity: "82",
    Amount: "6,518.18",
  },
  {
    product: "Marco Lightweight Shirt",
    courier: "DHL",
    variant: "warning",
    now: 50,
    status: "Shipped",
    price: "$128.50",
    Quantity: "37",
    Amount: "4,754.50",
  },
  {
    product: "Half Sleeve Shirt",
    courier: "Bright",
    variant: "info",
    now: 25,
    status: "Order Received",
    price: "$39.99",
    Quantity: "64",
    Amount: "2,559.36",
  },
  {
    product: "Lightweight Jacket",
    courier: "FedEx",
    variant: "success",
    now: 100,
    status: "Delivered",
    price: "$20.00",
    Quantity: "184",
    Amount: "3,680.00",
  },
  {
    product: "Cargo Pant & Shirt",
    courier: "FedEx",
    variant: "danger",
    now: 10,
    status: "Payment Failed",
    price: "$28.49",
    Quantity: "69",
    Amount: "1,965.81",
  },
  {
    product: "ASOS Ridley High Waist",
    courier: "FedEx",
    variant: "danger",
    now: 10,
    status: "Payment Failed",
    price: "$79.49",
    Quantity: "82",
    Amount: "6,518.18",
  },
];

const nestedrecords = [
  {
    name: "Risa D. Pearson",
    phoneNo: "336-508-2157",
    dob: "July 24, 1950",
    country: "india",
    children: [
      {
        name: "Risa D. Pearson",
        phoneNo: "336-508-2157",
        dob: "July 24, 1950",
        country: "india",
      },
      {
        name: "Ann C. Thompson",
        phoneNo: "646-473-2057",
        dob: "January 25, 1959",
        country: "Canada",
      },
    ],
  },
  {
    name: "Linda G. Smith",
    phoneNo: "606-253-1207",
    dob: "September 2, 1939",
    country: "Belgium",
  },
];

const dataTableRecords = [
  {
    id: 1,
    name: "Jonathan",
    email: "jonathan@example.com",
    position: "Senior Implementation Architect",
    company: "Hauck Inc",
    country: "Holy See",
  },
  {
    id: 2,
    name: "Harold",
    email: "harold@example.com",
    position: "Forward Creative Coordinator",
    company: "Metz Inc",
    country: "Iran",
  },
  {
    id: 3,
    name: "Shannon",
    email: "shannon@example.com",
    position: "Legacy Functionality Associate",
    company: "Zemlak Group",
    country: "South Georgia",
  },
  {
    id: 4,
    name: "Robert",
    email: "robert@example.com",
    position: "Product Accounts Technician",
    company: "Hoeger",
    country: "San Marino",
  },
  {
    id: 5,
    name: "Noel",
    email: "noel@example.com",
    position: "Customer Data Director",
    company: "Howell - Rippin",
    country: "Germany",
  },
  {
    id: 6,
    name: "Traci",
    email: "traci@example.com",
    position: "Corporate Identity Director",
    company: "Koelpin - Goldner",
    country: "Vanuatu",
  },
  {
    id: 7,
    name: "Kerry",
    email: "kerry@example.com",
    position: "Lead Applications Associate",
    company: "Feeney, Langworth and Tremblay",
    country: "Niger",
  },
  {
    id: 8,
    name: "Patsy",
    email: "patsy@example.com",
    position: "Dynamic Assurance Director",
    company: "Streich Group",
    country: "Niue",
  },
  {
    id: 9,
    name: "Cathy",
    email: "cathy@example.com",
    position: "Customer Data Director",
    company: "Ebert, Schamberger and Johnston",
    country: "Mexico",
  },
  {
    id: 10,
    name: "Tyrone",
    email: "tyrone@example.com",
    position: "Senior Response Liaison",
    company: "Raynor, Rolfson and Daugherty",
    country: "Qatar",
  },
];

// Basic Table
const basicTable = [
  {
    id: 1,
    firstName: "Mark",
    lastName: "Jotto",
    username: "@mdo",
  },
  {
    id: 2,
    firstName: "Jacob",
    lastName: "Thornton",
    username: "@fat",
  },
  {
    id: 3,
    firstName: "Larry",
    lastName: "the Bird",
    username: "@twitter",
  },
];

// CONTEXTUAL CLASSES Table
const contextualTable = [
  {
    id: 1,
    variant: "gray",
  },
  {
    id: 2,
    variant: "success",
  },
  {
    id: 3,
    variant: "info",
  },
  {
    id: 4,
    variant: "warning",
  },
  {
    id: 5,
    variant: "danger",
  },
];

// RESPONSIVE TABLES
const responsiveTable = [1, 2, 3];

// Nesting Tables
const nestingTable = ["A", "B"];

// Basic Data Table
const basicDataTable = [
  {
    id: 1,
    name: "Jonathan",
    email: "jonathan@example.com",
    position: "Senior Implementation Architect",
    company: "Hauck Inc",
    country: "Holy See",
    action: "Details",
  },
  {
    id: 2,
    name: "Harold",
    email: "harold@example.com",
    position: "Forward Creative Coordinator",
    company: "Metz Inc",
    country: "Iran",
    action: "Details",
  },
  {
    id: 3,
    name: "Shannon",
    email: "shannon@example.com",
    position: "Legacy Functionality Associate",
    company: "Zemlak Group",
    country: "South Georgia",
    action: "Details",
  },
  {
    id: 4,
    name: "Robert",
    email: "robert@example.com",
    position: "Product Accounts Technician",
    company: "Hoeger",
    country: "San Marino",
    action: "Details",
  },
  {
    id: 5,
    name: "Noel",
    email: "noel@example.com",
    position: "Customer Data Director",
    company: "Howell - Rippin",
    country: "Germany",
    action: "Details",
  },
  {
    id: 6,
    name: "Traci",
    email: "traci@example.com",
    position: "Corporate Identity Director",
    company: "Koelpin - Goldner",
    country: "Vanuatu",
    action: "Details",
  },
  {
    id: 7,
    name: "Kerry",
    email: "kerry@example.com",
    position: "Lead Applications Associate",
    company: "Feeney, Langworth and Tremblay",
    country: "Niger",
    action: "Details",
  },
  {
    id: 8,
    name: "Patsy",
    email: "patsy@example.com",
    position: "Dynamic Assurance Director",
    company: "Streich Group",
    country: "Niue",
    action: "Details",
  },
  {
    id: 9,
    name: "Cathy",
    email: "cathy@example.com",
    position: "Customer Data Director",
    company: "Ebert, Schamberger and Johnston",
    country: "Mexico",
    action: "Details",
  },
  {
    id: 10,
    name: "Tyrone",
    email: "tyrone@example.com",
    position: "Senior Response Liaison",
    company: "Raynor, Rolfson and Daugherty",
    country: "Qatar",
    action: "Details",
  },
];

// Pagination Data Table
const paginationDataTable = [
  {
    id: "#VL2111",
    name: "Jonathan",
    date: "07 Oct, 2021",
    total: 24.05,
    status: "Paid",
    action: "Details",
  },
  {
    id: "#VL2110",
    name: "Harold",
    date: "07 Oct, 2021",
    total: 26.15,
    status: "Paid",
    action: "Details",
  },
  {
    id: "#VL2109",
    name: "Shannon",
    date: "06 Oct, 2021",
    total: 21.25,
    status: "Refund",
    action: "Details",
  },
  {
    id: "#VL2108",
    name: "Robert",
    date: "05 Oct, 2021",
    total: 25.03,
    status: "Paid",
    action: "Details",
  },
  {
    id: "#VL2107",
    name: "Noel",
    date: "05 Oct, 2021",
    total: 22.61,
    status: "Paid",
    action: "Details",
  },
  {
    id: "#VL2106",
    name: "Traci",
    date: "04 Oct, 2021",
    total: 24.05,
    status: "Paid",
    action: "Details",
  },
  {
    id: "#VL2105",
    name: "Kerry",
    date: "04 Oct, 2021",
    total: 26.15,
    status: "Paid",
    action: "Details",
  },
  {
    id: "#VL2104",
    name: "Patsy",
    date: "04 Oct, 2021",
    total: 21.25,
    status: "Refund",
    action: "Details",
  },
  {
    id: "#VL2103",
    name: "Cathy",
    date: "03 Oct, 2021",
    total: 22.61,
    status: "Paid",
    action: "Details",
  },
  {
    id: "#VL2102",
    name: "Tyrone",
    date: "03 Oct, 2021",
    total: 25.03,
    status: "Paid",
    action: "Details",
  },
];

export {
  records,
  expandablerecords,
  nestedrecords,
  dataTableRecords,
  basicTable,
  contextualTable,
  responsiveTable,
  nestingTable,
  basicDataTable,
  paginationDataTable,
};
