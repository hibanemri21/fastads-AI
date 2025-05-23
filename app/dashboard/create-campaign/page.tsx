import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, TwitterIcon as TikTok, Upload, Wand2, ArrowRight } from "lucide-react"
import { CaptionGenerator } from "@/components/dashboard/caption-generator"

export default function CreateCampaignPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl">Créer une campagne 🚀</h1>
        <p className="text-muted-foreground">Génère une campagne publicitaire optimisée pour ton restaurant</p>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">1. Détails</TabsTrigger>
          <TabsTrigger value="content">2. Contenu</TabsTrigger>
          <TabsTrigger value="preview">3. Aperçu</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations de base</CardTitle>
              <CardDescription>Définis les paramètres principaux de ta campagne</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="campaign-name">Nom de la campagne</Label>
                <Input id="campaign-name" placeholder="Ex: Promo Maqloub du Weekend" />
              </div>

              <div className="space-y-2">
                <Label>Objectif de la campagne</Label>
                <RadioGroup defaultValue="awareness">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="awareness" id="awareness" />
                    <Label htmlFor="awareness">Notoriété</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="traffic" id="traffic" />
                    <Label htmlFor="traffic">Trafic vers le restaurant</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="conversion" id="conversion" />
                    <Label htmlFor="conversion">Conversions (commandes)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Plateformes</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-2 border-primary">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <Facebook className="h-8 w-8 text-[#1877F2] mb-2" />
                      <p className="font-medium">Facebook</p>
                      <p className="text-xs text-muted-foreground">Recommandé pour ton audience</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <Instagram className="h-8 w-8 text-[#E4405F] mb-2" />
                      <p className="font-medium">Instagram</p>
                      <p className="text-xs text-muted-foreground">Idéal pour les visuels</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <TikTok className="h-8 w-8 text-[#000000] mb-2" />
                      <p className="font-medium">TikTok</p>
                      <p className="text-xs text-muted-foreground">Pour les vidéos courtes</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget quotidien (DT)</Label>
                <Select defaultValue="20">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionne un budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 DT</SelectItem>
                    <SelectItem value="20">20 DT</SelectItem>
                    <SelectItem value="50">50 DT</SelectItem>
                    <SelectItem value="100">100 DT</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Audience cible</Label>
                <Select defaultValue="students">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionne une audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="students">Étudiants (18-25 ans)</SelectItem>
                    <SelectItem value="families">Familles</SelectItem>
                    <SelectItem value="professionals">Professionnels (25-40 ans)</SelectItem>
                    <SelectItem value="all">Tous</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90">
                Continuer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contenu visuel</CardTitle>
              <CardDescription>Ajoute des images ou génère-les avec l'IA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center h-[250px]">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="font-medium">Glisse ton image ici</p>
                    <p className="text-sm text-muted-foreground mb-4">ou</p>
                    <Button variant="outline" size="sm">
                      Parcourir
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Formats acceptés: JPG, PNG. Taille max: 5MB</p>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4 h-[250px] flex flex-col">
                    <h3 className="font-medium mb-2">Génère avec l'IA</h3>
                    <Textarea
                      placeholder="Décris l'image que tu veux générer. Ex: Un délicieux maqloub avec des légumes frais sur une table en bois rustique"
                      className="flex-1 resize-none mb-4"
                    />
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Wand2 className="mr-2 h-4 w-4" />
                      Générer une image
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Texte et slogans</h3>
                  <Button variant="outline" size="sm">
                    <Wand2 className="mr-2 h-4 w-4" />
                    Générer des suggestions
                  </Button>
                </div>

                <CaptionGenerator />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Retour</Button>
              <Button className="bg-primary hover:bg-primary/90">
                Continuer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Aperçu de la campagne</CardTitle>
              <CardDescription>Vérifie comment ta publicité apparaîtra sur les différentes plateformes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="facebook">
                <TabsList className="mb-4">
                  <TabsTrigger value="facebook" className="flex items-center">
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </TabsTrigger>
                  <TabsTrigger value="instagram" className="flex items-center">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </TabsTrigger>
                  <TabsTrigger value="tiktok" className="flex items-center">
                    <TikTok className="mr-2 h-4 w-4" />
                    TikTok
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="facebook">
                  <div className="border rounded-lg p-4">
                    <div className="max-w-md mx-auto">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[url('/placeholder.svg?height=40&width=40')] bg-cover"></div>
                        <div>
                          <p className="font-medium">Maqloub Express</p>
                          <p className="text-xs text-muted-foreground">Sponsorisé</p>
                        </div>
                      </div>
                      <p className="mb-2">
                        Yekhdem feek? Clique ici w chouf l'offre! 🔥 Promo spéciale ce weekend seulement!
                      </p>
                      <div className="rounded-lg overflow-hidden mb-2">
                        <img
                          src="/placeholder.svg?height=300&width=500"
                          alt="Aperçu de la publicité"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="font-medium">Maqloub Express</p>
                        <Button size="sm" variant="secondary">
                          Commander
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="instagram">
                  <div className="border rounded-lg p-4">
                    <div className="max-w-md mx-auto">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[url('/placeholder.svg?height=40&width=40')] bg-cover"></div>
                        <div>
                          <p className="font-medium">maqloub_express</p>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden mb-2">
                        <img
                          src="/placeholder.svg?height=500&width=500"
                          alt="Aperçu de la publicité"
                          className="w-full h-auto"
                        />
                      </div>
                      <p className="mb-2">
                        <span className="font-medium">maqloub_express</span> Yekhdem feek? Clique ici w chouf l'offre!
                        🔥 #maqloub #food #tunisia
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tiktok">
                  <div className="border rounded-lg p-4">
                    <div className="max-w-[250px] mx-auto">
                      <div className="rounded-lg overflow-hidden mb-2 aspect-[9/16] bg-[url('/placeholder.svg?height=600&width=338')] bg-cover">
                        <div className="h-full flex flex-col justify-end p-4">
                          <p className="text-white font-medium mb-2">@maqloub_express</p>
                          <p className="text-white text-sm mb-4">
                            Yekhdem feek? Clique ici w chouf l'offre! 🔥 #maqloub #foodtiktok
                          </p>
                          <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                            Commander
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Résumé de la campagne</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Nom de la campagne</p>
                    <p className="font-medium">Promo Maqloub du Weekend</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Objectif</p>
                    <p className="font-medium">Trafic vers le restaurant</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Plateformes</p>
                    <p className="font-medium">Facebook</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Budget quotidien</p>
                    <p className="font-medium">20 DT</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Audience cible</p>
                    <p className="font-medium">Étudiants (18-25 ans)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Durée estimée</p>
                    <p className="font-medium">7 jours</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Retour</Button>
              <Button className="bg-primary hover:bg-primary/90">Lancer la campagne</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
