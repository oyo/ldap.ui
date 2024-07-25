import type { LdapSearchResult } from 'types/Types'
import DNValueItem from '../../basic/DNValueItem'

export default function DNListOutput({ data }: { data: LdapSearchResult }) {
  return (
    <ul>
      {data.result
        .map((item) =>
          item.dn.substring(
            0,
            item.dn.length - (data.params.base?.length ?? 0) - 1
          )
        )
        .sort()
        .map((dn) => (
          <li key={dn}>
            <DNValueItem dn={dn} base={data.params.base ?? ''} />
          </li>
        ))}
      {data.result.length > 99 && (
        <li>
          <DNValueItem dn={'exc=...'} base={data.params.base ?? ''} />
        </li>
      )}
    </ul>
  )
}
