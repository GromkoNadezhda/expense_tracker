import { createSlice } from "@reduxjs/toolkit";
import { WALLET_ID } from "@app/wallets/constants";
import { IWallets } from "@app/wallets/type";
import { IUserExpenses } from "@app/expenses/type";

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
      state.userExpenses.push(action.payload);
    },
    updateWallets(
      state,
      action: { payload: { wallets: WALLET_ID; sum: number } }
    ) {
      state.wallets[action.payload.wallets].sum =
        state.wallets[action.payload.wallets].sum - action.payload.sum;
    },
  },
});

export const { addWallets, addExpenses, updateWallets } = expensesSlice.actions;

export default expensesSlice.reducer;
