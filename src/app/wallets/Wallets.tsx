import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectWallets } from "@store/selectors";
import {
  addIncomeHistory,
  addWallets,
  updateWallet,
} from "@store/expensesSlice";
import {
  AlertModal,
  BasicButton,
  BasicDatePicker,
  BasicModal,
  MenuListComposition,
} from "@common/components";
import { ALERT_BUTTON } from "@common/constants/constants";
import { IWallet } from "./type";
import { BUTTON_CONTENT_LIST, WALLET_ID, WALLET_TYPE } from "./constants";
import "./Wallets.scss";
import { BasicSnackbar } from "@common/components/basicSnackbar/BasicSnackbar";
import { TextField } from "@mui/material";

const INITIAL_STATE = {
  openModal: false,
  inputValue: null,
  walletId: WALLET_ID.SAVINGS,
  openMenuListComposition: false,
};

export const Wallets = () => {
  const [openBasicModal, setOpenBasicModal] = useState(INITIAL_STATE.openModal);
  const [openAlertModal, setOpenAlertModal] = useState(INITIAL_STATE.openModal);
  const [openSnackbar, setOpenSnackbar] = useState(INITIAL_STATE.openModal);
  const [walletId, setWalletId] = useState<WALLET_ID>(INITIAL_STATE.walletId);
  const [inputValue, setInputValue] = useState<null | IWallet>(
    INITIAL_STATE.inputValue
  );
  const [openMenuListComposition, setOpenMenuListComposition] = useState(
    INITIAL_STATE.openMenuListComposition
  );

  const wallets = useSelector(selectWallets);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const walletList: Omit<IWallet, "date">[] = Object.values(wallets);

  const updateInputValue = (event: React.FocusEvent<HTMLInputElement>) =>
    setInputValue({
      id: event.target.id as WALLET_ID,
      sum: +event.target.value,
      date: "",
    });

  const onClickModalButton = () => {
    setOpenBasicModal(!openBasicModal);

    dispatch(addWallets(inputValue));
    dispatch(addIncomeHistory(inputValue));

    setInputValue(null)
  };

  const disabled = useMemo(() => {
    if (inputValue) {
      const { date, sum } = inputValue;

      return date && sum ? false : true;
    }

    return true;
  }, [inputValue]);

  const clearWallet = (buttonId: ALERT_BUTTON, wallet: WALLET_ID) => {
    if (buttonId === ALERT_BUTTON.OK) {
      dispatch(
        updateWallet({
          wallets: wallet,
          sum: wallets[wallet].sum as number,
        })
      );
      setOpenSnackbar(!openSnackbar);
    }
    setOpenAlertModal(!openAlertModal);
  };

  const openActiveMenu = (buttonId: string) =>
    buttonId === "Сlear"
      ? setOpenAlertModal(!openAlertModal)
      : navigate(`${walletId.toLowerCase()}`);

  return (
    <>
      <div className="wallets">
        {walletList.map(({ id, sum }) => (
          <div className="wallets__wrapper-item" key={id}>
            <div
              className="wallets__item"
              id={id}
              onClick={(event) =>
                setWalletId(event.currentTarget.id as WALLET_ID)
              }
            >
              <div className="wallets__menu-list">
                <MenuListComposition
                  onClick={() =>
                    setOpenMenuListComposition(!openMenuListComposition)
                  }
                  open={openMenuListComposition}
                  children={
                    walletId === id && (
                      <div
                        className="menu-list__content"
                        onClick={() =>
                          setOpenMenuListComposition(!openMenuListComposition)
                        }
                      >
                        {BUTTON_CONTENT_LIST.map((button_content) => (
                          <button
                            className="menu-list__button"
                            key={button_content}
                            id={walletId}
                            onClick={() => openActiveMenu(button_content)}
                          >
                            {button_content}
                          </button>
                        ))}
                      </div>
                    )
                  }
                />
              </div>
              <h2 className="wallets__title">{WALLET_TYPE[id]}</h2>
              <span className="wallets__sum">$ {sum}</span>
              <BasicButton
                variant={"contained"}
                className={"wallets__btn"}
                onClick={() => {
                  setOpenBasicModal(!openBasicModal);
                }}
                children={"Add Receipt"}
              />
            </div>
            <BasicModal
              onClick={() => setOpenBasicModal(!openBasicModal)}
              disabled={openBasicModal}
              children={
                <div className="wallets__modal-content wallets_basic-modal">
                  <h2 className="basic-modal__title">Enter a sum</h2>
                  <TextField
                    id={walletId}
                    type="number"
                    className="basic-modal__input"
                    onBlur={updateInputValue}
                  />
                  <BasicDatePicker
                    onChange={(newValue) =>
                      setInputValue({
                        ...(inputValue as IWallet),
                        date: newValue,
                      })
                    }
                  />
                  <BasicButton
                    disabled={disabled}
                    variant={"outlined"}
                    className={"basic-modal__btn"}
                    onClick={() => onClickModalButton()}
                    children={"Add"}
                  />
                </div>
              }
            />
          </div>
        ))}
      </div>
      <AlertModal
        title={`Are you sure you want to clean out ${walletId.toLowerCase()} wallet?`}
        disabled={openAlertModal}
        onClick={(buttonId, wallet = walletId) => clearWallet(buttonId, wallet)}
      />
      <BasicSnackbar
        disabled={openSnackbar}
        onClick={() => setOpenSnackbar(!openSnackbar)}
        message={`${walletId.toLowerCase()} account is empty`}
      />
    </>
  );
};
