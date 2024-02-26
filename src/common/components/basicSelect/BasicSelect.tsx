import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type TSelectProps = {
  className: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (newValue: string) => void;
};

export const BasicSelect = ({
  className,
  placeholder,
  value,
  options,
  onChange,
}: TSelectProps) => (
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
    <Select
      className={className}
      label={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value as string)}
    >
      {options.map((value) => (
        <MenuItem value={value} key={value} id={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
