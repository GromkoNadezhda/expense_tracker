import { IExpenses, IStoreCurrency } from "@common/types/types";
import { createSelector } from "@reduxjs/toolkit";
import { filteredUserExpenses, sortUserExpenses } from "./helpers";
import { USER_EXPENSES_ID } from "@app/expenses/constants";

export const selecTCurrency = (store: IStoreCurrency) =>
  store.currency.currency;
export const selectLoading = (store: IStoreCurrency) => store.currency.loading;
export const selectWallets = (store: IExpenses) => store.expenses.wallets;
export const selectIncomeHistory = (store: IExpenses) =>
  store.expenses.incomeHistory;
export const selectAllExpenses = (store: IExpenses) =>
  store.expenses.userExpenses;
export const selectActiveFilter = (store: IExpenses) =>
  store.expenses.filteringValues;
export const selectSortingType = (state: IExpenses) =>
  state.expenses.sortingOptions.sortedType;
export const selectSortingValue = (state: IExpenses) =>
  state.expenses.sortingOptions.sortedBy;

export const selectUserExpensesByFilter = createSelector(
  [selectActiveFilter, selectAllExpenses],
  (activeFilter, allExpenses) => filteredUserExpenses(activeFilter, allExpenses)
);

export const selectSortedUserExpenses = createSelector(
  [selectUserExpensesByFilter, selectSortingType, selectSortingValue],
  (userExpenses, selectSortingType, sortingValue) =>
    sortUserExpenses(
      userExpenses,
      selectSortingType,
      sortingValue as USER_EXPENSES_ID
    )
);
