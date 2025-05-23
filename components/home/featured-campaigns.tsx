"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, TwitterIcon as TikTok } from "lucide-react"

const campaigns = {
  maqloub: {
    facebook: {
      title: "Maqloub Express",
      description: "Le meilleur maqloub en ville avec des ingrédients frais! 🍚",
      image: "/placeholder.svg?height=400&width=600&text=Maqloub",
      stats: {
        reach: "15.2K",
        engagement: "8.7%",
        conversions: "342",
      },
    },
    instagram: {
      title: "Maqloub Express",
      description: "Saveurs authentiques, recette traditionnelle! Notre maqloub fait maison est de retour #FoodLover",
      image: "/placeholder.svg?height=600&width=600&text=Maqloub",
      stats: {
        reach: "22.4K",
        engagement: "12.3%",
        conversions: "487",
      },
    },
    tiktok: {
      title: "Maqloub Challenge",
      description: "Qui peut finir notre Maqloub Spécial en moins de 5 minutes? 🍚 #MaqloubChallenge #FoodTok",
      image: "/placeholder.svg?height=800&width=450&text=Maqloub",
      stats: {
        reach: "45.8K",
        engagement: "18.2%",
        conversions: "623",
      },
    },
  },
  pizza: {
    facebook: {
      title: "Pizza Tunisienne",
      description: "Notre pizza tunisienne, un mélange parfait d'épices et de saveurs! 🍕",
      image: "/placeholder.svg?height=400&width=600&text=Pizza",
      stats: {
        reach: "12.7K",
        engagement: "7.2%",
        conversions: "298",
      },
    },
    instagram: {
      title: "Pizza Tunisienne",
      description: "Quand les épices tunisiennes rencontrent la pizza italienne... 😍 #PizzaLover #TunisianFood",
      image: "/placeholder.svg?height=600&width=600&text=Pizza",
      stats: {
        reach: "18.9K",
        engagement: "10.5%",
        conversions: "412",
      },
    },
    tiktok: {
      title: "Pizza Stretch Challenge",
      description: "Regardez cet étirement de fromage! 🧀 Qui veut essayer? #CheeseStretch #PizzaTok",
      image: "/placeholder.svg?height=800&width=450&text=Pizza",
      stats: {
        reach: "38.2K",
        engagement: "15.7%",
        conversions: "547",
      },
    },
  },
  tacos: {
    facebook: {
      title: "Tacos Tunisien",
      description: "Nos tacos à la tunisienne, une explosion de saveurs en bouche! 🌮",
      image: "/placeholder.svg?height=400&width=600&text=Tacos",
      stats: {
        reach: "10.5K",
        engagement: "6.8%",
        conversions: "276",
      },
    },
    instagram: {
      title: "Tacos Tunisien",
      description: "La fusion parfaite entre le Mexique et la Tunisie dans un seul tacos! #TacosTunisien #Foodie",
      image: "/placeholder.svg?height=600&width=600&text=Tacos",
      stats: {
        reach: "16.3K",
        engagement: "9.7%",
        conversions: "385",
      },
    },
    tiktok: {
      title: "Tacos ASMR",
      description: "Le son satisfaisant quand on croque dans notre tacos tunisien 🎧 #TacosASMR #FoodTok",
      image: "/placeholder.svg?height=800&width=450&text=Tacos",
      stats: {
        reach: "32.7K",
        engagement: "14.2%",
        conversions: "492",
      },
    },
  },
}

export function FeaturedCampaigns() {
  const [foodType, setFoodType] = useState<"maqloub" | "pizza" | "tacos">("maqloub")
  const [platform, setPlatform] = useState<"facebook" | "instagram" | "tiktok">("facebook")

  const currentCampaign = campaigns[foodType][platform]

  const getPlatformIcon = () => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-5 w-5 text-[#1877F2]" />
      case "instagram":
        return <Instagram className="h-5 w-5 text-[#E4405F]" />
      case "tiktok":
        return <TikTok className="h-5 w-5" />
    }
  }

  const getPlatformName = () => {
    switch (platform) {
      case "facebook":
        return "Facebook"
      case "instagram":
        return "Instagram"
      case "tiktok":
        return "TikTok"
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="maqloub" onValueChange={(value) => setFoodType(value as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="maqloub">Maqloub</TabsTrigger>
          <TabsTrigger value="pizza">Pizza</TabsTrigger>
          <TabsTrigger value="tacos">Tacos</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          className={`cursor-pointer transition-all ${
            platform === "facebook" ? "border-[#1877F2] shadow-md" : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setPlatform("facebook")}
        >
          <CardContent className="p-4 flex items-center gap-3">
            <Facebook className="h-6 w-6 text-[#1877F2]" />
            <div>
              <p className="font-medium">Facebook</p>
              <p className="text-xs text-muted-foreground">Idéal pour la notoriété et les promotions</p>
            </div>
          </CardContent>
        </Card>
        <Card
          className={`cursor-pointer transition-all ${
            platform === "instagram" ? "border-[#E4405F] shadow-md" : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setPlatform("instagram")}
        >
          <CardContent className="p-4 flex items-center gap-3">
            <Instagram className="h-6 w-6 text-[#E4405F]" />
            <div>
              <p className="font-medium">Instagram</p>
              <p className="text-xs text-muted-foreground">Parfait pour les visuels attrayants</p>
            </div>
          </CardContent>
        </Card>
        <Card
          className={`cursor-pointer transition-all ${
            platform === "tiktok" ? "border-black shadow-md" : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setPlatform("tiktok")}
        >
          <CardContent className="p-4 flex items-center gap-3">
            <TikTok className="h-6 w-6" />
            <div>
              <p className="font-medium">TikTok</p>
              <p className="text-xs text-muted-foreground">Idéal pour toucher les jeunes</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="aspect-square md:aspect-auto md:h-[400px] rounded-lg overflow-hidden mb-4 bg-muted">
            <img
              src={currentCampaign.image || "/placeholder.svg"}
              alt={currentCampaign.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {getPlatformIcon()}
              <h3 className="text-xl font-medium">{getPlatformName()}</h3>
            </div>
            <h2 className="text-2xl font-bangers mb-2">{currentCampaign.title}</h2>
            <p className="text-muted-foreground">{currentCampaign.description}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Portée</p>
              <p className="text-xl font-bangers text-primary">{currentCampaign.stats.reach}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Engagement</p>
              <p className="text-xl font-bangers text-secondary">{currentCampaign.stats.engagement}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Conversions</p>
              <p className="text-xl font-bangers text-accent">{currentCampaign.stats.conversions}</p>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Comment FoodAds AI a optimisé cette campagne:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  Analyse des tendances actuelles pour créer un contenu adapté à la plateforme {getPlatformName()}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Ciblage précis des amateurs de {foodType} dans un rayon de 10km</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Optimisation du budget publicitaire en fonction des heures de forte affluence</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Tests A/B automatiques pour identifier les visuels et textes les plus performants</span>
              </li>
            </ul>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90">Créer une campagne similaire</Button>
        </div>
      </div>
    </div>
  )
}
