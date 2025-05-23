"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

export function PricingPlans() {
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Idéal pour les petits restaurants",
      price: annual ? 29 : 39,
      features: [
        "1 restaurant",
        "5 campagnes par mois",
        "Génération de contenu IA",
        "Analyse de base",
        "Support par email",
      ],
      cta: "Commencer gratuitement",
      popular: false,
    },
    {
      name: "Pro",
      description: "Pour les restaurants en pleine croissance",
      price: annual ? 79 : 99,
      features: [
        "1 restaurant",
        "20 campagnes par mois",
        "Génération de contenu IA avancée",
        "Tests A/B automatiques",
        "Analyse détaillée",
        "Optimisation automatique",
        "Support prioritaire",
      ],
      cta: "Commencer l'essai gratuit",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Pour les chaînes de restaurants",
      price: annual ? 199 : 249,
      features: [
        "Jusqu'à 5 restaurants",
        "Campagnes illimitées",
        "Génération de contenu IA premium",
        "Tests A/B avancés",
        "Analyse complète avec prédictions",
        "Optimisation automatique avancée",
        "Support dédié 24/7",
        "API personnalisée",
      ],
      cta: "Contacter les ventes",
      popular: false,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center gap-2">
        <span className={`text-sm ${!annual ? "font-medium" : "text-muted-foreground"}`}>Mensuel</span>
        <Switch checked={annual} onCheckedChange={setAnnual} />
        <span className={`text-sm ${annual ? "font-medium" : "text-muted-foreground"}`}>
          Annuel <span className="text-primary font-medium">(-25%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative ${plan.popular ? "border-primary shadow-lg md:scale-105 md:-translate-y-1" : ""}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                  Populaire
                </div>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}€</span>
                <span className="text-muted-foreground ml-2">/ mois</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"}`}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground mt-4">
        Tous les plans incluent un essai gratuit de 14 jours. Aucune carte de crédit requise.
      </div>
    </div>
  )
}
