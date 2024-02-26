import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { ROUTES_LIST } from "@common/constants/constants";
import "./style/App.scss";

export const App = () => (
  <div className="app">
    <BrowserRouter>
      <Layout>
        <Routes>
          {ROUTES_LIST.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  </div>
);
