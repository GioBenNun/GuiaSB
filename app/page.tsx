import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import DungeonBossCard from "@/components/DungeonBossCard"
import MinionCard from "@/components/MinionCard"
import PetCard from "@/components/PetCard"
import IslandCard from "@/components/IslandCard"
import GlossaryItem from "@/components/GlossaryItem"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1310] text-amber-100 font-serif relative">
      {/* Landing Page */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/grimoire-bg.jpg"
            alt="Fundo de Grimório"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <Image
              src="/images/skyblock.png"
              alt="Hypixel SkyBlock Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-200 grimoire-title">Grimório do SkyBlock</h1>
          <p className="text-xl md:text-2xl mb-8 italic">Um guia completo para dominar o mundo de Hypixel SkyBlock</p>
          <div className="border-t border-b border-amber-700 py-4 my-8 w-full max-w-md mx-auto">
            <p className="text-amber-300">Compilado por Boletinha</p>
          </div>
          <Link href="#conteudo">
            <Button className="bg-amber-800 hover:bg-amber-700 text-amber-100 px-8 py-6 text-xl rounded-md border border-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-900/20">
              Entrar no Guia
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8 text-amber-300" />
        </div>
      </section>

      {/* Navigation Bar */}
      <nav
        id="navbar"
        className="sticky top-0 bg-[#2a1a12] border-b border-amber-900/50 shadow-md z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-amber-200 font-bold text-lg">Grimório SkyBlock</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <NavLink href="#builds">Builds</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#slayers">Slayers</NavLink>
                <NavLink href="#dungeons">Dungeons</NavLink>
                <NavLink href="#minions">Minions</NavLink>
                <NavLink href="#economia">Economia</NavLink>
                <NavLink href="#encantamentos">Encantamentos</NavLink>
                <NavLink href="#pets">Pets</NavLink>
                <NavLink href="#ilhas">Ilhas</NavLink>
                <NavLink href="#glossario">Glossário</NavLink>
              </div>
            </div>
            <div className="md:hidden">
              <button className="mobile-menu-button text-amber-200 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-menu hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#2a1a12] border-t border-amber-900/30">
            <MobileNavLink href="#builds">Builds</MobileNavLink>
            <MobileNavLink href="#skills">Skills</MobileNavLink>
            <MobileNavLink href="#slayers">Slayers</MobileNavLink>
            <MobileNavLink href="#dungeons">Dungeons</MobileNavLink>
            <MobileNavLink href="#minions">Minions</MobileNavLink>
            <MobileNavLink href="#economia">Economia</MobileNavLink>
            <MobileNavLink href="#encantamentos">Encantamentos</MobileNavLink>
            <MobileNavLink href="#pets">Pets</MobileNavLink>
            <MobileNavLink href="#ilhas">Ilhas</MobileNavLink>
            <MobileNavLink href="#glossario">Glossário</MobileNavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}

      <div id="conteudo" className="container mx-auto px-4 py-12">
        {/* Builds Section */}
        <Section id="builds" title="Builds por Classe" icon="/images/sword-icon.svg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BuildCard
              title="Mage"
              image="/images/mage-class.jpg"
              description="Domínio de magia e feitiços poderosos"
              stats={{
                damage: 8,
                defense: 5,
                utility: 9,
              }}
            />
            <BuildCard
              title="Archer"
              image="/images/archer-class.jpg"
              description="Especialista em ataques à distância"
              stats={{
                damage: 9,
                defense: 4,
                utility: 7,
              }}
            />
            <BuildCard
              title="Tank"
              image="/images/tank-class.jpg"
              description="Alta resistência e proteção da equipe"
              stats={{
                damage: 5,
                defense: 10,
                utility: 6,
              }}
            />
            <BuildCard
              title="Berserker"
              image="/images/berserker-class.jpg"
              description="Dano corpo a corpo devastador"
              stats={{
                damage: 10,
                defense: 6,
                utility: 4,
              }}
            />
            <BuildCard
              title="Healer"
              image="/images/healer-class.jpg"
              description="Suporte e cura para a equipe"
              stats={{
                damage: 4,
                defense: 7,
                utility: 10,
              }}
            />
          </div>

          <div className="mt-8 bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Equipamentos Recomendados por Classe</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-800">
                    <th className="text-left py-2 px-4">Classe</th>
                    <th className="text-left py-2 px-4">Arma</th>
                    <th className="text-left py-2 px-4">Armadura</th>
                    <th className="text-left py-2 px-4">Acessórios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">Mage</td>
                    <td className="py-2 px-4">Hyperion, Midas Staff</td>
                    <td className="py-2 px-4">Storm&apos;s Armor, Wise Dragon</td>
                    <td className="py-2 px-4">Wither Artifact, Soulflow Engine</td>
                  </tr>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">Archer</td>
                    <td className="py-2 px-4">Juju Shortbow, Terminator</td>
                    <td className="py-2 px-4">Necron&apos;s Armor, Shadow Assassin</td>
                    <td className="py-2 px-4">Quiver, Overflux Power Orb</td>
                  </tr>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">Tank</td>
                    <td className="py-2 px-4">Reaper Falchion, Axe of the Shredded</td>
                    <td className="py-2 px-4">Goldor&apos;s Armor, Perfect Armor</td>
                    <td className="py-2 px-4">Reaper Orb, Warden Helmet</td>
                  </tr>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">Berserker</td>
                    <td className="py-2 px-4">Valkyrie, Giant&apos;s Sword</td>
                    <td className="py-2 px-4">Necron&apos;s Armor, Superior Dragon</td>
                    <td className="py-2 px-4">Talisman of Power, Enrichment</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">Healer</td>
                    <td className="py-2 px-4">Wand of Restoration, Florid Zombie Sword</td>
                    <td className="py-2 px-4">Necron&apos;s Armor, Adaptive Armor</td>
                    <td className="py-2 px-4">Mender Fedora, Overflux Power Orb</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold text-amber-200">Dicas para Escolher sua Classe</h3>
            <p>
              Escolha uma classe que complemente o resto da sua equipe. Uma composição equilibrada geralmente inclui um
              Tank, um Healer e três classes de dano.
            </p>
            <p>Invista em talismans para maximizar seu potencial, independentemente da classe escolhida.</p>
            <p>Adapte sua build conforme você progride no jogo e obtém equipamentos melhores.</p>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Progressão de Skills" icon="/images/skill-icon.svg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Skills de Combate</h3>
              <ul className="space-y-3">
                <SkillItem name="Combat" maxLevel={60} description="Aumenta o dano contra monstros" />
                <SkillItem name="Foraging" maxLevel={50} description="Habilidade com machados e coleta de madeira" />
                <SkillItem name="Mining" maxLevel={60} description="Mineração e coleta de recursos" />
                <SkillItem name="Fishing" maxLevel={50} description="Pesca e coleta de itens aquáticos" />
              </ul>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Skills de Produção</h3>
              <ul className="space-y-3">
                <SkillItem name="Enchanting" maxLevel={60} description="Criação de encantamentos poderosos" />
                <SkillItem name="Alchemy" maxLevel={50} description="Criação de poções e elixires" />
                <SkillItem name="Farming" maxLevel={60} description="Cultivo e colheita de plantações" />
                <SkillItem name="Taming" maxLevel={50} description="Domesticação e melhoria de pets" />
              </ul>
            </div>
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Guia de Progressão de Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-amber-300">Níveis 1-10: Iniciante</h4>
                <p>
                  Foque em completar missões básicas e explorar a ilha. Use ferramentas básicas e comece a acumular
                  recursos.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-amber-300">Níveis 11-25: Intermediário</h4>
                <p>
                  Invista em ferramentas melhores e comece a usar minions para automatizar a coleta de recursos. Explore
                  novas áreas como Deep Caverns e Spider&apos;s Den.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-amber-300">Níveis 26-40: Avançado</h4>
                <p>
                  Comece a participar de eventos especiais e desafios. Invista em equipamentos de tier superior e
                  explore áreas como The End e Blazing Fortress.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-amber-300">Níveis 41-50: Especialista</h4>
                <p>
                  Otimize suas farms e minions para máxima eficiência. Participe de Slayers e Dungeons regularmente.
                  Comece a coletar itens raros e sets completos.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-amber-300">Níveis 51-60: Mestre</h4>
                <p>
                  Foque em maximizar todas as suas skills. Colete itens lendários e complete coleções raras. Domine
                  todas as mecânicas avançadas do jogo.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Melhores Métodos de XP</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-amber-300">Combat:</span> Enderman na End, Zealots, Dungeons
                </li>
                <li>
                  <span className="font-medium text-amber-300">Mining:</span> Mithril nas Dwarven Mines, Gemstones
                </li>
                <li>
                  <span className="font-medium text-amber-300">Farming:</span> Fazendas automáticas de cana-de-açúcar,
                  cenoura
                </li>
                <li>
                  <span className="font-medium text-amber-300">Foraging:</span> Ilha das Dark Oaks, Jungle Island
                </li>
                <li>
                  <span className="font-medium text-amber-300">Fishing:</span> Fishing Festival, Lava Fishing
                </li>
              </ul>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Itens Recomendados</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-amber-300">Combat:</span> God Pot, Combat XP Boost
                </li>
                <li>
                  <span className="font-medium text-amber-300">Mining:</span> Drill, Mining Speed Potion
                </li>
                <li>
                  <span className="font-medium text-amber-300">Farming:</span> Farming Crystal, Rancher&apos;s Boots
                </li>
                <li>
                  <span className="font-medium text-amber-300">Foraging:</span> Treecapitator, Monkey Pet
                </li>
                <li>
                  <span className="font-medium text-amber-300">Fishing:</span> Rod of the Sea, Fishing XP Potion
                </li>
              </ul>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Benefícios de Skills Altas</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Desbloqueio de receitas e crafts especiais</li>
                <li>Aumento de estatísticas base do personagem</li>
                <li>Acesso a áreas e conteúdos exclusivos</li>
                <li>Maior eficiência na coleta de recursos</li>
                <li>Vantagem em combate e dungeons</li>
                <li>Desbloqueio de pets e montarias especiais</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Slayers Section */}
        <Section id="slayers" title="Slayers" icon="/images/slayer-icon.svg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SlayerCard
              name="Revenant Horror"
              image="/images/revenant.jpg"
              difficulty="Fácil-Médio"
              location="Cemitério"
              drops={[
                "Revenant Flesh",
                "Foul Flesh",
                "Pestilence Rune",
                "Undead Catalyst",
                "Beheaded Horror",
                "Snake Rune",
                "Scythe Blade",
              ]}
            />
            <SlayerCard
              name="Tarantula Broodfather"
              image="/images/tarantula.jpg"
              difficulty="Médio"
              location="Spider's Den"
              drops={[
                "Tarantula Web",
                "Toxic Arrow Poison",
                "Spider Catalyst",
                "Fly Swatter",
                "Tarantula Talisman",
                "Digested Mosquito",
              ]}
            />
            <SlayerCard
              name="Sven Packmaster"
              image="/images/sven.jpg"
              difficulty="Médio-Difícil"
              location="Floresta"
              drops={[
                "Wolf Tooth",
                "Hamster Wheel",
                "Spirit Rune",
                "Red Claw Egg",
                "Grizzly Bait",
                "Overflux Capacitor",
              ]}
            />
            <SlayerCard
              name="Voidgloom Seraph"
              image="/images/voidgloom.jpg"
              difficulty="Muito Difícil"
              location="The End"
              drops={[
                "Null Atom",
                "Null Sphere",
                "Antique Remedies",
                "Summoning Eye",
                "Judgement Core",
                "Enchant Rune",
              ]}
            />
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Progressão de Slayers</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-800">
                    <th className="text-left py-2 px-4">Nível</th>
                    <th className="text-left py-2 px-4">XP Necessária</th>
                    <th className="text-left py-2 px-4">Recompensas</th>
                    <th className="text-left py-2 px-4">Desbloqueios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">1</td>
                    <td className="py-2 px-4">5</td>
                    <td className="py-2 px-4">+1% Dano contra o tipo</td>
                    <td className="py-2 px-4">Receitas básicas</td>
                  </tr>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">2</td>
                    <td className="py-2 px-4">15</td>
                    <td className="py-2 px-4">+2% Dano contra o tipo</td>
                    <td className="py-2 px-4">Armas Tier I</td>
                  </tr>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">3</td>
                    <td className="py-2 px-4">50</td>
                    <td className="py-2 px-4">+3% Dano contra o tipo</td>
                    <td className="py-2 px-4">Armas Tier II</td>
                  </tr>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">4</td>
                    <td className="py-2 px-4">100</td>
                    <td className="py-2 px-4">+4% Dano contra o tipo</td>
                    <td className="py-2 px-4">Armas Tier III</td>
                  </tr>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">5</td>
                    <td className="py-2 px-4">250</td>
                    <td className="py-2 px-4">+5% Dano contra o tipo</td>
                    <td className="py-2 px-4">Armas Tier IV</td>
                  </tr>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">6</td>
                    <td className="py-2 px-4">500</td>
                    <td className="py-2 px-4">+6% Dano contra o tipo</td>
                    <td className="py-2 px-4">Armas Tier V</td>
                  </tr>
                  <tr className="border-b border-amber-900/30">
                    <td className="py-2 px-4 font-medium">7</td>
                    <td className="py-2 px-4">1000</td>
                    <td className="py-2 px-4">+7% Dano contra o tipo</td>
                    <td className="py-2 px-4">Armas Tier VI</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">8</td>
                    <td className="py-2 px-4">2000</td>
                    <td className="py-2 px-4">+8% Dano contra o tipo</td>
                    <td className="py-2 px-4">Armas Tier VII</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Estratégias para Slayers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-amber-300">Revenant Horror</h4>
                  <p>
                    Use armas com encantamento Smite. Mantenha distância e use terreno elevado para evitar o ataque de
                    dash. Recomendado: Reaper Falchion, Reaper Armor.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300">Tarantula Broodfather</h4>
                  <p>
                    Construa uma plataforma elevada para evitar as aranhas menores. Use armas com Bane of Arthropods.
                    Recomendado: Tarantula Helmet, Spider Sword.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300">Sven Packmaster</h4>
                  <p>
                    Mantenha-se em movimento para evitar o ataque de salto. Use uma área aberta para facilitar a
                    movimentação. Recomendado: Pooch Sword, Superior Dragon Armor.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300">Voidgloom Seraph</h4>
                  <p>
                    Necessário Ender Armor para resistir aos ataques. Use Wand of Atonement para remover escudos.
                    Recomendado: Atomsplit Katana, Final Destination Armor.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Itens Essenciais para Slayers</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-medium text-amber-300">Manaflux Power Orb/Overflux Power Orb:</span> Regeneração
                  de vida e mana essencial para sobrevivência
                </li>
                <li>
                  <span className="font-medium text-amber-300">God Potion:</span> Fornece todos os efeitos de poção
                  necessários
                </li>
                <li>
                  <span className="font-medium text-amber-300">Wand of Healing/Zombie Sword:</span> Cura instantânea em
                  momentos críticos
                </li>
                <li>
                  <span className="font-medium text-amber-300">Radiant Power Orb:</span> Alternativa mais acessível para
                  iniciantes
                </li>
                <li>
                  <span className="font-medium text-amber-300">Slayer-specific Weapons:</span> Cada slayer tem armas
                  específicas que são mais eficazes
                </li>
                <li>
                  <span className="font-medium text-amber-300">Mastiff Armor:</span> Excelente para Sven devido ao alto
                  HP
                </li>
                <li>
                  <span className="font-medium text-amber-300">Talismans:</span> Maximize sua coleção para aumentar o
                  dano
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Dungeons Section */}
        <Section id="dungeons" title="Dungeons" icon="/images/dungeon-icon.svg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Introdução às Dungeons</h3>
              <p className="mb-4">
                Dungeons são masmorras desafiadoras que exigem cooperação em equipe e estratégia. Cada dungeon possui
                quebra-cabeças únicos, inimigos poderosos e chefes que recompensam os jogadores com itens valiosos.
              </p>
              <p>
                Para acessar as dungeons, você precisa falar com o Dungeon Sage no Hub. É recomendado ter pelo menos
                Combat 20 e equipamentos de tier médio antes de tentar sua primeira dungeon.
              </p>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Sistema de Andares</h3>
              <p className="mb-4">
                Existem 7 andares nas Catacombs, cada um com dificuldade e recompensas crescentes. Cada andar possui um
                chefe único que deve ser derrotado para completar a dungeon.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-amber-300">Andar 1:</span> Bonzo - Dificuldade Fácil
                </li>
                <li>
                  <span className="font-medium text-amber-300">Andar 2:</span> Scarf - Dificuldade Fácil-Média
                </li>
                <li>
                  <span className="font-medium text-amber-300">Andar 3:</span> Professor - Dificuldade Média
                </li>
                <li>
                  <span className="font-medium text-amber-300">Andar 4:</span> Thorn - Dificuldade Média-Alta
                </li>
                <li>
                  <span className="font-medium text-amber-300">Andar 5:</span> Livid - Dificuldade Alta
                </li>
                <li>
                  <span className="font-medium text-amber-300">Andar 6:</span> Sadan - Dificuldade Muito Alta
                </li>
                <li>
                  <span className="font-medium text-amber-300">Andar 7:</span> Necron - Dificuldade Extrema
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <DungeonBossCard
              name="Bonzo"
              floor="Andar 1"
              image="/images/bonzo.jpg"
              difficulty="Fácil"
              drops={["Bonzo&apos;s Staff", "Bonzo&apos;s Mask", "Spirit Wing", "Spirit Bone"]}
              strategy="Evite os clones e foque no Bonzo real. Use armas de longo alcance para atingi-lo quando ele estiver no ar."
            />
            <DungeonBossCard
              name="Scarf"
              floor="Andar 2"
              image="/images/scarf.jpg"
              difficulty="Fácil-Média"
              drops={["Adaptive Blade", "Scarf&apos;s Studies", "Adaptive Helmet", "Spirit Stone"]}
              strategy="Destrua os totens para remover seu escudo. Cuidado com os minions que ele invoca durante a luta."
            />
            <DungeonBossCard
              name="Professor"
              floor="Andar 3"
              image="/images/professor.jpg"
              difficulty="Média"
              drops={["Adaptive Chestplate", "Spirit Bow", "Adaptive Leggings", "Spirit Leap"]}
              strategy="Destrua os jarros de poção para interromper suas curas. Mantenha distância durante seus ataques de área."
            />
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Secrets e Pontuação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Secrets</h4>
                <p className="mb-4">
                  Secrets são itens escondidos nas dungeons que aumentam sua pontuação. Encontrar secrets é essencial
                  para obter rank S+ e maximizar suas recompensas.
                </p>
                <p>Tipos de secrets incluem:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Baús escondidos</li>
                  <li>Itens em locais secretos</li>
                  <li>Salas escondidas</li>
                  <li>Quebra-cabeças opcionais</li>
                  <li>Livros de habilidades</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Sistema de Pontuação</h4>
                <p className="mb-4">
                  Sua pontuação determina a qualidade e quantidade de recompensas ao final da dungeon. A pontuação é
                  calculada com base em:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Secrets encontrados</li>
                  <li>Quebra-cabeças completados</li>
                  <li>Inimigos derrotados</li>
                  <li>Tempo de conclusão</li>
                  <li>Mortes (reduzem a pontuação)</li>
                </ul>
                <div className="mt-4">
                  <p className="font-medium text-amber-300">Ranks de Pontuação:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>
                      <span className="text-red-400">D</span>: 0-99 pontos
                    </li>
                    <li>
                      <span className="text-orange-400">C</span>: 100-159 pontos
                    </li>
                    <li>
                      <span className="text-yellow-400">B</span>: 160-229 pontos
                    </li>
                    <li>
                      <span className="text-green-400">A</span>: 230-269 pontos
                    </li>
                    <li>
                      <span className="text-blue-400">S</span>: 270-299 pontos
                    </li>
                    <li>
                      <span className="text-purple-400">S+</span>: 300+ pontos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Equipamentos Essenciais</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-amber-300">Armas</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>
                      <span className="font-medium">Iniciante:</span> Aspect of the End, Adaptive Blade
                    </li>
                    <li>
                      <span className="font-medium">Intermediário:</span> Shadow Fury, Livid Dagger
                    </li>
                    <li>
                      <span className="font-medium">Avançado:</span> Hyperion, Valkyrie, Scylla, Astraea
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300">Armaduras</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>
                      <span className="font-medium">Iniciante:</span> Adaptive Armor, Zombie Knight
                    </li>
                    <li>
                      <span className="font-medium">Intermediário:</span> Shadow Assassin, Necromancer Lord
                    </li>
                    <li>
                      <span className="font-medium">Avançado:</span> Necron&apos;s, Storm&apos;s, Goldor&apos;s,
                      Maxor&apos;s
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300">Acessórios</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Spirit Leap (para navegação rápida)</li>
                    <li>Dungeon Orb (para estatísticas)</li>
                    <li>Healing Wand (para cura de emergência)</li>
                    <li>Revive Stone (para reviver companheiros)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Dicas para Dungeons</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-medium text-amber-300">Comunicação:</span> Use o chat ou Discord para coordenar
                  com sua equipe. Comunique-se sobre quebra-cabeças e estratégias.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Aprenda os Quebra-cabeças:</span> Cada quebra-cabeça tem
                  uma solução específica. Pratique-os para completá-los rapidamente.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Conheça sua Classe:</span> Entenda o papel da sua classe
                  na equipe e otimize seu equipamento para ela.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Mods Úteis:</span> Use mods como Skytils,
                  NotEnoughUpdates e Dungeon Rooms para ajudar na navegação e solução de quebra-cabeças.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Progressão Gradual:</span> Domine um andar antes de
                  avançar para o próximo. Não tente pular andares sem experiência.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Estatísticas Catacombs:</span> Aumente seu nível de
                  Catacombs para obter bônus de estatísticas nas dungeons.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Estoque de Consumíveis:</span> Tenha sempre God Potions,
                  Spirit Leaps e Revive Stones em seu inventário.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Minions Section */}
        <Section id="minions" title="Minions" icon="/images/minion-icon.svg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Introdução aos Minions</h3>
              <p className="mb-4">
                Minions são trabalhadores automáticos que coletam recursos mesmo quando você está offline. Eles são
                essenciais para gerar renda passiva e progredir no jogo.
              </p>
              <p>
                Cada minion pode ser atualizado até o nível 11 (ou 12 para alguns especiais), aumentando sua velocidade
                e eficiência. Você pode ter até 25 minions ativos simultaneamente com slots suficientes.
              </p>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Slots de Minion</h3>
              <p className="mb-4">
                O número de slots de minion disponíveis depende da quantidade de minions únicos que você já criou.
                Quanto mais tipos diferentes de minions você criar, mais slots desbloqueará.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-amber-800">
                      <th className="text-left py-2 px-4">Minions Únicos</th>
                      <th className="text-left py-2 px-4">Slots Desbloqueados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4">5</td>
                      <td className="py-2 px-4">6</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4">15</td>
                      <td className="py-2 px-4">7</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4">30</td>
                      <td className="py-2 px-4">8</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4">50</td>
                      <td className="py-2 px-4">9</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">...</td>
                      <td className="py-2 px-4">...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MinionCard
              name="Minion de Cobalto"
              image="/images/cobblestonem.png"
              tier="I-XI"
              category="Mineração"
              speed={{
                i: "14s",
                xi: "6s",
              }}
              profit="Médio"
              description="Coleta pedregulho automaticamente. Útil para construção e crafting."
            />
            <MinionCard
              name="Minion de Madeira"
              image="/images/oakminion.png"
              tier="I-XI"
              category="Coleta"
              speed={{
                i: "48s",
                xi: "13s",
              }}
              profit="Baixo-Médio"
              description="Corta árvores automaticamente. Bom para coletar madeira para crafting."
            />
            <MinionCard
              name="Minion de Neve"
              image="/images/snowminion.png"
              tier="I-XI"
              category="Coleta"
              speed={{
                i: "13s",
                xi: "5s",
              }}
              profit="Alto"
              description="Coleta neve automaticamente. Um dos minions mais lucrativos do jogo."
            />
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Upgrades de Minion</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Combustíveis</h4>
                <p className="mb-2">
                  Combustíveis aumentam a velocidade dos minions, permitindo que eles coletem recursos mais rapidamente.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Carvão:</span> +5% de velocidade (20h)
                  </li>
                  <li>
                    <span className="font-medium">Bloco de Carvão:</span> +10% de velocidade (24h)
                  </li>
                  <li>
                    <span className="font-medium">Enchanted Carvão:</span> +20% de velocidade (36h)
                  </li>
                  <li>
                    <span className="font-medium">Enchanted Lava Bucket:</span> +25% de velocidade (permanente)
                  </li>
                  <li>
                    <span className="font-medium">Enchanted Blaze Rod:</span> +30% de velocidade (12h)
                  </li>
                  <li>
                    <span className="font-medium">Plasma Bucket:</span> +35% de velocidade (permanente)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Armazenamento</h4>
                <p className="mb-2">
                  Upgrades de armazenamento aumentam a capacidade do minion, permitindo que ele funcione por mais tempo
                  sem encher.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Small Storage:</span> +1 linha de inventário
                  </li>
                  <li>
                    <span className="font-medium">Medium Storage:</span> +2 linhas de inventário
                  </li>
                  <li>
                    <span className="font-medium">Large Storage:</span> +3 linhas de inventário
                  </li>
                  <li>
                    <span className="font-medium">Enchanted Chest:</span> +9 linhas de inventário
                  </li>
                  <li>
                    <span className="font-medium">Compactor:</span> Compacta recursos automaticamente
                  </li>
                  <li>
                    <span className="font-medium">Super Compactor 3000:</span> Compacta recursos em enchanted items
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-amber-300 mb-2">Coletores Automáticos</h4>
              <p className="mb-2">
                Coletores automáticos vendem ou armazenam os recursos coletados pelos minions, permitindo que eles
                funcionem indefinidamente.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Hopper:</span> Transfere itens para um baú abaixo
                    </li>
                    <li>
                      <span className="font-medium">Budget Hopper:</span> Vende itens por 50% do valor
                    </li>
                    <li>
                      <span className="font-medium">Enchanted Hopper:</span> Vende itens por 100% do valor
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Minion Expander:</span> +50% de capacidade de armazenamento
                    </li>
                    <li>
                      <span className="font-medium">Catalyst:</span> Aumenta a velocidade, mas consome recursos extras
                    </li>
                    <li>
                      <span className="font-medium">Dwarven Super Compactor:</span> Versão melhorada do Super Compactor
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Minions Mais Lucrativos</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-amber-800">
                      <th className="text-left py-2 px-4">Minion</th>
                      <th className="text-left py-2 px-4">Lucro Diário (Tier XI)</th>
                      <th className="text-left py-2 px-4">Setup Recomendado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4 font-medium">Snow</td>
                      <td className="py-2 px-4">80-100k</td>
                      <td className="py-2 px-4">Plasma + Super Compactor + Enchanted Hopper</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4 font-medium">Clay</td>
                      <td className="py-2 px-4">70-90k</td>
                      <td className="py-2 px-4">Plasma + Super Compactor + Enchanted Hopper</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4 font-medium">Tarantula</td>
                      <td className="py-2 px-4">60-80k</td>
                      <td className="py-2 px-4">Enchanted Lava + Super Compactor + Enchanted Hopper</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4 font-medium">Revenant</td>
                      <td className="py-2 px-4">60-75k</td>
                      <td className="py-2 px-4">Enchanted Lava + Super Compactor + Enchanted Hopper</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Slime</td>
                      <td className="py-2 px-4">50-70k</td>
                      <td className="py-2 px-4">Plasma + Super Compactor + Enchanted Hopper</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-amber-400/70 mt-2">*Valores aproximados, sujeitos a flutuações do mercado</p>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Dicas para Minions</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-medium text-amber-300">Priorize Slots:</span> Desbloqueie o máximo de slots de
                  minion possível criando diferentes tipos de minions.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Invista em Upgrades:</span> Super Compactors e Enchanted
                  Lava Buckets são investimentos essenciais para minions de longo prazo.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Diversifique:</span> Não dependa apenas de um tipo de
                  minion. Diversifique para se proteger contra flutuações de preços.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Minions de Coleção:</span> Use minions específicos para
                  desbloquear coleções importantes, mesmo que não sejam os mais lucrativos.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Minions de Crafting:</span> Alguns minions são valiosos
                  não pelo que vendem, mas pelos materiais de crafting que fornecem.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Verifique Regularmente:</span> Mesmo com automação, é bom
                  verificar seus minions regularmente para garantir que estão funcionando corretamente.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Economia Section */}
        <Section id="economia" title="Economia no SkyBlock" icon="/images/economy-icon.svg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Sistema Monetário</h3>
              <p className="mb-4">
                A economia do SkyBlock gira em torno de várias moedas, cada uma com seus próprios usos e métodos de
                obtenção. Entender como ganhar e gastar essas moedas é essencial para progredir no jogo.
              </p>
              <div className="space-y-3 mt-4">
                <div>
                  <h4 className="font-bold text-amber-300">Moedas Principais</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>
                      <span className="font-medium">Coins:</span> Moeda principal, usada para comprar itens de NPCs e
                      outros jogadores
                    </li>
                    <li>
                      <span className="font-medium">Bits:</span> Obtidos através do SkyBlock Gems, usados para comprar
                      itens especiais
                    </li>
                    <li>
                      <span className="font-medium">Essence:</span> Obtida em Dungeons, usada para melhorar itens de
                      Dungeon
                    </li>
                    <li>
                      <span className="font-medium">Mithril Powder:</span> Obtida nas Dwarven Mines, usada para melhorar
                      habilidades de mineração
                    </li>
                    <li>
                      <span className="font-medium">Gemstone Powder:</span> Obtida nas Crystal Hollows, usada para
                      melhorar habilidades de gemstone
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Métodos de Ganhar Coins</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-amber-300">Iniciante (0-1M por hora)</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Farming de cana-de-açúcar ou cenoura</li>
                    <li>Venda de drops de mobs comuns</li>
                    <li>Minions básicos (Cobblestone, Coal, Iron)</li>
                    <li>Missões e recompensas diárias</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300">Intermediário (1-5M por hora)</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Farming de Zealots para Summoning Eyes</li>
                    <li>Flipping de itens no Auction House</li>
                    <li>Minions avançados (Snow, Clay, Tarantula)</li>
                    <li>Dungeons Andar 3-5</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300">Avançado (5-20M+ por hora)</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Mineração de Gemstones nas Crystal Hollows</li>
                    <li>Farming de Slayers nível 4-5</li>
                    <li>Dungeons Andar 6-7</li>
                    <li>Manipulação de mercado (itens raros)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Bazaar e Auction House</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Bazaar</h4>
                <p className="mb-4">
                  O Bazaar é um sistema de comércio onde jogadores podem comprar e vender commodities instantaneamente
                  ou criar ordens de compra e venda.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Dicas para o Bazaar:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use o Bazaar para vender recursos em massa</li>
                    <li>Crie ordens de compra para obter itens mais baratos</li>
                    <li>Monitore flutuações de preço para lucrar com arbitragem</li>
                    <li>Verifique o volume de negociação para evitar itens estagnados</li>
                    <li>Use mods como NEU para rastrear preços históricos</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Auction House</h4>
                <p className="mb-4">
                  O Auction House é onde jogadores podem leiloar itens únicos, encantados ou raros que não estão
                  disponíveis no Bazaar.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Dicas para o Auction House:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Pesquise preços antes de comprar ou vender</li>
                    <li>Leilões de 1 hora geralmente atraem mais ofertas</li>
                    <li>Compre itens durante períodos de baixa atividade</li>
                    <li>Venda itens durante períodos de alta atividade</li>
                    <li>Fique atento a itens subvalorizados para revender</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Flipping de Itens</h3>
              <p className="mb-4">
                Flipping é a prática de comprar itens por um preço baixo e vendê-los por um preço mais alto, gerando
                lucro com a diferença.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-amber-300">Estratégias de Flipping:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Compre itens fora do horário de pico e venda durante o horário de pico</li>
                  <li>Foque em itens com alta demanda mas oferta limitada</li>
                  <li>Monitore atualizações do jogo que podem afetar preços</li>
                  <li>Diversifique seus investimentos para reduzir riscos</li>
                  <li>Mantenha um registro de seus flips para analisar o desempenho</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Investimentos</h3>
              <p className="mb-4">
                Investir em itens que provavelmente aumentarão de valor ao longo do tempo pode gerar lucros
                significativos.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-amber-300">Bons Investimentos:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Itens de eventos limitados (Halloween, Natal)</li>
                  <li>Materiais para novos conteúdos anunciados</li>
                  <li>Itens raros de colecionador</li>
                  <li>Materiais para crafting de itens de end-game</li>
                  <li>Itens que serão afetados por mudanças de balanceamento</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Gerenciamento de Coins</h3>
              <p className="mb-4">
                Gerenciar eficientemente seus coins é essencial para progredir rapidamente no SkyBlock.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-amber-300">Dicas de Gerenciamento:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Mantenha um fundo de emergência para oportunidades</li>
                  <li>Invista em itens que aumentam sua capacidade de ganhar coins</li>
                  <li>Priorize upgrades que oferecem o melhor retorno sobre investimento</li>
                  <li>Evite comprar itens cosméticos até ter uma base econômica sólida</li>
                  <li>Use minions para gerar renda passiva constante</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Inflação e Economia do Servidor</h3>
            <p className="mb-4">
              A economia do SkyBlock está sujeita a inflação constante, com o valor dos coins diminuindo ao longo do
              tempo à medida que mais coins entram no jogo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Causas da Inflação</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Minions gerando recursos constantemente</li>
                  <li>Dupers e exploradores de bugs (quando não são banidos)</li>
                  <li>Falta de coin sinks eficientes</li>
                  <li>Aumento da eficiência dos métodos de farming</li>
                  <li>Acumulação de riqueza por jogadores veteranos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Como se Proteger</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Invista em itens estáveis que mantêm valor (Necron&apos;s, Hyperion)</li>
                  <li>Diversifique seus ativos (não mantenha tudo em coins)</li>
                  <li>Acompanhe tendências de preços e ajuste estratégias</li>
                  <li>Foque em recursos que têm demanda constante</li>
                  <li>Considere investir em itens limitados ou colecionáveis</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Encantamentos Section */}
        <Section id="encantamentos" title="Encantamentos" icon="/images/enchant-icon.svg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Sistema de Encantamentos</h3>
              <p className="mb-4">
                Encantamentos são melhorias que podem ser aplicadas a armas, armaduras e ferramentas para aumentar seu
                desempenho. Existem encantamentos comuns, raros e especiais, cada um com diferentes níveis de poder.
              </p>
              <p>
                Você pode obter encantamentos através da Mesa de Encantamentos, Livros de Encantamento, NPCs e
                combinando-os na Bigorna. Alguns encantamentos raros só podem ser obtidos através de eventos especiais
                ou dungeons.
              </p>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Níveis de Encantamento</h3>
              <p className="mb-4">
                A maioria dos encantamentos possui vários níveis, com efeitos mais poderosos nos níveis mais altos. O
                nível máximo padrão é V (5), mas alguns encantamentos especiais podem chegar a X (10).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-amber-800">
                      <th className="text-left py-2 px-4">Raridade</th>
                      <th className="text-left py-2 px-4">Nível Máximo</th>
                      <th className="text-left py-2 px-4">Obtenção</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4">Comum</td>
                      <td className="py-2 px-4">I-V</td>
                      <td className="py-2 px-4">Mesa de Encantamentos, Livros</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4">Raro</td>
                      <td className="py-2 px-4">I-V</td>
                      <td className="py-2 px-4">Livros, Dark Auction, Dungeons</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4">Épico</td>
                      <td className="py-2 px-4">I-VII</td>
                      <td className="py-2 px-4">Eventos, Experimentação, Dungeons</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Lendário</td>
                      <td className="py-2 px-4">I-X</td>
                      <td className="py-2 px-4">Eventos especiais, Experimentação</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Encantamentos Essenciais</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Armas</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Sharpness V:</span> +45% de dano
                  </li>
                  <li>
                    <span className="font-medium">Critical V:</span> +50% de dano crítico
                  </li>
                  <li>
                    <span className="font-medium">First Strike IV:</span> +100% no primeiro golpe
                  </li>
                  <li>
                    <span className="font-medium">Giant Killer VII:</span> Dano extra contra mobs com mais HP
                  </li>
                  <li>
                    <span className="font-medium">Telekinesis I:</span> Coleta drops automaticamente
                  </li>
                  <li>
                    <span className="font-medium">Scavenger III:</span> Coins extras ao matar mobs
                  </li>
                  <li>
                    <span className="font-medium">Looting IV:</span> Aumenta drops de mobs
                  </li>
                  <li>
                    <span className="font-medium">Experience IV:</span> Mais XP ao matar mobs
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Armaduras</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Protection V:</span> Reduz dano recebido
                  </li>
                  <li>
                    <span className="font-medium">Growth V:</span> +75 HP
                  </li>
                  <li>
                    <span className="font-medium">Thorns III:</span> Reflete dano aos atacantes
                  </li>
                  <li>
                    <span className="font-medium">Feather Falling X:</span> Reduz dano de queda
                  </li>
                  <li>
                    <span className="font-medium">Depth Strider III:</span> Movimento mais rápido na água
                  </li>
                  <li>
                    <span className="font-medium">Rejuvenate V:</span> Aumenta regeneração de HP
                  </li>
                  <li>
                    <span className="font-medium">True Protection I:</span> Reduz todo tipo de dano
                  </li>
                  <li>
                    <span className="font-medium">Sugar Rush III:</span> Aumenta velocidade de movimento
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Ferramentas</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Efficiency V:</span> Aumenta velocidade de mineração
                  </li>
                  <li>
                    <span className="font-medium">Fortune III:</span> Mais drops ao minerar
                  </li>
                  <li>
                    <span className="font-medium">Silk Touch I:</span> Coleta blocos intactos
                  </li>
                  <li>
                    <span className="font-medium">Telekinesis I:</span> Coleta drops automaticamente
                  </li>
                  <li>
                    <span className="font-medium">Replenish I:</span> Replanta automaticamente (enxadas)
                  </li>
                  <li>
                    <span className="font-medium">Harvesting V:</span> Mais crops ao colher
                  </li>
                  <li>
                    <span className="font-medium">Smelting Touch I:</span> Minera itens já fundidos
                  </li>
                  <li>
                    <span className="font-medium">Experience IV:</span> Mais XP ao minerar
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Encantamentos Especiais</h3>
              <p className="mb-4">
                Encantamentos especiais são extremamente raros e poderosos, oferecendo efeitos únicos que não estão
                disponíveis nos encantamentos comuns.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-amber-300">Armas</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>
                      <span className="font-medium">One For All:</span> +210% de dano, mas incompatível com outros
                      encantamentos
                    </li>
                    <li>
                      <span className="font-medium">Soul Eater V:</span> Dano aumenta com base em mobs mortos
                      recentemente
                    </li>
                    <li>
                      <span className="font-medium">Chimera V:</span> Compartilha estatísticas do pet com o jogador
                    </li>
                    <li>
                      <span className="font-medium">Ultimate Wise V:</span> Reduz custo de mana das habilidades
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300">Armaduras</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>
                      <span className="font-medium">Legion V:</span> Bônus baseado em jogadores próximos
                    </li>
                    <li>
                      <span className="font-medium">Bank V:</span> Bônus baseado em coins na conta bancária
                    </li>
                    <li>
                      <span className="font-medium">Wisdom V:</span> Aumenta ganho de XP de habilidades
                    </li>
                    <li>
                      <span className="font-medium">Counter Strike V:</span> Chance de contra-atacar quando atingido
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Encantamentos Incompatíveis</h3>
              <p className="mb-4">
                Alguns encantamentos não podem ser combinados entre si. É importante conhecer essas incompatibilidades
                para não desperdiçar livros valiosos.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-amber-800">
                      <th className="text-left py-2 px-4">Encantamento</th>
                      <th className="text-left py-2 px-4">Incompatível Com</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4 font-medium">Sharpness</td>
                      <td className="py-2 px-4">Smite, Bane of Arthropods</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4 font-medium">Silk Touch</td>
                      <td className="py-2 px-4">Fortune</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4 font-medium">Depth Strider</td>
                      <td className="py-2 px-4">Frost Walker</td>
                    </tr>
                    <tr className="border-b border-amber-900/30">
                      <td className="py-2 px-4 font-medium">Protection</td>
                      <td className="py-2 px-4">Blast Protection, Fire Protection, Projectile Protection</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">One For All</td>
                      <td className="py-2 px-4">Todos os outros encantamentos de arma</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Dicas para Encantamentos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Combinando Livros</h4>
                <p className="mb-4">
                  Combinar livros na bigorna aumenta o custo de XP exponencialmente. Use estas estratégias para
                  minimizar o custo:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Combine livros em pares (1+1, 2+2, 4+4) para minimizar o número de operações</li>
                  <li>Adicione os livros mais caros primeiro à arma/armadura</li>
                  <li>Use Anvil Talisman para reduzir o custo de XP</li>
                  <li>Evite trabalhar com itens que já foram muito modificados na bigorna</li>
                  <li>Planeje seus encantamentos com antecedência para evitar retrabalho</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Obtendo Livros Raros</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use Experimentação na Mesa de Encantamentos (nível 3) para livros raros</li>
                  <li>Compre de NPCs especiais como o Librarian no Hub</li>
                  <li>Participe de eventos como Dark Auction e Mayor Events</li>
                  <li>Complete coleções que desbloqueiam receitas de encantamentos</li>
                  <li>Compre no Auction House (mais caro, mas mais conveniente)</li>
                  <li>Faça Dungeons para obter livros exclusivos como Ultimate Enchants</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Pets Section */}
        <Section id="pets" title="Pets" icon="/images/pet-icon.svg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Sistema de Pets</h3>
              <p className="mb-4">
                Pets são companheiros que fornecem bônus de estatísticas e habilidades especiais. Cada pet pode ser
                nivelado até o nível 100, aumentando seus bônus conforme sobe de nível.
              </p>
              <p>
                Pets possuem diferentes raridades: Comum, Incomum, Raro, Épico e Lendário. Quanto maior a raridade, mais
                poderosos são seus bônus e habilidades.
              </p>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Obtendo Pets</h3>
              <p className="mb-4">Existem várias maneiras de obter pets no SkyBlock:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium text-amber-300">Drops de Mobs:</span> Alguns mobs têm chance de dropar
                  pets ao serem derrotados
                </li>
                <li>
                  <span className="font-medium text-amber-300">Pet Shop:</span> Compre pets básicos do NPC no Hub
                </li>
                <li>
                  <span className="font-medium text-amber-300">Crafting:</span> Alguns pets podem ser criados com
                  materiais específicos
                </li>
                <li>
                  <span className="font-medium text-amber-300">Eventos:</span> Eventos especiais podem oferecer pets
                  exclusivos
                </li>
                <li>
                  <span className="font-medium text-amber-300">Fishing:</span> Alguns pets podem ser pescados
                </li>
                <li>
                  <span className="font-medium text-amber-300">Auction House:</span> Compre pets de outros jogadores
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <PetCard
              name="Enderman"
              image="/images/endermanpet.jpg"
              rarity="Épico"
              bestFor="Zealot Farming, End Slayer"
              perks={[
                "Teleport Savvy: Aumenta alcance de teleporte",
                "Zealot Madness: Mais dano contra Zealots",
                "Ender Slayer: Mais dano contra mobs do End",
              ]}
            />
            <PetCard
              name="Blue Whale"
              image="/images/bluewhale.jpg"
              rarity="Lendário"
              bestFor="Tank, Slayers"
              perks={[
                "Indomitable: Aumenta defesa baseado no HP",
                "Bulk: Aumenta HP máximo",
                "Orb: Chance de ganhar absorção ao ser atingido",
              ]}
            />
            <PetCard
              name="Griffin"
              image="/images/griffin.jpg"
              rarity="Lendário"
              bestFor="Diana&apos;s Event, Combat"
              perks={[
                "Odyssey: Aumenta todas as estatísticas",
                "Legendary Constitution: Aumenta regeneração",
                "King of Kings: Bônus contra mobs de alto nível",
              ]}
            />
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Melhores Pets por Atividade</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Combate</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Ender Dragon:</span> Melhor pet para dano geral
                  </li>
                  <li>
                    <span className="font-medium">Wither Skeleton:</span> Excelente para armas de Wither
                  </li>
                  <li>
                    <span className="font-medium">Tiger:</span> Aumenta dano crítico significativamente
                  </li>
                  <li>
                    <span className="font-medium">Black Cat:</span> Aumenta velocidade de ataque e movimento
                  </li>
                </ul>
                <h4 className="font-bold text-amber-300 mb-2 mt-4">Dungeons</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Baby Yeti:</span> Melhor pet para tankar dano
                  </li>
                  <li>
                    <span className="font-medium">Whale:</span> Alternativa para tankar com foco em HP
                  </li>
                  <li>
                    <span className="font-medium">Mage:</span> Aumenta dano mágico para classe Mage
                  </li>
                  <li>
                    <span className="font-medium">Spirit:</span> Útil para iniciantes em Dungeons
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Skills</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Silverfish:</span> Aumenta velocidade de mineração e defesa
                  </li>
                  <li>
                    <span className="font-medium">Monkey:</span> Aumenta velocidade de corte de madeira
                  </li>
                  <li>
                    <span className="font-medium">Elephant:</span> Melhor pet para farming
                  </li>
                  <li>
                    <span className="font-medium">Dolphin:</span> Aumenta sorte na pesca e velocidade
                  </li>
                </ul>
                <h4 className="font-bold text-amber-300 mb-2 mt-4">Economia</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Golden Dragon:</span> Aumenta ganho de coins
                  </li>
                  <li>
                    <span className="font-medium">Parrot:</span> Aumenta duração de poções
                  </li>
                  <li>
                    <span className="font-medium">Rabbit:</span> Aumenta sorte em drops
                  </li>
                  <li>
                    <span className="font-medium">Ocelot:</span> Aumenta velocidade de minions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Nivelamento de Pets</h3>
              <p className="mb-4">
                Pets ganham XP de diferentes maneiras, dependendo do tipo de pet. Alguns ganham XP através de combate,
                outros através de skills específicas.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-amber-300">Métodos de Nivelamento</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Use o pet enquanto realiza a atividade relacionada a ele</li>
                    <li>Alimente o pet com Pet Items para ganho de XP direto</li>
                    <li>Use Pet XP Boost Potions para aumentar o ganho de XP</li>
                    <li>Participe de eventos com bônus de XP para pets</li>
                    <li>Use Pet Candy para ganho rápido de XP (limite de 10 por pet)</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-amber-300">XP Necessária</h4>
                  <p className="text-sm mb-2">
                    A quantidade de XP necessária para nivelar um pet aumenta significativamente em níveis mais altos:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nível 1-10: 25,000 XP total</li>
                    <li>Nível 11-25: 175,000 XP total</li>
                    <li>Nível 26-50: 1,200,000 XP total</li>
                    <li>Nível 51-75: 4,600,000 XP total</li>
                    <li>Nível 76-100: 20,000,000 XP total</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Pet Items e Upgrades</h3>
              <p className="mb-4">
                Pet Items são acessórios que podem ser equipados em pets para melhorar suas habilidades ou adicionar
                novos efeitos.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-amber-300">Items Populares</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>
                      <span className="font-medium">Textbook:</span> Aumenta ganho de Intelligence
                    </li>
                    <li>
                      <span className="font-medium">Combat Exp Boost:</span> Aumenta XP de combate
                    </li>
                    <li>
                      <span className="font-medium">Tier Boost:</span> Aumenta a raridade do pet
                    </li>
                    <li>
                      <span className="font-medium">Reinforced Scales:</span> Aumenta defesa do pet
                    </li>
                    <li>
                      <span className="font-medium">Dwarf Turtle Shelmet:</span> Reduz dano recebido
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-amber-300">Pet Skins</h4>
                  <p className="text-sm mb-2">
                    Pet Skins são cosméticos que também fornecem pequenos bônus de estatísticas:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Enderman (Enderman): +10% de dano contra Endermen</li>
                    <li>Dragon (Ender Dragon): +10% de dano crítico</li>
                    <li>Parrot (Parrot): +10% de duração de poções</li>
                    <li>Tiger (Tiger): +5% de dano crítico</li>
                    <li>Lion (Lion): +5% de dano contra mobs de alto nível</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Ilhas e Regiões Section */}
        <Section id="ilhas" title="Ilhas e Regiões" icon="/images/island-icon.svg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Ilha Privada</h3>
              <p className="mb-4">
                Sua ilha privada é seu santuário pessoal no SkyBlock. Aqui você pode construir, cultivar e personalizar
                seu espaço sem interferências de outros jogadores.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-amber-300">Upgrades de Ilha</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Aumente o tamanho da ilha para ter mais espaço para construções</li>
                    <li>Desbloqueie biomas adicionais para diversificar sua ilha</li>
                    <li>Adicione minions para automação de recursos</li>
                    <li>Construa farms eficientes para crops, mobs e recursos</li>
                    <li>Crie sistemas de armazenamento organizados</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-amber-300">Dicas para Ilha</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mantenha seus minions espalhados para maximizar eficiência</li>
                    <li>Construa plataformas de spawning para mobs específicos</li>
                    <li>Crie uma área de crafting centralizada com todos os crafters</li>
                    <li>Organize suas farms por tipo para facilitar a manutenção</li>
                    <li>Instale sistemas de transporte como ice roads para movimentação rápida</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Hub Principal</h3>
              <p className="mb-4">
                O Hub é a área central do SkyBlock, onde você encontra NPCs importantes, portais para outras regiões e
                outros jogadores.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-amber-300">Locais Importantes</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>
                      <span className="font-medium">Banco:</span> Armazene seus coins com segurança
                    </li>
                    <li>
                      <span className="font-medium">Auction House:</span> Compre e venda itens de/para outros jogadores
                    </li>
                    <li>
                      <span className="font-medium">Bazaar:</span> Comércio de commodities
                    </li>
                    <li>
                      <span className="font-medium">Community Center:</span> Missões comunitárias e eventos
                    </li>
                    <li>
                      <span className="font-medium">Coliseum:</span> Arena PvP
                    </li>
                    <li>
                      <span className="font-medium">Portais:</span> Acesso a todas as outras regiões
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-amber-300">NPCs Essenciais</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Banker:</span> Gerencia sua conta bancária
                    </li>
                    <li>
                      <span className="font-medium">Auction Master:</span> Acesso ao Auction House
                    </li>
                    <li>
                      <span className="font-medium">Bazaar Operator:</span> Acesso ao Bazaar
                    </li>
                    <li>
                      <span className="font-medium">Slayer Master:</span> Inicia missões de Slayer
                    </li>
                    <li>
                      <span className="font-medium">Dungeon Sage:</span> Acesso às Dungeons
                    </li>
                    <li>
                      <span className="font-medium">Merchants:</span> Vários vendedores de itens úteis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <IslandCard
              name="The End"
              image="/images/thend.jpg"
              level="Combat 12+"
              resources={["Ender Pearl", "Dragon Fragment", "Summoning Eye", "End Stone"]}
              mobs={["Enderman", "Zealot", "Watcher", "Ender Dragon"]}
              description="Lar dos Endermen e do Ender Dragon. Excelente para farming de Ender Pearls e Summoning Eyes."
            />
            <IslandCard
              name="Dwarven Mines"
              image="/images/dwarvenmines.jpg"
              level="Mining 12+"
              resources={["Mithril", "Titanium", "Gemstone", "Hard Stone"]}
              mobs={["Goblin", "Ice Walker", "Automaton", "Ghost"]}
              description="Vasto complexo de minas subterrâneas com recursos raros e comissões de mineração."
            />
            <IslandCard
              name="Spider&apos;s Den"
              image="/images/spidersden.jpg"
              level="Combat 5+"
              resources={["String", "Spider Eye", "Web", "Tarantula Silk"]}
              mobs={["Spider", "Tarantula", "Brood Mother", "Dasher Spider"]}
              description="Área infestada de aranhas, ideal para missões de Tarantula Slayer."
            />
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Regiões Especiais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Crystal Hollows</h4>
                <p className="mb-4">
                  Uma vasta caverna subterrânea com cristais mágicos e recursos raros. Requer Mining 12 para acessar.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Recursos:</span> Gemstones, Crystal Fragments, Treasurite
                  </li>
                  <li>
                    <span className="font-medium">Áreas:</span> Magma Fields, Jungle, Crystal Nucleus, Goblin Holdout
                  </li>
                  <li>
                    <span className="font-medium">Atividades:</span> Mining de Gemstones, Puzzles, Crystal Nucleus
                  </li>
                  <li>
                    <span className="font-medium">Dicas:</span> Use Wishing Compass para encontrar estruturas, tenha
                    cuidado com Worms
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Crimson Isle</h4>
                <p className="mb-4">
                  Uma ilha vulcânica habitada por demônios e criaturas de fogo. Requer Combat 24 para acessar.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Recursos:</span> Magma Cream, Sulphur, Crimson Essence
                  </li>
                  <li>
                    <span className="font-medium">Áreas:</span> Magma Chamber, Dojo, Abyss, Odger&apos;s Hut
                  </li>
                  <li>
                    <span className="font-medium">Atividades:</span> Kuudra Boss, Dojo, Fishing de Lava
                  </li>
                  <li>
                    <span className="font-medium">Dicas:</span> Traga poções de Fire Resistance, cuidado com Blazes
                    explosivos
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Jerry&apos;s Workshop</h4>
                <p className="mb-4">
                  Uma área temática de inverno disponível apenas durante eventos sazonais. Não tem requisitos para
                  acesso.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Recursos:</span> White Gifts, Green Gifts, Red Gifts
                  </li>
                  <li>
                    <span className="font-medium">Atividades:</span> Gift Battle, Present Trading, Ice Fishing
                  </li>
                  <li>
                    <span className="font-medium">Recompensas:</span> Snow Minion, Frozen Scythe, Winter Items
                  </li>
                  <li>
                    <span className="font-medium">Dicas:</span> Participe do Gift Battle para ganhar presentes valiosos
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Garden</h4>
                <p className="mb-4">
                  Uma área dedicada ao farming avançado. Requer Farming 10 para acessar completamente.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Recursos:</span> Crops especiais, Fertilizantes, Seeds
                  </li>
                  <li>
                    <span className="font-medium">Áreas:</span> Plots, Barn, Composter, Visitor Center
                  </li>
                  <li>
                    <span className="font-medium">Atividades:</span> Farming avançado, Visitors, Contests
                  </li>
                  <li>
                    <span className="font-medium">Dicas:</span> Use Farming Tools para aumentar a eficiência, complete
                    pedidos de visitantes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Progressão de Regiões</h3>
              <p className="mb-4">
                A ordem recomendada para explorar as regiões do SkyBlock, baseada na dificuldade e requisitos:
              </p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <span className="font-medium text-amber-300">Ilha Privada e Hub</span>
                  <p className="text-sm">
                    Comece aqui para aprender os fundamentos. Construa minions básicos e colete recursos iniciais.
                  </p>
                </li>
                <li>
                  <span className="font-medium text-amber-300">Coal Mine e Gold Mine</span>
                  <p className="text-sm">
                    Primeiras áreas de mineração, boas para coletar recursos básicos e ganhar XP de Mining.
                  </p>
                </li>
                <li>
                  <span className="font-medium text-amber-300">Floresta e Spider&apos;s Den</span>
                  <p className="text-sm">
                    Áreas de combate inicial para ganhar XP de Combat e coletar drops de mobs comuns.
                  </p>
                </li>
                <li>
                  <span className="font-medium text-amber-300">Deep Caverns</span>
                  <p className="text-sm">
                    Área de mineração mais avançada com recursos valiosos como Redstone, Lapis e Diamond.
                  </p>
                </li>
                <li>
                  <span className="font-medium text-amber-300">The End</span>
                  <p className="text-sm">
                    Primeira área de end-game, boa para farming de Ender Pearls e Summoning Eyes.
                  </p>
                </li>
                <li>
                  <span className="font-medium text-amber-300">Dwarven Mines e Crystal Hollows</span>
                  <p className="text-sm">Áreas de mineração avançadas com recursos raros e sistemas de comissão.</p>
                </li>
                <li>
                  <span className="font-medium text-amber-300">Dungeons</span>
                  <p className="text-sm">Conteúdo de end-game com chefes desafiadores e equipamentos poderosos.</p>
                </li>
                <li>
                  <span className="font-medium text-amber-300">Crimson Isle</span>
                  <p className="text-sm">Uma das áreas mais recentes e desafiadoras, com conteúdo de muito end-game.</p>
                </li>
              </ol>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Dicas para Exploração</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-medium text-amber-300">Preparação:</span> Sempre verifique os requisitos de uma
                  área antes de visitá-la. Leve equipamento adequado e poções úteis.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Waypoints:</span> Use o sistema de Waypoints para marcar
                  locais importantes e facilitar a navegação.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Fairysoul:</span> Procure por Fairy Souls em cada região.
                  Elas fornecem bônus permanentes de estatísticas.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Eventos:</span> Fique atento a eventos especiais que
                  ocorrem em regiões específicas, como Mayor Events e Dark Auction.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Mobs Especiais:</span> Algumas regiões têm mobs raros que
                  dropam itens valiosos. Aprenda a identificá-los.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Comissões:</span> Complete comissões em regiões como
                  Dwarven Mines para ganhar recompensas e desbloquear upgrades.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Mods Úteis:</span> Use mods como SkyblockAddons e
                  NotEnoughUpdates para obter informações detalhadas sobre cada região.
                </li>
                <li>
                  <span className="font-medium text-amber-300">Guias da Comunidade:</span> Consulte guias específicos
                  para regiões mais complexas como Crystal Hollows e Crimson Isle.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Glossário Section */}
        <Section id="glossario" title="Glossário SkyBlock" icon="/images/glossary-icon.svg">
          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Termos Comuns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Economia e Itens</h4>
                <ul className="space-y-2">
                  <GlossaryItem
                    term="AH"
                    definition="Auction House, sistema de leilões para comprar e vender itens entre jogadores."
                  />
                  <GlossaryItem
                    term="BIN"
                    definition="Buy It Now, opção de compra imediata no Auction House sem necessidade de dar lance."
                  />
                  <GlossaryItem
                    term="Bazaar"
                    definition="Sistema de comércio para recursos comuns com ordens de compra e venda."
                  />
                  <GlossaryItem
                    term="Flip"
                    definition="Comprar itens por um preço baixo e vender por um preço mais alto para lucrar."
                  />
                  <GlossaryItem
                    term="NW"
                    definition="Net Worth, valor total de todos os seus itens, coins e contas bancárias."
                  />
                  <GlossaryItem
                    term="OFA"
                    definition="One For All, encantamento raro que aumenta significativamente o dano da arma."
                  />
                  <GlossaryItem
                    term="RNG"
                    definition="Random Number Generator, refere-se a drops raros baseados em sorte."
                  />
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Combate e Dungeons</h4>
                <ul className="space-y-2">
                  <GlossaryItem
                    term="Cata"
                    definition="Abreviação para nível de Catacombs, a habilidade de Dungeons."
                  />
                  <GlossaryItem
                    term="LCM"
                    definition="Left Click Mage, estilo de jogo que usa clique esquerdo com armas mágicas."
                  />
                  <GlossaryItem
                    term="RCM"
                    definition="Right Click Mage, estilo de jogo que usa habilidades de clique direito."
                  />
                  <GlossaryItem term="Juju" definition="Juju Shortbow, arco popular usado pela classe Archer." />
                  <GlossaryItem
                    term="Hyp"
                    definition="Hyperion, uma das armas mais poderosas do jogo, usada principalmente por Mages."
                  />
                  <GlossaryItem
                    term="Sweat"
                    definition="Jogador extremamente dedicado que otimiza cada aspecto do jogo."
                  />
                  <GlossaryItem
                    term="Tank"
                    definition="Classe de Dungeon focada em absorver dano e proteger a equipe."
                  />
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Locais e Atividades</h4>
                <ul className="space-y-2">
                  <GlossaryItem term="CH" definition="Crystal Hollows, área de mineração avançada com gemstones." />
                  <GlossaryItem term="F7" definition="Floor 7, o andar mais difícil das Catacombs normais." />
                  <GlossaryItem term="M7" definition="Master Mode Floor 7, versão ainda mais difícil do F7." />
                  <GlossaryItem term="Kuudra" definition="Chefe na Crimson Isle com várias dificuldades." />
                  <GlossaryItem term="Diana" definition="Mayor que traz o evento de caça com Griffin." />
                  <GlossaryItem term="Derpy" definition="Mayor que dobra HP e defesa de mobs, bom para XP." />
                  <GlossaryItem term="Jerry" definition="Mayor especial que aparece raramente e traz eventos únicos." />
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Mecânicas e Estatísticas</h4>
                <ul className="space-y-2">
                  <GlossaryItem term="CD" definition="Crit Damage, aumenta o dano de golpes críticos." />
                  <GlossaryItem term="CC" definition="Crit Chance, chance de dar um golpe crítico." />
                  <GlossaryItem term="AS" definition="Attack Speed, velocidade de ataque com armas." />
                  <GlossaryItem term="EHP" definition="Effective Health Points, HP efetivo considerando defesa." />
                  <GlossaryItem term="Intel" definition="Intelligence, estatística que aumenta mana e dano mágico." />
                  <GlossaryItem term="Str" definition="Strength, estatística que aumenta dano físico." />
                  <GlossaryItem term="Fero" definition="Ferocity, chance de dar golpes múltiplos." />
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Siglas de Itens</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-amber-300">Armas</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>
                      <span className="font-medium">AOTD:</span> Aspect of the Dragon
                    </li>
                    <li>
                      <span className="font-medium">AOTE:</span> Aspect of the End
                    </li>
                    <li>
                      <span className="font-medium">AOTV:</span> Aspect of the Void
                    </li>
                    <li>
                      <span className="font-medium">GS:</span> Giant&apos;s Sword
                    </li>
                    <li>
                      <span className="font-medium">LD:</span> Livid Dagger
                    </li>
                    <li>
                      <span className="font-medium">SF:</span> Shadow Fury
                    </li>
                    <li>
                      <span className="font-medium">Term:</span> Terminator
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-amber-300">Armaduras</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">SA:</span> Shadow Assassin
                    </li>
                    <li>
                      <span className="font-medium">Storm:</span> Storm&apos;s Armor
                    </li>
                    <li>
                      <span className="font-medium">Necron:</span> Necron&apos;s Armor
                    </li>
                    <li>
                      <span className="font-medium">Goldor:</span> Goldor&apos;s Armor
                    </li>
                    <li>
                      <span className="font-medium">FD:</span> Final Destination
                    </li>
                    <li>
                      <span className="font-medium">FB:</span> Frozen Blaze
                    </li>
                    <li>
                      <span className="font-medium">Sup:</span> Superior Dragon
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-200 mb-4">Gírias e Expressões</h3>
              <div className="space-y-3">
                <div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Grind:</span> Dedicar muito tempo a uma atividade para obter
                      recompensas
                    </li>
                    <li>
                      <span className="font-medium">Sweat:</span> Jogador que se esforça ao máximo para otimizar tudo
                    </li>
                    <li>
                      <span className="font-medium">Non/Noob:</span> Jogador iniciante ou com pouca experiência
                    </li>
                    <li>
                      <span className="font-medium">Endgame:</span> Fase final do jogo, com os melhores equipamentos
                    </li>
                    <li>
                      <span className="font-medium">Meta:</span> Estratégias ou itens considerados os mais eficientes
                    </li>
                    <li>
                      <span className="font-medium">Scam:</span> Tentativa de enganar outros jogadores para obter itens
                      ou coins
                    </li>
                    <li>
                      <span className="font-medium">Macro:</span> Uso de programas para automatizar ações (proibido)
                    </li>
                    <li>
                      <span className="font-medium">IRL Trading:</span> Troca de itens do jogo por dinheiro real
                      (proibido)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Recursos Externos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Sites Úteis</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">SkyCrypt:</span> Visualizador de perfil detalhado com estatísticas e
                    itens
                  </li>
                  <li>
                    <span className="font-medium">SkyBlock Wiki:</span> Enciclopédia com informações sobre todos os
                    aspectos do jogo
                  </li>
                  <li>
                    <span className="font-medium">SkyBlock Maniacs:</span> Calculadoras e ferramentas para otimização
                  </li>
                  <li>
                    <span className="font-medium">SkyBlock Personalization:</span> Texturas e mods para personalização
                  </li>
                  <li>
                    <span className="font-medium">SkyBlock Stonks:</span> Ferramenta para encontrar oportunidades de
                    flipping
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-2">Mods Recomendados</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">NotEnoughUpdates (NEU):</span> Informações detalhadas sobre itens e
                    preços
                  </li>
                  <li>
                    <span className="font-medium">SkyblockAddons (SBA):</span> Melhorias de qualidade de vida e
                    informações úteis
                  </li>
                  <li>
                    <span className="font-medium">Skytils:</span> Ferramentas avançadas para Dungeons e outras
                    atividades
                  </li>
                  <li>
                    <span className="font-medium">Dungeon Rooms Mod:</span> Ajuda a navegar em salas de Dungeon
                  </li>
                  <li>
                    <span className="font-medium">Patcher:</span> Otimizações de performance para o jogo
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-amber-300 mb-2">Comunidades</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Fórum Oficial:</span> Anúncios oficiais e discussões da comunidade
                </li>
                <li>
                  <span className="font-medium">Reddit (r/HypixelSkyblock):</span> Discussões, memes e compartilhamento
                  de conquistas
                </li>
                <li>
                  <span className="font-medium">Discord do Hypixel:</span> Comunidade oficial com canais específicos
                  para SkyBlock
                </li>
                <li>
                  <span className="font-medium">Servidores de Discord de Guildas:</span> Comunidades menores focadas em
                  atividades específicas
                </li>
                <li>
                  <span className="font-medium">Canais do YouTube:</span> Tutoriais, guias e conteúdo de entretenimento
                  sobre SkyBlock
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a0d08] border-t border-amber-900/30 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4">
              <Image src="/images/skyblock.png" alt="Hypixel SkyBlock Logo" width={80} height={80} />
            </div>
            <p className="text-amber-200 font-medium mb-2">Guia criado por Boletinha — Hypixel SkyBlock 2025</p>
            <p className="text-amber-400/70 text-sm">Todas as informações são atualizadas regularmente</p>
          </div>
          <div className="mt-6 pt-6 border-t border-amber-900/30 flex flex-wrap justify-center gap-4">
            <a href="#home" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Início
            </a>
            <a href="#builds" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Builds
            </a>
            <a href="#skills" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Skills
            </a>
            <a href="#slayers" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Slayers
            </a>
            <a href="#dungeons" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Dungeons
            </a>
            <a href="#minions" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Minions
            </a>
            <a href="#economia" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Economia
            </a>
            <a href="#encantamentos" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Encantamentos
            </a>
            <a href="#pets" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Pets
            </a>
            <a href="#ilhas" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Ilhas
            </a>
            <a href="#glossario" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Glossário
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Navigation Link Components
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-amber-300 hover:text-amber-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {children}
    </a>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-amber-300 hover:text-amber-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
    >
      {children}
    </a>
  )
}

// Section Component
function Section({
  id,
  title,
  icon,
  children,
}: { id: string; title: string; icon?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <div className="flex items-center mb-8 pb-4 border-b border-amber-900/30">
        <div className="w-10 h-10 mr-4">
          <Image src={icon || "/placeholder.svg"} alt={`${title} Icon`} width={40} height={40} />
        </div>
        <h2 className="text-3xl font-bold text-amber-200 grimoire-title">{title}</h2>
      </div>
      <div className="pl-2">{children}</div>
    </section>
  )
}

// Build Card Component
interface BuildCardStats {
  damage: number
  defense: number
  utility: number
}

function BuildCard({
  title,
  image,
  description,
  stats,
}: { title: string; image: string; description: string; stats: BuildCardStats }) {
  return (
    <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
      <div className="h-48 relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d08] to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-amber-200">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-amber-100 mb-4">{description}</p>
        <div className="space-y-2">
          <StatBar label="Dano" value={stats.damage} />
          <StatBar label="Defesa" value={stats.defense} />
          <StatBar label="Utilidade" value={stats.utility} />
        </div>
      </div>
    </div>
  )
}

// Stat Bar Component
function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-amber-300">{label}</span>
        <span className="text-amber-200">{value}/10</span>
      </div>
      <div className="h-2 bg-amber-900/30 rounded-full overflow-hidden">
        <div className="h-full bg-amber-600 rounded-full" style={{ width: `${value * 10}%` }}></div>
      </div>
    </div>
  )
}

// Skill Item Component
function SkillItem({ name, maxLevel, description }: { name: string; maxLevel: number; description: string }) {
  return (
    <li className="flex flex-col">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-amber-300">{name}</span>
        <span className="text-xs text-amber-400/70">Max: {maxLevel}</span>
      </div>
      <p className="text-sm text-amber-100">{description}</p>
    </li>
  )
}

// Slayer Card Component
function SlayerCard({
  name,
  image,
  difficulty,
  location,
  drops,
}: { name: string; image: string; difficulty: string; location: string; drops: string[] }) {
  return (
    <div className="bg-[#2a1a12] border border-amber-900/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
      <div className="h-40 relative">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d08] to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-bold text-amber-200">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-amber-300">Dificuldade:</span>
          <span className="text-amber-100">{difficulty}</span>
        </div>
        <div className="flex justify-between text-sm mb-3">
          <span className="text-amber-300">Localização:</span>
          <span className="text-amber-100">{location}</span>
        </div>
        <div className="text-sm">
          <span className="text-amber-300 block mb-1">Drops Principais:</span>
          <ul className="text-amber-100 text-xs space-y-1">
            {drops.slice(0, 4).map((drop, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                {drop}
              </li>
            ))}
            {drops.length > 4 && <li className="text-amber-400/70 italic">+{drops.length - 4} outros itens</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}
