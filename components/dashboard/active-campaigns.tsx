"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, TwitterIcon, Edit, Pause, Play, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Campaign {
  id: string
  name: string
  image: string
  platform: "Facebook" | "Instagram" | "TikTok"
  budget: number
  clicks: number
  impressions: number
  active: boolean
  caption: string
}

export function ActiveCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchCampaigns()
  }, [])

  const fetchCampaigns = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/campaigns")

      if (!response.ok) {
        throw new Error("Failed to fetch campaigns")
      }

      const data = await response.json()
      setCampaigns(data)
    } catch (error) {
      console.error("Error fetching campaigns:", error)
      toast({
        title: "Erreur",
        description: "Impossible de charger les campagnes",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Facebook":
        return <Facebook className="h-4 w-4 text-[#1877F2]" />
      case "Instagram":
        return <Instagram className="h-4 w-4 text-[#E4405F]" />
      case "TikTok":
        return <TwitterIcon className="h-4 w-4 text-[#000000] dark:text-white" />
      default:
        return null
    }
  }

  const toggleCampaignStatus = async (id: string) => {
    try {
      const campaign = campaigns.find((c) => c.id === id)
      if (!campaign) return

      const response = await fetch(`/api/campaigns/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          active: !campaign.active,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update campaign")
      }

      setCampaigns((prev) =>
        prev.map((campaign) => (campaign.id === id ? { ...campaign, active: !campaign.active } : campaign)),
      )

      toast({
        title: "Campagne mise à jour",
        description: `La campagne a été ${campaign.active ? "mise en pause" : "activée"}`,
      })
    } catch (error) {
      console.error("Error updating campaign:", error)
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la campagne",
        variant: "destructive",
      })
    }
  }

  const openEditDialog = (campaign: Campaign) => {
    setEditingCampaign(campaign)
    setIsDialogOpen(true)
  }

  const handleSaveEdit = async () => {
    if (!editingCampaign) return

    try {
      const response = await fetch(`/api/campaigns/${editingCampaign.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editingCampaign.name,
          budget: editingCampaign.budget,
          caption: editingCampaign.caption,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update campaign")
      }

      setCampaigns((prev) => prev.map((campaign) => (campaign.id === editingCampaign.id ? editingCampaign : campaign)))

      setIsDialogOpen(false)
      setEditingCampaign(null)

      toast({
        title: "Campagne mise à jour",
        description: "Les modifications ont été enregistrées",
      })
    } catch (error) {
      console.error("Error updating campaign:", error)
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la campagne",
        variant: "destructive",
      })
    }
  }

  const deleteCampaign = async (id: string) => {
    try {
      const response = await fetch(`/api/campaigns/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete campaign")
      }

      setCampaigns((prev) => prev.filter((campaign) => campaign.id !== id))

      toast({
        title: "Campagne supprimée",
        description: "La campagne a été supprimée avec succès",
      })
    } catch (error) {
      console.error("Error deleting campaign:", error)
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la campagne",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return <div className="p-8 text-center">Chargement des campagnes...</div>
  }

  if (campaigns.length === 0) {
    return (
      <div className="p-8 text-center border rounded-md">
        <h3 className="text-lg font-medium">Aucune campagne active</h3>
        <p className="text-muted-foreground mt-2">
          Lancez votre première campagne pour commencer à promouvoir votre restaurant
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">Image</TableHead>
              <TableHead>Nom de la campagne</TableHead>
              <TableHead>Plateforme</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Impressions</TableHead>
              <TableHead>Clics</TableHead>
              <TableHead>CTR</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id} className="transition-colors hover:bg-muted/50">
                <TableCell>
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {getPlatformIcon(campaign.platform)}
                    <span>{campaign.platform}</span>
                  </div>
                </TableCell>
                <TableCell>{campaign.budget} DT</TableCell>
                <TableCell>{campaign.impressions.toLocaleString()}</TableCell>
                <TableCell>{campaign.clicks.toLocaleString()}</TableCell>
                <TableCell>
                  {campaign.impressions > 0 ? ((campaign.clicks / campaign.impressions) * 100).toFixed(2) : "0.00"}%
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={campaign.active ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"}
                  >
                    {campaign.active ? "Active" : "En pause"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(campaign)}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Modifier</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => toggleCampaignStatus(campaign.id)}>
                      {campaign.active ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      <span className="sr-only">{campaign.active ? "Mettre en pause" : "Activer"}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteCampaign(campaign.id)}
                      className="text-destructive hover:text-destructive/90"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Supprimer</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Modifier la campagne</DialogTitle>
            <DialogDescription>Modifiez les détails de votre campagne publicitaire.</DialogDescription>
          </DialogHeader>

          {editingCampaign && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nom de la campagne</Label>
                <Input
                  id="name"
                  value={editingCampaign.name}
                  onChange={(e) =>
                    setEditingCampaign({
                      ...editingCampaign,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="budget">Budget (DT)</Label>
                <Input
                  id="budget"
                  type="number"
                  value={editingCampaign.budget}
                  onChange={(e) =>
                    setEditingCampaign({
                      ...editingCampaign,
                      budget: Number.parseInt(e.target.value),
                    })
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="caption">Texte de l'annonce</Label>
                <Textarea
                  id="caption"
                  value={editingCampaign.caption}
                  onChange={(e) =>
                    setEditingCampaign({
                      ...editingCampaign,
                      caption: e.target.value,
                    })
                  }
                  rows={4}
                />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleSaveEdit}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
