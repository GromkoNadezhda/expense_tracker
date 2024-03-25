import { WALLET_ID } from "./constants";

export interface IWallet {
  id: WALLET_ID;
  sum: number;
  date: string;
}

export type IWallets = Record<WALLET_ID, Omit<IWallet, "date">>;

export type TWalletsHistory = Record<WALLET_ID, Omit<IWallet, "id">[]>;

