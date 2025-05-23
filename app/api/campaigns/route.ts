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

    // If admin, get all campaigns, otherwise get only user's campaigns
    const query = session.user.role === "admin" ? {} : { userId: session.user.id }

    const campaigns = await db.collection("campaigns").find(query).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(
      campaigns.map((campaign) => ({
        ...campaign,
        id: campaign._id.toString(),
        _id: undefined,
      })),
    )
  } catch (error) {
    console.error("Error fetching campaigns:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const data = await request.json()

    const client = await clientPromise
    const db = client.db("fastads")

    const campaign = {
      ...data,
      userId: session.user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      active: true,
      impressions: 0,
      clicks: 0,
    }

    const result = await db.collection("campaigns").insertOne(campaign)

    // Log activity
    await db.collection("activities").insertOne({
      userId: session.user.id,
      action: "create_campaign",
      details: `Campaign "${data.name}" created`,
      campaignId: result.insertedId.toString(),
      timestamp: new Date(),
    })

    return NextResponse.json(
      {
        ...campaign,
        id: result.insertedId.toString(),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating campaign:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
