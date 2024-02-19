import Modal from "@mui/material/Modal";
import { ICommonProps } from "@types";
import { BasicButton } from "@components/BasicButton/BasicButton";
import "./BasicModal.scss";

export const BasicModal = ({
  props,
  buttonProps,
  children,
}: {
  props: ICommonProps;
  buttonProps: ICommonProps;
  children?: React.ReactNode;
}) => (
  <div className="modal">
    <Modal
      id={props.className}
      className="modal basic-modal"
      open={props.disabled as boolean}
      onClose={props.onClick}
    >
      <div className="basic-modal__wrapper">
        <h2 className="basic-modal__title">{props.title}</h2>
        {children}
        <BasicButton props={buttonProps} />
      </div>
    </Modal>
  </div>
);
