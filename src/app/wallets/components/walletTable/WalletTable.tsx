import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { WALLET_ID } from "@app/wallets/constants";
import { BasicChart } from "@common/components/Chart/BasicChart";
import { selectIncomeHistory } from "@common/store/selectors";

export const WalletTable = () => {
  const [date, setDate] = useState<string[]>([]);
  const [sum, setSum] = useState<number[]>([]);

  const incomeHistory = useSelector(selectIncomeHistory);

  const { id } = useParams();

  useEffect(() => {
    const incomeSum = incomeHistory[id?.toUpperCase() as WALLET_ID].flatMap(
      (incomes) => incomes.sum
    );

    const incomeDate = incomeHistory[id?.toUpperCase() as WALLET_ID].flatMap(
      (incomes) => incomes.date
    );

    setSum(incomeSum);
    setDate(incomeDate);
  }, [incomeHistory, id]);

  return (
    <BasicChart labels={date} label={id?.toUpperCase() as string} data={sum} />
  );
};
