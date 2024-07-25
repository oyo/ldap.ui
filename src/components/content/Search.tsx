import { useSearchQuery } from 'features/apiSlice'
import { inputSelector } from 'features/inputSlice'
import { useSelector } from 'react-redux'
import ServerSelector from './ServerSelector'
import DNItem from '../basic/DNItem'
import ResultCount from '../basic/ResultCount'
import SearchResultOutput from './output/SearchResultOutput'

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
      {data?.result && <SearchResultOutput data={data} />}
    </>
  )
}
