import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as reviewsApi from "../api/reviewsApi";

// Thunks
export const fetchReviews = createAsyncThunk("reviews/fetchAll", async () => {
  const res = await reviewsApi.getReviews();
  return res.data;
});

export const fetchReview = createAsyncThunk("reviews/fetcSingle", async (id) => {
    const res = await reviewsApi.getReview(id);
    return res.data;
  });

export const addReview = createAsyncThunk("reviews/add", async (data) => {
  const res = await reviewsApi.createReview(data);
  return res.data;
});

export const editReview = createAsyncThunk("reviews/edit", async ({ id, updates }) => {
  const res = await reviewsApi.updateReview(id, updates);
  return res.data;
});

export const removeReview = createAsyncThunk("reviews/remove", async (id) => {
  await reviewsApi.deleteReview(id);
  return id;
});

// Slice
const reviewsSlice = createSlice({
  name: "reviews",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
    // Get Reviews 
      .addCase(fetchReviews.pending, (state) => { state.status = "loading"; })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "succeeded"; state.items = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed"; state.error = action.error.message;
      })
      // Get Review
      .addCase(fetchReview.pending, (state) => { state.status = "loading"; })
      .addCase(fetchReview.fulfilled, (state, action) => {
        state.status = "succeeded"; state.items = action.payload;
      })
      .addCase(fetchReview.rejected, (state, action) => {
        state.status = "failed"; state.error = action.error.message;
      })
    //   Add Review
      .addCase(addReview.fulfilled, (state, action) => { state.items.push(action.payload); })
      .addCase(addReview.pending, (state) => { state.status = "loading"; })
      .addCase(addReview.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message})
    //   Update Review
      .addCase(editReview.fulfilled, (state, action) => {
        const i = state.items.findIndex(p => p.id === action.payload.id);
        if (i !== -1) state.items[i] = action.payload;
      })
      .addCase(editReview.pending, (state) => { state.status = "loading"; })
      .addCase(editReview.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message})
    //   Delete Review
      .addCase(removeReview.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter(p => p.id !== action.payload);
      })
      .addCase(removeReview.pending, (state) => { state.status = "loading"; })
      .addCase(removeReview.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message});
  }
});

export default reviewsSlice.reducer;