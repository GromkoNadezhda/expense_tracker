import { createSlice } from "@reduxjs/toolkit";
import { WALLET_ID } from "@app/wallets/constants";
import { IWallets, TWalletsHistory } from "@app/wallets/type";
import { IFilteringValues, IUserExpenses } from "@app/expenses/type";
import { ACTIVE_MENU } from "@app/expenses/constants";
import { ISortingOptions } from "@common/types/types";

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
    addWallets(state, action) {
      state.wallets = {
        ...state.wallets,
        [action.payload.id]: {
          id: action.payload.id,
          sum:
            state.wallets[action.payload.id as WALLET_ID].sum +
            action.payload.sum,
        },
      };
    },

    addIncomeHistory(state, action) {
      state.incomeHistory = {
        ...state.incomeHistory,
        [action.payload.id]: [
          ...state.incomeHistory[action.payload.id as WALLET_ID],
          { sum: action.payload.sum, date: action.payload.date },
        ],
      };
    },

    addExpenses(state, action) {
      if (!state.userExpenses.length) state.userExpenses.push(action.payload);

      state.userExpenses = [
        ...state.userExpenses.filter(({ id }) => id !== action.payload.id),
        action.payload,
      ];
    },

    updateWallet(
      state,
      action: {
        payload: { wallets: WALLET_ID; sum: number };
      }
    ) {
      state.wallets[action.payload.wallets].sum =
        state.wallets[action.payload.wallets].sum - action.payload.sum;

      state.incomeHistory[action.payload.wallets] = [];
    },

    removeWallet(state, action) {
      state.wallets[action.payload.wallets as WALLET_ID].sum =
        +state.wallets[action.payload.wallets as WALLET_ID].sum +
        +action.payload.sum;
    },

    removeExpenses(state, action) {
      if (action.payload.buttonId === ACTIVE_MENU.REMOVE) {
        state.userExpenses = state.userExpenses.filter(
          ({ id }) => id !== action.payload.expensesId
        );
      }
    },

    addFilteringValues(state, action) {
      state.filteringValues = action.payload as IFilteringValues;
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
  addIncomeHistory,
  addExpenses,
  updateWallet,
  removeWallet,
  removeExpenses,
  addFilteringValues,
  updateSortingOptions,
} = expensesSlice.actions;

export default expensesSlice.reducer;
