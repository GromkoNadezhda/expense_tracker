import { Expenses } from "@app/expenses/Expenses";
import { Wallets } from "@app/wallets/Wallets";

export const CURRENCY_ID = { USD: 431, EUR: 451 };

export enum NAVIGATION {
  WALLETS = "wallets",
  EXPENSES = "expenses",
}

export const NAVIGATION_LIST = Object.values(NAVIGATION);

export const ROUTES = {
  [NAVIGATION.WALLETS]: {
    path: NAVIGATION.WALLETS,
    Component: Wallets,
  },
  [NAVIGATION.EXPENSES]: {
    path: NAVIGATION.EXPENSES,
    Component: Expenses,
  },
};

export const ROUTES_LIST = Object.values(ROUTES);

export enum ALERT_BUTTON {
  CLOSE = "CLOSE",
  OK = "OK",
}

export const ALERT_BUTTON_LIST = Object.values(ALERT_BUTTON);
