// icons
import {
  LuAperture,
  LuCoffee,
  LuFileText,
  LuHeart,
  LuImage,
  LuShoppingBag,
  LuThumbsUp,
  LuUsers,
} from "react-icons/lu";

// images
import Img1 from "@/assets/images/avatars/avatar7.jpg";
import Img2 from "@/assets/images/avatars/avatar9.jpg";
import Img3 from "@/assets/images/avatars/avatar4.png";
import Img4 from "@/assets/images/avatars/avatar1.png";
import Img5 from "@/assets/images/avatars/avatar8.jpg";
import Img6 from "@/assets/images/avatars/avatar5.png";

const iconWidget = [
  {
    text: "Today Revenue",
    price: 851,
    icon: LuShoppingBag,
    variant1: "fill-primary/20",
    variant2: "stroke-primary",
  },
  {
    text: "Product Sold",
    amount: 2541,
    icon: LuCoffee,
    variant1: "fill-warning/20",
    variant2: "stroke-warning",
  },
  {
    text: "New Customers",
    amount: 654,
    icon: LuUsers,
    variant1: "fill-success/20",
    variant2: "stroke-success",
  },
  {
    text: "New Visitors",
    amount: 854,
    icon: LuFileText,
    variant1: "fill-info/20",
    variant2: "stroke-info",
  },
];

const valueWidget = [
  {
    text: "Today Revenue",
    price: 6512,
    color: "primary",
    width: 32,
    subText: "36% Avg",
  },
  {
    text: "Product Sold",
    amount: 352,
    color: "warning",
    width: 60,
    subText: "36 Daily Avg",
  },
  {
    text: "New Customers",
    amount: 7580,
    color: "success",
    width: 60,
    subText: "3 Daily Avg",
  },
  {
    text: "New Visitors",
    amount: 6985,
    color: "success",
    width: 45,
    subText: "300 Daily Avg",
  },
];

const cardWidget = [
  {
    text: "Today Revenue",
    price: 2100,
    color: "success",
    chartColor: "#5369f8",
    percentage: 10.21,
  },
  {
    text: "Product Sold",
    amount: 558,
    color: "danger",
    chartColor: "#f77e53",
    percentage: 5.05,
  },
  {
    text: "New Customers",
    amount: 65,
    color: "success",
    chartColor: "#43d39e",
    percentage: 25.16,
  },
  {
    text: "New Visitors",
    amount: 958,
    color: "danger",
    chartColor: "#ffbe0b",
    percentage: 5.05,
  },
];

const chartWidget = [
  {
    text: "Visits",
    amount: "21,000",
    chartColor: "#5369f8",
  },
  {
    text: "Customers",
    amount: "1100",
    chartColor: "#43d39e",
  },
  {
    text: "Revenue",
    price: "$201,200",
    chartColor: "#f77e53",
  },
];

const teamWidget = [
  {
    img: Img1,
    name: "Yum N",
    post: "Senior Sales Guy",
  },
  {
    img: Img2,
    name: "Greeva Y",
    post: "Social d-flex Campaign",
  },
  {
    img: Img3,
    name: "Nik G",
    post: "Inventory Manager",
  },
  {
    img: Img4,
    name: "Hardik G",
    post: "Sales Person",
  },
  {
    img: Img5,
    name: "GB Patel G",
    post: "Sales Person",
  },
];

const teamWidget2 = [
  {
    img: Img6,
    time: "10:00",
    name: "Geneva",
    text: "Hello!",
    class: "pt-8",
  },
  {
    img: Img4,
    time: "10:01",
    name: "Dominic",
    text: "Hi, How are you? What about our next meeting?",
  },
  {
    img: Img6,
    time: "10:01",
    name: "Geneva",
    text: "Yeah everything is fine",
  },
  {
    img: Img4,
    time: "10:02",
    name: "Dominic",
    text: "Wow that`s great",
    class: "pb-8",
  },
];

const teamWidget3 = [
  {
    time: "7:30 AM - 10:00 AM",
    event: "UX Planning Meeting",
  },
  {
    time: "10:30 AM - 11:45 AM",
    event: "Yum v3 Scope Review",
  },
  {
    time: "12:15 PM - 02:00 PM",
    event: "Ubold v4 Brainstorming",
  },
  {
    time: "5:30 PM - 06:15 PM",
    event: "Yum React Planning",
  },
];

const teamWidget4 = [
  {
    amount: "121,000",
    text: "Total Visitors",
    icon: LuUsers,
  },
  {
    amount: "21,000",
    text: "Total Product Views",
    icon: LuImage,
  },
  {
    amount: "$21.5",
    text: "Revenue Per Visitor",
    icon: LuShoppingBag,
  },
  {
    amount: "8,547",
    text: "Revenue Per Visitor",
    icon: LuAperture,
  },
];

const teamWidget5 = [
  {
    text1: "Draft the new contract document for sales team",
    text2: "Due on 24 Aug, 2019",
  },
  {
    text1: "iOS App home page",
    text2: "Due on 23 Aug, 2019",
  },
  {
    text1: "Write a release note for Yum",
    text2: "Due on 22 Aug, 2019",
  },
  {
    text1: "Invite Greeva to a project Yum admin",
    text2: "Due on 21 Aug, 2019",
  },
  {
    text1: "Enable analytics tracking for main website",
    text2: "Due on 20 Aug, 2019",
  },
];

const teamWidget6 = [
  {
    class: "gap-3",
    img: Img1,
    name: "Yum",
    text: "has attached design-draft.sketch in project",
    min: "2 Min Ago",
  },
  {
    avatar: "G",
    name: "Greeva",
    text: "has commented on project",
    min: "12 Min Ago",
  },
  {
    class: "gap-3",
    img: Img2,
    name: "Mannat",
    text: "has reacted with ",
    icon: LuThumbsUp,
    variant: "success",
    text2: "on project",
    min: "14 Min Ago",
  },
  {
    avatar: "D",
    name: "Dhyani",
    text: "has reacted with ",
    icon: LuHeart,
    variant: "danger",
    text2: "on project",
    min: "14 Min Ago",
  },
];

export {
  iconWidget,
  valueWidget,
  cardWidget,
  chartWidget,
  teamWidget,
  teamWidget2,
  teamWidget3,
  teamWidget4,
  teamWidget5,
  teamWidget6,
};
