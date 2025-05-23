import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Utensils, TrendingUp, BarChart3, Zap, Star, Users, Sparkles } from "lucide-react"
import { FoodAnimation } from "@/components/home/food-animation"
import { TestimonialCarousel } from "@/components/home/testimonial-carousel"
import { FeaturedCampaigns } from "@/components/home/featured-campaigns"
import { HowItWorks } from "@/components/home/how-it-works"
import { PricingPlans } from "@/components/home/pricing-plans"
import { FaqSection } from "@/components/home/faq-section"
import { NewsletterSignup } from "@/components/home/newsletter-signup"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-primary" />
            <span className="font-bangers text-2xl tracking-wide text-primary">FoodAds AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="#features" className="text-foreground hover:text-primary transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              Comment ça marche
            </Link>
            <Link href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Tarifs
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Témoignages
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="text-foreground hover:text-primary transition-colors hidden md:inline-block">
              Connexion
            </Link>
            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90">Essai Gratuit</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6 animate-slide-up">
              <div className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                #1 en Marketing IA pour Fast-Food Tunisien 🇹🇳
              </div>
              <h1 className="text-4xl md:text-6xl leading-tight text-foreground">
                Génère des pubs irrésistibles pour ton fast-food avec l'IA ! 🍔✨
              </h1>
              <p className="text-lg text-muted-foreground">
                Des pubs savoureuses, des clics à volonté. FoodAds AI génère et optimise automatiquement tes campagnes
                publicitaires pour attirer plus de clients et augmenter ton chiffre d'affaires.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Créer ma première pub
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Voir une démo
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-secondary" fill="currentColor" />
                <span>Plus de 120 restaurants tunisiens nous font confiance</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <FoodAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6">ILS NOUS FONT CONFIANCE</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="/placeholder.svg?height=30&width=120" alt="Logo partenaire" className="h-8 opacity-70" />
            <img src="/placeholder.svg?height=30&width=120" alt="Logo partenaire" className="h-8 opacity-70" />
            <img src="/placeholder.svg?height=30&width=120" alt="Logo partenaire" className="h-8 opacity-70" />
            <img src="/placeholder.svg?height=30&width=120" alt="Logo partenaire" className="h-8 opacity-70" />
            <img src="/placeholder.svg?height=30&width=120" alt="Logo partenaire" className="h-8 opacity-70" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">Des fonctionnalités qui donnent faim 🍔</h2>
            <p className="text-muted-foreground">
              Notre plateforme utilise l'intelligence artificielle pour créer des campagnes publicitaires qui attirent
              les clients comme l'odeur d'un bon maqloub.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            <div className="bg-card p-6 rounded-lg shadow-md animate-slide-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl mb-2">Génération automatique</h3>
              <p className="text-muted-foreground">
                Créez des publicités attrayantes en quelques clics grâce à notre IA spécialisée dans la restauration
                tunisienne.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md animate-slide-up">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl mb-2">Multi-plateformes</h3>
              <p className="text-muted-foreground">
                Publiez sur Facebook, Instagram, TikTok et Google en un seul endroit sans effort supplémentaire.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md animate-slide-up">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl mb-2">A/B Testing</h3>
              <p className="text-muted-foreground">
                Testez différentes versions de vos publicités pour identifier celles qui convertissent le mieux.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md animate-slide-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl mb-2">Analyse en temps réel</h3>
              <p className="text-muted-foreground">
                Suivez les performances de vos campagnes et obtenez des insights pour les optimiser.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md animate-slide-up">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl mb-2">Ciblage précis</h3>
              <p className="text-muted-foreground">
                Atteignez exactement les clients qui aimeront votre restaurant grâce à notre ciblage intelligent.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md animate-slide-up">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl mb-2">Optimisation automatique</h3>
              <p className="text-muted-foreground">
                Notre IA ajuste continuellement vos campagnes pour maximiser votre retour sur investissement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">Comment ça marche</h2>
            <p className="text-muted-foreground">
              Créer des campagnes publicitaires efficaces n'a jamais été aussi simple avec FoodAds AI
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Featured Campaigns */}
      <section id="demo" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">Exemples de campagnes</h2>
            <p className="text-muted-foreground">
              Découvrez comment FoodAds AI transforme la publicité pour les restaurants tunisiens
            </p>
          </div>
          <FeaturedCampaigns />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">Ce que disent nos clients</h2>
            <p className="text-muted-foreground">
              Des centaines de restaurateurs tunisiens ont déjà transformé leur marketing avec FoodAds AI
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">Des tarifs adaptés à votre appétit</h2>
            <p className="text-muted-foreground">
              Choisissez le plan qui correspond le mieux aux besoins de votre restaurant
            </p>
          </div>
          <PricingPlans />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">Questions fréquentes</h2>
            <p className="text-muted-foreground">Tout ce que vous devez savoir sur FoodAds AI</p>
          </div>
          <FaqSection />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-6">Prêt à booster vos ventes ? 🚀</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines de restaurants qui ont déjà transformé leur marketing avec FoodAds AI
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="text-secondary-foreground">
              Commencer gratuitement
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="h-6 w-6 text-primary" />
                <span className="font-bangers text-2xl tracking-wide text-primary">FoodAds AI</span>
              </div>
              <p className="text-muted-foreground mb-4">
                La plateforme d'IA qui révolutionne le marketing pour les restaurants tunisiens.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Produit</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-primary">
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-primary">
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-primary">
                    Témoignages
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Ressources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Entreprise</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Partenaires
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} FoodAds AI. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Conditions d'utilisation
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
