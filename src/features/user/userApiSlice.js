import { apiSlice } from '../../app/api/api';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    verifyUser: builder.query({
      query: (token) => `/auth/verify-email/${token}`,
    }),

    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: email,
      }),
    }),

    updatePassword: builder.mutation({
      query: ({ token, ...credentials }) => ({
        url: `/auth/reset-password/${token}`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useVerifyUserQuery,
  useForgotPasswordMutation,
  useUpdatePasswordMutation,
} = authApiSlice;
