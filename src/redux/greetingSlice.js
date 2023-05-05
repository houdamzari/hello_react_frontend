import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/messages/random');
    const data = await response.json();
    return data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: 'Initial Redux message',
  },

  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default greetingSlice.reducer;
