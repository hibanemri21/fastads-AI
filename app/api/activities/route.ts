import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("fastads")

    // Query based on user role
    const query = session.user.role === "admin" ? {} : { userId: session.user.id }

    const activities = await db.collection("activities").find(query).sort({ timestamp: -1 }).limit(10).toArray()

    return NextResponse.json(
      activities.map((activity) => ({
        ...activity,
        id: activity._id.toString(),
        _id: undefined,
      })),
    )
  } catch (error) {
    console.error("Error fetching activities:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
