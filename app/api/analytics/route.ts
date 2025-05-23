import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const days = Number.parseInt(searchParams.get("days") || "30")

    const client = await clientPromise
    const db = client.db("fastads")

    // Calculate date range
    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    // Query based on user role
    const matchStage =
      session.user.role === "admin"
        ? { date: { $gte: startDate, $lte: endDate } }
        : { userId: session.user.id, date: { $gte: startDate, $lte: endDate } }

    // Aggregate analytics data
    const analyticsData = await db
      .collection("analytics")
      .aggregate([
        { $match: matchStage },
        { $sort: { date: 1 } },
        {
          $group: {
            _id: {
              $dateToString: { format: "%Y-%m-%d", date: "$date" },
            },
            impressions: { $sum: "$impressions" },
            clicks: { $sum: "$clicks" },
            conversions: { $sum: "$conversions" },
          },
        },
        {
          $project: {
            _id: 0,
            date: "$_id",
            impressions: 1,
            clicks: 1,
            conversions: 1,
          },
        },
        { $sort: { date: 1 } },
      ])
      .toArray()

    return NextResponse.json(analyticsData)
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
