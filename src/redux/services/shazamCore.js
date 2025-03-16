import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "5fd86b5e3fmsh6504c8bf490fc00p10da2djsn91dcc8de5105"
      );
      headers.set("x-rapidapi-host", "shazam-core.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopChartsByGenre: builder.query({
      query: ({ genre }) =>
        `/v1/charts/genre-world?genre_code=${genre}&country_code=IN`,
    }),
    getArtistDetailsById: builder.query({
      query: ({ id }) => `/v2/artists/details?artist_id=${id}`,
    }),
  }),
});

export const { useGetTopChartsByGenreQuery, useGetArtistDetailsByIdQuery } =
  shazamCoreApi;
