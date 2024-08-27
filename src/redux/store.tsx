import {configureStore} from '@reduxjs/toolkit';
import actionType from './slice';
export const store = configureStore({
  reducer: {
    action: actionType,
  },
});
