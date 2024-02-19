import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import expensesReducer from "./expensesSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    expenses: expensesReducer,
  },
});
