import { Toaster } from "sonner";
import {AppProvidersWrapper, BackToTop, OfferAdBanner} from "./components";
import AllRoutes from "./routes/Routes";
import { configureFakeBackend } from "@/common";

// styles
import "@/assets/css/style.css";
import 'antd/dist/reset.css';

configureFakeBackend();
const App = () => {
  return (
    <AppProvidersWrapper>
      <AllRoutes />
      <BackToTop />
      <Toaster richColors />
    </AppProvidersWrapper>
  );
};

export default App;
