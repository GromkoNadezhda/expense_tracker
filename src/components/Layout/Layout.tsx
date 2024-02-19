import { Header } from "@components/Header/Header";
import { NavigationBar } from "@components/NavigationBar/NavigationBar";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <NavigationBar />
    {children}
  </>
);
