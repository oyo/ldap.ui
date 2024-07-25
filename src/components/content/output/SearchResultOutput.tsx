import type { LdapSearchResult } from 'types/Types'
import JsonOutput from './JsonOutput'
import DNListOutput from './DNListOutput'
import { useDispatch, useSelector } from 'react-redux'
import { updateParams } from 'features/inputSlice'
import ObjectOutput from './ObjectOutput'
import { optionSelector } from 'features/optionSlice'

export default function SearchResultOutput({
  data,
}: {
  data: LdapSearchResult
}) {
  const { showJsonOutput } = useSelector(optionSelector)

  const dispatch = useDispatch()

  const getFullData = () => {
    setTimeout(
      () => dispatch(updateParams({ scope: 'base', attributes: [] })),
      500
    )
  }

  if (data.result.length === 0 && data.params.scope === 'one') {
    getFullData()
  }

  if (showJsonOutput) {
    return <JsonOutput data={data} />
  }
  if (
    data.params.attributes?.length === 1 &&
    data.params.attributes?.[0] === 'dn'
  ) {
    return <DNListOutput data={data} />
  }
  if (data.result.length === 1) {
    return <ObjectOutput data={data} />
  }
  return <JsonOutput data={data} />
}
