import {createSlice} from '@reduxjs/toolkit';
import validator, {toString} from 'validator';
// ::::::::::::::::: This is react dux which used to control all global state::::::::::::::::::::
const initialState = {
  isClickOneOfProductType: false,
  indexOfType: 0,
  isFilter: false,
  isSignIn: false,
  isSignInWith: false,
  isSignInWithEmail: false,
  isUpdateProfile: false,
  isUpdatePassword: false,
  isAddToFavorite: false,
  isAddToCart: false,
  categoryType: 'MEN', // ['MEN', 'WOMEN', 'KID']
};

interface setBooleanValueType {
  payload: {type: string; booleanValue: boolean};
}
export const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    isClickProductType: (state, action) => {
      if (typeof action.payload == 'boolean')
        state.isClickOneOfProductType = action.payload;
      else if (typeof action.payload == 'number') {
        state.indexOfType = action.payload;
      } else console.log('Invalid prop');
    },
    setBooleanValue: (state, action: setBooleanValueType) => {
      const booleanValue =
        action.payload.booleanValue == undefined
          ? false
          : action.payload.booleanValue;
      switch (action.payload.type) {
        case 'FILTER':
          state.isFilter = booleanValue;
          break;
        case 'SIGNIN':
          state.isSignIn = booleanValue;
          break;
        case 'SIGNINWITH':
          state.isSignInWith = booleanValue;
          break;
        case 'SIGNINWITHEMAIL':
          state.isSignInWithEmail = booleanValue;
          break;
        case 'UPDATEPROFILE':
          state.isUpdateProfile = booleanValue;
          break;
        case 'UPDATEPASSWORD':
          state.isUpdatePassword = booleanValue;
          break;
        case 'ADDTOFAVORITE':
          state.isAddToFavorite = booleanValue;
          break;
        case 'ADDTOCART':
          state.isAddToCart = booleanValue;
          break;
        default:
          console.log('Invalid prop');
      }
    },
    filterCategory: (state, action) => {
      if (typeof action.payload == 'string')
        state.categoryType = action.payload;
      else console.log('Invalid prop');
    },
  },
});

// Action creators are generated for each case reducer function
export const {isClickProductType, setBooleanValue, filterCategory} =
  actionSlice.actions;

export default actionSlice.reducer;
