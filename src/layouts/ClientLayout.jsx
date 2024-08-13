import { Suspense } from "react";
import { Footer, FooterLinks, Navbar, Preloader } from "@/components";

const ClientLayout = ({ children }) => {
  return (
    <Suspense fallback={<Preloader />}>
      <Navbar />
      {children}
      <FooterLinks />
      <Footer />
    </Suspense>
  );
};

export default ClientLayout;
