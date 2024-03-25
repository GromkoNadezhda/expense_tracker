import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Stack } from "@mui/material";

export const BasicDatePicker = ({
  onChange,
}: {
  onChange: (newValue: string) => void;
}) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Stack>
      <DatePicker
        className="date-picker"
        label="Select a date *"
        onChange={(newValue: { $d: string } | null) => {
          if (newValue) onChange(newValue.$d.toString().slice(4, 15));
        }}
      />
    </Stack>
  </LocalizationProvider>
);
