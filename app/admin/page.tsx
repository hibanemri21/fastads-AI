import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminStats } from "@/components/admin/stats"
import { AdminCharts } from "@/components/admin/charts"
import { RecentUsers } from "@/components/admin/recent-users"
import { PopularCampaigns } from "@/components/admin/popular-campaigns"
import { Download, RefreshCw } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl">Tableau de bord administrateur</h1>
          <p className="text-muted-foreground">Bienvenue sur le panneau d'administration de FoodAds AI</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualiser
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <AdminStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Aperçu des performances</CardTitle>
            <CardDescription>Analyse des 30 derniers jours</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="revenue">
              <TabsList className="mb-4">
                <TabsTrigger value="revenue">Revenus</TabsTrigger>
                <TabsTrigger value="users">Utilisateurs</TabsTrigger>
                <TabsTrigger value="campaigns">Campagnes</TabsTrigger>
              </TabsList>
              <TabsContent value="revenue" className="h-[300px]">
                <AdminCharts type="revenue" />
              </TabsContent>
              <TabsContent value="users" className="h-[300px]">
                <AdminCharts type="users" />
              </TabsContent>
              <TabsContent value="campaigns" className="h-[300px]">
                <AdminCharts type="campaigns" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Répartition des utilisateurs</CardTitle>
            <CardDescription>Par type de compte</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <AdminCharts type="userTypes" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Utilisateurs récents</CardTitle>
            <CardDescription>Derniers utilisateurs inscrits</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentUsers />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campagnes populaires</CardTitle>
            <CardDescription>Campagnes les plus performantes</CardDescription>
          </CardHeader>
          <CardContent>
            <PopularCampaigns />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
