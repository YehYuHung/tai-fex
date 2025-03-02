import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const taifexApi = createApi({
  reducerPath: "taifex",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/taifex", // 透過vite proxy轉發
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTaiFex: builder.query({
        query: () => ({ url: "/OpenInterestOfLargeTradersFutures" }),
      }),
    };
  },
});

console.log("taiFexAPi", taifexApi);

export const { useLazyFetchTaiFexQuery } = taifexApi;
export { taifexApi };
