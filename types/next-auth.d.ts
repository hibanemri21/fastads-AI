import "next-auth"
import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: string
      restaurantName?: string
      image?: string
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    role: string
    restaurantName?: string
    image?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
    restaurantName?: string
    image?: string
  }
}
