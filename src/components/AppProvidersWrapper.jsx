import { useEffect, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider, FilterProvider, LayoutProvider } from "@/context";
const ShopProvider = lazy(() => import("@/context/useShoppingContext"));

const AppProvidersWrapper = ({ children }) => {
  const handleChangeTitle = () => {
    if (document.visibilityState == "hidden")
      document.title = "Please come back :-(";
    else
      document.title = "Yum Reactjs - Multipurpose Food Tailwind CSS Template";
  };

  useEffect(() => {
    import("preline");

    document.addEventListener("visibilitychange", handleChangeTitle);
    return () => {
      document.removeEventListener("visibilitychange", handleChangeTitle);
    };
  }, []);

  return (
    <HelmetProvider>
      <LayoutProvider>
        <AuthProvider>
          <ShopProvider>
            <FilterProvider>{children}</FilterProvider>
          </ShopProvider>
        </AuthProvider>
      </LayoutProvider>
    </HelmetProvider>
  );
};
export default AppProvidersWrapper;
