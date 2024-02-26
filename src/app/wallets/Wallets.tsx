import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { IWallet } from "./type";
import { WALLET_ID, WALLET_TYPE } from "./constants";
import { selectWallets } from "@store/selectors";
import { addWallets } from "@store/expensesSlice";
import {
  BasicButton,
  BasicModal,
  MenuListComposition,
} from "@common/components";
import "./Wallets.scss";

const INITIAL_STATE = {
  openModal: false,
  inputValue: null,
  idModal: "",
};

export const Wallets = () => {
  const [openModal, setOpenModal] = useState(INITIAL_STATE.openModal);
  const [idModal, setIdModal] = useState(INITIAL_STATE.idModal);
  const [inputValue, setInputValue] = useState<null | {
    type: string;
    sum: number;
  }>(INITIAL_STATE.inputValue);

  const wallets = useSelector(selectWallets);
console.log(wallets);

  const dispatch = useDispatch();

  const walletsList: IWallet[] = Object.values(wallets);

  const updateOpenModal = (id?: WALLET_ID) => {
    setOpenModal(!openModal);
    if (id) setIdModal(id);
  };

  const updateInputValue = (event: React.FocusEvent<HTMLInputElement>) =>
    setInputValue({
      type: event.target.id,
      sum: +event.target.value,
    });

  const onClickModalButton = () => {
    updateOpenModal();
    dispatch(addWallets(inputValue));
  };

  return (
    <div className="wallets">
      {walletsList.map(({ id, sum }) => (
        <div className="wallets__item" key={id}>
          <div className="wallets__menu-list">
            <MenuListComposition id={id} />
          </div>
          <h2 className="wallets__title">{WALLET_TYPE[id]}</h2>
          <span className="wallets__sum">$ {sum}</span>
          <BasicButton
            variant={"contained"}
            className={"wallets__btn"}
            onClick={() => updateOpenModal(id)}
            children={<span className="wallets__btn-text">Add Receipt</span>}
          />
          <BasicModal
            onClick={() => updateOpenModal()}
            disabled={openModal}
            children={
              <>
                <h2 className="basic-modal__title">Enter a sum</h2>
                <input
                  id={idModal}
                  type="number"
                  className="basic-modal__input"
                  onBlur={updateInputValue}
                />
                <BasicButton
                  variant={"outlined"}
                  className={"basic-modal__btn"}
                  onClick={() => onClickModalButton()}
                  children={<span className="wallets__btn-text">Add</span>}
                />
              </>
            }
          />
        </div>
      ))}
    </div>
  );
};
