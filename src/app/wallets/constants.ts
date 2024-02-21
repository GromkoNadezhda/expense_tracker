export enum WALLET_ID {
  SAVINGS = "SAVINGS",
  SALARY = "SALARY",
}

export enum WALLET_TYPE {
  SAVINGS = "Savings Wallet",
  SALARY = "Salary Wallet",
}

export const WALLET_TYPE_LIST = Object.values(WALLET_TYPE);

export const WALLET_INPUT = {
  [WALLET_ID.SALARY]: { value: WALLET_ID.SALARY, id: WALLET_ID },
  [WALLET_ID.SAVINGS]: { value: WALLET_ID.SAVINGS, id: WALLET_ID },
};

export const WALLET_INPUT_LIST = Object.values(WALLET_INPUT);
