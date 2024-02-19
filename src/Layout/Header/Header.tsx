import { Currency } from "@common/components";
import "./Header.scss";

export const Header = () => (
  <div className="header">
    <h1 className="header__title">Expense Tracker</h1>
    <Currency />
  </div>
);
