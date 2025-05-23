import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Michel Dupont",
    email: "michel@burgerkings.fr",
    type: "restaurant",
    status: "active",
    date: "2023-05-12",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Sophie Martin",
    email: "sophie@foodmarketing.fr",
    type: "agency",
    status: "active",
    date: "2023-05-10",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Jean Lefebvre",
    email: "jean@pizzaexpress.fr",
    type: "restaurant",
    status: "pending",
    date: "2023-05-09",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Marie Dubois",
    email: "marie@sushipalace.fr",
    type: "restaurant",
    status: "active",
    date: "2023-05-08",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Pierre Moreau",
    email: "pierre@foodads.fr",
    type: "admin",
    status: "active",
    date: "2023-05-07",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function RecentUsers() {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className={
                user.type === "restaurant"
                  ? "bg-primary/10 text-primary"
                  : user.type === "agency"
                    ? "bg-secondary/10 text-secondary"
                    : "bg-accent/10 text-accent"
              }
            >
              {user.type === "restaurant" ? "Restaurant" : user.type === "agency" ? "Agence" : "Admin"}
            </Badge>
            <Badge
              variant="outline"
              className={
                user.status === "active"
                  ? "bg-green-500/10 text-green-500"
                  : user.status === "pending"
                    ? "bg-amber-500/10 text-amber-500"
                    : "bg-red-500/10 text-red-500"
              }
            >
              {user.status === "active" ? "Actif" : user.status === "pending" ? "En attente" : "Inactif"}
            </Badge>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
