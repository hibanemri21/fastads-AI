import { hash } from "bcryptjs"
import clientPromise from "./mongodb"

// Sample data for initialization
const users = [
  {
    email: "admin@fastads.com",
    password: "fastadsadmin",
    name: "Admin User",
    role: "admin",
    createdAt: new Date(),
  },
  {
    email: "client@fastads.com",
    password: "fastadsclient",
    name: "Client User",
    role: "client",
    restaurantName: "Le Gourmet Tunisien",
    createdAt: new Date(),
  },
]

const campaigns = [
  {
    name: "Promo Maqloub du Weekend",
    platform: "Facebook",
    budget: 50,
    image: "/placeholder.svg?height=60&width=60&text=1",
    caption: "Découvrez notre délicieux Maqloub! Promotion spéciale ce weekend. #food #tunisiancuisine",
    active: true,
    impressions: 1250,
    clicks: 85,
    conversions: 12,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    updatedAt: new Date(),
  },
  {
    name: "Menu Étudiant Spécial",
    platform: "Instagram",
    budget: 30,
    image: "/placeholder.svg?height=60&width=60&text=2",
    caption: "Étudiants, profitez de notre menu spécial à petit prix! #studentdeal #foodlovers",
    active: true,
    impressions: 980,
    clicks: 67,
    conversions: 15,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    updatedAt: new Date(),
  },
  {
    name: "Livraison Gratuite",
    platform: "TikTok",
    budget: 40,
    image: "/placeholder.svg?height=60&width=60&text=3",
    caption: "Commandez en ligne et profitez de la livraison gratuite! #freedelivery #ordernow",
    active: false,
    impressions: 1500,
    clicks: 120,
    conversions: 25,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    updatedAt: new Date(),
  },
]

// Generate analytics data for the past 30 days
function generateAnalyticsData(userId: string) {
  const analytics = []
  const now = new Date()

  for (let i = 30; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    date.setHours(0, 0, 0, 0)

    // Base values that increase over time to simulate growth
    const dayFactor = (30 - i) / 30
    const randomFactor = 0.7 + Math.random() * 0.6 // Random between 0.7 and 1.3

    const impressions = Math.floor(100 * dayFactor * randomFactor)
    const clicks = Math.floor(impressions * (0.05 + Math.random() * 0.05)) // 5-10% CTR
    const conversions = Math.floor(clicks * (0.2 + Math.random() * 0.15)) // 20-35% conversion

    analytics.push({
      userId,
      date,
      impressions,
      clicks,
      conversions,
    })
  }

  return analytics
}

// Generate activity logs
function generateActivities(userId: string, campaignIds: string[]) {
  const activities = []
  const now = new Date()
  const actionTypes = ["create_campaign", "update_campaign", "pause_campaign", "resume_campaign"]

  for (let i = 0; i < 10; i++) {
    const timestamp = new Date(now)
    timestamp.setHours(now.getHours() - i * 2)

    const campaignId = campaignIds[Math.floor(Math.random() * campaignIds.length)]
    const action = actionTypes[Math.floor(Math.random() * actionTypes.length)]
    const campaignName = campaigns[Math.floor(Math.random() * campaigns.length)].name

    let details = ""
    switch (action) {
      case "create_campaign":
        details = `Campagne "${campaignName}" créée`
        break
      case "update_campaign":
        details = `Campagne "${campaignName}" mise à jour`
        break
      case "pause_campaign":
        details = `Campagne "${campaignName}" mise en pause`
        break
      case "resume_campaign":
        details = `Campagne "${campaignName}" réactivée`
        break
    }

    activities.push({
      userId,
      action,
      details,
      campaignId,
      timestamp,
    })
  }

  return activities
}

// Initialize database
export async function initializeDatabase() {
  try {
    console.log("Starting database initialization...")
    const client = await clientPromise
    const db = client.db("fastads")

    // Create collections if they don't exist
    const collections = await db.listCollections().toArray()
    const collectionNames = collections.map((c) => c.name)

    if (!collectionNames.includes("users")) {
      await db.createCollection("users")
    }
    if (!collectionNames.includes("campaigns")) {
      await db.createCollection("campaigns")
    }
    if (!collectionNames.includes("analytics")) {
      await db.createCollection("analytics")
    }
    if (!collectionNames.includes("activities")) {
      await db.createCollection("activities")
    }

    // Create indexes
    await db.collection("users").createIndex({ email: 1 }, { unique: true })
    await db.collection("campaigns").createIndex({ userId: 1 })
    await db.collection("analytics").createIndex({ userId: 1, date: 1 })
    await db.collection("activities").createIndex({ userId: 1, timestamp: -1 })

    // Check if users already exist
    const existingUsers = await db.collection("users").find({}).toArray()
    if (existingUsers.length === 0) {
      console.log("Creating users...")
      // Hash passwords and insert users
      const usersWithHashedPasswords = await Promise.all(
        users.map(async (user) => ({
          ...user,
          password: await hash(user.password, 10),
        })),
      )

      await db.collection("users").insertMany(usersWithHashedPasswords)
      console.log("Users created successfully")

      // Get the client user ID
      const clientUser = await db.collection("users").findOne({ role: "client" })
      if (clientUser) {
        const clientId = clientUser._id.toString()

        // Insert campaigns for the client
        console.log("Creating campaigns...")
        const campaignsWithUserId = campaigns.map((campaign) => ({
          ...campaign,
          userId: clientId,
        }))

        const campaignResult = await db.collection("campaigns").insertMany(campaignsWithUserId)
        console.log("Campaigns created successfully")

        // Get campaign IDs
        const campaignIds = Object.values(campaignResult.insertedIds).map((id) => id.toString())

        // Insert analytics data
        console.log("Creating analytics data...")
        const analyticsData = generateAnalyticsData(clientId)
        await db.collection("analytics").insertMany(analyticsData)
        console.log("Analytics data created successfully")

        // Insert activities
        console.log("Creating activity logs...")
        const activities = generateActivities(clientId, campaignIds)
        await db.collection("activities").insertMany(activities)
        console.log("Activity logs created successfully")
      }
    } else {
      console.log("Database already initialized with users")
    }

    console.log("Database initialization completed successfully")
    return { success: true }
  } catch (error) {
    console.error("Error initializing database:", error)
    return { success: false, error }
  }
}
