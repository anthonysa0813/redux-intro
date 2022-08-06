import { counterSlice } from "./slices/counter";

import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});
