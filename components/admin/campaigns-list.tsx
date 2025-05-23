import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash, Play, Pause, Eye } from "lucide-react"
import { Facebook, Instagram, Twitter } from "lucide-react"

interface CampaignsListProps {
  status?: "active" | "paused" | "completed" | "scheduled"
}

export function CampaignsList({ status }: CampaignsListProps) {
  const campaigns = [
    {
      id: 1,
      title: "Double Cheese Burger",
      restaurant: "Burger Kings",
      platform: "facebook",
      status: "active",
      budget: "50€/jour",
      impressions: "45.2K",
      clicks: "3.8K",
      ctr: "8.4%",
      date: "12/05/2023",
    },
    {
      id: 2,
      title: "Pizza 4 Fromages",
      restaurant: "Pizza Express",
      platform: "instagram",
      status: "active",
      budget: "35€/jour",
      impressions: "38.7K",
      clicks: "2.9K",
      ctr: "7.5%",
      date: "10/05/2023",
    },
    {
      id: 3,
      title: "Menu Étudiant",
      restaurant: "Le Bistrot",
      platform: "facebook",
      status: "paused",
      budget: "25€/jour",
      impressions: "32.1K",
      clicks: "2.4K",
      ctr: "7.5%",
      date: "09/05/2023",
    },
    {
      id: 4,
      title: "Sushi Box",
      restaurant: "Sushi Palace",
      platform: "instagram",
      status: "completed",
      budget: "40€/jour",
      impressions: "29.8K",
      clicks: "2.1K",
      ctr: "7.0%",
      date: "08/05/2023",
    },
    {
      id: 5,
      title: "Brunch Weekend",
      restaurant: "Le Gourmet",
      platform: "tiktok",
      status: "active",
      budget: "60€/jour",
      impressions: "52.3K",
      clicks: "4.7K",
      ctr: "9.0%",
      date: "07/05/2023",
    },
    {
      id: 6,
      title: "Offre Spéciale Été",
      restaurant: "Taco House",
      platform: "facebook",
      status: "scheduled",
      budget: "45€/jour",
      impressions: "-",
      clicks: "-",
      ctr: "-",
      date: "05/05/2023",
    },
    {
      id: 7,
      title: "Happy Hour",
      restaurant: "Le Bistrot",
      platform: "instagram",
      status: "paused",
      budget: "30€/jour",
      impressions: "18.5K",
      clicks: "1.2K",
      ctr: "6.5%",
      date: "03/05/2023",
    },
    {
      id: 8,
      title: "Menu Famille",
      restaurant: "Burger Kings",
      platform: "facebook",
      status: "completed",
      budget: "55€/jour",
      impressions: "48.9K",
      clicks: "3.9K",
      ctr: "8.0%",
      date: "01/05/2023",
    },
  ].filter((campaign) => (status ? campaign.status === status : true))

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
    <div className="rounded-md border">
      <div className="grid grid-cols-8 p-4 font-medium border-b">
        <div className="col-span-2">Campagne</div>
        <div>Plateforme</div>
        <div>Statut</div>
        <div>Budget</div>
        <div>Impressions</div>
        <div>CTR</div>
        <div className="text-right">Actions</div>
      </div>
      <div className="divide-y">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="grid grid-cols-8 p-4 items-center">
            <div className="col-span-2">
              <p className="font-medium">{campaign.title}</p>
              <p className="text-sm text-muted-foreground">{campaign.restaurant}</p>
            </div>
            <div>
              <Badge variant="outline" className="flex items-center gap-1">
                {getPlatformIcon(campaign.platform)}
                {campaign.platform.charAt(0).toUpperCase() + campaign.platform.slice(1)}
              </Badge>
            </div>
            <div>
              <Badge
                variant="outline"
                className={
                  campaign.status === "active"
                    ? "bg-green-500/10 text-green-500"
                    : campaign.status === "paused"
                      ? "bg-amber-500/10 text-amber-500"
                      : campaign.status === "scheduled"
                        ? "bg-purple-500/10 text-purple-500"
                        : "bg-blue-500/10 text-blue-500"
                }
              >
                {campaign.status === "active"
                  ? "Active"
                  : campaign.status === "paused"
                    ? "En pause"
                    : campaign.status === "scheduled"
                      ? "Programmée"
                      : "Terminée"}
              </Badge>
            </div>
            <div>{campaign.budget}</div>
            <div>{campaign.impressions}</div>
            <div>{campaign.ctr}</div>
            <div className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    Voir les détails
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Modifier
                  </DropdownMenuItem>
                  {campaign.status === "active" ? (
                    <DropdownMenuItem>
                      <Pause className="mr-2 h-4 w-4" />
                      Mettre en pause
                    </DropdownMenuItem>
                  ) : campaign.status === "paused" || campaign.status === "scheduled" ? (
                    <DropdownMenuItem>
                      <Play className="mr-2 h-4 w-4" />
                      Activer
                    </DropdownMenuItem>
                  ) : null}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500">
                    <Trash className="mr-2 h-4 w-4" />
                    Supprimer
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
