import { ReactNode } from "react";
import Modal from "@mui/material/Modal";
import "./BasicModal.scss";

interface IModalProps {
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const BasicModal = ({ disabled, onClick, children }: IModalProps) => (
  <div className="modal">
    <Modal
      className="modal basic-modal"
      open={disabled as boolean}
      onClose={onClick}
    >
      <div className="basic-modal__wrapper">{children}</div>
    </Modal>
  </div>
);
