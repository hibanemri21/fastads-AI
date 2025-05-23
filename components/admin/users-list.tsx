import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash, UserCheck, UserX } from "lucide-react"

interface UsersListProps {
  type?: "restaurant" | "agency" | "admin"
}

export function UsersList({ type }: UsersListProps) {
  const users = [
    {
      id: 1,
      name: "Michel Dupont",
      email: "michel@burgerkings.fr",
      type: "restaurant",
      status: "active",
      date: "12/05/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Sophie Martin",
      email: "sophie@foodmarketing.fr",
      type: "agency",
      status: "active",
      date: "10/05/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Jean Lefebvre",
      email: "jean@pizzaexpress.fr",
      type: "restaurant",
      status: "pending",
      date: "09/05/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Marie Dubois",
      email: "marie@sushipalace.fr",
      type: "restaurant",
      status: "active",
      date: "08/05/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Pierre Moreau",
      email: "pierre@foodads.fr",
      type: "admin",
      status: "active",
      date: "07/05/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Lucie Bernard",
      email: "lucie@tacohouse.fr",
      type: "restaurant",
      status: "inactive",
      date: "05/05/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Thomas Petit",
      email: "thomas@digitalfood.fr",
      type: "agency",
      status: "active",
      date: "03/05/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      name: "Julie Leroy",
      email: "julie@foodads.fr",
      type: "admin",
      status: "active",
      date: "01/05/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ].filter((user) => (type ? user.type === type : true))

  return (
    <div className="rounded-md border">
      <div className="grid grid-cols-6 p-4 font-medium border-b">
        <div className="col-span-2">Utilisateur</div>
        <div>Type</div>
        <div>Statut</div>
        <div>Date d'inscription</div>
        <div className="text-right">Actions</div>
      </div>
      <div className="divide-y">
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-6 p-4 items-center">
            <div className="col-span-2 flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>{user.date}</div>
            <div className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Modifier
                  </DropdownMenuItem>
                  {user.status === "active" ? (
                    <DropdownMenuItem>
                      <UserX className="mr-2 h-4 w-4" />
                      Désactiver
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>
                      <UserCheck className="mr-2 h-4 w-4" />
                      Activer
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500">
                    <Trash className="mr-2 h-4 w-4" />
                    Supprimer
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
