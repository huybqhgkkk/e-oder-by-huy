import { Suspense } from "react";
import { Footer, Preloader } from "@/components";
import { Topbar, Navbar } from "@/components/layout/admin";

const AdminLayout = ({ children }) => {
  return (
    <Suspense fallback={<Preloader />}>
      <Topbar />
      <Navbar />
      {children}
      <Footer hideLinks />
    </Suspense>
  );
};

export default AdminLayout;
