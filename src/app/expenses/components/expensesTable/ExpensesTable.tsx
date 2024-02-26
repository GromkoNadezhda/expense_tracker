import { useState } from "react";
import { useSelector } from "react-redux";
import { selectExpenses } from "@common/store/selectors";
import {
  ACTIVE_MENU,
  ACTIVE_MENU_LIST,
  EXPENSES_TABLE_HEADER_LIST,
} from "@app/expenses/constants";
import { ActiveMenu } from "@common/components/activeMenu/ActiveMenu";
import "./ExpensesTable.scss";

export const ExpensesTable = () => {
  const userExpenses = useSelector(selectExpenses);

  const [updatedExpenses, setUpdatedExpenses]=useState(userExpenses)

  const updateExpenses = (buttonId: string, expensesId: string) => {
    buttonId === ACTIVE_MENU.REMOVE?
    setUpdatedExpenses(userExpenses.filter(({ id }) => id !== expensesId)):setUpdatedExpenses(userExpenses)
  };

  return (
    <table className="expenses-table">
      <thead className="expenses-table__wrapper">
        <tr className="expenses-table__header">
          {EXPENSES_TABLE_HEADER_LIST.map((table_header) => (
            <th key={table_header} className="expenses-table__item">
              {table_header}
            </th>
          ))}
        </tr>
      </thead>
      {!!userExpenses.length &&
        updatedExpenses.map(
          ({
            expenses,
            creationDate,
            editingDate,
            sum,
            wallets,
            description,
            id,
          }) => (
            <tbody key={expenses} className="expenses-table__wrapper">
              <tr className="expenses-table__body">
                <td className="expenses-table__item">{expenses}</td>
                <td className="expenses-table__item">{creationDate}</td>
                <td className="expenses-table__item">{editingDate}</td>
                <td className="expenses-table__item">{sum}</td>
                <td className="expenses-table__item">{wallets}</td>
                <td className="expenses-table__item">{description}</td>
                <td className="expenses-table__item">
                  {
                    <ActiveMenu
                      className="expenses-table__icon"
                      menuItems={ACTIVE_MENU_LIST as []}
                      onClick={()=>updateExpenses(ACTIVE_MENU.REMOVE, id)}
                    />
                  }
                </td>
              </tr>
            </tbody>
          )
        )}
    </table>
  );
};
