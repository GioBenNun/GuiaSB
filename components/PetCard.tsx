import Image from "next/image"

interface PetCardProps {
  name: string
  image: string
  rarity: string
  bestFor: string
  perks: string[]
}

export default function PetCard({ name, image, rarity, bestFor, perks }: PetCardProps) {
  const rarityColors = {
    Comum: "text-gray-200",
    Incomum: "text-green-400",
    Raro: "text-blue-400",
    Épico: "text-purple-400",
    Lendário: "text-amber-400",
    Mítico: "text-pink-400",
  }

  const rarityColor = rarityColors[rarity] || "text-amber-200"

  return (
    <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
      <div className="h-40 relative">
        <Image src={image || "/placeholder.svg?height=160&width=320"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d08] to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-bold text-amber-200">{name}</h3>
          <p className={`text-sm ${rarityColor}`}>{rarity}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-sm mb-3">
          <span className="text-amber-300">Melhor para:</span>
          <span className="text-amber-100">{bestFor}</span>
        </div>
        <div className="text-sm">
          <span className="text-amber-300 block mb-1">Habilidades:</span>
          <ul className="text-amber-100 text-xs space-y-1">
            {perks.map((perk, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-1"></span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
