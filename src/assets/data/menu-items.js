import {
  LuBarChart2,
  LuBookmark,
  LuBox,
  LuCpu,
  LuFile,
  LuGift,
  LuGrid,
  LuHotel,
  LuInfo,
  LuLayoutGrid,
  LuListOrdered,
  LuLock,
  LuMap,
  LuSettings2,
  LuSoup,
  LuUserCog,
  LuUsers,
  LuWallet,
} from "react-icons/lu";
import { useTranslation } from "react-i18next";

// const { t } = useTranslation();

const clientMenuItems = [
  {
    key: "home-page",
    label: "Home",
    url: "/home",
    isTitle: true,
  },
  {
    key: "dish",
    label: "Dishes",
    isTitle: true,
    children: [
      {
        key: "dish-grid",
        label: "Dishes Grid",
        url: "/dishes",
        parentKey: "dish",
      },
      {
        key: "dish-list",
        label: "Dishes List",
        url: "/dishes-list",
        parentKey: "dish",
      },
      {
        key: "dish-details",
        label: "Dish Details",
        url: "/dishes/1001",
        parentKey: "dish",
      },
    ],
  },
  {
    key: "user-pages",
    label: "Pages",
    isTitle: true,
    children: [
      {
        key: "user-pages-account-cart",
        label: "Cart",
        url: "/cart",
        parentKey: "user-pages",
      },
      {
        key: "user-pages-account-wishlist",
        label: "Wishlist",
        url: "/wishlist",
        parentKey: "user-pages",
      },
      {
        key: "user-pages-checkout",
        label: "Checkout",
        url: "/checkout",
        parentKey: "user-pages",
      },
      {
        key: "user-pages-faqs",
        label: "FAQ",
        url: "/faqs",
        parentKey: "user-pages",
      },
      {
        key: "user-pages-contact-us",
        label: "Contact Us",
        url: "/contact-us",
        parentKey: "user-pages",
      },
      {
        key: "user-pages-not-found",
        label: "Error 404",
        url: "/not-found",
        parentKey: "user-pages",
      },
      {
        key: "auth-login",
        label: "Login",
        url: "/auth/login",
        parentKey: "user-pages",
      },
      {
        key: "auth-register",
        label: "Register",
        url: "/auth/register",
        parentKey: "user-pages",
      },
      {
        key: "auth-forgot-password",
        label: "Forgot Password",
        url: "/auth/forgot-password",
        parentKey: "user-pages",
      },
      {
        key: "auth-reset-password",
        label: "Reset Password",
        url: "/auth/reset-password",
        parentKey: "user-pages",
      },
      {
        key: "auth-logout",
        label: "Logout",
        url: "/auth/logout",
        parentKey: "user-pages",
      },
    ],
  },
  {
    key: "admin-dashboard",
    label: "Admin",
    url: "/admin/dashboard",
    isTitle: true,
  },
];

const megaMenuItem = {
  key: "mega-menu",
  label: "Mega Menu",
  isTitle: true,
  isMega: true,
  children: [
    {
      key: "mega-menu-1",
      label: "Mega Menu",
      url: "/home",
      parentKey: "mega-menu",
    },
  ],
};

const addMegaMenu = () => {
  const menuItems = [...clientMenuItems];
  menuItems.splice(2, 0, megaMenuItem);
  return menuItems;
};

export const HORIZONTAL_MENU_ITEMS = addMegaMenu();

export const CLIENT_VERTICAL_MENU_ITEMS = clientMenuItems;

export const ADMIN_VERTICAL_MENU_ITEMS = [
  {
    key: "dashboard-page",
    label: "Dashboard",
    icon: LuLayoutGrid,
    url: "/admin/dashboard",
    isTitle: true,
  },
  {
    key: "employees-page",
    label: "Employee",
    icon: LuUsers,
    url: "/admin/employees",
    isTitle: true,
  },
  {
    key: "branch-page",
    label: "Branch",
    icon: LuHotel,
    url: "/admin/branch",
    isTitle: true,
  },
  {
    key: "manage-page",
    label: "Manage",
    icon: LuSettings2,
    url: "/admin/manage",
    isTitle: true,
  },
  {
    key: "orders",
    label: "Orders",
    icon: LuListOrdered,
    isTitle: true,
    children: [
      {
        key: "orders-list",
        label: "Orders List",
        url: "/admin/orders",
        parentKey: "orders",
      },
      {
        key: "orders-details",
        label: "Order Details",
        url: "/admin/orders/9f36ca",
        parentKey: "orders",
      },
    ],
  },
  {
    key: "customers",
    label: "Customers",
    icon: LuUsers,
    isTitle: true,
    children: [
      {
        key: "customers-list",
        label: "Customers List",
        url: "/admin/customers",
        parentKey: "customers",
      },
      {
        key: "customers-details",
        label: "Customer Details",
        url: "/admin/customers/701",
        parentKey: "customers",
      },
      {
        key: "customers-add",
        label: "Add Customer",
        url: "/admin/add-customer",
        parentKey: "customers",
      },
      {
        key: "customers-edit",
        label: "Edit Customer",
        url: "/admin/edit-customer",
        parentKey: "customers",
      },
    ],
  },
  {
    key: "restaurants",
    label: "Restaurants",
    icon: LuHotel,
    isTitle: true,
    children: [
      {
        key: "restaurants-list",
        label: "Restaurants List",
        url: "/admin/restaurants",
        parentKey: "restaurants",
      },
      {
        key: "restaurants-details",
        label: "Restaurant Details",
        url: "/admin/restaurants/901",
        parentKey: "restaurants",
      },
      {
        key: "restaurants-add",
        label: "Add Restaurant",
        url: "/admin/add-restaurant",
        parentKey: "restaurants",
      },
      {
        key: "restaurants-edit",
        label: "Edit Restaurant",
        url: "/admin/edit-restaurant",
        parentKey: "restaurants",
      },
    ],
  },
  {
    key: "dishes",
    label: "Menu",
    icon: LuSoup,
    isTitle: true,
    children: [
      {
        key: "dishes-list",
        label: "Menu",
        url: "/admin/dishes",
        parentKey: "dishes",
      },
      {
        key: "dishes-details",
        label: "Item Details",
        url: "/admin/dishes/1008",
        parentKey: "dishes",
      },
      {
        key: "dishes-add",
        label: "Add Item",
        url: "/admin/add-dish",
        parentKey: "dishes",
      },
      {
        key: "dishes-edit",
        label: "Edit Item",
        url: "/admin/edit-dish",
        parentKey: "dishes",
      },
    ],
  },
  {
    key: "sellers",
    label: "Sellers",
    icon: LuUserCog,
    isTitle: true,
    children: [
      {
        key: "sellers-list",
        label: "Sellers List",
        url: "/admin/sellers",
        parentKey: "sellers",
      },
      {
        key: "sellers-details",
        label: "Seller Details",
        url: "/admin/sellers/704",
        parentKey: "sellers",
      },
      {
        key: "sellers-add",
        label: "Add Seller",
        url: "/admin/add-seller",
        parentKey: "sellers",
      },
      {
        key: "sellers-edit",
        label: "Edit Seller",
        url: "/admin/edit-seller",
        parentKey: "sellers",
      },
    ],
  },
  {
    key: "wallet-page",
    label: "Wallet",
    icon: LuWallet,
    url: "/admin/wallet",
    isTitle: true,
  },
  {
    key: "extra-pages",
    label: "Extra Pages",
    icon: LuFile,
    isTitle: true,
    children: [
      {
        key: "extra-pages-starter",
        label: "Starter",
        url: "/admin/extra-pages/starter",
        parentKey: "extra-pages",
      },
      {
        key: "extra-pages-timeline",
        label: "Timeline",
        url: "/admin/extra-pages/timeline",
        parentKey: "extra-pages",
      },
      {
        key: "extra-pages-invoice",
        label: "Invoice",
        url: "/admin/extra-pages/invoice",
        parentKey: "extra-pages",
      },
      {
        key: "extra-pages-gallery",
        label: "Gallery",
        url: "/admin/extra-pages/gallery",
        parentKey: "extra-pages",
      },
      {
        key: "extra-pages-pricing",
        label: "Pricing",
        url: "/admin/extra-pages/pricing",
        parentKey: "extra-pages",
      },
    ],
  },
  // {
  //   key: "auth-pages",
  //   label: "Authentication",
  //   icon: LuLock,
  //   isTitle: true,
  //   children: [
  //     {
  //       key: "auth-pages-login",
  //       label: "Login",
  //       url: "/auth/login",
  //       parentKey: "auth-pages",
  //     },
  //     {
  //       key: "auth-pages-register",
  //       label: "Register",
  //       url: "/auth/register",
  //       parentKey: "auth-pages",
  //     },
  //     {
  //       key: "auth-pages-forgot-password",
  //       label: "Forgot Password",
  //       url: "/auth/forgot-password",
  //       parentKey: "auth-pages",
  //     },
  //     {
  //       key: "auth-pages-reset-password",
  //       label: "Reset Password",
  //       url: "/auth/reset-password",
  //       parentKey: "auth-pages",
  //     },
  //     {
  //       key: "auth-pages-logout",
  //       label: "Logout",
  //       url: "/auth/logout",
  //       parentKey: "auth-pages",
  //     },
  //   ],
  // },
  {
    key: "error-pages",
    label: "Error Pages",
    icon: LuInfo,
    isTitle: true,
    children: [
      {
        key: "error-pages-not-found",
        label: "Error 404",
        url: "/not-found",
        parentKey: "error-pages",
      },
      {
        key: "error-pages-not-found-alt",
        label: "Error 404 Alt",
        url: "/admin/extra-pages/not-found-alt",
        parentKey: "error-pages",
      },
    ],
  },
  {
    key: "ui-elements",
    label: "UI Elements",
    icon: LuBox,
    url: "/admin/ui-elements",
    isTitle: true,
  },
  {
    key: "widget",
    label: "Widget",
    icon: LuGift,
    url: "/admin/widgets",
    isTitle: true,
  },
  {
    key: "icons",
    label: "Icons",
    icon: LuCpu,
    isTitle: true,
    children: [
      {
        key: "icons-feather",
        label: "Feather",
        url: "/admin/icons/feather",
        parentKey: "icons",
      },
      {
        key: "icons-lucide",
        label: "Lucide",
        url: "/admin/icons/lucide",
        parentKey: "icons",
      },
    ],
  },
  {
    key: "forms",
    label: "Forms",
    icon: LuBookmark,
    isTitle: true,
    children: [
      {
        key: "forms-basic-element",
        label: "Basic Elements",
        url: "/admin/forms/basic-elements",
        parentKey: "forms",
      },
      {
        key: "forms-advanced",
        label: "Advanced",
        url: "/admin/forms/advanced",
        parentKey: "forms",
      },
      {
        key: "forms-editor",
        label: "Editor",
        url: "/admin/forms/editor",
        parentKey: "forms",
      },
      {
        key: "forms-file-uploads",
        label: "File Uploads",
        url: "/admin/forms/file-uploads",
        parentKey: "forms",
      },
      {
        key: "forms-validation",
        label: "Validation",
        url: "/admin/forms/validation",
        parentKey: "forms",
      },
    ],
  },
  {
    key: "apex-charts",
    label: "Apex Charts",
    isTitle: false,
    icon: LuBarChart2,
    children: [
      {
        key: "area-apex",
        label: "Area",
        url: "/admin/charts/area",
        parentKey: "apex-charts",
      },
      {
        key: "bar-apex",
        label: "Bar",
        url: "/admin/charts/bar",
        parentKey: "apex-charts",
      },
      {
        key: "bubble-apex",
        label: "Bubble",
        url: "/admin/charts/bubble",
        parentKey: "apex-charts",
      },
      {
        key: "candlestick-apex",
        label: "Candlestick",
        url: "/admin/charts/candle-stick",
        parentKey: "apex-charts",
      },
      {
        key: "column-apex",
        label: "Column",
        url: "/admin/charts/column",
        parentKey: "apex-charts",
      },
      {
        key: "heatmap-apex",
        label: "Heatmap",
        url: "/admin/charts/heat",
        parentKey: "apex-charts",
      },
      {
        key: "line-apex",
        label: "Line",
        url: "/admin/charts/line",
        parentKey: "apex-charts",
      },
      {
        key: "mixed-apex",
        label: "Mixed",
        url: "/admin/charts/mixed",
        parentKey: "apex-charts",
      },
      {
        key: "timeline-apex",
        label: "Timeline",
        url: "/admin/charts/timeline",
        parentKey: "apex-charts",
      },
      {
        key: "boxplot-apex",
        label: "Boxplot",
        url: "/admin/charts/box-plot",
        parentKey: "apex-charts",
      },
      {
        key: "treemap-apex",
        label: "Treemap",
        url: "/admin/charts/treemap",
        parentKey: "apex-charts",
      },
      {
        key: "pie-apex",
        label: "Pie",
        url: "/admin/charts/pie",
        parentKey: "apex-charts",
      },
      {
        key: "radar-apex",
        label: "Radar",
        url: "/admin/charts/radar",
        parentKey: "apex-charts",
      },
      {
        key: "radialbar-apex",
        label: "RadialBar",
        url: "/admin/charts/radialbar",
        parentKey: "apex-charts",
      },
      {
        key: "scatter-apex",
        label: "Scatter",
        url: "/admin/charts/scatter",
        parentKey: "apex-charts",
      },
      {
        key: "polararea-apex",
        label: "Polar Area",
        url: "/admin/charts/polar-area",
        parentKey: "apex-charts",
      },
      {
        key: "sparklines-apex",
        label: "Sparklines",
        url: "/admin/charts/sparklines",
        parentKey: "apex-charts",
      },
    ],
  },
  {
    key: "tables",
    label: "Tables",
    isTitle: false,
    icon: LuGrid,
    children: [
      {
        key: "tables-basic",
        label: "Basic Tables",
        url: "/admin/tables/basic-tables",
        parentKey: "tables",
      },
      {
        key: "tables-data",
        label: "Data Tables",
        url: "/admin/tables/data-tables",
        parentKey: "tables",
      },
    ],
  },
  {
    key: "maps",
    label: "Maps",
    isTitle: false,
    icon: LuMap,
    children: [
      {
        key: "maps-vector-maps",
        label: "Vector maps",
        url: "/admin/maps/vector",
        parentKey: "maps",
      },
    ],
  },
];

export const FOOTER_LINKS = {
  About: [
    { name: "About Us" },
    { name: "Features" },
    { name: "News" },
    { name: "Careers" },
    { name: "Services" },
  ],
  Company: [
    { name: "Our Team" },
    { name: "Partner with Us" },
    { name: "FAQs" },
    { name: "Blog" },
  ],
  Support: [
    { name: "About" },
    { name: "Support Center" },
    { name: "Feedback" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Accessibility" },
  ],
};
