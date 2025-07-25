import { AppMockup } from "@/components/app-mockup"

export default function MockupsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            OsunRide App Experience
          </h1>
          <p className="text-xl text-gray-600">Interactive prototype showcasing the user journey</p>
        </div>
        <AppMockup />
      </div>
    </div>
  )
}
