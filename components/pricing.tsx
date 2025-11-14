"use client"

import { useState, useEffect } from "react"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Pricing() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0,
  })

  const [unitsLeft, setUnitsLeft] = useState(17)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="pricing" className="relative py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">ESCOLHA SEU </span>
            <span className="text-blue-400">NÍVEL DE ACESSO</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-2">ACESSO INICIAL</h3>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white">R$ 0,99</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-2 text-gray-300">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span>Pack de Prompts VEO4 - Acesso básico</span>
              </div>
            </div>

            <Button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase py-6">
              Começar Agora
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Versão básica com possibilidade de upgrade imediato
            </p>
          </div>

          {/* Premium Plan */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 via-purple-950/40 to-black border-2 border-blue-500/50">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="px-6 py-1 bg-cyan-400 text-black text-sm font-bold rounded-full uppercase">
                Última Chance
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 mt-4">ACESSO PREMIUM</h3>

            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl text-gray-500 line-through">R$ 47,90</span>
                <span className="text-5xl font-black text-white">R$ 9,90</span>
              </div>
            </div>

            {/* Savings Badge */}
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <p className="text-green-400 font-bold text-center">VOCÊ ESTÁ ECONOMIZANDO R$ 1.037,10 AGORA</p>
              <p className="text-sm text-gray-300 text-center mt-2">
                O acesso anual ao VEO4 Free custa R$ 1.047,00 – aqui, ele está incluso por apenas R$ 9,90
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {[
                "Pack de Prompts VEO4 - Acesso completo",
                "+ VEO4 Free Anual (valor de R$ 1.047,00 – incluso sem custo extra)",
                "Mini-pack secreto de prompts",
                "Classificados – Acima do nível público",
                "Atualizações por 12 meses",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2 text-gray-300">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 font-bold uppercase py-6">
              Obter Acesso Agora
            </Button>

            {/* Units and Countdown */}
            <div className="mt-6 space-y-3">
              <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/30">
                <p className="text-red-400 font-bold text-sm text-center uppercase">Últimas Unidades</p>
                <p className="text-white text-center mt-1">
                  Unidades restantes: <span className="font-bold">{unitsLeft}/100</span>
                </p>
              </div>

              <div className="p-3 rounded-lg bg-orange-950/30 border border-orange-500/30">
                <p className="text-orange-400 text-center font-mono text-2xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
                </p>
                <p className="text-gray-400 text-xs text-center mt-1">
                  Após esse prazo, esta janela desaparece do ar para sempre.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 max-w-4xl mx-auto">
          <blockquote className="text-center text-gray-400 text-lg italic border-l-4 border-blue-500 pl-6 py-2">
            {"“Não existe escala sem velocidade.”\nA era dos criadores lentos acabou.\n\nQuem domina clonagem, edição e publicação rápida simplesmente passa por cima dos concorrentes.\n\nE 97% das pessoas ainda não têm essa habilidade."}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
