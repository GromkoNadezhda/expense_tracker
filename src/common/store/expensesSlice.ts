import { createSlice } from "@reduxjs/toolkit";
import { WALLET_ID } from "@app/wallets/constants";
import {
  ITotalWalletData,
  IWallet,
  IWallets,
  TWalletsHistory,
} from "@app/wallets/type";
import { IFilteringValues, IUserExpenses } from "@app/expenses/type";
import { ISortingOptions } from "@common/types/types";
import { ACTIVE_MENU } from "@common/constants/constants";

const INITIAL_STATE: {
  wallets: IWallets;
  incomeHistory: TWalletsHistory;
  userExpenses: IUserExpenses[];
  filteringValues: IFilteringValues | null;
  sortingOptions: ISortingOptions;
} = {
  wallets: {
    [WALLET_ID.SAVINGS]: {
      id: WALLET_ID.SAVINGS,
      sum: 0,
    },
    [WALLET_ID.SALARY]: {
      id: WALLET_ID.SALARY,
      sum: 0,
    },
  },
  incomeHistory: {
    [WALLET_ID.SAVINGS]: [],
    [WALLET_ID.SALARY]: [],
  },
  userExpenses: [],
  filteringValues: null,
  sortingOptions: { sortedBy: "", sortedType: 1 },
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    wallets: INITIAL_STATE.wallets,
    incomeHistory: INITIAL_STATE.incomeHistory,
    userExpenses: INITIAL_STATE.userExpenses,
    filteringValues: INITIAL_STATE.filteringValues,
    sortingOptions: INITIAL_STATE.sortingOptions,
  },
  reducers: {
    addWallets(state, action: { payload: IWallet }) {
      state.wallets = {
        ...state.wallets,
        [action.payload.id]: {
          id: action.payload.id,
          sum: state.wallets[action.payload.id].sum + action.payload.sum,
        },
      };
    },

    updateWallet(
      state,
      action: {
        payload: ITotalWalletData;
      }
    ) {
      state.wallets[action.payload.id].sum =
        state.wallets[action.payload.id].sum - action.payload.sum;
    },

    addIncomeHistory(
      state,
      action: { payload: { value: IWallet; id: string } }
    ) {
      state.incomeHistory = {
        ...state.incomeHistory,
        [action.payload.value.id]: [
          ...state.incomeHistory[action.payload.value.id],
          {
            sum: action.payload.value.sum,
            date: action.payload.value.date,
            id: action.payload.id,
          },
        ],
      };
    },

    updateIncomeHistory(
      state,
      action: { payload: { wallet: WALLET_ID; id: string } }
    ) {
      state.incomeHistory[action.payload.wallet] = state.incomeHistory[
        action.payload.wallet
      ].filter(({ id }) => id !== action.payload.id);
    },

    removeIncomeHistory(state, action: { payload: WALLET_ID }) {
      state.incomeHistory[action.payload] = [];
    },

    addExpenses(state, action) {
      if (!state.userExpenses.length) state.userExpenses.push(action.payload);

      state.userExpenses = [
        ...state.userExpenses.filter(({ id }) => id !== action.payload.id),
        action.payload,
      ];
    },

    sendExpensesSumToWallet(
      state,
      action: {
        payload: ITotalWalletData;
      }
    ) {
      const updatedExpenses = state.userExpenses.filter(
        (expenses) => expenses.wallets === action.payload.id
      );

      const expensesSum = updatedExpenses.reduce(
        (accumulator, currentValue) => +accumulator + +currentValue.sum,
        0
      );

      if (!state.wallets[action.payload.id].sum)
        state.wallets[action.payload.id].sum = -expensesSum;
    },

    removeExpenses(state, action) {
      if (action.payload.buttonId === ACTIVE_MENU.REMOVE) {
        state.userExpenses = state.userExpenses.filter(
          ({ id }) => id !== action.payload.expensesId
        );
      }
    },

    addFilteringValues(state, action: { payload: IFilteringValues }) {
      state.filteringValues = action.payload;
    },

    updateSortingOptions(state, action) {
      const updatedSortedType = state.sortingOptions.sortedType === 1 ? -1 : 1;

      state.sortingOptions = {
        sortedBy: action.payload,
        sortedType: updatedSortedType,
      };
    },
  },
});

export const {
  addWallets,
  updateWallet,
  addIncomeHistory,
  updateIncomeHistory,
  removeIncomeHistory,
  addExpenses,
  sendExpensesSumToWallet,
  removeExpenses,
  addFilteringValues,
  updateSortingOptions,
} = expensesSlice.actions;

export default expensesSlice.reducer;
