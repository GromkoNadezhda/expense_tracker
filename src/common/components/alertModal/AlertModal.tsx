import { ALERT_BUTTON, ALERT_BUTTON_LIST } from "@common/constants/constants";
import { BasicButton, BasicModal } from "..";
import "./AlertModal.scss";

interface IAlertModalProps {
  title: string;
  disabled: boolean;
  onClick: (buttonId: ALERT_BUTTON) => void;
}

export const AlertModal = ({ title, disabled, onClick }: IAlertModalProps) => (
  <BasicModal
    disabled={disabled}
    children={
      <div className="alert-modal">
        <h2 className="alert-modal__title">{title}</h2>
        <div className="alert-modal__wrapper-btn">
          {ALERT_BUTTON_LIST.map((message) => (
            <BasicButton
              key={message}
              variant={"contained"}
              className={"alert-modal__btn"}
              onClick={() => onClick(message)}
              children={message}
            />
          ))}
        </div>
      </div>
    }
  />
);
