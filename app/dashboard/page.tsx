import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { WelcomeBanner } from "@/components/dashboard/welcome-banner"
import { MetricsCards } from "@/components/dashboard/metrics-cards"
import { PerformanceGraph } from "@/components/dashboard/performance-graph"
import { ActiveCampaigns } from "@/components/dashboard/active-campaigns"
import { ABTestingTeaser } from "@/components/dashboard/ab-testing-teaser"
import { ActivityLog } from "@/components/dashboard/activity-log"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />

      <MetricsCards />

      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="30days">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Performance</h2>
              <TabsList>
                <TabsTrigger value="7days">7 jours</TabsTrigger>
                <TabsTrigger value="30days">30 jours</TabsTrigger>
                <TabsTrigger value="90days">90 jours</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="7days" className="h-[350px]">
              <PerformanceGraph days={7} />
            </TabsContent>
            <TabsContent value="30days" className="h-[350px]">
              <PerformanceGraph days={30} />
            </TabsContent>
            <TabsContent value="90days" className="h-[350px]">
              <PerformanceGraph days={90} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Campagnes actives</h2>
            <Link href="/dashboard/create-campaign">
              <Button className="bg-primary hover:bg-primary/90 animate-pulse-slow">
                <PlusCircle className="mr-2 h-4 w-4" />
                Lancer une nouvelle campagne
              </Button>
            </Link>
          </div>
          <ActiveCampaigns />
        </div>

        <div className="w-full md:w-1/4 space-y-6">
          <ABTestingTeaser />
          <ActivityLog />
        </div>
      </div>
    </div>
  )
}
