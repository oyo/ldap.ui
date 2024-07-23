import DNValueItem from './DNValueItem'

function DNItem({ dn }: { dn: string }) {
  const path = dn.split(',')
  const revPath = [...path].reverse()

  return (
    <span className="dn">
      {revPath.map((item, index) => (
        <DNValueItem
          key={item}
          dn={item}
          base={index === 0 ? '' : path.slice(-index).join(',')}
        />
      ))}
    </span>
  )
}

export default DNItem
