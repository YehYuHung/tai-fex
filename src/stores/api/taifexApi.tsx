import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const taifexApi = createApi({
  reducerPath: "taifex",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://openapi.taifex.com.tw/v1/", // github上為了不透過 Proxy 方式
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
