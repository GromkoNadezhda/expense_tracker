import { ThunkDispatch } from "@reduxjs/toolkit";
import { IWallets } from "@app/wallets/type";
import { EXPENSE_TYPES, NAVIGATION } from "@common/constants/constants";

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


export interface IUserExpense {
  id: string;
  expenseType: EXPENSE_TYPES;
  walletType: string;
  walletId: string;
  creationDate: Date;
  editingDate?: Date;
  expenseSum: number;
  description?: string;
}

export interface IExpenses {
  [NAVIGATION.EXPENSES]: {
    wallets: IWallets;
    userExpenses: IUserExpense[];
  };
}
