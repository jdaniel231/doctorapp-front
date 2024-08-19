import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    message: '',
    type: '',
    visible: false,
  },
  reducers: {
    showLoading: (state) => {
      state.message = 'Carregando...';
      state.type = 'loading';
      state.visible = true;
    },
    hideLoading: (state) => {
      state.message = '';
      state.type = '';
      state.visible = false;
    },
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.visible = true;
    },
    hideAlert: (state) => {
      state.message = '';
      state.type = '';
      state.visible = false;
    },
  },
});

// Exportando as actions individualmente
export const { showLoading, hideLoading, showAlert, hideAlert } = alertSlice.actions;

// Exportando o reducer como padrão
export default alertSlice.reducer;
