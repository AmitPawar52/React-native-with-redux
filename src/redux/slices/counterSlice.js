import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) =>  {
      state.counter -= 1;
    },
  },
});

// Actions
export const { increment, decrement } = slice.actions

export default slice.reducer