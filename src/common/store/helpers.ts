import { USER_EXPENSES_ID } from "@app/expenses/constants";
import { IFilteringValues, IUserExpenses } from "@app/expenses/type";
import { SORTED_TYPE } from "@common/constants/constants";

export const filteredUserExpenses = (
  filteringValues: IFilteringValues,
  userExpenses: IUserExpenses[]
) => {
  if (filteringValues !== null) {
    const { expenses, wallets, creationDate, editingDate, sum, description } =
      filteringValues;

    if (
      !!expenses &&
      !!wallets &&
      !!creationDate &&
      !!editingDate &&
      !!sum &&
      !!description
    )
      return userExpenses;

    return userExpenses.filter(
      (expense) =>
        expense.expenses.includes(expenses) ||
        expense.wallets.includes(wallets) ||
        expense.creationDate.includes(creationDate) ||
        expense.editingDate?.includes(editingDate as string) ||
        expense.sum.toString().includes(String(sum)) ||
        expense.description?.includes(description as string)
    );
  } else return userExpenses;
};

export const sortUserExpenses = (
  userExpenses: IUserExpenses[],
  sort: SORTED_TYPE,
  sortingValue: USER_EXPENSES_ID
) => {
  if (!!sort) userExpenses;

  return [...userExpenses].sort((a: IUserExpenses, b: IUserExpenses) => {
    if ((a as any)[sortingValue] > (b as any)[sortingValue]) return -sort;

    if ((a as any)[sortingValue] < (b as any)[sortingValue]) return sort;

    return 0;
  });
};
