import { toggleDNAttribute } from 'features/optionSlice'
import { useDispatch } from 'react-redux'

export default function OptionBar() {
  const dispatch = useDispatch()
  return (
    <div>
      <span className="options">
        <input type="checkbox" onChange={() => dispatch(toggleDNAttribute())} />
        {'Show DN Attribute'}
      </span>
    </div>
  )
}
