"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Activity {
  id: string
  userId: string
  action: string
  details: string
  campaignId?: string
  timestamp: string
}

export function ActivityLog() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchActivities()
  }, [])

  const fetchActivities = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/activities")

      if (!response.ok) {
        throw new Error("Failed to fetch activities")
      }

      const data = await response.json()
      setActivities(data)
    } catch (error) {
      console.error("Error fetching activities:", error)
      // If API fails, use fallback data
      setActivities(generateFallbackActivities())
    } finally {
      setIsLoading(false)
    }
  }

  // Generate fallback activities if API fails
  const generateFallbackActivities = (): Activity[] => {
    const actions = [
      { action: "create_campaign", details: 'Campagne "Menu Étudiant" créée' },
      { action: "update_campaign", details: 'Campagne "Double Cheese Burger" mise à jour' },
      { action: "pause_campaign", details: 'Campagne "Livraison Gratuite" mise en pause' },
      { action: "resume_campaign", details: 'Campagne "Promo Maqloub" réactivée' },
      { action: "delete_campaign", details: 'Campagne "Offre Familiale" supprimée' },
    ]

    return Array.from({ length: 5 }).map((_, index) => ({
      id: `activity-${index}`,
      userId: "user-1",
      ...actions[index],
      timestamp: new Date(Date.now() - index * 3600000).toISOString(),
    }))
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getActivityIcon = (action: string) => {
    switch (action) {
      case "create_campaign":
        return "🚀"
      case "update_campaign":
        return "✏️"
      case "pause_campaign":
        return "⏸️"
      case "resume_campaign":
        return "▶️"
      case "delete_campaign":
        return "🗑️"
      default:
        return "📝"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activités récentes</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {isLoading ? (
            <div className="text-center py-4">Chargement des activités...</div>
          ) : activities.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">Aucune activité récente</div>
          ) : (
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex gap-3 pb-4 border-b last:border-0">
                  <div className="text-xl">{getActivityIcon(activity.action)}</div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.details}</p>
                    <p className="text-xs text-muted-foreground mt-1">{formatTimestamp(activity.timestamp)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
