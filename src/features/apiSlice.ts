import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type LdapSearchRequest, type LdapSearchResult } from 'types/Types'

export const ldapApi = createApi({
  reducerPath: 'ldapApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/ldap/search' }),
  endpoints: (builder) => ({
    getLdapServers: builder.query<string[], void>({
      query: () => '/',
      transformResponse: (response: string[]) =>
        response.map((server) => server.split('/')[3]),
    }),
    search: builder.query<LdapSearchResult, LdapSearchRequest>({
      query: ({ server, params }) =>
        server
          ? {
              url: `/${server}/${params.base ?? '_'}/${params.scope}/${params.filter ?? '_'}/${params.attributes?.join(',') ?? '_'}`,
            }
          : '/',
    }),
  }),
})

export const { useGetLdapServersQuery, useSearchQuery } = ldapApi
