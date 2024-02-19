import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import { selecTCurrency, selectLoading } from "@common/store/selectors";
import { TDispatch } from "@common/types/types";
import { fetchData } from "@common/store/thunk";
import "./Currency.scss";

export const Currency = () => {
  const currencies = useSelector(selecTCurrency);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch<TDispatch>();

  useEffect(() => {
    dispatch(fetchData("https://api.nbrb.by/exrates/rates?periodicity=0"));
  }, []);

  if (loading) return <LinearProgress color="inherit" />;

  return (
    <div className="currency">
      {currencies.map((currency) => (
        <div className="currency__item" key={currency.Cur_Abbreviation}>
          <span className="currency__content">{currency.Cur_Abbreviation}</span>
          <span className="currency__content">{currency.Cur_OfficialRate}</span>
        </div>
      ))}
    </div>
  );
};
