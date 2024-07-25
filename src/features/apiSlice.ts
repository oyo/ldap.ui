import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type LdapSearchRequest, type LdapSearchResult } from 'types/Types'

export const ldapApi = createApi({
  reducerPath: 'ldapApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/ldap/api/search' }),
  endpoints: (builder) => ({
    getLdapServers: builder.query<string[], void>({
      query: () => '/',
      transformResponse: (response: string[]) =>
        response.map((server) => server.split('/').pop() ?? ''),
    }),
    search: builder.query<LdapSearchResult, LdapSearchRequest>({
      query: ({ server, params }) =>
        server
          ? {
              url: `/${server}/${params.base ?? '_'}/${params.scope}/${
                params.filter ?? '_'
              }/${
                !params.attributes || params.attributes.length === 0
                  ? '_'
                  : params.attributes.join(',')
              }`,
            }
          : '/',
    }),
  }),
})

export const { useGetLdapServersQuery, useSearchQuery } = ldapApi
