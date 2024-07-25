export default function ResultCount({ count }: { count: number }) {
  return (
    <span
      className={`result-count${count > 99 ? ' warn' : ''}`}
    >{`[${count}${count > 99 ? '+' : ''}]`}</span>
  )
}
