import { createSlice } from "@reduxjs/toolkit";
import { WALLET_ID, WALLET_TYPE } from "@constants/constants";
import { IUserExpense, IWallets } from "@types";

const INITIAL_STATE: {
  wallets: IWallets;
  userExpenses: IUserExpense[];
} = {
  wallets: {
    [WALLET_ID.SAVINGS]: {
      id: WALLET_ID.SAVINGS,
      type: WALLET_TYPE.SAVINGS,
      sum: 0,
    },
    [WALLET_ID.SALARY]: {
      id: WALLET_ID.SALARY,
      type: WALLET_TYPE.SALARY,
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
  reducers: {},
});

export default expensesSlice.reducer;
