import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'


const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isLoginSuccess: false,
  isLogout: false,
  isRegister: false,
  isLoading: false,
  message: '',
}

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


export const login = createAsyncThunk(
  'auth/login', 
  async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout', 
  async () => {
    return await authService.logout()
})


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isLoginSuccess= false
      state.isLogout = false
      state.isRegister = false
      state.message = ''
      state.user = JSON.parse(localStorage.getItem('user'))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isRegister = true
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isRegister = false
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.isLoginSuccess = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isLoginSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isLoginSuccess = false
        state.message = action.payload
        state.user = null
      }) 
      .addCase(logout.pending, (state) => {
        state.isLogout = false
        localStorage.removeItem('user')
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoginSuccess = false
        state.isLogout = true
      })
      .addCase(logout.rejected, (state, action) => {
        state.message = action.payload
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer