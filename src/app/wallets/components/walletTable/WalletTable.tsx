import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { WALLET_HISTORY_KEY_LIST, WALLET_ID } from "@app/wallets/constants";
import { BasicChart } from "@common/components/Chart/BasicChart";
import { selectIncomeHistory } from "@common/store/selectors";
import { BasicTable } from "@common/components";
import { ActiveMenu } from "@common/components/activeMenu/ActiveMenu";
import { MenuItem } from "@mui/material";
import { ACTIVE_MENU } from "@common/constants/constants";
import { updateIncomeHistory, updateWallet } from "@common/store/expensesSlice";
import "./WalletTable.scss";

export const WalletTable = () => {
  const [date, setDate] = useState<string[]>([]);
  const [sum, setSum] = useState<number[]>([]);

  const incomeHistory = useSelector(selectIncomeHistory);

  const dispatch = useDispatch();

  const { walletId } = useParams();

  useEffect(() => {
    const incomeSum = incomeHistory[
      walletId?.toUpperCase() as WALLET_ID
    ].flatMap((incomes) => incomes.sum);

    const incomeDate = incomeHistory[
      walletId?.toUpperCase() as WALLET_ID
    ].flatMap((incomes) => incomes.date);

    setSum(incomeSum);
    setDate(incomeDate);
  }, [incomeHistory, walletId]);

  const clearWallet = (
    walletId: WALLET_ID,
    incomeId: string,
    incomeSum: number
  ) => {
    const wallet = walletId.toUpperCase() as WALLET_ID;

    dispatch(updateWallet({ id: wallet, sum: incomeSum }));

    dispatch(updateIncomeHistory({ wallet: wallet, id: incomeId }));
  };

  return (
    <div className="wallet-table">
      <BasicTable
        childrenHeaderContent={WALLET_HISTORY_KEY_LIST.map((title) => (
          <th key={title}>{title}</th>
        ))}
        childrenBody={incomeHistory[walletId?.toUpperCase() as WALLET_ID].map(
          ({ date, sum, id }) => (
            <tr key={id}>
              <td className="table__item">{date}</td>
              <td className="table__item">{sum}</td>
              <td className="table__item">
                {
                  <ActiveMenu
                    className="expenses-table__icon"
                    children={
                      <MenuItem
                        className="active-menu__item"
                        onClick={() => {
                          clearWallet(walletId as WALLET_ID, id, sum);
                        }}
                      >
                        {ACTIVE_MENU.REMOVE}
                      </MenuItem>
                    }
                  />
                }
              </td>
            </tr>
          )
        )}
      />
      <BasicChart
        labels={date}
        label={walletId?.toUpperCase() as string}
        data={sum}
      />
    </div>
  );
};
