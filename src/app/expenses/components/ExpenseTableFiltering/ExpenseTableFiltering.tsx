import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ALL_SELECT,
  EXPENSES_TABLE_HEADER,
  USER_EXPENSES_ID,
} from "@app/expenses/constants";
import { IFilteringValues } from "@app/expenses/type";
import { BasicDatePicker, BasicSelect } from "@common/components";
import { addFilteringValues } from "@common/store/expensesSlice";

interface ITableFilteringProps {
  table_header: string;
  id: USER_EXPENSES_ID;
  userFilteringValues: IFilteringValues;
  setUserFilteringValues: React.Dispatch<
    React.SetStateAction<IFilteringValues | null>
  >;
  open:boolean
}

export const ExpenseTableFiltering = ({
  table_header,
  id,
  userFilteringValues,
  setUserFilteringValues,
  open
}: ITableFilteringProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addFilteringValues(userFilteringValues));
    // if (!open) setUserFilteringValues(null)
  }, [userFilteringValues]);

  const updateFilteringValues = (newValue: string, key: USER_EXPENSES_ID) =>
    setUserFilteringValues({
      ...(userFilteringValues as IFilteringValues),
      [key]: newValue,
    });

  return (
    !!table_header.length &&
    (table_header === EXPENSES_TABLE_HEADER[USER_EXPENSES_ID.EXPENSES].title ? (
      <BasicSelect
        className="expenses-table__search"
        placeholder="filter"
        value={userFilteringValues?.expenses || ""}
        options={ALL_SELECT.expenses.data as string[]}
        onChange={(newValue, key = id) => updateFilteringValues(newValue, key)}
      />
    ) : table_header ===
      EXPENSES_TABLE_HEADER[USER_EXPENSES_ID.WALLETS].title ? (
      <BasicSelect
        className="expenses-table__search"
        placeholder="filter"
        value={userFilteringValues?.wallets || ""}
        options={ALL_SELECT.wallets.data as string[]}
        onChange={(newValue, key = id) => updateFilteringValues(newValue, key)}
      />
    ) : table_header ===
        EXPENSES_TABLE_HEADER[USER_EXPENSES_ID.CREATION_DATE].title ||
      table_header ===
        EXPENSES_TABLE_HEADER[USER_EXPENSES_ID.EDITING_DATE].title ? (
      <BasicDatePicker
        onChange={(newValue, key = id) => updateFilteringValues(newValue, key)}
      />
    ) : table_header === EXPENSES_TABLE_HEADER[USER_EXPENSES_ID.SUM].title ? (
      <input
        onChange={(event) => updateFilteringValues(event.target.value, id)}
        type="number"
        value={userFilteringValues?.sum || ""}
        placeholder="filter"
        className="expenses-table__search"
      />
    ) : (
      <input
        onChange={(event) => updateFilteringValues(event.target.value, id)}
        type="text"
        value={userFilteringValues?.description || ""}
        placeholder="filter"
        className="expenses-table__search"
      />
    ))
  );
};
