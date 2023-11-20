import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  showCategories: true,
  currentNodeId: null,
};

export const notesSlice = createSlice({
  name: 'notes', // Corrected the name here
  initialState,

  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleCategory: (state, action) => {
      state.showCategories = action.payload;
    },
    updateCurrentNoteId: (state, action) => {
      state.currentNodeId = action.payload;
    },
  },
});

export const { updateSearchTerm, toggleCategory, updateCurrentNoteId } =
  notesSlice.actions;

export const selectSearchTerm = (state) => state?.notes?.searchTerm;
export const selectToggleCategory = (state) => state?.notes?.showCategories;
export const selectCurrentNoteId = (state) => state?.notes?.currentNodeId;

export default notesSlice.reducer;
