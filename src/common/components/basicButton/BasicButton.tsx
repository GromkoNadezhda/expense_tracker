import { Button } from "@mui/material";
import { ReactNode } from "react";
import "./BasicButton.scss";

type TButtonVariant = "contained" | "outlined";

interface IButtonProps {
  variant?: TButtonVariant;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
  children?: ReactNode;
}

export const BasicButton = ({
  variant,
  disabled,
  className,
  onClick,
  children,
}: IButtonProps) => (
  <Button
    disabled={disabled}
    variant={variant}
    className={className}
    onClick={onClick}
  >
    {children}
  </Button>
);
