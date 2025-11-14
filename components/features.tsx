import { Brain, Zap, TrendingUp, Lock } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "Engenharia de Prompts Avançada",
    description:
      "Técnicas de criação de prompts que superam as limitações conhecidas do VEO3 e extraem respostas mais precisas.",
    tagline: "Não é só IA. É IA sob seu comando.",
  },
  {
    icon: Zap,
    title: "Controle de Algoritmo",
    description:
      "Comandos que ajustam como a IA processa suas instruções, gerando respostas mais alinhadas aos seus objetivos.",
    tagline: "O que antes era exclusivo, agora está sob seu toque.",
  },
  {
    icon: TrendingUp,
    title: "Prompts de Conversão",
    description:
      "Estruturas testadas que transformam tráfego em vendas através de conteúdo de alto impacto gerado pela IA.",
    tagline: "Transforme visitantes em clientes com precisão neural.",
  },
  {
    icon: Lock,
    title: "Comandos Exclusivos",
    description: "Prompts de nível avançado não documentados que desbloqueiam funcionalidades raramente acessadas.",
    tagline: "Acesse recursos ocultos que poucos conhecem.",
  },
]

export function Features() {
  return (
    <section id="ofertas" className="relative py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">DESBLOQUEIE O QUE ELES         </span>
            <span className="text-blue-400">ESCONDEM</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto">
            {"O Clone o Universo — Edição Master não é só um curso.\nÉ a base operacional que criadores, afiliados e gestores de tráfego usam escondido para lançar páginas em velocidade absurda. sem designer, sem programador, sem hospedagem."}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-950/20 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>

              {/* Tagline */}
              <p className="text-blue-400/70 text-sm italic">{feature.tagline}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
