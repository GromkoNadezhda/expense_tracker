import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SET_CURRENCY = "currency/fetchData";

export const fetchData = createAsyncThunk(
  SET_CURRENCY,
  async (apiUrl: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(apiUrl);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
