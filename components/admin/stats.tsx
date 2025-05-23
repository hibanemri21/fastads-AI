import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, BarChart3, CreditCard } from "lucide-react"

export function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Utilisateurs totaux</p>
              <h3 className="text-2xl font-bold">254</h3>
              <p className="text-xs text-green-500 mt-1">+12% ce mois</p>
            </div>
            <div className="p-2 bg-primary/10 rounded-full">
              <Users className="h-5 w-5 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Campagnes actives</p>
              <h3 className="text-2xl font-bold">687</h3>
              <p className="text-xs text-green-500 mt-1">+8% ce mois</p>
            </div>
            <div className="p-2 bg-secondary/10 rounded-full">
              <BarChart3 className="h-5 w-5 text-secondary" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Revenus mensuels</p>
              <h3 className="text-2xl font-bold">24,580€</h3>
              <p className="text-xs text-green-500 mt-1">+15% ce mois</p>
            </div>
            <div className="p-2 bg-accent/10 rounded-full">
              <CreditCard className="h-5 w-5 text-accent" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Taux de conversion</p>
              <h3 className="text-2xl font-bold">8.7%</h3>
              <p className="text-xs text-green-500 mt-1">+2.3% ce mois</p>
            </div>
            <div className="p-2 bg-primary/10 rounded-full">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
