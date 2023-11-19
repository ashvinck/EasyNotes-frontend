import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,

  reducers: {
    userLogin: (state, action) => {
      const { accessToken } = action.payload;
      console.log(accessToken);
      const token = accessToken;

      state.token = token;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { userLogin, logOut } = userAuthSlice.actions;

export const selectCurrentToken = (state) => state.userAuth.token;

export default userAuthSlice.reducer;
