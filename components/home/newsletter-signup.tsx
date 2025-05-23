"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <Card className="bg-muted border-none">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl">Restez informé</CardTitle>
        <CardDescription>
          Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et conseils marketing
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Merci pour votre inscription!</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Vous recevrez bientôt nos dernières actualités et conseils marketing directement dans votre boîte mail.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
              S'inscrire
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
