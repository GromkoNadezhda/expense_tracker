import { Header } from "./Header/Header";
import { NavigationBar } from "./NavigationBar/NavigationBar";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <NavigationBar />
    {children}
  </>
);
