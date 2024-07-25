import type { UnknownAction } from '@reduxjs/toolkit'
import { toggleDNAttribute, toggleJsonOutput } from 'features/optionSlice'
import { useDispatch } from 'react-redux'

const OptionItem = ({
  label,
  action,
}: {
  label: string
  action: () => UnknownAction
}) => {
  const dispatch = useDispatch()
  return (
    <span className="options">
      <input type="checkbox" onChange={() => dispatch(action())} />
      {label}
    </span>
  )
}

export default function OptionBar() {
  return (
    <div>
      <OptionItem label="Show DN Attribute" action={toggleDNAttribute} />
      <OptionItem label="Show Output as JSON" action={toggleJsonOutput} />
    </div>
  )
}
