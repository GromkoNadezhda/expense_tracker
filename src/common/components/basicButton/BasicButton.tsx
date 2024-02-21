import { Button } from "@mui/material";
import { ReactNode } from "react";
import "./BasicButton.scss";

export type TButtonVariant = "contained" | "outlined" | "text";

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
