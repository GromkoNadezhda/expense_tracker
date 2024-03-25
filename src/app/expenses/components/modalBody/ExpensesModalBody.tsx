import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { TextField } from "@mui/material";
import { EXPENSES_INPUT_LIST, ALL_SELECT_LIST, USER_EXPENSES_ID } from "@app/expenses/constants";
import { IUserExpenses } from "@app/expenses/type";
import { BasicDatePicker, BasicSelect } from "@common/components";
import { selectAllExpenses } from "@common/store/selectors";
import "./ExpensesModalBody.scss";

export const ModalBody = ({
  setUserExpenses,
  userExpenses,
}: {
  setUserExpenses: React.Dispatch<React.SetStateAction<IUserExpenses | null>>;
  userExpenses: IUserExpenses;
}) => {
  const expenses = useSelector(selectAllExpenses);

  const updateUserValue = (newValue: string, key: USER_EXPENSES_ID) => {
    const expensesWithID = expenses.some(({ id }) => id === userExpenses?.id);

    expensesWithID
      ? setUserExpenses({
          ...userExpenses,
          [key]: newValue,
          editingDate: Date().slice(4, 15),
        })
      : setUserExpenses({
          ...(userExpenses as IUserExpenses),
          [key]: newValue,
          id: nanoid(),
        });
  };

  return (
    <div className="modal-body">
      {ALL_SELECT_LIST.map(({ placeholder, data, id }) => (
        <BasicSelect
          key={id}
          className="modal-body__select"
          placeholder={placeholder}
          value={userExpenses?.[id]?.toString() || ""}
          options={data as string[]}
          onChange={(newValue, key = id) => updateUserValue(newValue, key)}
        />
      ))}
      <BasicDatePicker
        onChange={(newValue) => updateUserValue(newValue, USER_EXPENSES_ID.CREATION_DATE)}
      />
      {EXPENSES_INPUT_LIST.map(({ type, placeholder, id }) => (
        <TextField
          key={id}
          className="modal-body__input"
          type={type}
          label={placeholder}
          variant="outlined"
          value={userExpenses?.[id] || ""}
          onChange={(event, key = id) =>
            updateUserValue(event.target.value, key)
          }
        />
      ))}
    </div>
  );
};
