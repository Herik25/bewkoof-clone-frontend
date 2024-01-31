import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllMensProducts,
  fetchAllProducts,
  fetchAllWomensProducts,
  fetchMenProductsByFilters,
  fetchProductById,
  fetchProductsByFilters,
  fetchWomenProductsByFilters,
  updateProduct,
  uploadProduct,
} from "./ProductApi";

const initialState = {
  products: [],
  status: "idle",
  selectedProduct: [],
  totalCount: 0,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    return response.data;
  }
);
export const uploadProductAsync = createAsyncThunk(
  "product/uploadProduct",
  async (product) => {
    const response = await uploadProduct(product);
    return response.data;
  }
);
export const updateProductAsync = createAsyncThunk(
  "product/updateProduct",
  async (product) => {
    const response = await updateProduct(product);
    return response.data;
  }
);
export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async (filter) => {
    const response = await fetchProductsByFilters(filter);
    return response.data;
  }
);
export const fetchAllMensProductsAsync = createAsyncThunk(
  "product/fetchAllMensProducts",
  async () => {
    const response = await fetchAllMensProducts();
    return response.data;
  }
);
export const fetchMenProductsByFiltersAsync = createAsyncThunk(
  "product/fetchMenProductsByFilters",
  async (filter) => {
    const response = await fetchMenProductsByFilters(filter);
    return response.data;
  }
);
export const fetchAllWomensProductsAsync = createAsyncThunk(
  "product/fetchAllWomensProducts",
  async () => {
    const response = await fetchAllWomensProducts();
    return response.data;
  }
);
export const fetchWomenProductsByFiltersAsync = createAsyncThunk(
  "product/fetchWomenProductsByFilters",
  async (filter) => {
    const response = await fetchWomenProductsByFilters(filter);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
        state.totalCount = action.payload.length;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
        state.totalCount = action.payload.length;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchAllMensProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMensProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
        state.totalCount = action.payload.length;
      })
      .addCase(fetchMenProductsByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
        state.totalCount = action.payload.length;
      })
      .addCase(fetchWomenProductsByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWomenProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
        state.totalCount = action.payload.length;
      })
      .addCase(uploadProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products.push(action.payload);
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.products[index] = action.payload;
      });
  },
});
export const TotalCount = (state) => state.product.totalCount;

export const selectAllProducts = (state) => state.product.products;
export const selectProductById = (state) => state.product.selectedProduct;
export const selectProductListStatus = (state) => state.product.status;

export default productSlice.reducer;
