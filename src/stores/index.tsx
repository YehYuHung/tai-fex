import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { taifexApi } from "./api/taifexApi";

export const store = configureStore({
  reducer: {
    [taifexApi.reducerPath]: taifexApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(taifexApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useLazyFetchTaiFexQuery } from "./api/taifexApi";
