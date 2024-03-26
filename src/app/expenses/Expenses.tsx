import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACTIVE_MENU, NAVIGATION } from "@common/constants/constants";
import { BasicButton, BasicModal } from "@common/components";
import { addExpenses, updateWallet } from "@common/store/expensesSlice";
import { selectAllExpenses } from "@common/store/selectors";
import { ModalBody } from "./components/modalBody/ExpensesModalBody";
import { IUserExpenses } from "./type";
import { ExpensesTable } from "./components/expensesTable/ExpensesTable";
import {
  BUTTON_VARIANT,
  EXPENSES_BASIC_BUTTON,
  EXPENSES_BASIC_BUTTON_LIST,
} from "./constants";
import "./Expenses.scss";

const INITIAL_STATE = {
  openModal: false,
  userExpenses: null,
};

export const Expenses = () => {
  const [openModal, setOpenModal] = useState(INITIAL_STATE.openModal);
  const [userExpenses, setUserExpenses] = useState<IUserExpenses | null>(
    INITIAL_STATE.userExpenses
  );

  const expenses = useSelector(selectAllExpenses);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleButtonClick = (id: string) =>
    EXPENSES_BASIC_BUTTON.addReceipts.id === id
      ? navigate(`/${NAVIGATION.WALLETS}`)
      : setOpenModal(true);

  const editUserExpenses = (buttonId: string, expensesId: string) => {
    if (buttonId === ACTIVE_MENU.EDIT) {
      setOpenModal(true);
      const updatedExpenses = expenses.find(({ id }) => id === expensesId);

      if (updatedExpenses) setUserExpenses(updatedExpenses);
    }
  };

  const handleModalButtonClick = () => {
    if (userExpenses) {
      dispatch(addExpenses(userExpenses));

      dispatch(
        updateWallet({
          wallets: userExpenses.wallets,
          sum: userExpenses.sum,
        })
      );

      setUserExpenses(null);
    }

    setOpenModal(false);
  };

  const disabled = useMemo(() => {
    if (userExpenses) {
      const { expenses, wallets, creationDate, sum } = userExpenses;

      return expenses && wallets && creationDate && sum ? false : true;
    }

    return true;
  }, [userExpenses]);

  return (
    <div className="expenses">
      {expenses.length ? (
        <ExpensesTable editUserExpenses={editUserExpenses} />
      ) : (
        <>
          <p className="expenses__text">
            Have you deposited the cash receipts yet?
          </p>
          <h2 className="expenses__title">Enter your first expenses</h2>
        </>
      )}
      <div className="expenses__wrapper-btn">
        {EXPENSES_BASIC_BUTTON_LIST.map(
          ({ id, variant, className, content }) => (
            <BasicButton
              key={id}
              variant={variant}
              className={className}
              onClick={() => handleButtonClick(id)}
              children={content}
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
              <ModalBody
                setUserExpenses={setUserExpenses}
                userExpenses={userExpenses as IUserExpenses}
              />
            </div>
            <BasicButton
              variant={BUTTON_VARIANT.OUTLINED}
              className={"basic-modal__btn"}
              onClick={handleModalButtonClick}
              children={"Add"}
              disabled={disabled}
            />
          </>
        }
      />
    </div>
  );
};
