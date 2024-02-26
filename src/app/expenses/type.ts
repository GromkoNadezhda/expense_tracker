import { WALLET_ID } from "@app/wallets/constants";
import { EXPENSES_TYPE } from "./constants";

export interface IUserExpenses {
  id: string;
  expenses: EXPENSES_TYPE;
  wallets: WALLET_ID.SALARY | WALLET_ID.SAVINGS;
  creationDate: string;
  editingDate?: string;
  sum: number;
  description?: string;
}
