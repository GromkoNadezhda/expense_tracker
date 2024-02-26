import { IExpenses, IStoreCurrency } from "@common/types/types";

export const selecTCurrency = (store: IStoreCurrency) =>
  store.currency.currency;
export const selectLoading = (store: IStoreCurrency) => store.currency.loading;
export const selectWallets = (store: IExpenses) => store.expenses.wallets;
export const selectExpenses = (store: IExpenses) => store.expenses.userExpenses;
