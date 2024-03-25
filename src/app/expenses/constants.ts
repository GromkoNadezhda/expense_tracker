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

export enum USER_EXPENSES_ID {
  EXPENSES = "expenses",
  CREATION_DATE = "creationDate",
  EDITING_DATE = "editingDate",
  SUM = "sum",
  WALLETS = "wallets",
  DESCRIPTION = "description",
}

export const ALL_SELECT = {
  expenses: {
    placeholder: "Select an expense type *",
    data: EXPENSES_TYPE_LIST,
    id: USER_EXPENSES_ID.EXPENSES,
  },
  wallets: {
    placeholder: "Select a wallet type *",
    data: WALLET_ID_LIST,
    id: USER_EXPENSES_ID.WALLETS,
  },
};

export const ALL_SELECT_LIST = Object.values(ALL_SELECT);

const EXPENSES_INPUT = {
  sum: {
    type: "number",
    id: USER_EXPENSES_ID.SUM,
    placeholder: "Add an amount *",
  },
  description: {
    type: "text",
    id: USER_EXPENSES_ID.DESCRIPTION,
    placeholder: "Add description",
  },
};

export const EXPENSES_INPUT_LIST = Object.values(EXPENSES_INPUT);

export const EXPENSES_TABLE_HEADER = {
  [USER_EXPENSES_ID.EXPENSES]: {
    title: "Type of expenses",
    id: USER_EXPENSES_ID.EXPENSES,
  },
  [USER_EXPENSES_ID.CREATION_DATE]: {
    title: "Creation date",
    id: USER_EXPENSES_ID.CREATION_DATE,
  },
  [USER_EXPENSES_ID.EDITING_DATE]: {
    title: "Editing date",
    id: USER_EXPENSES_ID.EDITING_DATE,
  },
  [USER_EXPENSES_ID.SUM]: { title: "Sum", id: USER_EXPENSES_ID.SUM },
  [USER_EXPENSES_ID.WALLETS]: { title: "Wallet", id: USER_EXPENSES_ID.WALLETS },
  [USER_EXPENSES_ID.DESCRIPTION]: {
    title: "Description",
    id: USER_EXPENSES_ID.DESCRIPTION,
  },
  actions: { title: "", id: "actions" },
};

export const EXPENSES_TABLE_HEADER_LIST = Object.values(EXPENSES_TABLE_HEADER);

export enum EXPENSES_FILTERING_TITLE {
  ACTIVE = "Filtering is active",
  INACTIVE = "Filtering is inactive",
}
export enum ACTIVE_MENU {
  EDIT = "Edit",
  REMOVE = "Remove",
}

export const ACTIVE_MENU_LIST = Object.values(ACTIVE_MENU);
