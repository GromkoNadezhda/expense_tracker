import { BasicButton, BasicModal } from "@common/components";
import { EXPENSES_BASIC_BUTTON, EXPENSES_BASIC_BUTTON_LIST } from "./constants";
import { TButtonVariant } from "@common/components/basicButton/BasicButton";
import { useNavigate } from "react-router-dom";
import { NAVIGATION } from "@common/constants/constants";
import { useState } from "react";
import { ModalBody } from "./components/modalBody/ModalBody";
import "./Expenses.scss";

export const Expenses = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (id: string) =>
    EXPENSES_BASIC_BUTTON.addReceipts.id === id
      ? navigate(`/${NAVIGATION.WALLETS}`)
      : setOpenModal(true);
  return (
    <div className="expenses">
      <p className="expenses__text">
        Have you deposited the cash receipts yet?
      </p>
      <h2 className="expenses__title">Enter your first expenses</h2>
      <div className="expenses__wrapper-btn">
        {EXPENSES_BASIC_BUTTON_LIST.map(
          ({ id, variant, className, content }) => (
            <BasicButton
              variant={variant as TButtonVariant}
              className={className}
              onClick={() => handleButtonClick(id)}
              children={<span className="expenses__btn-text">{content}</span>}
            />
          )
        )}
      </div>
      <BasicModal
        onClick={() => setOpenModal(false)}
        disabled={openModal}
        children={
          <>
            <h2 className="basic-modal__title">Enter data</h2>
            <div className="">
              <ModalBody />
            </div>
            <BasicButton
              variant={"outlined"}
              className={"basic-modal__btn"}
              onClick={() => setOpenModal(false)}
              children={<span className="wallets__btn-text">Add</span>}
            />
          </>
        }
      />
    </div>
  );
};
