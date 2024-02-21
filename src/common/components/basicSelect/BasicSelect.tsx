import { TExpensesInput } from "@app/expenses/type";
import { TWalletsInput } from "@app/wallets/type";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./BasicSelect.scss";


// interface ISelectProps<T, U> {
//   className: string;
//   placeholder: string;
//   options: T | U;
// }

// type TSelectProps=ISelectProps<TExpensesInput[] , TWalletsInput[]>
export type TOptions={value:string, id:string}

type TSelectProps<T>= {
  className: string;
  placeholder: string;
  options: T[];
}


export const BasicSelect = <T extends TOptions>({
  className,
  placeholder,
  options,
}: TSelectProps<T>) => (
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      className={className}
      label={placeholder}
      //   onChange={handleChange}
    >
      {options.map(({ value, id }) => (
        <MenuItem value={value} key={id} id={id}>
          {value}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
