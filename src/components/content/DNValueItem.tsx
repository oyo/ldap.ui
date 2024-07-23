import { setBase } from 'features/inputSlice'
import { optionSelector } from 'features/optionSlice'
import { useDispatch, useSelector } from 'react-redux'

function DNValueItem({ dn, base }: { dn: string; base: string }) {
  const { showDNAttribute } = useSelector(optionSelector)

  const dispatch = useDispatch()
  const [att, value] = dn.split('=')
  const fullDn = !base || base === '' ? dn : `${dn},${base}`

  return (
    <a
      className="dn-value"
      href={`#${fullDn}`}
      onClick={() => {
        dispatch(setBase(fullDn))
      }}
    >
      {showDNAttribute && <span className="att">{att}</span>}
      <span className="value">{value}</span>
    </a>
  )
}

export default DNValueItem
