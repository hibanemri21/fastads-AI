"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment fonctionne FoodAds AI ?",
    answer:
      "FoodAds AI utilise l'intelligence artificielle pour générer et optimiser des campagnes publicitaires spécifiquement pour les restaurants tunisiens. Notre système analyse les tendances du marché, le comportement des consommateurs et les spécificités de votre restaurant pour créer des publicités qui convertissent.",
  },
  {
    question: "Ai-je besoin de compétences en marketing pour utiliser FoodAds AI ?",
    answer:
      "Absolument pas ! FoodAds AI a été conçu pour être utilisé par des restaurateurs sans aucune compétence en marketing. Notre interface intuitive vous guide à chaque étape, et notre IA s'occupe de tout le travail technique.",
  },
  {
    question: "Sur quelles plateformes puis-je publier mes campagnes ?",
    answer:
      "FoodAds AI vous permet de publier vos campagnes sur Facebook, Instagram, TikTok et Google Ads. Vous pouvez gérer toutes ces plateformes depuis une seule interface, ce qui vous fait gagner un temps précieux.",
  },
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "La plupart de nos clients commencent à voir des résultats dans les 7 à 14 jours suivant le lancement de leurs premières campagnes. Cependant, l'efficacité augmente avec le temps car notre IA apprend et s'améliore continuellement.",
  },
  {
    question: "Puis-je utiliser mes propres images et textes ?",
    answer:
      "Oui, vous pouvez télécharger vos propres images et rédiger vos propres textes si vous le souhaitez. Vous pouvez également combiner vos contenus avec ceux générés par notre IA pour obtenir les meilleurs résultats.",
  },
  {
    question: "Comment fonctionne la facturation ?",
    answer:
      "Nous proposons des abonnements mensuels ou annuels selon vos besoins. Vous pouvez commencer par un essai gratuit de 14 jours sans engagement. Après cette période, vous serez facturé selon le plan que vous aurez choisi.",
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer:
      "Oui, vous pouvez annuler votre abonnement à tout moment. Si vous annulez pendant votre période d'essai gratuit, vous ne serez pas facturé.",
  },
  {
    question: "Proposez-vous un support client ?",
    answer:
      "Oui, nous offrons un support client par email pour tous nos plans. Les plans Pro et Enterprise bénéficient d'un support prioritaire, et le plan Enterprise inclut un support dédié 24/7.",
  },
]

export function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
