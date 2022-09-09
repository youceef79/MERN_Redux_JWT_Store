import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'

const initialState = {
  product_items: [],
  product_items_by_cat: [], 
  categories: [],
  item: {},
  isLoading: false,
  error: false, 
};


export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async () => {
      return await productService.getProducts()
  }
)

export const getAllCategories = createAsyncThunk(
  'product/getAllCategories',
  async () => {
      return await productService.getCategories()
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProduct: () => initialState,
    getProductsByCat: (state, action) => {
        state.loading = true
        state.product_items_by_cat = state.product_items.filter(
          (p) => p.categorie == action.payload
        )
        state.loading = false 
        return state
    } 
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.product_items = action.payload
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = true
        state.error = true
        state.message = action.payload
      })
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = action.payload
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isLoading = true
        state.error = true
        state.message = action.payload
      })
  },
})

export const { resetProduct, getProductsByCat  } = productSlice.actions
export default productSlice.reducer
