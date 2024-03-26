import { WALLET_ID } from "./constants";

export interface IWallet {
  id: WALLET_ID;
  sum: number;
  date: string;
}

export type ITotalWalletData = Omit<IWallet, "date">;

type TWalletHistory = Omit<IWallet, "id">;

interface IWalletHistory extends TWalletHistory {
  id: string;
}

export type IWallets = Record<WALLET_ID, Omit<IWallet, "date">>;

export type TWalletsHistory = Record<WALLET_ID, IWalletHistory[]>;
