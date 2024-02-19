import { createSlice } from "@reduxjs/toolkit";
import { WALLET_ID } from "@app/wallets/constants";
import { IWallets } from "@app/wallets/type";
import { IUserExpense } from "@common/types/types";

const INITIAL_STATE: {
  wallets: IWallets;
  userExpenses: IUserExpense[];
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
  },
});

export const { addWallets } = expensesSlice.actions;

export default expensesSlice.reducer;
