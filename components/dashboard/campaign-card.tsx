import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, TwitterIcon as TikTok } from "lucide-react"

interface CampaignCardProps {
  title: string
  platform: "Facebook" | "Instagram" | "TikTok"
  image: string
  stats: {
    impressions: string
    clicks: string
    ctr: string
  }
  status: "active" | "paused" | "completed" | "scheduled"
}

export function CampaignCard({ title, platform, image, stats, status }: CampaignCardProps) {
  const getPlatformIcon = () => {
    switch (platform) {
      case "Facebook":
        return <Facebook className="h-4 w-4 text-[#1877F2]" />
      case "Instagram":
        return <Instagram className="h-4 w-4 text-[#E4405F]" />
      case "TikTok":
        return <TikTok className="h-4 w-4 text-[#000000]" />
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
      case "paused":
        return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
      case "completed":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
      case "scheduled":
        return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20"
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "active":
        return "Active"
      case "paused":
        return "En pause"
      case "completed":
        return "Terminée"
      case "scheduled":
        return "Programmée"
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-cover" />
        <Badge className={`absolute top-2 right-2 ${getStatusColor()}`} variant="outline">
          {getStatusText()}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="flex items-center gap-1">
            {getPlatformIcon()}
            {platform}
          </Badge>
        </div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center">
            <div\
