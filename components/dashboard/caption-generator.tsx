"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Copy, RefreshCw } from "lucide-react"

export function CaptionGenerator() {
  const [selectedCaption, setSelectedCaption] = useState<number | null>(null)
  const [selectedCTA, setSelectedCTA] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  const captions = [
    "Yekhdem feek? Clique ici w chouf l'offre! 🔥",
    "Maqloub frais, ingrédients de qualité, goût authentique 😋",
    "La recette secrète qui fait revenir nos clients! 🤫",
    "Nouveau menu étudiant à prix imbattable 🎓",
    "Le meilleur maqloub de Tunis, certifié par nos clients 🏆",
  ]

  const ctas = [
    "Commander maintenant",
    "Découvrir le menu",
    "Réserver une table",
    "Profiter de l'offre",
    "Voir les avis clients",
  ]

  const handleCopy = () => {
    if (selectedCaption !== null && selectedCTA !== null) {
      const textToCopy = `${captions[selectedCaption]} - ${ctas[selectedCTA]}`
      navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Slogans (sélectionne-en un)</h4>
        <div className="grid grid-cols-1 gap-2">
          {captions.map((caption, index) => (
            <Card
              key={index}
              className={`p-3 cursor-pointer transition-colors ${
                selectedCaption === index ? "border-primary bg-primary/5" : "hover:border-primary/50"
              }`}
              onClick={() => setSelectedCaption(index)}
            >
              <div className="flex items-center justify-between">
                <p>{caption}</p>
                {selectedCaption === index && <Check className="h-4 w-4 text-primary" />}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Appels à l'action (sélectionne-en un)</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {ctas.map((cta, index) => (
            <Card
              key={index}
              className={`p-3 cursor-pointer transition-colors ${
                selectedCTA === index ? "border-primary bg-primary/5" : "hover:border-primary/50"
              }`}
              onClick={() => setSelectedCTA(index)}
            >
              <div className="flex items-center justify-between">
                <p>{cta}</p>
                {selectedCTA === index && <Check className="h-4 w-4 text-primary" />}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Générer plus
        </Button>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90"
          onClick={handleCopy}
          disabled={selectedCaption === null || selectedCTA === null}
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copié!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copier la sélection
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
