import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IString, eID } from '../consts';

export const entityApi = createApi({
  reducerPath: 'entityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://185.244.172.108:8081/',
  }),
  endpoints: (builder) => ({
    createEntity: builder.query<{}, ''>({
      query: () => ({ url: '/v1/outlay-rows/entity/create', method: 'POST' }),
    }),

    getTreeRows: builder.query<IString[], string>({
      query: () => ({
        url: `/v1/outlay-rows/entity/${eID}/row/list`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateEntityQuery, useGetTreeRowsQuery } = entityApi;
