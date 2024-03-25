import { ThunkDispatch } from "@reduxjs/toolkit";
import { IWallets, TWalletsHistory } from "@app/wallets/type";
import { NAVIGATION } from "@common/constants/constants";
import { IUserExpenses } from "@app/expenses/type";
import { USER_EXPENSES_ID } from "@app/expenses/constants";

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

export interface ISortingOptions {
  sortedBy: USER_EXPENSES_ID | string;
  sortedType: number;
}

export interface IExpenses {
  [NAVIGATION.EXPENSES]: {
    wallets: IWallets;
    incomeHistory: TWalletsHistory;
    userExpenses: IUserExpenses[];
    filteringValues: IUserExpenses;
    sortingOptions: ISortingOptions;
  };
}
