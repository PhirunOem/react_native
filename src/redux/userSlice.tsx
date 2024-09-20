import {createSlice} from '@reduxjs/toolkit';
import {userModels} from '../core';

// ::::::::::::::::: This is react dux which used to control all global state::::::::::::::::::::
const userInfo: userModels = {
  userName: '',
  email: '',
  password: '',
  phoneNumber: '',
  profileURL: '',
  isAdmin: false,
};
const initialState = {
  userInfo,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    removeUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const {setUserInfo, removeUserInfo} = userSlice.actions;

export default userSlice.reducer;
