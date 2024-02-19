import { IExpenses, IStoreCurrency } from "@types";

export const selecTCurrency = (store: IStoreCurrency) =>
  store.currency.currency;
export const selectLoading = (store: IStoreCurrency) => store.currency.loading;
export const selectWallets = (store: IExpenses) => store.expenses.wallets;
