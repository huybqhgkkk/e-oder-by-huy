/* eslint-disable react-refresh/only-export-components */
import {lazy} from "react";
import {flattenRoutes} from "@/helpers";

// default pages
// https://react.dev/reference/react/lazy#suspense-for-code-splitting
const Landing = lazy(() => import("../app/page"));
const NotFound = lazy(() => import("../app/not-found"));
const NotFoundAlt = lazy(
    () => import("../app/admin/extra-pages/not-found-alt/page")
);
const Maintenance = lazy(() => import("../app/(plain)/maintenance/page"));
const ComingSoon = lazy(() => import("../app/(plain)/coming-soon/page"));

// auth pages
const Login = lazy(() => import("../app/auth/login/page"));
const Register = lazy(() => import("../app/auth/register/page"));
const ForgotPassword = lazy(() => import("../app/auth/forgot-password/page"));
const ChangePassword = lazy(() => import("../app/auth/change-password/page"));
const ResetPassword = lazy(() => import("../app/auth/reset-password/page"));
const Logout = lazy(() => import("../app/auth/logout/page"));
const Otp = lazy(() => import("../app/auth/otp/page"));

// client pages
const Dishes = lazy(() => import("../app/(client)/(dish)/dishes/page"));
const DishDetails = lazy(
    () => import("../app/(client)/(dish)/dishes/[dishId]/page")
);
const DishesList = lazy(
    () => import("../app/(client)/(dish)/dishes-list/page")
);
const ContactUs = lazy(() => import("../app/(client)/contact-us/page"));
const FAQs = lazy(() => import("../app/(client)/faqs/page"));
const Home = lazy(() => import("../app/(client)/home/page"));
const Test = lazy(() => import("../app/(client)/test/page"));
const Cart = lazy(() => import("../app/(client)/(protected)/cart/page"));
const Checkout = lazy(
    () => import("../app/(client)/(protected)/checkout/page")
);
const Wishlist = lazy(
    () => import("../app/(client)/(protected)/wishlist/page")
);

// admin pages
const AdminCustomers = lazy(
    () => import("../app/admin/(customer)/customers/page")
);
const AdminCustomerDetails = lazy(
    () => import("../app/admin/(customer)/customers/[customerId]/page")
);
const AdminAddCustomer = lazy(
    () => import("../app/admin/(customer)/add-customer/page")
);
const AdminEditCustomer = lazy(
    () => import("../app/admin/(customer)/edit-customer/page")
);
const AdminDishes = lazy(() => import("../app/admin/(dish)/dishes/page"));
const AdminDishDetails = lazy(
    () => import("../app/admin/(dish)/dishes/[adminDishId]/page")
);
const AdminAddDish = lazy(() => import("../app/admin/(dish)/add-dish/page"));
const AdminEditDish = lazy(() => import("../app/admin/(dish)/edit-dish/page"));
const AdminOrders = lazy(() => import("../app/admin/(order)/orders/page"));
const AdminOrderDetails = lazy(
    () => import("../app/admin/(order)/orders/[orderId]/page")
);
const AdminRestaurants = lazy(
    () => import("../app/admin/(restaurant)/restaurants/page")
);
const AdminRestaurantDetails = lazy(
    () => import("../app/admin/(restaurant)/restaurants/[restaurantId]/page")
);
const AdminAddRestaurant = lazy(
    () => import("../app/admin/(restaurant)/add-restaurant/page")
);
const AdminEditRestaurant = lazy(
    () => import("../app/admin/(restaurant)/edit-restaurant/page")
);
const AdminEmployees = lazy(() => import("../app/admin/(employees)/employees/page"));
const AdminEmployeeDetails = lazy(
    () => import("../app/admin/(employees)/employees/[Id]/page")
);
const AdminAddEmloyee = lazy(
    () => import("../app/admin/(employees)/add-employee/page")
);
const AdminEditEmployee = lazy(
    () => import("../app/admin/(employees)/edit-employee/page")
);
const AdminSellerDetails = lazy(
    () => import("../app/admin/(seller)/sellers/[sellerId]/page")
);
const AdminAddSeller = lazy(
    () => import("../app/admin/(seller)/add-seller/page")
);
const AdminEditSeller = lazy(
    () => import("../app/admin/(seller)/edit-seller/page")
);
const AdminManage = lazy(() => import("../app/admin/manage/page"));
const AdminProfile = lazy(() => import("../app/admin/profile/page"));
const AdminWallet = lazy(() => import("../app/admin/wallet/page"));
const AdminDashboard = lazy(() => import("../app/admin/dashboard/page"));

const StarterPage = lazy(() => import("../app/admin/extra-pages/starter/page"));
const GalleryPage = lazy(() => import("../app/admin/extra-pages/gallery/page"));
const InvoicePage = lazy(() => import("../app/admin/extra-pages/invoice/page"));
const PricingPage = lazy(() => import("../app/admin/extra-pages/pricing/page"));
const TimelinePage = lazy(
    () => import("../app/admin/extra-pages/timeline/page")
);

const UiElements = lazy(() => import("../app/admin/ui-elements/page"));
const Widget = lazy(() => import("../app/admin/widget/page"));
const FeatherIcons = lazy(() => import("../app/admin/icons/feather/page"));
const LucideIcons = lazy(() => import("../app/admin/icons/lucide/page"));

const BasicElemets = lazy(
    () => import("../app/admin/forms/basic-elements/page")
);
const Advanced = lazy(() => import("../app/admin/forms/advanced/page"));
const Validation = lazy(() => import("../app/admin/forms/validation/page"));
const Editor = lazy(() => import("../app/admin/forms/editor/page"));
const FileUploader = lazy(() => import("../app/admin/forms/file-uploads/page"));

// apex charts
const AreaApex = lazy(() => import("../app/admin/charts/area/page"));
const BarApex = lazy(() => import("../app/admin/charts/bar/page"));
const BoxPlotApex = lazy(() => import("../app/admin/charts/box-plot/page"));
const BubbleApex = lazy(() => import("../app/admin/charts/bubble/page"));
const CandleStickApex = lazy(
    () => import("../app/admin/charts/candle-stick/page")
);
const ColumnApex = lazy(() => import("../app/admin/charts/column/page"));
const HeatApex = lazy(() => import("../app/admin/charts/heat/page"));
const LineApex = lazy(() => import("../app/admin/charts/line/page"));
const MixedApex = lazy(() => import("../app/admin/charts/mixed/page"));
const PieApex = lazy(() => import("../app/admin/charts/pie/page"));
const PolarAreaApex = lazy(() => import("../app/admin/charts/polar-area/page"));
const RadarApex = lazy(() => import("../app/admin/charts/radar/page"));
const RadialbarApex = lazy(() => import("../app/admin/charts/radialbar/page"));
const ScatterApex = lazy(() => import("../app/admin/charts/scatter/page"));
const SparklinesApex = lazy(
    () => import("../app/admin/charts/sparklines/page")
);
const TimelineApex = lazy(() => import("../app/admin/charts/timeline/page"));
const TreemapApex = lazy(() => import("../app/admin/charts/treemap/page"));

const BasicTables = lazy(() => import("../app/admin/tables/basic-tables/page"));
const DataTables = lazy(() => import("../app/admin/tables/data-tables/page"));

const VectorMaps = lazy(() => import("../app/admin/maps/vector/page"));

const authRoutes = [
    {
        path: "/auth/login",
        name: "Login",
        element: <Login/>,
    },
    {
        path: "/auth/register",
        name: "Register",
        element: <Register/>,
    },
    {
        path: "/auth/forgot-password",
        name: "Forgot Password",
        element: <ForgotPassword/>,
    },
    {
        path: "/auth/change-password",
        name: "ChangePassword",
        element: <ChangePassword/>,
    },
    {
        path: "/auth/reset-password",
        name: "ResetPassword",
        element: <ResetPassword/>,
    },
    {
        path: "/auth/logout",
        name: "Logout",
        element: <Logout/>,
    },
    {
        path: "/auth/otp",
        name: "Otp",
        element: <Otp/>,
    },
];

const clientRoutes = [
    {
        path: "/dishes",
        name: "Dishes",
        element: <Dishes/>,
    },
    {
        path: "/dishes/:dishId",
        name: "Dish Details",
        element: <DishDetails/>,
    },
    {
        path: "/dishes-list",
        name: "Dishes List",
        element: <DishesList/>,
    },
    {
        path: "/contact-us",
        name: "Contact Us",
        element: <ContactUs/>,
    },
    {
        path: "/faqs",
        name: "FAQs",
        element: <FAQs/>,
    },
    {
        path: "/home",
        name: "Home",
        element: <Home/>,
    },
    {
        path: "/test",
        name: "Test",
        element: <Test/>,
    },
];

const clientAccountRoutes = [
    {
        path: "/cart",
        name: "Cart",
        element: <Cart/>,
    },
    {
        path: "/checkout",
        name: "Checkout",
        element: <Checkout/>,
    },
    {
        path: "/wishlist",
        name: "Wishlist",
        element: <Wishlist/>,
    },
];

const adminRoutes = [
    {
        path: "/admin/dashboard",
        name: "Dashboard",
        element: <AdminDashboard/>,
    },
    {
        path: "/admin/customers",
        name: "Customers",
        element: <AdminCustomers/>,
    },
    {
        path: "/admin/customers/:customerId",
        name: "Customer Details",
        element: <AdminCustomerDetails/>,
    },
    {
        path: "/admin/add-customer",
        name: "Add Customer",
        element: <AdminAddCustomer/>,
    },
    {
        path: "/admin/edit-customer",
        name: "Edit Customer",
        element: <AdminEditCustomer/>,
    },
    {
        path: "/admin/dishes",
        name: "Dishes",
        element: <AdminDishes/>,
    },
    {
        path: "/admin/dishes/:adminDishId",
        name: "Dashboard",
        element: <AdminDishDetails/>,
    },
    {
        path: "/admin/add-dish",
        name: "Dashboard",
        element: <AdminAddDish/>,
    },
    {
        path: "/admin/edit-dish",
        name: "Dashboard",
        element: <AdminEditDish/>,
    },
    {
        path: "/admin/orders",
        name: "Orders",
        element: <AdminOrders/>,
    },
    {
        path: "/admin/orders/:orderId",
        name: "Order Details",
        element: <AdminOrderDetails/>,
    },
    {
        path: "/admin/restaurants",
        name: "Restaurants",
        element: <AdminRestaurants/>,
    },
    {
        path: "/admin/restaurants/:restaurantId",
        name: "Restaurant Details",
        element: <AdminRestaurantDetails/>,
    },
    {
        path: "/admin/add-restaurant",
        name: "Add Restaurant",
        element: <AdminAddRestaurant/>,
    },
    {
        path: "/admin/edit-restaurant",
        name: "Edit Restaurant",
        element: <AdminEditRestaurant/>,
    },
    {
        path: "/admin/employees",
        name: "Employees",
        element: <AdminEmployees/>,
    },
    {
        path: "/admin/employee/:Id",
        name: "Employee Details",
        element: <AdminEmployeeDetails/>,
    },
    {
        path: "/admin/add-employee",
        name: "Add Employee",
        element: <AdminAddEmloyee/>,
    },
    {
        path: "/admin/edit-employee",
        name: "Edit Employee",
        element: <AdminEditEmployee/>,
    },
    {
        path: "/admin/sellers/:sellerId",
        name: "Seller Details",
        element: <AdminSellerDetails/>,
    },
    {
        path: "/admin/add-seller",
        name: "Add Seller",
        element: <AdminAddSeller/>,
    },
    {
        path: "/admin/edit-seller",
        name: "Edit Seller",
        element: <AdminEditSeller/>,
    },
    {
        path: "/admin/manage",
        name: "Manage",
        element: <AdminManage/>,
    },
    {
        path: "/admin/profile",
        name: "Profile",
        element: <AdminProfile/>,
    },
    {
        path: "/admin/wallet",
        name: "Wallet",
        element: <AdminWallet/>,
    },
    {
        path: "/admin/extra-pages/starter",
        name: "starter",
        element: <StarterPage/>,
    },
    {
        path: "/admin/extra-pages/gallery",
        name: "Gallery",
        element: <GalleryPage/>,
    },
    {
        path: "/admin/extra-pages/invoice",
        name: "Invoice",
        element: <InvoicePage/>,
    },
    {
        path: "/admin/extra-pages/pricing",
        name: "Pricing",
        element: <PricingPage/>,
    },
    {
        path: "/admin/extra-pages/timeline",
        name: "Timeline",
        element: <TimelinePage/>,
    },
    {
        path: "/admin/ui-elements",
        name: "Ui Elements",
        element: <UiElements/>,
    },
    {
        path: "/admin/widgets",
        name: "Widget",
        element: <Widget/>,
    },
    {
        path: "/admin/icons/feather",
        name: "Feather Icons",
        element: <FeatherIcons/>,
    },
    {
        path: "/admin/icons/lucide",
        name: "Lucide Icons",
        element: <LucideIcons/>,
    },
    {
        path: "/admin/forms/basic-elements",
        name: "Basic Elements",
        element: <BasicElemets/>,
    },
    {
        path: "/admin/forms/advanced",
        name: "Form Advanced",
        element: <Advanced/>,
    },
    {
        path: "/admin/forms/validation",
        name: "Validation",
        element: <Validation/>,
    },
    {
        path: "/admin/forms/editor",
        name: "Editor",
        element: <Editor/>,
    },
    {
        path: "/admin/forms/file-uploads",
        name: "File Uploads",
        element: <FileUploader/>,
    },
    {
        path: "/admin/charts/area",
        name: "Area",
        element: <AreaApex/>,
    },
    {
        path: "/admin/charts/bar",
        name: "Bar",
        element: <BarApex/>,
    },
    {
        path: "/admin/charts/bubble",
        name: "Bubble",
        element: <BubbleApex/>,
    },
    {
        path: "/admin/charts/candle-stick",
        name: "Candlestick",
        element: <CandleStickApex/>,
    },
    {
        path: "/admin/charts/column",
        name: "Column",
        element: <ColumnApex/>,
    },
    {
        path: "/admin/charts/heat",
        name: "Heatmap",
        element: <HeatApex/>,
    },
    {
        path: "/admin/charts/line",
        name: "Line",
        element: <LineApex/>,
    },
    {
        path: "/admin/charts/mixed",
        name: "Mixed",
        element: <MixedApex/>,
    },
    {
        path: "/admin/charts/timeline",
        name: "Timeline",
        element: <TimelineApex/>,
    },
    {
        path: "/admin/charts/box-plot",
        name: "Boxplot",
        element: <BoxPlotApex/>,
    },
    {
        path: "/admin/charts/treemap",
        name: "Treemap",
        element: <TreemapApex/>,
    },
    {
        path: "/admin/charts/pie",
        name: "Pie",
        element: <PieApex/>,
    },
    {
        path: "/admin/charts/radar",
        name: "Radar",
        element: <RadarApex/>,
    },
    {
        path: "/admin/charts/radialbar",
        name: "RadialBar",
        element: <RadialbarApex/>,
    },
    {
        path: "/admin/charts/scatter",
        name: "Scatter",
        element: <ScatterApex/>,
    },
    {
        path: "/admin/charts/polar-area",
        name: "Polar Area",
        element: <PolarAreaApex/>,
    },
    {
        path: "/admin/charts/sparklines",
        name: "Sparklines",
        element: <SparklinesApex/>,
    },
    {
        path: "/admin/tables/basic-tables",
        name: "Basic Tables",
        element: <BasicTables/>,
    },
    {
        path: "/admin/tables/data-tables",
        name: "Data Tables",
        element: <DataTables/>,
    },
    {
        path: "/admin/maps/vector",
        name: "Vector Maps",
        element: <VectorMaps/>,
    },
    {
        path: "/admin/extra-pages/not-found-alt",
        name: "Page Not Found Alt",
        element: <NotFoundAlt/>,
    },
];

const otherRoutes = [
    {
        path: "/",
        name: "Landing",
        element: <Landing/>,
    },
    {
        path: "/not-found",
        name: "Page Not Found",
        element: <NotFound/>,
    },
    {
        path: "/maintenance",
        name: "Maintenance",
        element: <Maintenance/>,
    },
    {
        path: "/coming-soon",
        name: "Coming Soon",
        element: <ComingSoon/>,
    },
    {
        path: "*",
        name: "Page Not Found",
        element: <NotFound/>,
    },
];

const allBlankRoutes = [...otherRoutes];

const allAuthRoutes = [...authRoutes];

const clientPublicRoutes = [...clientRoutes];

const clientProtectedRoutes = [...clientAccountRoutes];

const allAdminRoutes = [...adminRoutes];

const allBlankFlattedRoutes = flattenRoutes([...allBlankRoutes]);
const allAuthFlattedRoutes = flattenRoutes([...allAuthRoutes]);
const clientPublicFlattedRoutes = flattenRoutes([...clientPublicRoutes]);
const clientProtectedFlattedRoutes = flattenRoutes([...clientProtectedRoutes]);
const allAdminFlattedRoutes = flattenRoutes([...allAdminRoutes]);

export {
    allBlankFlattedRoutes,
    allAuthFlattedRoutes,
    clientPublicFlattedRoutes,
    clientProtectedFlattedRoutes,
    allAdminFlattedRoutes,
};
