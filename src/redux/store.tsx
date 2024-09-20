import {configureStore} from '@reduxjs/toolkit';
import actionType from './slice';
import userSliceAction from './userSlice';
export const store = configureStore({
  reducer: {
    action: actionType,
    user: userSliceAction,
  },
});
