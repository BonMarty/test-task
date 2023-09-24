import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from './slice.types';

const initialState: State = {
  isEditing: false,
  isCreating: false,
  rowId: null,
  level: 0,
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    toggleEdit(state: State) {
      state.isEditing = !state.isEditing;
    },

    toggleCreate(state: State, action: PayloadAction<number>) {
      state.isCreating = !state.isCreating;
      state.level = action.payload;
    },

    setCurrentRowId(state: State, action: PayloadAction<number>) {
      state.rowId = action.payload;
    },
  },
});

export const { toggleEdit, toggleCreate, setCurrentRowId } = tableSlice.actions;

export default tableSlice.reducer;
