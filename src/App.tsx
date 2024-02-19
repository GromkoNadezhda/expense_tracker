import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { NAVIGATION } from "@common/constants/constants";
import { Wallets } from "@app/wallets/Wallets";
import "./style/App.scss";

export const App = () => (
  <div className="app">
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={NAVIGATION.WALLETS} element={<Wallets />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </div>
);
