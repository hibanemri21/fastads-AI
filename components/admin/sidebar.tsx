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
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Utensils,
  MessageSquare,
  CreditCard,
  HelpCircle,
  FileText,
  Bell,
} from "lucide-react"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AdminSidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
      active: pathname === "/admin",
    },
    {
      label: "Utilisateurs",
      icon: Users,
      href: "/admin/users",
      active: pathname === "/admin/users",
    },
    {
      label: "Campagnes",
      icon: BarChart3,
      href: "/admin/campaigns",
      active: pathname === "/admin/campaigns",
    },
    {
      label: "Paiements",
      icon: CreditCard,
      href: "/admin/payments",
      active: pathname === "/admin/payments",
    },
    {
      label: "Messages",
      icon: MessageSquare,
      href: "/admin/messages",
      active: pathname === "/admin/messages",
    },
    {
      label: "Notifications",
      icon: Bell,
      href: "/admin/notifications",
      active: pathname === "/admin/notifications",
    },
    {
      label: "Rapports",
      icon: FileText,
      href: "/admin/reports",
      active: pathname === "/admin/reports",
    },
    {
      label: "Support",
      icon: HelpCircle,
      href: "/admin/support",
      active: pathname === "/admin/support",
    },
    {
      label: "Paramètres",
      icon: Settings,
      href: "/admin/settings",
      active: pathname === "/admin/settings",
    },
  ]

  const SidebarContent = (
    <>
      <div className="flex h-14 items-center px-4 border-b">
        <Link href="/admin" className="flex items-center gap-2">
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
