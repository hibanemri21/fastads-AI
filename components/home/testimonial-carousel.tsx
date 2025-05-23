"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Ben Ali",
    role: "Propriétaire, Maqloub Express",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Grâce à FoodAds AI, j'ai augmenté ma clientèle de 35% en seulement 2 mois. Les publicités générées sont parfaitement adaptées à mon restaurant et attirent exactement le type de clients que je recherche.",
    rating: 5,
  },
  {
    name: "Sonia Mansour",
    role: "Gérante, Pizza Tunisienne",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "L'IA comprend parfaitement l'univers de la restauration tunisienne. Les visuels et les textes sont toujours pertinents et donnent vraiment envie de venir manger chez nous. Un investissement qui rapporte gros!",
    rating: 5,
  },
  {
    name: "Karim Trabelsi",
    role: "Chef, Tacos Deluxe",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Je n'avais aucune compétence en marketing digital avant d'utiliser FoodAds AI. Maintenant, je gère mes campagnes publicitaires en quelques clics et les résultats sont impressionnants.",
    rating: 4,
  },
  {
    name: "Leila Bouazizi",
    role: "Directrice, Sandwich Palace",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "L'analyse en temps réel me permet d'ajuster mes offres rapidement. J'ai pu identifier les plats qui attirent le plus de clients et adapter ma carte en conséquence. Un outil indispensable!",
    rating: 5,
  },
  {
    name: "Mehdi Khelifi",
    role: "Propriétaire, Le Bistrot Tunisien",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Le retour sur investissement est incroyable. Pour chaque dinar dépensé en publicité via FoodAds AI, j'en gagne au moins cinq. Je recommande à tous les restaurateurs tunisiens!",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const nextTestimonial = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getVisibleTestimonials = () => {
    // For mobile, show only the current testimonial
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [testimonials[currentIndex]]
    }

    // For desktop, show 3 testimonials
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <div className="relative">
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300 ${
          isAnimating ? (direction === "left" ? "translate-x-4 opacity-0" : "-translate-x-4 opacity-0") : ""
        }`}
      >
        {getVisibleTestimonials().map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "text-secondary fill-secondary" : "text-muted"}`}
                />
              ))}
            </div>
            <p className="italic">{testimonial.content}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-1 items-center">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
              }`}
            ></div>
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
