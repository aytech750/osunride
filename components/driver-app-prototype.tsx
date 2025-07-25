"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MapPin,
  User,
  Star,
  Phone,
  MessageCircle,
  Clock,
  DollarSign,
  Navigation,
  CheckCircle,
  X,
  ArrowLeft,
  TrendingUp,
  Calendar,
  AlertTriangle,
  Shield,
  Battery,
  Wifi,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DriverAppPrototype() {
  const [activeScreen, setActiveScreen] = useState("dashboard")
  const [isOnline, setIsOnline] = useState(true)
  const [currentRide, setCurrentRide] = useState(null)
  const [earnings, setEarnings] = useState({ today: 4500, week: 28500, month: 125000 })
  const [rideRequests, setRideRequests] = useState([])

  const generateRideRequest = () => {
    const requests = [
      {
        id: 1,
        passenger: "Adebayo O.",
        pickup: "OAU Main Gate",
        destination: "Osogbo Mall",
        distance: "5.2 km",
        fare: 500,
        rating: 4.8,
        estimatedTime: "12 mins",
      },
      {
        id: 2,
        passenger: "Fatima A.",
        pickup: "Ife Grand Resort",
        destination: "UNIOSUN Campus",
        distance: "3.8 km",
        fare: 400,
        rating: 4.9,
        estimatedTime: "8 mins",
      },
    ]
    return requests[Math.floor(Math.random() * requests.length)]
  }

  useEffect(() => {
    if (isOnline && activeScreen === "dashboard") {
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          setRideRequests([generateRideRequest()])
        }
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [isOnline, activeScreen])

  const screens = {
    dashboard: {
      title: "Good morning, Tunde!",
      subtitle: isOnline ? "You're online and ready for rides" : "You're offline",
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Good morning, Tunde!</h2>
              <p className="text-gray-600">{isOnline ? "You're online and ready for rides" : "You're offline"}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-blue-600" />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 ${
                  isOnline
                    ? "bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-200"
                    : "bg-gradient-to-r from-gray-400 to-gray-500"
                }`}
              >
                {isOnline ? "GO ONLINE" : "GO OFFLINE"}
              </button>
              {isOnline && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Card className="text-center p-4">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-green-600">₦{earnings.today}</div>
                <div className="text-sm text-gray-600">Today</div>
              </CardContent>
            </Card>
            <Card className="text-center p-4">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-blue-600">₦{earnings.week}</div>
                <div className="text-sm text-gray-600">This Week</div>
              </CardContent>
            </Card>
            <Card className="text-center p-4">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-orange-600">₦{earnings.month}</div>
                <div className="text-sm text-gray-600">This Month</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Today's Activity</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-blue-700">Rides Completed</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-2xl font-bold text-green-600">4.9</div>
                <div className="text-sm text-green-700">Average Rating</div>
              </div>
            </div>
          </div>

          {isOnline && (
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-green-800">Online Status</span>
              </div>
              <div className="text-sm text-green-700">
                You're visible to passengers in your area. Stay safe and drive responsibly!
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-12 bg-transparent" onClick={() => setActiveScreen("earnings")}>
              <TrendingUp className="h-4 w-4 mr-2" />
              Earnings
            </Button>
            <Button variant="outline" className="h-12 bg-transparent" onClick={() => setActiveScreen("navigation")}>
              <Navigation className="h-4 w-4 mr-2" />
              Navigate
            </Button>
          </div>
        </div>
      ),
    },
    rideRequest: {
      title: "New Ride Request",
      subtitle: "Passenger waiting for pickup",
      content: (
        <div className="space-y-6">
          {rideRequests.length > 0 && (
            <div className="space-y-4">
              {rideRequests.map((request) => (
                <Card key={request.id} className="border-2 border-orange-300 bg-orange-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">New Ride Request</CardTitle>
                      <Badge className="bg-orange-100 text-orange-800">
                        <Clock className="h-3 w-3 mr-1" />
                        {request.estimatedTime}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{request.passenger}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{request.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{request.pickup}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{request.destination}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">Distance</div>
                        <div className="font-semibold">{request.distance}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Fare</div>
                        <div className="font-semibold text-green-600">₦{request.fare}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        className="bg-green-500 hover:bg-green-600"
                        onClick={() => {
                          setCurrentRide(request)
                          setActiveScreen("activeRide")
                          setRideRequests([])
                        }}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Accept
                      </Button>
                      <Button
                        variant="outline"
                        className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                        onClick={() => setRideRequests([])}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Decline
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <Button variant="outline" className="w-full bg-transparent" onClick={() => setActiveScreen("dashboard")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      ),
    },
    activeRide: {
      title: "Active Ride",
      subtitle: "En route to passenger",
      content: (
        <div className="space-y-6">
          {currentRide && (
            <>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">{currentRide.passenger}</h2>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-600">{currentRide.rating} rating</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-blue-600">2 mins</div>
                  <div className="text-sm text-blue-700">to pickup location</div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-blue-700">Navigation active</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-gray-700">Pickup</span>
                  <span className="font-semibold">{currentRide.pickup}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                  <span className="text-gray-700">Destination</span>
                  <span className="font-semibold">{currentRide.destination}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <span className="text-gray-700">Fare</span>
                  <span className="font-semibold text-green-600">₦{currentRide.fare}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button variant="outline" className="bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat
                </Button>
                <Button variant="outline" className="bg-transparent">
                  <Navigation className="h-4 w-4 mr-2" />
                  Navigate
                </Button>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => {
                    setEarnings((prev) => ({
                      ...prev,
                      today: prev.today + currentRide.fare,
                    }))
                    setCurrentRide(null)
                    setActiveScreen("dashboard")
                  }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Complete Ride
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                  onClick={() => {
                    setCurrentRide(null)
                    setActiveScreen("dashboard")
                  }}
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Report Issue
                </Button>
              </div>

              <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-800">Safety First</span>
                </div>
                <div className="text-xs text-orange-700 mt-1">
                  Emergency support available 24/7. Drive safely and follow traffic rules.
                </div>
              </div>
            </>
          )}
        </div>
      ),
    },
    earnings: {
      title: "Earnings Dashboard",
      subtitle: "Track your income and performance",
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => setActiveScreen("dashboard")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button variant="ghost" size="sm">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>

          <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">₦{earnings.month}</div>
              <div className="text-green-100">Total Earnings This Month</div>
              <div className="text-sm text-green-200 mt-2">+23% from last month</div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">₦{earnings.today}</div>
                <div className="text-sm text-gray-600">Today</div>
                <div className="text-xs text-green-600 mt-1">12 rides</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">₦{earnings.week}</div>
                <div className="text-sm text-gray-600">This Week</div>
                <div className="text-xs text-blue-600 mt-1">68 rides</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-600">4.9</div>
                <div className="text-sm text-yellow-700">Average Rating</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-purple-700">Acceptance Rate</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <div className="text-2xl font-bold text-indigo-600">8.5</div>
                <div className="text-sm text-indigo-700">Hours Online</div>
              </div>
              <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                <div className="text-2xl font-bold text-pink-600">₦375</div>
                <div className="text-sm text-pink-700">Avg. per Hour</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Recent Earnings</h3>
            {[
              { date: "Today, 3:45 PM", amount: "₦500", trip: "OAU → Osogbo Mall" },
              { date: "Today, 2:30 PM", amount: "₦300", trip: "Ife → UNIOSUN" },
              { date: "Today, 1:15 PM", amount: "₦750", trip: "Osogbo → Ede" },
            ].map((earning, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">{earning.trip}</div>
                  <div className="text-sm text-gray-600">{earning.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-green-600">{earning.amount}</div>
                  <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full bg-gradient-to-r from-green-500 to-green-600">
            <DollarSign className="h-4 w-4 mr-2" />
            Request Payout
          </Button>
        </div>
      ),
    },
  }

  // Auto-switch to ride request screen when new request comes in
  useEffect(() => {
    if (rideRequests.length > 0) {
      setActiveScreen("rideRequest")
    }
  }, [rideRequests])

  return (
    <div className="max-w-md mx-auto">
      <div className="relative bg-gradient-to-br from-blue-500 to-green-600 rounded-3xl p-2 shadow-2xl">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Phone Header */}
          <div className="bg-gray-900 h-6 rounded-t-2xl flex items-center justify-center">
            <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
          </div>

          {/* Status Bar */}
          <div className="bg-white px-4 py-2 flex items-center justify-between text-sm">
            <span className="font-medium">9:41 AM</span>
            <div className="flex items-center space-x-2">
              <Wifi className="h-4 w-4 text-gray-600" />
              <Battery className="h-4 w-4 text-green-600" />
              <span className="text-green-600">100%</span>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <div>
                <span className="font-bold text-gray-800">OsunRide Driver</span>
                <div className={`text-xs ${isOnline ? "text-green-600" : "text-gray-500"}`}>
                  {isOnline ? "Online" : "Offline"}
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              {["dashboard", "rideRequest", "activeRide", "earnings"].map((screen) => (
                <button
                  key={screen}
                  onClick={() => setActiveScreen(screen)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeScreen === screen ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Screen Content */}
          <div className="h-[500px] overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                {screens[activeScreen].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Navigation */}
          <div className="bg-white border-t border-gray-100 p-4">
            <div className="flex justify-around">
              {[
                { id: "dashboard", icon: <MapPin className="h-5 w-5" />, label: "Home" },
                { id: "earnings", icon: <DollarSign className="h-5 w-5" />, label: "Earnings" },
                { id: "navigation", icon: <Navigation className="h-5 w-5" />, label: "Navigate" },
                { id: "profile", icon: <User className="h-5 w-5" />, label: "Profile" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveScreen(item.id)}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                    activeScreen === item.id ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {item.icon}
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
