import Image from "next/image"

interface IslandCardProps {
  name: string
  image: string
  level: string
  resources: string[]
  mobs: string[]
  description: string
}

export default function IslandCard({ name, image, level, resources, mobs, description }: IslandCardProps) {
  return (
    <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
      <div className="h-40 relative">
        <Image src={image || "/placeholder.svg?height=160&width=320"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d08] to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-bold text-amber-200">{name}</h3>
          <p className="text-sm text-amber-300/80">Nível Recomendado: {level}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-amber-100 text-xs mb-3">{description}</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-amber-300 block mb-1">Recursos:</span>
            <ul className="text-amber-100 text-xs space-y-1">
              {resources.slice(0, 4).map((resource, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  {resource}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-amber-300 block mb-1">Mobs:</span>
            <ul className="text-amber-100 text-xs space-y-1">
              {mobs.slice(0, 4).map((mob, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  {mob}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
