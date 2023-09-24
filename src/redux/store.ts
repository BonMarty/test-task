import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { tableApi } from '../components/BasicTable/BasicTable.service';
import editReducer from '../components/EditRow/EditRow.service';
import { entityApi } from './service';
import tableReducer from './slice';

export const store = configureStore({
  reducer: {
    [entityApi.reducerPath]: entityApi.reducer,
    [tableApi.reducerPath]: tableApi.reducer,
    edit: editReducer,
    table: tableReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(entityApi.middleware).concat(tableApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
