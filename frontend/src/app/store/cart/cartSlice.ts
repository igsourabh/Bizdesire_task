import axios from "@/utils/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { placeOrder } from "../orders/orderSlice";

export const addToCart: any = createAsyncThunk(
  "addToCart",
  async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post("/cart", formData, config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getCart: any = createAsyncThunk("getCart", async () => {
  try {
    const response = await axios.get("/cart");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

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
    builder.addCase(addToCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.data = action.payload.STATUS_RESPONSE;

      state.loading = false;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // ------------------get cart---------------------
    builder.addCase(getCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.data = action.payload.STATUS_RESPONSE;

      state.loading = false;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // ------------------get cart---------------------

    // ------------------delete cart item---------------------
    builder.addCase(removeCartItem.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      state.data = action.payload;

      state.loading = false;
    });
    builder.addCase(removeCartItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // ------------------delete cart item---------------------

    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.data = [];
      // Handle the fulfillment of placeOrder in the order slice
      // You can dispatch other actions, update state, etc.
    });
  },
});

export default counter.reducer;
