import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productsApi from "../api/productsApi";

// Thunks
export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const res = await productsApi.getProducts();
  return res.data;
});

export const fetchProduct = createAsyncThunk("products/fetcSingle", async (id) => {
    const res = await productsApi.getProduct(id);
    return res.data;
  });

export const addProduct = createAsyncThunk("products/add", async (data) => {
  const res = await productsApi.createProduct(data);
  return res.data;
});

export const editProduct = createAsyncThunk("products/edit", async ({ id, updates }) => {
  const res = await productsApi.updateProduct(id, updates);
  return res.data;
});

export const removeProduct = createAsyncThunk("products/remove", async (id) => {
  await productsApi.deleteProduct(id);
  return id;
});



// Slice
const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
    // Get products 
      .addCase(fetchProducts.pending, (state) => { state.status = "loading"; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"; state.error = action.error.message;
      })
      // Get product
      .addCase(fetchProduct.pending, (state) => { state.status = "loading"; })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded"; state.items = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed"; state.error = action.error.message;
      })
    //   Add Product
      .addCase(addProduct.fulfilled, (state, action) => { state.items.push(action.payload); })
      .addCase(addProduct.pending, (state) => { state.status = "loading"; })
      .addCase(addProduct.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message})
    //   Update product
      .addCase(editProduct.fulfilled, (state, action) => {
        const i = state.items.findIndex(p => p.id === action.payload.id);
        if (i !== -1) state.items[i] = action.payload;
      })
      .addCase(editProduct.pending, (state) => { state.status = "loading"; })
      .addCase(editProduct.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message})
    //   Delete product
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter(p => p.id !== action.payload);
      })
      .addCase(removeProduct.pending, (state) => { state.status = "loading"; })
      .addCase(removeProduct.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message});
  }
});

export default productsSlice.reducer;