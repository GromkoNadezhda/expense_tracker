import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import {
  selectAllExpenses,
  selectSortedUserExpenses,
} from "@common/store/selectors";
import {
  removeExpenses,
  // removeWallet,
  updateSortingOptions,
  updateWallet,
} from "@common/store/expensesSlice";
import {
  EXPENSES_FILTERING_TITLE,
  EXPENSES_TABLE_HEADER_LIST,
  USER_EXPENSES_ID,
} from "@app/expenses/constants";
import { IFilteringValues } from "@app/expenses/type";
import { ActiveMenu } from "@common/components/activeMenu/ActiveMenu";
import { BasicButton, BasicTable } from "@common/components";
import { ACTIVE_MENU_LIST } from "@common/constants/constants";
import { WALLET_ID } from "@app/wallets/constants";
import { ExpenseTableFiltering } from "../ExpenseTableFiltering/ExpenseTableFiltering";
import "./ExpensesTable.scss";

const INITIAL_STATE = {
  open: false,
  filteringTitle: EXPENSES_FILTERING_TITLE.INACTIVE,
  userFilteringValues: null,
};

export const ExpensesTable = ({
  editUserExpenses,
}: {
  editUserExpenses: (buttonId: string, expensesId: string) => void;
}) => {
  const [open, setOpen] = useState(INITIAL_STATE.open);
  const [filteringTitle, setFilteringTitle] = useState(
    INITIAL_STATE.filteringTitle
  );
  const [userFilteringValues, setUserFilteringValues] =
    useState<IFilteringValues | null>(INITIAL_STATE.userFilteringValues);

  const selectedUserExpenses = useSelector(selectSortedUserExpenses);
  const allUserExpenses = useSelector(selectAllExpenses);
  const dispatch = useDispatch();

  const handleActiveMenuClick = (
    active_menu: string,
    id: string,
    wallets: WALLET_ID,
    sum: number
  ) => {
    dispatch(
      removeExpenses({
        buttonId: active_menu,
        expensesId: id,
        walletId: wallets,
        expensesSum: +sum,
      })
    );

    dispatch(
      updateWallet({
        id: wallets,
        sum: -sum,
      })
    );

    editUserExpenses(active_menu, id);
  };

  const updateFilteringTitle = () => {
    open
      ? setFilteringTitle(EXPENSES_FILTERING_TITLE.INACTIVE)
      : setFilteringTitle(EXPENSES_FILTERING_TITLE.ACTIVE);

    setOpen(!open);
  };

  const updateSortingSettings = (id: string) => {
    dispatch(updateSortingOptions(id));
  };

  return (
    <BasicTable
      childrenHeader={
        <tr className="expenses-table__icon" onClick={updateFilteringTitle}>
          <th>
            <FilterAltIcon />
            <span>{filteringTitle}</span>
            <span>
              - showing {selectedUserExpenses.length} of
              {allUserExpenses.length}
            </span>
          </th>
        </tr>
      }
      childrenHeaderContent={EXPENSES_TABLE_HEADER_LIST.map(({ title, id }) => (
        <th key={title} className="expenses-table__item">
          <div className="expenses-table__wrapper-item">
            {title}
            <BasicButton
              variant="text"
              className="expenses-table__sorting"
              onClick={() => updateSortingSettings(id)}
            >
              {<SwapVertIcon />}
            </BasicButton>
          </div>
          {open && (
            <ExpenseTableFiltering
              table_header={title}
              id={id as USER_EXPENSES_ID}
              userFilteringValues={userFilteringValues as IFilteringValues}
              setUserFilteringValues={setUserFilteringValues}
              open={open}
            />
          )}
        </th>
      ))}
      childrenBody={
        !!selectedUserExpenses.length &&
        selectedUserExpenses.map(
          ({
            expenses,
            creationDate,
            editingDate,
            sum,
            wallets,
            description,
            id,
          }) => (
            <tr className="expenses-table__body" key={id}>
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
                        onClick={() => {
                          handleActiveMenuClick(active_menu, id, wallets, sum);
                        }}
                      >
                        {active_menu}
                      </MenuItem>
                    ))}
                  />
                }
              </td>
            </tr>
          )
        )
      }
    />
    // <table className="expenses-table">
    //   <thead className="expenses-table__wrapper">
    //     <tr className="expenses-table__icon" onClick={updateFilteringTitle}>
    //       <th>
    //         <FilterAltIcon />
    //         <span>{filteringTitle}</span>
    //         <span>
    //           - showing {selectedUserExpenses.length} of
    //           {allUserExpenses.length}
    //         </span>
    //       </th>
    //     </tr>
    //     <tr className="expenses-table__header">
    //       {EXPENSES_TABLE_HEADER_LIST.map(({ title, id }) => (
    //         <th key={title} className="expenses-table__item">
    //           <div className="expenses-table__wrapper-item">
    //             {title}
    //             <BasicButton
    //               variant="text"
    //               className="expenses-table__sorting"
    //               onClick={() => updateSortingSettings(id)}
    //             >
    //               {<SwapVertIcon />}
    //             </BasicButton>
    //           </div>
    //           {open && (
    //             <ExpenseTableFiltering
    //               table_header={title}
    //               id={id as USER_EXPENSES_ID}
    //               userFilteringValues={userFilteringValues as IFilteringValues}
    //               setUserFilteringValues={setUserFilteringValues}
    //               open={open}
    //             />
    //           )}
    //         </th>
    //       ))}
    //     </tr>
    //   </thead>
    //   {!!selectedUserExpenses.length &&
    //     selectedUserExpenses.map(
    //       ({
    //         expenses,
    //         creationDate,
    //         editingDate,
    //         sum,
    //         wallets,
    //         description,
    //         id,
    //       }) => (
    //         <tbody key={id} className="expenses-table__wrapper">
    //           <tr className="expenses-table__body">
    //             <td className="expenses-table__item">{expenses}</td>
    //             <td className="expenses-table__item">{creationDate}</td>
    //             <td className="expenses-table__item">{editingDate}</td>
    //             <td className="expenses-table__item">{sum}</td>
    //             <td className="expenses-table__item">{wallets}</td>
    //             <td className="expenses-table__item">{description}</td>
    //             <td className="expenses-table__item">
    //               {
    //                 <ActiveMenu
    //                   className="expenses-table__icon"
    //                   children={ACTIVE_MENU_LIST.map((active_menu) => (
    //                     <MenuItem
    //                       className="active-menu__item"
    //                       key={active_menu}
    //                       onClick={() => {
    //                         handleActiveMenuClick(
    //                           active_menu,
    //                           id,
    //                           wallets,
    //                           sum
    //                         );
    //                       }}
    //                     >
    //                       {active_menu}
    //                     </MenuItem>
    //                   ))}
    //                 />
    //               }
    //             </td>
    //           </tr>
    //         </tbody>
    //       )
    //     )}
    // </table>
  );
};
