import Image from "next/image"

interface DungeonBossCardProps {
  name: string
  floor: string
  image: string
  difficulty: string
  drops: string[]
  strategy: string
}

export default function DungeonBossCard({ name, floor, image, difficulty, drops, strategy }: DungeonBossCardProps) {
  return (
    <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
      <div className="h-40 relative">
        <Image src={image || "/placeholder.svg?height=160&width=320"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d08] to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-bold text-amber-200">{name}</h3>
          <p className="text-sm text-amber-300/80">{floor}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-amber-300">Dificuldade:</span>
          <span className="text-amber-100">{difficulty}</span>
        </div>
        <div className="text-sm mb-3">
          <span className="text-amber-300 block mb-1">Drops Principais:</span>
          <ul className="text-amber-100 text-xs space-y-1">
            {drops.slice(0, 3).map((drop, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                {drop}
              </li>
            ))}
            {drops.length > 3 && <li className="text-amber-400/70 italic">+{drops.length - 3} outros itens</li>}
          </ul>
        </div>
        <div className="text-sm">
          <span className="text-amber-300 block mb-1">Estratégia:</span>
          <p className="text-amber-100 text-xs">{strategy}</p>
        </div>
      </div>
    </div>
  )
}
