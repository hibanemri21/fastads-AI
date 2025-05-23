import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

const campaigns = [
  {
    id: 1,
    title: "Double Cheese Burger",
    restaurant: "Burger Kings",
    platform: "facebook",
    impressions: "45.2K",
    clicks: "3.8K",
    ctr: "8.4%",
  },
  {
    id: 2,
    title: "Pizza 4 Fromages",
    restaurant: "Pizza Express",
    platform: "instagram",
    impressions: "38.7K",
    clicks: "2.9K",
    ctr: "7.5%",
  },
  {
    id: 3,
    title: "Menu Étudiant",
    restaurant: "Le Bistrot",
    platform: "facebook",
    impressions: "32.1K",
    clicks: "2.4K",
    ctr: "7.5%",
  },
  {
    id: 4,
    title: "Sushi Box",
    restaurant: "Sushi Palace",
    platform: "instagram",
    impressions: "29.8K",
    clicks: "2.1K",
    ctr: "7.0%",
  },
  {
    id: 5,
    title: "Brunch Weekend",
    restaurant: "Le Gourmet",
    platform: "tiktok",
    impressions: "52.3K",
    clicks: "4.7K",
    ctr: "9.0%",
  },
]

export function PopularCampaigns() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-4 w-4 text-[#1877F2]" />
      case "instagram":
        return <Instagram className="h-4 w-4 text-[#E4405F]" />
      case "tiktok":
        return <Twitter className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                {getPlatformIcon(campaign.platform)}
                {campaign.platform.charAt(0).toUpperCase() + campaign.platform.slice(1)}
              </Badge>
              <p className="font-medium">{campaign.title}</p>
            </div>
            <p className="text-sm text-muted-foreground">{campaign.restaurant}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Impressions</p>
              <p className="font-medium">{campaign.impressions}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">CTR</p>
              <p className="font-medium">{campaign.ctr}</p>
            </div>
            <Button variant="ghost" size="sm">
              Voir
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
