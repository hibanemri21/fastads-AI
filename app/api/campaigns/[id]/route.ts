import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("fastads")

    const campaign = await db.collection("campaigns").findOne({
      _id: new ObjectId(params.id),
    })

    if (!campaign) {
      return NextResponse.json({ error: "Campaign not found" }, { status: 404 })
    }

    // Check if user has access to this campaign
    if (session.user.role !== "admin" && campaign.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    return NextResponse.json({
      ...campaign,
      id: campaign._id.toString(),
      _id: undefined,
    })
  } catch (error) {
    console.error("Error fetching campaign:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const data = await request.json()

    const client = await clientPromise
    const db = client.db("fastads")

    // Check if campaign exists and user has access
    const existingCampaign = await db.collection("campaigns").findOne({
      _id: new ObjectId(params.id),
    })

    if (!existingCampaign) {
      return NextResponse.json({ error: "Campaign not found" }, { status: 404 })
    }

    if (session.user.role !== "admin" && existingCampaign.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    // Update campaign
    const updateData = {
      ...data,
      updatedAt: new Date(),
    }

    await db.collection("campaigns").updateOne({ _id: new ObjectId(params.id) }, { $set: updateData })

    // Log activity
    await db.collection("activities").insertOne({
      userId: session.user.id,
      action: "update_campaign",
      details: `Campaign "${existingCampaign.name}" updated`,
      campaignId: params.id,
      timestamp: new Date(),
    })

    return NextResponse.json({
      ...existingCampaign,
      ...updateData,
      id: params.id,
      _id: undefined,
    })
  } catch (error) {
    console.error("Error updating campaign:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("fastads")

    // Check if campaign exists and user has access
    const existingCampaign = await db.collection("campaigns").findOne({
      _id: new ObjectId(params.id),
    })

    if (!existingCampaign) {
      return NextResponse.json({ error: "Campaign not found" }, { status: 404 })
    }

    if (session.user.role !== "admin" && existingCampaign.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    // Delete campaign
    await db.collection("campaigns").deleteOne({
      _id: new ObjectId(params.id),
    })

    // Log activity
    await db.collection("activities").insertOne({
      userId: session.user.id,
      action: "delete_campaign",
      details: `Campaign "${existingCampaign.name}" deleted`,
      campaignId: params.id,
      timestamp: new Date(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting campaign:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
