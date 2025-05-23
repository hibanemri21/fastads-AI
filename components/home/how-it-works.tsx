"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Utensils, PenTool, BarChart3, Zap } from "lucide-react"

const steps = [
  {
    icon: Utensils,
    title: "1. Configurez votre restaurant",
    description:
      "Renseignez les informations de votre restaurant tunisien, votre menu et vos spécialités pour permettre à l'IA de comprendre votre établissement.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: PenTool,
    title: "2. Créez votre campagne",
    description:
      "Définissez vos objectifs, votre budget et votre cible. Notre IA génère automatiquement des visuels et des textes adaptés à votre restaurant tunisien.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: BarChart3,
    title: "3. Analysez les performances",
    description:
      "Suivez en temps réel les performances de vos campagnes et obtenez des insights pour les optimiser davantage.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "4. Optimisez automatiquement",
    description:
      "Notre IA ajuste continuellement vos campagnes pour maximiser votre retour sur investissement et attirer plus de clients.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <Card
            key={index}
            className={`p-6 cursor-pointer transition-all duration-300 ${
              activeIndex === index
                ? "border-2 border-primary shadow-lg scale-105"
                : "hover:border-primary/50 opacity-70"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                <step.icon className={`h-6 w-6 ${step.color}`} />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={`/placeholder.svg?height=300&width=400&text=Étape ${index + 1}`}
                alt={`Étape ${index + 1}`}
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
