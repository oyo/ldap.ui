import type { LdapSearchResult } from 'types/Types'

const RenderValue = ({ value }: { value: string | string[] }) =>
  Array.isArray(value) ? (
    <ul>
      {value.map((v) => (
        <li key={v}>{v}</li>
      ))}
    </ul>
  ) : (
    <>{value}</>
  )

export default function ObjectOutput({ data }: { data: LdapSearchResult }) {
  /*
    getView() {
      return N('table',
        N('tbody',
          Object.keys(this.data)
            .filter(k => this.keyFilter(k, this.data[k]))
            .sort()
            .map(k =>
              N('tr', [
                N('th', k),
                N('td', this.keyCheck(k, this.data[k]))
              ])
            ).concat(
              N('tr', [
                N('th', 'actions'),
                N('td', this.getActions())
              ])
            )
        )
      )
    }
  
    isBinary(key, value) {
      for (let i = 0; i < value.length; i++) {
          const code = value.charCodeAt(i);
          if (code < 32 || code > 255)
            return true;
      }
      return false;
    }
  
    keyFilter(key, value) {
      return true;
    }
  
    keySort(key, value) {
      return value;
    }
  
    keyCheck(key, value) {
      if (value instanceof Array) {
        return N('ul',
          this.keySort(key, value)
            .map(v => N('li', this.keyCheck(key, v))),
          { class: 'attlist' }
        );
      }
      if (isDatePattern(value)) {
        const date = normDate(value);      
        return N('pre', [dayjs(date).fromNow(), ' ', SL(date)], { class: 'date' });
      }
      if (isLdapPattern(value)) {
        return N('span', formatLdapDn(value), { class: 'ldapdn' });
      }
      if (this.isBinary(key, value)) {
        return N('pre', '<binary data>');
      }
      return this.canSearch(key, value)
        ? SL(value)
        : this.keyValue(key, value)
    }
  
    canSearch(key, value) {
      return isSearchPattern(value);
    }
  
    keyValue(key, value) {
      return value;
    }
  
    getActions() {
      console.log(this.data.dn);
      return this.data.dn.match(/^(ou|o|dc)=/i)
        ? [
          SL('*,' + this.data.dn, '(✱)'),
          SL(this.data.dn, 'details')
        ]
        : SL(this.data.dn, 'details');
    }
  
  }
  
  */
  const item = data.result[0]
  return (
    <table>
      <tbody>
        {Object.keys(item)
          .sort()
          .map((k) => (
            <tr key={k}>
              <th>{k}</th>
              <td>
                <RenderValue value={item[k]} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
