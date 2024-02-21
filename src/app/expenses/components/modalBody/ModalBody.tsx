import { EXPENSES_INPUT_LIST, EXPENSES_SELECT_LIST } from "@app/expenses/constants";
import { BasicSelect, TOptions } from "@common/components/basicSelect/BasicSelect";
import "./ModalBody.scss";
import { BasicInput, TInputType } from "@common/components/basicInput/BasicInput";
import { BasicDatePicker } from "@common/components/BasicDatePicker/BasicDatePicker";

export const ModalBody = () => {
  return (
    <div className="modal-body">
      {EXPENSES_SELECT_LIST.map(({ placeholder, data }) => (
        <BasicSelect
          className="modal-body__select"
          placeholder={placeholder}
          options={data as TOptions[]}
        />
      ))}
      <BasicDatePicker/>
     {EXPENSES_INPUT_LIST.map((expensesInput)=> <BasicInput
        className="modal-body__input"
        type={expensesInput.type as TInputType}
        placeholder={expensesInput.placeholder}
        onChange={() => console.log()}
      />)}
    </div>
  );
};
