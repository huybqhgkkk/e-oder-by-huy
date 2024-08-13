import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {Provider} from 'react-redux';
import App from "./App";
import store from './store/store';
import './i18n';
const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        // <StrictMode>
            <Provider store={store}>
                {/*<BrowserRouter basename={"/yum_r/"}>*/}
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        // </StrictMode>
    );
}
