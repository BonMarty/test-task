import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IString } from '../../consts';

const initialState: IString = {
  rowName: '',
  salary: 0,
  equipmentCosts: 0,
  mainCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  supportCosts: 0,
  parentId: null,
  child: [],
};

export const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    rowNameOnChange(state: IString, action: PayloadAction<string>) {
      state.rowName = action.payload;
    },

    salaryOnChange(state: IString, action: PayloadAction<number>) {
      state.salary = action.payload;
    },

    equipmentOnChange(state: IString, action: PayloadAction<number>) {
      state.equipmentCosts = action.payload;
    },

    costsOnChange(state: IString, action: PayloadAction<number>) {
      state.mainCosts = action.payload;
    },

    profitOnChange(state: IString, action: PayloadAction<number>) {
      state.estimatedProfit = action.payload;
    },

    clearFields(state: IString) {
      (state.rowName = ''), (state.salary = 0);
      state.equipmentCosts = 0;
      state.mainCosts = 0;
      state.estimatedProfit = 0;
    },
  },
});

export const {
  rowNameOnChange,
  salaryOnChange,
  equipmentOnChange,
  costsOnChange,
  profitOnChange,
  clearFields,
} = editSlice.actions;

export default editSlice.reducer;
