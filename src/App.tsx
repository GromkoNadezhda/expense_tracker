import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { NAVIGATION } from "@constants/constants";
import { Wallets } from "@components/Wallets/Wallets";
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
