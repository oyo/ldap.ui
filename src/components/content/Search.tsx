import { useSearchQuery } from 'features/apiSlice'
import { inputSelector } from 'features/inputSlice'
import { useSelector } from 'react-redux'
import SearchOutput from './SearchOutput'
import ServerSelector from './ServerSelector'
import DNItem from './DNItem'
import ResultCount from './ResultCount'

export default function Search() {
  const input = useSelector(inputSelector)
  const { data } = useSearchQuery(input)

  return (
    <>
      <div className="navigation">
        <ServerSelector />
        {data?.params && <DNItem dn={data.params.base ?? ''} />}
        {data?.result && <ResultCount count={data.result.length} />}
      </div>
      {data?.result && (
        <div>
          <SearchOutput data={data} />
        </div>
      )}
    </>
  )
}
