import {
  EXPENSE_TYPES,
  NAVIGATION,
  WALLET_ID,
  WALLET_TYPE,
} from "../constants/constants";

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

export interface IWallets {
  [WALLET_ID.SAVINGS]: {
    id: WALLET_ID.SAVINGS;
    type: WALLET_TYPE.SAVINGS;
    sum: number;
  };
  [WALLET_ID.SALARY]: {
    id: WALLET_ID.SALARY;
    type: WALLET_TYPE.SALARY;
    sum: number;
  };
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

export type TButtonVariant = "contained" | "outlined";

export interface ICommonProps {
  variant?: TButtonVariant;
  disabled?: boolean;
  className?: string;
  title: string;
  mainCaontent?: string;
  onClick?: () => void;
}
