import { useSelector } from "react-redux";
import React, { useState } from "react";
import { selectWallets } from "@store/selectors";
import { MenuListComposition } from "@components/MenuListComposition/MenuListComposition";
import { BasicButton } from "@components/BasicButton/BasicButton";
import { BasicModal } from "@components/BasicModal/BasicModal";
import "./Wallets.scss";

const INITIAL_STATE = {
  openModal: false,
  inputValue: 0,
};

export const Wallets = () => {
  const [openModal, setOpenModal] = useState(INITIAL_STATE.openModal);
  const [receipt, setReceipt] = useState<null | { id: string; sum: number }>(
    null
  );
  const [inputValue, setInputValue] = useState(INITIAL_STATE.inputValue);
  const wallets = useSelector(selectWallets);

  const walletsList = Object.values(wallets);

  const updateOpenModal = () => setOpenModal(!openModal);

  return (
    <div className="wallets">
      {walletsList.map(({ id, type, sum }) => (
        <div className="wallets__item" key={id}>
          <div className="wallets__menu-list">
            <MenuListComposition id={id} />
          </div>
          <h2 className="wallets__title">{type}</h2>
          <span className="wallets__sum">$ {sum}</span>
          <BasicButton
            props={{
              variant: "contained",
              className: "wallets__btn",
              title: "Add Receipt",
              onClick: updateOpenModal,
            }}
          />
          <BasicModal
            props={{
              title: "Enter a sum",
              className: id,
              onClick: updateOpenModal,
              disabled: openModal,
            }}
            buttonProps={{
              variant: "outlined",
              className: "basic-modal__btn",
              title: "Add",
              onClick: updateOpenModal,
            }}
          >
            <input
              type="number"
              className="basic-modal__input"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(+event.target.value)
              }
            />
          </BasicModal>
        </div>
      ))}
    </div>
  );
};
