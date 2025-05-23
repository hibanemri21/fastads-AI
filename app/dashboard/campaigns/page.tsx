import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CampaignCard } from "@/components/dashboard/campaign-card"
import { PlusCircle, Search, Filter } from "lucide-react"
import Link from "next/link"

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl">Mes Campagnes</h1>
          <p className="text-muted-foreground">Gère et analyse toutes tes campagnes publicitaires</p>
        </div>
        <Link href="/dashboard/create-campaign">
          <Button className="bg-primary hover:bg-primary/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Créer une campagne
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher une campagne..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="active">Actives</SelectItem>
                  <SelectItem value="paused">En pause</SelectItem>
                  <SelectItem value="completed">Terminées</SelectItem>
                  <SelectItem value="scheduled">Programmées</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">Toutes (15)</TabsTrigger>
          <TabsTrigger value="active">Actives (8)</TabsTrigger>
          <TabsTrigger value="paused">En pause (3)</TabsTrigger>
          <TabsTrigger value="completed">Terminées (4)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CampaignCard
              title="Promo Maqloub du Weekend"
              platform="Facebook"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "12.4K",
                clicks: "843",
                ctr: "6.8%",
              }}
              status="active"
            />
            <CampaignCard
              title="Nouveau Menu Étudiant"
              platform="Instagram"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "8.7K",
                clicks: "512",
                ctr: "5.9%",
              }}
              status="active"
            />
            <CampaignCard
              title="Livraison Gratuite"
              platform="TikTok"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "15.2K",
                clicks: "967",
                ctr: "6.4%",
              }}
              status="scheduled"
            />
            <CampaignCard
              title="Offre Spéciale Ramadan"
              platform="Facebook"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "22.1K",
                clicks: "1.2K",
                ctr: "5.4%",
              }}
              status="completed"
            />
            <CampaignCard
              title="Formule Duo à 15DT"
              platform="Instagram"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "7.8K",
                clicks: "423",
                ctr: "5.4%",
              }}
              status="paused"
            />
            <CampaignCard
              title="Nouveaux Burgers"
              platform="Facebook"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "9.3K",
                clicks: "612",
                ctr: "6.6%",
              }}
              status="active"
            />
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CampaignCard
              title="Promo Maqloub du Weekend"
              platform="Facebook"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "12.4K",
                clicks: "843",
                ctr: "6.8%",
              }}
              status="active"
            />
            <CampaignCard
              title="Nouveau Menu Étudiant"
              platform="Instagram"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "8.7K",
                clicks: "512",
                ctr: "5.9%",
              }}
              status="active"
            />
            <CampaignCard
              title="Nouveaux Burgers"
              platform="Facebook"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "9.3K",
                clicks: "612",
                ctr: "6.6%",
              }}
              status="active"
            />
          </div>
        </TabsContent>

        <TabsContent value="paused" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CampaignCard
              title="Formule Duo à 15DT"
              platform="Instagram"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "7.8K",
                clicks: "423",
                ctr: "5.4%",
              }}
              status="paused"
            />
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CampaignCard
              title="Offre Spéciale Ramadan"
              platform="Facebook"
              image="/placeholder.svg?height=200&width=400"
              stats={{
                impressions: "22.1K",
                clicks: "1.2K",
                ctr: "5.4%",
              }}
              status="completed"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
