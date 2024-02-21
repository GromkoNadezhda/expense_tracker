import { TextField } from "@mui/material";

export type TInputType= "text" | "number";

interface IInputProps {
  className: string;
  placeholder:string;
  type: TInputType;
  onChange: () => void;
}

export const BasicInput = ({ className, placeholder, type, onChange }: IInputProps) => (
  <TextField
    className={className}
    type={type}
    label={placeholder}
    variant="outlined"
    onChange={onChange}
  />
);
