import axios from "@/utils/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const placeOrder: any = createAsyncThunk(
  "placeOrder",
  async (setOpen:any) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post("/orderplaced", {}, config);
      if (response.data) {
        setOpen(false);
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getPlacedOrder: any = createAsyncThunk(
  "getPlacedOrder",
  async () => {
    try {
      const response = await axios.get("/orderplaced");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeCartItem: any = createAsyncThunk(
  "removeCartItem",
  async (id: string) => {
    try {
      const response = await axios.delete(`/cart/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const counter = createSlice({
  name: "cart",
  initialState: {
    data: [],
    error: {},
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(placeOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.data = action.payload;

      state.loading = false;
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // ------------------get cart---------------------
    builder.addCase(getPlacedOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPlacedOrder.fulfilled, (state, action) => {
      state.data = action.payload.STATUS_RESPONSE;

      state.loading = false;
    });
    builder.addCase(getPlacedOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // ------------------get cart---------------------

   
  },
});

export default counter.reducer;
