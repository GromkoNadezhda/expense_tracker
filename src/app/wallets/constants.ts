export enum WALLET_ID {
  SAVINGS = "SAVINGS",
  SALARY = "SALARY",
}

export const WALLET_ID_LIST = Object.values(WALLET_ID);

export enum WALLET_TYPE {
  SAVINGS = "Savings Wallet",
  SALARY = "Salary Wallet",
}

export const WALLET_TYPE_LIST = Object.values(WALLET_TYPE);

enum BUTTON_CONTENT{
  DETAILS='Details',
  CLEAR='Сlear'
}

export const BUTTON_CONTENT_LIST=Object.values(BUTTON_CONTENT)