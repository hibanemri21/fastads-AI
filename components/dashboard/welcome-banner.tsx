"use client"

import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

export function WelcomeBanner() {
  const { data: session } = useSession()
  const [greeting, setGreeting] = useState("")
  const [emoji, setEmoji] = useState("👋")
  const [motivationalText, setMotivationalText] = useState("")

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting("Bonjour")
      setEmoji("☀️")
    } else if (hour < 18) {
      setGreeting("Bon après-midi")
      setEmoji("🌤️")
    } else {
      setGreeting("Bonsoir")
      setEmoji("🌙")
    }

    // Random motivational text
    const motivationalTexts = [
      "Prêt à lancer votre prochaine campagne irrésistible ?",
      "Vos clients ont faim de vos nouvelles promotions !",
      "Aujourd'hui est parfait pour booster vos ventes !",
      "Votre prochain succès marketing vous attend !",
      "Transformez vos idées en campagnes qui convertissent !",
    ]

    setMotivationalText(motivationalTexts[Math.floor(Math.random() * motivationalTexts.length)])
  }, [])

  // Animation class for the emoji
  const emojiAnimationClass = "animate-bounce inline-block"

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            {greeting}, <span className="text-primary">{session?.user?.restaurantName || session?.user?.name}</span>{" "}
            <span className={emojiAnimationClass}>{emoji}</span>
          </h1>
          <p className="text-muted-foreground mt-1">{motivationalText}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  )
}
