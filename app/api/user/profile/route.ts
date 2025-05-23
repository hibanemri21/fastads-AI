import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("fastads")

    const user = await db.collection("users").findOne(
      { _id: new ObjectId(session.user.id) },
      { projection: { password: 0 } }, // Exclude password from the result
    )

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      role: user.role,
      restaurantName: user.restaurantName || "",
      image: user.image || "",
    })
  } catch (error) {
    console.error("Error fetching user profile:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const data = await request.json()
    const { name, restaurantName } = data

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("fastads")

    const updateData: any = {
      name,
      updatedAt: new Date(),
    }

    // Only update restaurantName if user is a client
    if (session.user.role === "client" && restaurantName !== undefined) {
      updateData.restaurantName = restaurantName
    }

    await db.collection("users").updateOne({ _id: new ObjectId(session.user.id) }, { $set: updateData })

    // Log activity
    await db.collection("activities").insertOne({
      userId: session.user.id,
      action: "update_profile",
      details: "Profil mis à jour",
      timestamp: new Date(),
    })

    return NextResponse.json({
      id: session.user.id,
      name,
      restaurantName: session.user.role === "client" ? restaurantName : undefined,
    })
  } catch (error) {
    console.error("Error updating user profile:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
