import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../../API';

const baseQuery = fetchBaseQuery({
  baseUrl: API,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.userAuth?.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// Refresh Token
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    // console.log('Sending Refresh Token');
    const refreshResult = await baseQuery(
      '/auth/refresh-token',
      api,
      extraOptions
    );

    const { accessToken } = refreshResult.data;

    if (accessToken) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 401) {
        refreshResult.error.data.message =
          'Your login has expired. Please try again later.';
      }
      return refreshResult;
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Data'],
  endpoints: (builder) => ({}),
});
