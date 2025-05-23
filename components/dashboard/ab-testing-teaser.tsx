"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SplitSquareVertical } from "lucide-react"
import Link from "next/link"

export function ABTestingTeaser() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-[200px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`absolute w-full h-full transition-all duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card className="absolute w-full h-full backface-hidden">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
            <SplitSquareVertical className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Tests A/B</h3>
            <p className="text-muted-foreground">Découvrez quelle publicité performe le mieux pour votre restaurant</p>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-xl font-bold mb-2">Comment ça marche ?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Créez deux versions de votre publicité et découvrez laquelle génère le plus d'engagement. Optimisez vos
              campagnes en fonction des résultats.
            </p>
            <Link href="/dashboard/ab-testing">
              <Button className="w-full">Commencer un test A/B</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
