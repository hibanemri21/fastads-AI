import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, TwitterIcon as TikTok, Upload, Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl">Paramètres</h1>
        <p className="text-muted-foreground">Gère ton compte et tes préférences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
          <TabsTrigger value="platforms">Plateformes</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription>Modifie tes informations de profil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" defaultValue="Mounir Ben Ali" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="mounir@maqloubexpress.tn" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" defaultValue="+216 55 123 456" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" value="********" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-primary/90">
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="restaurant" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations du restaurant</CardTitle>
              <CardDescription>Modifie les détails de ton restaurant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="restaurant-name">Nom du restaurant</Label>
                <Input id="restaurant-name" defaultValue="Maqloub Express" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="restaurant-description">Description</Label>
                <Textarea
                  id="restaurant-description"
                  defaultValue="Le meilleur maqloub de Tunis, fait avec des ingrédients frais et une recette traditionnelle."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="restaurant-address">Adresse</Label>
                <Input id="restaurant-address" defaultValue="123 Rue Habib Bourguiba, Tunis" />
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="restaurant-phone">Téléphone</Label>
                  <Input id="restaurant-phone" defaultValue="+216 71 123 456" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="restaurant-website">Site web</Label>
                  <Input id="restaurant-website" defaultValue="https://maqloubexpress.tn" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Logo du restaurant</Label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-[url('/placeholder.svg?height=80&width=80')] bg-cover bg-center"></div>
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Changer
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Catégorie</Label>
                <Select defaultValue="fastfood">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionne une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fastfood">Fast-food</SelectItem>
                    <SelectItem value="traditional">Cuisine traditionnelle</SelectItem>
                    <SelectItem value="pizza">Pizzeria</SelectItem>
                    <SelectItem value="sandwich">Sandwicherie</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-primary/90">
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Connexion aux plateformes</CardTitle>
              <CardDescription>Connecte tes comptes de réseaux sociaux</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Facebook className="h-5 w-5 text-[#1877F2]" />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <p className="text-xs text-muted-foreground">facebook.com/maqloubexpress</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Déconnecter
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-[#E4405F]" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-xs text-muted-foreground">Non connecté</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Connecter
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TikTok className="h-5 w-5 text-[#000000]" />
                    <div>
                      <p className="font-medium">TikTok</p>
                      <p className="text-xs text-muted-foreground">Non connecté</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Connecter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de notifications</CardTitle>
              <CardDescription>Gère comment et quand tu reçois des notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Rapports de performance</p>
                    <p className="text-sm text-muted-foreground">Reçois des rapports quotidiens sur tes campagnes</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Alertes de budget</p>
                    <p className="text-sm text-muted-foreground">Sois alerté quand ton budget atteint 80%</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Nouvelles fonctionnalités</p>
                    <p className="text-sm text-muted-foreground">Sois informé des nouvelles fonctionnalités</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Conseils d'optimisation</p>
                    <p className="text-sm text-muted-foreground">Reçois des conseils pour améliorer tes campagnes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <Label htmlFor="notification-email">Email pour les notifications</Label>
                <Input id="notification-email" defaultValue="mounir@maqloubexpress.tn" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-primary/90">
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
