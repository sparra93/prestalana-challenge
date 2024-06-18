import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/redux//store';

interface FilterState {
  yearFilter: string[];
  colorFilter: string[];
  pantoneFilter: string[];
  nameFilter: string;
}

const initialState: FilterState = {
  yearFilter: [],
  colorFilter: [],
  pantoneFilter: [],
  nameFilter: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setInitialYearFilter: (state, action: PayloadAction<string[]>) => {
      state.yearFilter = action.payload;
    },
    setInitialColorFilter: (state, action: PayloadAction<string[]>) => {
      state.colorFilter = action.payload;
    },
    setInitialPantoneFilter: (state, action: PayloadAction<string[]>) => {
      state.pantoneFilter = action.payload;
    },
    setYearFilter: (state, action: PayloadAction<string>) => {
      if (state.yearFilter.includes(action.payload)) {
        state.yearFilter = state.yearFilter.filter(
          (year) => year !== action.payload,
        );
      } else {
        state.yearFilter.push(action.payload);
      }
    },
    setColorFilter: (state, action: PayloadAction<string>) => {
      if (state.colorFilter.includes(action.payload)) {
        state.colorFilter = state.colorFilter.filter(
          (color) => color !== action.payload,
        );
      } else {
        state.colorFilter.push(action.payload);
      }
    },
    setPantoneFilter: (state, action: PayloadAction<string>) => {
      if (state.pantoneFilter.includes(action.payload)) {
        state.pantoneFilter = state.pantoneFilter.filter(
          (color) => color !== action.payload,
        );
      } else {
        state.pantoneFilter.push(action.payload);
      }
    },
    setNameFilter(state, action: PayloadAction<string>) {
      state.nameFilter = action.payload;
    },
  },
});

export const {
  setInitialYearFilter,
  setInitialColorFilter,
  setInitialPantoneFilter,
  setYearFilter,
  setNameFilter,
  setPantoneFilter,
  setColorFilter,
} = filterSlice.actions;
export const selectYearFilter = (state: RootState): string[] =>
  state.filter.yearFilter;
export const selectColorFilter = (state: RootState): string[] =>
  state.filter.colorFilter;
export const selectNameFilter = (state: RootState): string =>
  state.filter.nameFilter;
export const selectPantoneFilter = (state: RootState): string[] =>
  state.filter.pantoneFilter;

export default filterSlice.reducer;
