import { Snackbar } from "@mui/material";

interface IBasicSnackbarProps {
  disabled: boolean;
  onClick: () => void;
  message: string;
}

export const BasicSnackbar = ({
  disabled,
  onClick,
  message,
}: IBasicSnackbarProps) => (
  <Snackbar
    open={disabled}
    autoHideDuration={5000}
    onClose={onClick}
    message={message}
  />
);
