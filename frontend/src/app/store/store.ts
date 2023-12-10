import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";
import ordersReducer from "./orders/orderSlice";

export const store = configureStore({
  reducer: {
    product:productReducer,
    cart:cartReducer,
    order:ordersReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
