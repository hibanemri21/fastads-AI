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

    // Get campaigns
    const campaigns = await db.collection("campaigns").find(query).toArray()

    // Calculate metrics
    const totalCampaigns = campaigns.length
    const budgetSpent = campaigns.reduce((total, campaign) => total + (campaign.budget || 0), 0)

    // Get analytics data
    const analytics = await db
      .collection("analytics")
      .aggregate([
        { $match: query },
        {
          $group: {
            _id: null,
            impressions: { $sum: "$impressions" },
            clicks: { $sum: "$clicks" },
            conversions: { $sum: "$conversions" },
          },
        },
      ])
      .toArray()

    const { impressions = 0, clicks = 0, conversions = 0 } = analytics[0] || {}

    return NextResponse.json({
      totalCampaigns,
      budgetSpent,
      impressions,
      clicks,
      conversions,
    })
  } catch (error) {
    console.error("Error fetching metrics:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
