import { Toaster } from "sonner";
import {AppProvidersWrapper, BackToTop, OfferAdBanner} from "./components";
import AllRoutes from "./routes/Routes";
import { configureFakeBackend } from "@/common";

import "@/assets/css/style.css";
import 'antd/dist/reset.css';
import {useSelector} from "react-redux";
import Loading from "@/components/loading/page.jsx";

configureFakeBackend();
const App = () => {
    const loading = useSelector(state => state?.auth?.loading);
  return (
    <AppProvidersWrapper>
        {loading && <Loading />}
      <AllRoutes />
      <BackToTop />
      <Toaster richColors />
    </AppProvidersWrapper>
  );
};

export default App;
