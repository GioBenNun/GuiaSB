interface GlossaryItemProps {
  term: string
  definition: string
}

export default function GlossaryItem({ term, definition }: GlossaryItemProps) {
  return (
    <li className="border-b border-amber-900/30 pb-2">
      <span className="font-medium text-amber-300">{term}:</span>{" "}
      <span className="text-amber-100 text-sm">{definition}</span>
    </li>
  )
}
