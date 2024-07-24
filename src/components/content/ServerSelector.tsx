import { useGetLdapServersQuery } from 'features/apiSlice'
import { selectServer } from 'features/inputSlice'
import { useDispatch } from 'react-redux'

export default function ServerSelector() {
  const { data } = useGetLdapServersQuery()
  const dispatch = useDispatch()
  return (
    <select onChange={(e) => dispatch(selectServer(e.target.value))}>
      <option value="">{'-choose-'}</option>
      {data?.map((server) => (
        <option key={server} value={server}>
          {server}
        </option>
      ))}
    </select>
  )
}
