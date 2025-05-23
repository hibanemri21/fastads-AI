"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  PlusCircle,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Utensils,
  CreditCard,
  MessageSquare,
  HelpCircle,
} from "lucide-react"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardSidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Créer une campagne",
      icon: PlusCircle,
      href: "/dashboard/create-campaign",
      active: pathname === "/dashboard/create-campaign",
    },
    {
      label: "Campagnes",
      icon: BarChart3,
      href: "/dashboard/campaigns",
      active: pathname === "/dashboard/campaigns",
    },
    {
      label: "Facturation",
      icon: CreditCard,
      href: "/dashboard/billing",
      active: pathname === "/dashboard/billing",
    },
    {
      label: "Support",
      icon: MessageSquare,
      href: "/dashboard/support",
      active: pathname === "/dashboard/support",
    },
    {
      label: "Aide",
      icon: HelpCircle,
      href: "/dashboard/help",
      active: pathname === "/dashboard/help",
    },
    {
      label: "Paramètres",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  const SidebarContent = (
    <>
      <div className="flex h-14 items-center px-4 border-b">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-primary" />
          <span className="font-lilita text-2xl tracking-wide text-primary">FoodAds AI</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <div className="px-3 py-4">
          <div className="space-y-1">
            {routes.map((route) => (
              <Link key={route.href} href={route.href} onClick={() => setOpen(false)}>
                <Button
                  variant={route.active ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", route.active && "bg-secondary/50 text-secondary-foreground")}
                >
                  <route.icon className="mr-2 h-5 w-5" />
                  {route.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </ScrollArea>
      <div className="p-3 border-t">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="mr-2 h-5 w-5" />
          Déconnexion
        </Button>
      </div>
    </>
  )

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed left-4 top-4 z-40">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="flex flex-col h-full">{SidebarContent}</div>
        </SheetContent>
      </Sheet>
      <div className={cn("hidden md:flex md:w-64 md:flex-col md:inset-y-0 md:fixed z-50 border-r bg-card", className)}>
        <div className="flex flex-col h-full">{SidebarContent}</div>
      </div>
    </>
  )
}
