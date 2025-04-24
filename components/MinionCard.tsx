import Image from "next/image"

interface MinionCardProps {
  name: string
  image: string
  tier: string
  category: string
  speed: {
    i: string
    xi: string
  }
  profit: string
  description: string
}

export default function MinionCard({ name, image, tier, category, speed, profit, description }: MinionCardProps) {
  return (
    <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
      <div className="h-40 relative">
        <Image src={image || "/placeholder.svg?height=160&width=320"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d08] to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-bold text-amber-200">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div>
            <span className="text-amber-300">Tier:</span>
            <span className="text-amber-100 ml-2">{tier}</span>
          </div>
          <div>
            <span className="text-amber-300">Categoria:</span>
            <span className="text-amber-100 ml-2">{category}</span>
          </div>
          <div>
            <span className="text-amber-300">Velocidade:</span>
            <span className="text-amber-100 ml-2">
              {speed.i} → {speed.xi}
            </span>
          </div>
          <div>
            <span className="text-amber-300">Lucro:</span>
            <span className="text-amber-100 ml-2">{profit}</span>
          </div>
        </div>
        <div className="text-sm">
          <p className="text-amber-100 text-xs">{description}</p>
        </div>
      </div>
    </div>
  )
}
