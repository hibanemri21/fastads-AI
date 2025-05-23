import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <Card className="w-full max-w-md z-10">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Utensils className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl">Créer un compte</CardTitle>
          <CardDescription>Commencez à booster vos ventes avec FoodAds AI</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="restaurant" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
              <TabsTrigger value="agency">Agence</TabsTrigger>
            </TabsList>
            <TabsContent value="restaurant">
              <form className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      Prénom
                    </label>
                    <Input id="first-name" placeholder="Jean" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Nom
                    </label>
                    <Input id="last-name" placeholder="Dupont" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="restaurant-name" className="text-sm font-medium">
                    Nom du restaurant
                  </label>
                  <Input id="restaurant-name" placeholder="Le Gourmet" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email professionnel
                  </label>
                  <Input id="email" type="email" placeholder="jean@legourmet.fr" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Mot de passe
                  </label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    J'accepte les{" "}
                    <Link href="#" className="text-primary hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="#" className="text-primary hover:underline">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Créer un compte
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="agency">
              <form className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name-agency" className="text-sm font-medium">
                      Prénom
                    </label>
                    <Input id="first-name-agency" placeholder="Marie" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name-agency" className="text-sm font-medium">
                      Nom
                    </label>
                    <Input id="last-name-agency" placeholder="Martin" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="agency-name" className="text-sm font-medium">
                    Nom de l'agence
                  </label>
                  <Input id="agency-name" placeholder="FoodMarketing" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email-agency" className="text-sm font-medium">
                    Email professionnel
                  </label>
                  <Input id="email-agency" type="email" placeholder="marie@foodmarketing.fr" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password-agency" className="text-sm font-medium">
                    Mot de passe
                  </label>
                  <Input id="password-agency" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms-agency"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="terms-agency" className="text-sm text-muted-foreground">
                    J'accepte les{" "}
                    <Link href="#" className="text-primary hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="#" className="text-primary hover:underline">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Créer un compte
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Ou inscrivez-vous avec</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fill="#1877F2"
                />
              </svg>
              Facebook
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2">
          <div className="text-sm text-muted-foreground">
            Déjà un compte?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Se connecter
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
