import { WALLET_ID, WALLET_TYPE } from "@app/wallets/constants";
import { EXPENSES_TYPE } from "./constants";

export interface IUserExpense {
  id: string;
  expensesType: EXPENSES_TYPE;
  walletType: WALLET_TYPE.SALARY | WALLET_TYPE.SAVINGS;
  walletId: WALLET_ID;
  creationDate: Date;
  editingDate?: Date;
  expensesSum: number;
  description?: string;
}

export type TExpensesInput ={ type: EXPENSES_TYPE, id:EXPENSES_TYPE};

