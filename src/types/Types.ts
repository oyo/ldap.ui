export type LdapSearchScope = 'one' | 'sub' | 'base'

export interface LdapSearchParams {
  base?: string
  scope?: LdapSearchScope
  filter?: string
  attributes?: string[]
}

export type LdapSearchResultItem = Record<string, string | string[]> & {
  dn: string
}

export interface LdapSearchRequest {
  server: string
  params: LdapSearchParams
}

export interface LdapSearchResult {
  params: LdapSearchParams
  result: LdapSearchResultItem[]
}

export interface ViewOptions {
  showDNAttribute: boolean
  showJsonOutput: boolean
}
