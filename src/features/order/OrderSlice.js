import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder, removeOrder } from "./OrderApi";

const initialState = {
  status: "idle",
  orders: [],
  currentOrder: null,
};

export const createOrderAsync = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    const response = await createOrder(order);
    return response.data;
  }
);
export const removeOrderAsync = createAsyncThunk(
  "order/removeOrderAsync",
  async (orderId) => {
    const response = await removeOrder(orderId);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentOrder = action.payload;
        state.orders.push(action.payload);
      })
      .addCase(removeOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.orders.findIndex(
          (order) => order.id === action.payload.id
        );
        state.orders.splice(index, 1);
      });
  },
});

export const selectCurrentOrder = (state) => state.order.currentOrder;
export const { resetOrder } = orderSlice.actions;

export default orderSlice.reducer;
