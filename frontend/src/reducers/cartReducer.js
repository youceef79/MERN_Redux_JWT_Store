import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './cartService'

const initialState = {
  cart_items: [],
  item: {},
};

 export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async () => {
      return await cartService.getCartItems()
  }
)


 export const removeItemFromCart = createAsyncThunk(
  'cart/removeItemFromCart',
  async (id) => {
      return await cartService.removeItemFromCart(id)
  }
)

  export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
      return await cartService.addToCart(item)
  }
)


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: () => initialState,  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.cart_items = action.payload
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = true
        state.error = true
        state.message = action.payload
      })
      .addCase(removeItemFromCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.isLoading = false
        let new_items = state.cart_items.filter((c) => c._id != action.payload)
        state.cart_items = new_items 
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.isLoading = true
        state.error = true
        state.message = action.payload
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = true
        state.error = true
        state.message = action.payload
      })
  }
})

export const { resetCart  } = cartSlice.actions
export default cartSlice.reducer