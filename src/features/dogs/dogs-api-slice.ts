import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "6ee46993-a9b4-4998-acf3-ade3f448bdc9";

//1.create a type
//2.create a "createApi" function using the RTK createApi
//3.export the hook from the "createApi" slice
//4.import the hook inside a component
//5.enjoy
interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

//api slice

export const dogApiSlice = createApi({
  //reducerPath is custom
  reducerPath: "dogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1/",
    prepareHeaders(headers) {
      //setting the api key with x-api-key header
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

export const dogByNameApiSlice = createApi({
  reducerPath: "dogByNameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1/",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      //this one will use as a hook
      fetchBreedByName: builder.query<Breed[], string | void>({
        query(name = "Affenpinscher") {
          return `/breeds/search?q=${name}`;
        }
      })
    };
  }
});

export const { useFetchBreedByNameQuery } = dogByNameApiSlice;
export const { useFetchBreedsQuery } = dogApiSlice;
