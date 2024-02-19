import { createSlice } from "@reduxjs/toolkit";
import { ICurrancy } from "@types";
import { fetchData } from "./thunk";
import { CURRENCY_ID } from "@constants/constants";

const INITIAL_STATE: {
  currency: ICurrancy[];
  loading: boolean;
  error: {} | null;
} = {
  currency: [],
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: INITIAL_STATE.currency,
    loading: INITIAL_STATE.loading,
    error: INITIAL_STATE.error,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      (state.loading = false), (state.error = null);

      state.currency = action.payload.filter(
        (data: {
          Cur_ID: number;
          Cur_Abbreviation: string;
          Cur_OfficialRate: number;
        }) => data.Cur_ID === CURRENCY_ID.USD || data.Cur_ID === CURRENCY_ID.EUR
      );
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default currencySlice.reducer;
