import { createSlice } from "@reduxjs/toolkit";
import { WALLET_ID } from "@app/wallets/constants";
import { IWallets } from "@app/wallets/type";
import { IUserExpenses } from "@app/expenses/type";
import { ACTIVE_MENU } from "@app/expenses/constants";

const INITIAL_STATE: {
  wallets: IWallets;
  userExpenses: IUserExpenses[];
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
  userExpenses: [],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    wallets: INITIAL_STATE.wallets,
    userExpenses: INITIAL_STATE.userExpenses,
  },
  reducers: {
    addWallets(state, action) {
      state.wallets = {
        ...state.wallets,
        [action.payload.type]: {
          id: action.payload.type,
          sum:
            state.wallets[action.payload.type as WALLET_ID].sum +
            action.payload.sum,
        },
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
  },
});

export const {
  addWallets,
  addExpenses,
  updateWallet,
  removeWallet,
  removeExpenses,
} = expensesSlice.actions;

export default expensesSlice.reducer;
