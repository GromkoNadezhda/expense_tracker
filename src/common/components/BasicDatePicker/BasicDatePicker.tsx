import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import './BasicDatePicker.scss'

export const BasicDatePicker = () => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker  className="date-picker"/>
  </LocalizationProvider>
);
