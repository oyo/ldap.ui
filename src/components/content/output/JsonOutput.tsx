import type { LdapSearchResult } from 'types/Types'

const JsonOutput = ({ data }: { data: LdapSearchResult }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
)

export default JsonOutput
