import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: null,
  name: null,
  isLogedin: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
        console.log("loginUserAction",action)
        state.name = action.payload.name;
        state.password = action.payload.password;
        state.isLogedin = true;
    },
    logout: (state) => {
        state.name = null;
        state.password = null;
        state.isLogedin = false;
    },
  }
});

export const { loginUser, logout } = userSlice.actions;

export default userSlice.reducer;
