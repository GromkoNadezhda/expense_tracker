import { WALLET_ID } from "./constants";

export interface IWallet {
  id: WALLET_ID;
  sum: number;
}

export type IWallets = Record<WALLET_ID, IWallet>;
