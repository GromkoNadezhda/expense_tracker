import { WALLET_INPUT_LIST } from "@app/wallets/constants";

export const EXPENSES_BASIC_BUTTON = {
  addExpenses: {
    id: "expenses",
    variant: "contained",
    className: "expenses__contained",
    content: "Add expenses",
  },
  addReceipts: {
    id: "receipts",
    variant: "text",
    className: "expenses__text",
    content: "Cash receipts entry",
  },
};

export const EXPENSES_BASIC_BUTTON_LIST = Object.values(EXPENSES_BASIC_BUTTON);

export enum EXPENSES_TYPE {
  GROCERY = "Grocery",
  TRANSPORTATION = "Transportation",
  HOUSING = "Housing",
  NUTRITION = "Nutrition",
  ENTERTEIMENT = "Entertainment",
}

export const EXPENSES_TYPE_LIST = Object.values(EXPENSES_TYPE);

const EXPENSES_SELECT = {
  [EXPENSES_TYPE.GROCERY]: {
    value: EXPENSES_TYPE.GROCERY,
    id: EXPENSES_TYPE.GROCERY,
  },
  [EXPENSES_TYPE.TRANSPORTATION]: {
    value: EXPENSES_TYPE.TRANSPORTATION,
    id: EXPENSES_TYPE.TRANSPORTATION,
  },
  [EXPENSES_TYPE.HOUSING]: {
    value: EXPENSES_TYPE.HOUSING,
    id: EXPENSES_TYPE.HOUSING,
  },
  [EXPENSES_TYPE.NUTRITION]: {
    value: EXPENSES_TYPE.NUTRITION,
    id: EXPENSES_TYPE.NUTRITION,
  },
  [EXPENSES_TYPE.ENTERTEIMENT]: {
    value: EXPENSES_TYPE.ENTERTEIMENT,
    id: EXPENSES_TYPE.ENTERTEIMENT,
  },
};

export const EXPPENSES_SELECT_LIST = Object.values(EXPENSES_SELECT);

const ALL_SELECT = {
  expenses: {
    placeholder: "Select an expense type",
    data: EXPPENSES_SELECT_LIST,
  },
  wallets: {
    placeholder: "Select a wallet type",
    data: WALLET_INPUT_LIST,
  },
};

export const EXPENSES_SELECT_LIST = Object.values(ALL_SELECT);

const EXPENSES_INPUT = {
  sum: {
    type: "number",
    placeholder: "Add an amount",
  },
  description: {
    type: "text",
    placeholder: "Add description",
  },
};

export const EXPENSES_INPUT_LIST = Object.values(EXPENSES_INPUT);
