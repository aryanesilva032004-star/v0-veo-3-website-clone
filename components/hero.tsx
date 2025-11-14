import { Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-blue-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Restricted Access Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 rounded-full bg-blue-500/5 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">Acesso Restrito</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="text-white">CLONE O UNIVERSO </span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-balance">
            <span className="text-blue-400">A FERRAMENTA QUE O MERCADO </span>
            <br />
            <span className="text-blue-400">NÃO QUER QUE VOCÊ USE</span>
          </h2>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-balance">
          Descubra os prompts que viram tráfego, vendas e controle de algoritmo.{" "}
          <span className="text-blue-400 font-semibold">Desbloqueie o que eles escondem</span> e ganhe vantagem
          competitiva imediata.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-lg font-bold uppercase tracking-wider"
          >
            Ver Oferta Exclusiva
            <Zap className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
