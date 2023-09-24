import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IString, eID } from '../../consts';

export const tableApi = createApi({
  reducerPath: 'tableApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row`,
  }),
  endpoints: (builder) => ({
    addString: builder.mutation({
      query: ({ string, parentId }: { string: IString; parentId: number | null }) => ({
        url: '/create',
        method: 'POST',
        body: {
          ...string,
          parentId,
        },
      }),
    }),

    deleteString: builder.mutation({
      query: (id: number) => ({
        url: `/${id}/delete`,
        method: 'DELETE',
      }),
    }),

    updateString: builder.mutation({
      query: ({ string, id }: { string: IString; id: number }) => ({
        url: `/${id}/update`,
        method: 'POST',
        body: string,
      }),
    }),
  }),
});

export const { useAddStringMutation, useDeleteStringMutation, useUpdateStringMutation } = tableApi;
