import axios from "@/utils/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchPosts: any = createAsyncThunk("fetchPosts", async () => {
  const response = await axios.get("/product");
  return response.data;
});

export const fetchSinglePosts: any = createAsyncThunk(
  "fetchSinglePosts",
  async (id: any) => {
    const response = await axios.get(`/product/${id}`);
    return response.data;
  }
);

export const counter = createSlice({
  name: "product",
  initialState: {
    data: [],
    singleProduct: {},
    error: {},
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // --------------all post---------------

    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // --------------all post---------------

    // --------------single post---------------
    builder.addCase(fetchSinglePosts.pending, (state, action) => {
      state.singleProduct = {}
      state.loading = true;
    });
    builder.addCase(fetchSinglePosts.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchSinglePosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // --------------single post---------------
  },
});

export default counter.reducer;
