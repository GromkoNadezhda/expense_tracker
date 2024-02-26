import { WALLET_ID_LIST } from "@app/wallets/constants";

export enum BUTTON_VARIANT {
  CONTAINED = "contained",
  TEXT = "text",
  OUTLINED = "outlined",
}

export const EXPENSES_BASIC_BUTTON = {
  addExpenses: {
    id: "expenses",
    variant: BUTTON_VARIANT.CONTAINED,
    className: "expenses__contained",
    content: "Add expenses",
  },
  addReceipts: {
    id: "receipts",
    variant: BUTTON_VARIANT.TEXT,
    className: "expenses__text-btn",
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

enum SELECT_ID {
  EXPENSES = "expenses",
  WALLETS = "wallets",
}

const ALL_SELECT = {
  expenses: {
    placeholder: "Select an expense type *",
    data: EXPENSES_TYPE_LIST,
    id: SELECT_ID.EXPENSES,
  },
  wallets: {
    placeholder: "Select a wallet type *",
    data: WALLET_ID_LIST,
    id: SELECT_ID.WALLETS,
  },
};

export const ALL_SELECT_LIST = Object.values(ALL_SELECT);

export enum INPUT_ID {
  SUM = "sum",
  DESCRIPTION = "description",
}

const EXPENSES_INPUT = {
  sum: {
    type: "number",
    id: INPUT_ID.SUM,
    placeholder: "Add an amount *",
  },
  description: {
    type: "text",
    id: INPUT_ID.DESCRIPTION,
    placeholder: "Add description",
  },
};

export const EXPENSES_INPUT_LIST = Object.values(EXPENSES_INPUT);

enum EXPENSES_TABLE_HEADER {
  EXPENSES_TYPE = "Type of expenses",
  CREATION_DATE = "Creation date",
  EDETION_DATE = "Editing date",
  SUM = "Sum",
  WALLET_TYPE = "Wallet",
  DESCRIPTION = "Description",
  ACTIONS = "Actions",
}

export const EXPENSES_TABLE_HEADER_LIST = Object.values(EXPENSES_TABLE_HEADER);

export enum ACTIVE_MENU {
  EDIT = "Edit",
  REMOVE = "Remove",
}

export const ACTIVE_MENU_LIST = Object.values(ACTIVE_MENU);
