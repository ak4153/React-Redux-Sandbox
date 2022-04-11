import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const DOGS_API_KEY = "6ee46993-a9b4-4998-acf3-ade3f448bdc9";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

//api slice

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1/",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);

      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        }
      })
    };
  }
});

export const { useFetchBreedsQuery } = apiSlice;
