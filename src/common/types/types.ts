import { ThunkDispatch } from "@reduxjs/toolkit";
import { IWallets } from "@app/wallets/type";
import { NAVIGATION } from "@common/constants/constants";
import { IUserExpense } from "@app/expenses/type";

export type TDispatch = ThunkDispatch<any, any, any>;

export interface IStoreCurrency {
  currency: {
    currency: ICurrancy[];
    loading: boolean;
    error: {};
  };
}

export type TCurrency = "USD" | "EUR";

export interface ICurrancy {
  Cur_Abbreviation: TCurrency;
  Cur_OfficialRate: number;
}

export interface IExpenses {
  [NAVIGATION.EXPENSES]: {
    wallets: IWallets;
    userExpenses: IUserExpense[];
  };
}
