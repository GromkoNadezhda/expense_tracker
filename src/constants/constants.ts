export const CURRENCY_ID = { USD: 431, EUR: 451 };

export enum NAVIGATION {
  EXPENSES = "expenses",
  WALLETS = "wallets",
}

export const NAVIGATION_LIST=Object.values(NAVIGATION)

export enum WALLET_ID {
    SAVINGS = "SAVINGS",
    SALARY = "SALARY",
  }  

export enum WALLET_TYPE{
    SAVINGS="Savings Wallet",
    SALARY="Salary Wallet"
}

export enum EXPENSE_TYPES {
    GROCERY = "Grocery",
    TRANSPORTATION = "Transportation",
    HOUSING = "Housing",
    NUTRITION = "Nutrition",
    ENTERTEIMENT = "Entertainment",
  }