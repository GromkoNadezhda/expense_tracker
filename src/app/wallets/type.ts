import { WALLET_ID, WALLET_TYPE } from "./constants";

export interface IWallet {
  id: WALLET_ID;
  sum: number;
}

export type IWallets = Record<WALLET_ID, IWallet>;

export type TWalletsInput ={ type: WALLET_TYPE, id:WALLET_ID};
