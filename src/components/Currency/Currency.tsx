import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { selecTCurrency, selectLoading } from "@store/selectors";
import { fetchData } from "@store/thunk";
import { Preloader } from "@components/Common/Components/Preloader";
import "./Currency.scss";

export const Currency = () => {
  const currencies = useSelector(selecTCurrency);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchData("https://api.nbrb.by/exrates/rates?periodicity=0"));
  }, []);

  return loading ? (
    <Preloader />
  ) : (
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
