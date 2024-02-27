import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "@mui/material";
import { selectExpenses } from "@common/store/selectors";
import { removeExpenses } from "@common/store/expensesSlice";
import {
  ACTIVE_MENU_LIST,
  EXPENSES_TABLE_HEADER_LIST,
} from "@app/expenses/constants";
import { ActiveMenu } from "@common/components/activeMenu/ActiveMenu";
import "./ExpensesTable.scss";

export const ExpensesTable = () => {
  const userExpenses = useSelector(selectExpenses);

  const dispatch = useDispatch();

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
        userExpenses.map(
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
                      children={ACTIVE_MENU_LIST.map((active_menu) => (
                        <MenuItem
                          className="active-menu__item"
                          key={active_menu}
                          onClick={() =>
                            dispatch(
                              removeExpenses({
                                buttonId: active_menu,
                                expensesId: id,
                                walletId: wallets,
                                expensesSum: +sum,
                              })
                            )
                          }
                        >
                          {active_menu}
                        </MenuItem>
                      ))}
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
