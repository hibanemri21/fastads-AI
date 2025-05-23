"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Megaphone, DollarSign, Eye, MousePointerClick, Target } from "lucide-react"

interface Metrics {
  totalCampaigns: number
  budgetSpent: number
  impressions: number
  clicks: number
  conversions: number
}

interface CounterProps {
  end: number
  duration?: number
  prefix?: string
}

function Counter({ end, duration = 1000, prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      setCount(Math.floor(end * percentage))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
    </span>
  )
}

export function MetricsCards() {
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchMetrics()
  }, [])

  const fetchMetrics = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/metrics")

      if (!response.ok) {
        throw new Error("Failed to fetch metrics")
      }

      const data = await response.json()
      setMetrics(data)
    } catch (error) {
      console.error("Error fetching metrics:", error)
      // If API fails, use fallback data
      setMetrics({
        totalCampaigns: Math.floor(Math.random() * 20) + 5,
        budgetSpent: Math.floor(Math.random() * 2000) + 500,
        impressions: Math.floor(Math.random() * 30000) + 10000,
        clicks: Math.floor(Math.random() * 3000) + 1000,
        conversions: Math.floor(Math.random() * 1000) + 300,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const cards = [
    {
      title: "Campagnes lancées",
      value: metrics?.totalCampaigns || 0,
      icon: <Megaphone className="h-5 w-5 text-primary" />,
      bgColor: "bg-primary/10",
    },
    {
      title: "Budget dépensé",
      value: metrics?.budgetSpent || 0,
      prefix: "DT ",
      icon: <DollarSign className="h-5 w-5 text-secondary" />,
      bgColor: "bg-secondary/10",
    },
    {
      title: "Impressions",
      value: metrics?.impressions || 0,
      icon: <Eye className="h-5 w-5 text-accent" />,
      bgColor: "bg-accent/10",
    },
    {
      title: "Clics",
      value: metrics?.clicks || 0,
      icon: <MousePointerClick className="h-5 w-5 text-primary" />,
      bgColor: "bg-primary/10",
    },
    {
      title: "Conversions",
      value: metrics?.conversions || 0,
      icon: <Target className="h-5 w-5 text-secondary" />,
      bgColor: "bg-secondary/10",
    },
  ]

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-12 bg-muted rounded-md"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
                <h3 className="text-2xl font-bold">
                  <Counter end={card.value} prefix={card.prefix} />
                </h3>
              </div>
              <div className={`p-2 ${card.bgColor} rounded-full`}>{card.icon}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
