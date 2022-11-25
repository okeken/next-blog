import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IPost} from "types"


export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/post`, 
      transformResponse: (response: { data:any }) => response.data,
    }),

    getPost: builder.query({
      query: (slug) => `/post?slug=${slug}`,
      transformResponse: (response: { data:any }) => response.data,
    }),
    addPost: builder.mutation({
      query: (body:IPost) => ({
        url: `post`,
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data:any }) => response.data,
    }),

  }),
});


export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } =  blogApi;