import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const initialState = {
  token: null,
  username: null,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,

  reducers: {
    userLogin: (state, action) => {
      const { accessToken } = action.payload;
      const token = accessToken;
      localStorage.setItem('userAuth', token);
      const decodedToken = jwtDecode(token);
      const username = decodedToken.username;
      localStorage.setItem('username', username);
      state.token = token;
      state.username = username;
    },
    logOut: (state) => {
      localStorage.clear();
      state.token = null;
      state.username = null;
    },
  },
});

export const { userLogin, logOut } = userAuthSlice.actions;

export const selectCurrentToken = (state) => state.userAuth.token;
export const selectCurrentUser = (state) => state.userAuth.username;

export default userAuthSlice.reducer;
