"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MapPin,
  User,
  Star,
  Phone,
  MessageCircle,
  Clock,
  CreditCard,
  Wallet,
  Navigation,
  Shield,
  CheckCircle,
  ArrowLeft,
  Plus,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function PassengerAppPrototype() {
  const [activeScreen, setActiveScreen] = useState("home")
  const [selectedRide, setSelectedRide] = useState(null)
  const [walletBalance, setWalletBalance] = useState(2500)
  const [isBooking, setIsBooking] = useState(false)
  const [rideStatus, setRideStatus] = useState("searching")

  const screens = {
    home: {
      title: "Good morning, Adebayo!",
      subtitle: "Where would you like to go today?",
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Good morning, Adebayo!</h2>
              <p className="text-gray-600">Where would you like to go today?</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-orange-600" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-xl flex items-center space-x-3 border border-green-200">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">OAU Main Gate, Ile-Ife</span>
            </div>
            <div
              className="p-4 bg-orange-50 rounded-xl flex items-center space-x-3 border border-orange-200 cursor-pointer hover:bg-orange-100 transition-colors"
              onClick={() => setActiveScreen("booking")}
            >
              <MapPin className="h-5 w-5 text-orange-600" />
              <span className="text-gray-700">Where to?</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Recent destinations</h3>
            {[
              { name: "Osogbo Mall", time: "2 days ago", icon: "🏬" },
              { name: "Ife Grand Resort", time: "1 week ago", icon: "🏨" },
              { name: "UNIOSUN Campus", time: "2 weeks ago", icon: "🎓" },
            ].map((place, index) => (
              <div
                key={place.name}
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                onClick={() => setActiveScreen("booking")}
              >
                <span className="text-xl">{place.icon}</span>
                <div className="flex-1">
                  <div className="text-gray-700 font-medium">{place.name}</div>
                  <div className="text-sm text-gray-500">{place.time}</div>
                </div>
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-12"
              onClick={() => setActiveScreen("booking")}
            >
              Book a Ride
            </Button>
            <Button variant="outline" className="h-12 bg-transparent" onClick={() => setActiveScreen("wallet")}>
              <Wallet className="h-4 w-4 mr-2" />
              Wallet
            </Button>
          </div>
        </div>
      ),
    },
    booking: {
      title: "Choose your ride",
      subtitle: "3 drivers nearby",
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => setActiveScreen("home")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Badge className="bg-green-100 text-green-800">3 drivers nearby</Badge>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-green-200/50"></div>
            <div className="relative z-10 text-center">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-2" />
              <p className="text-gray-600 font-medium">Live Map View</p>
              <p className="text-sm text-gray-500">OAU → Osogbo Mall (5.2 km)</p>
            </div>
            {/* Animated driver locations */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-6 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-8 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          </div>

          <div className="space-y-3">
            {[
              {
                type: "OsunRide Car",
                time: "3 min",
                price: "₦500",
                icon: "🚗",
                capacity: "1-4 passengers",
                id: "car",
              },
              {
                type: "OsunRide Comfort",
                time: "5 min",
                price: "₦750",
                icon: "🚙",
                capacity: "1-4 passengers",
                id: "comfort",
              },
              {
                type: "OsunKeke",
                time: "2 min",
                price: "₦300",
                icon: "🛺",
                capacity: "1-3 passengers",
                id: "keke",
              },
            ].map((ride) => (
              <div
                key={ride.type}
                className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedRide === ride.id
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-200 hover:border-orange-300 bg-white"
                }`}
                onClick={() => setSelectedRide(ride.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{ride.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-800">{ride.type}</div>
                      <div className="text-sm text-gray-600">
                        {ride.time} away • {ride.capacity}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">{ride.price}</div>
                    <div className="text-xs text-gray-500">5.2 km</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Payment Method</span>
              <div className="flex items-center space-x-2">
                <Wallet className="h-4 w-4 text-blue-600" />
                <span className="font-semibold">Wallet (₦{walletBalance})</span>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 h-12"
            onClick={() => {
              setIsBooking(true)
              setTimeout(() => {
                setActiveScreen("driver")
                setIsBooking(false)
              }, 2000)
            }}
            disabled={!selectedRide || isBooking}
          >
            {isBooking ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Finding Driver...</span>
              </div>
            ) : (
              "Confirm Booking"
            )}
          </Button>
        </div>
      ),
    },
    driver: {
      title: "Driver Found",
      subtitle: "Tunde is coming to pick you up",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="h-10 w-10 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Tunde Adebayo</h2>
            <div className="flex items-center justify-center space-x-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-gray-600 ml-2">4.9 (234 rides)</span>
            </div>
            <Badge className="mt-2 bg-green-100 text-green-800">Verified Driver</Badge>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-gray-800">Toyota Corolla - Silver</span>
              <Badge className="bg-blue-100 text-blue-800">ABC 123 XY</Badge>
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Your driver is <span className="font-semibold text-blue-600">2 minutes away</span> and heading to your
              location
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600">Live tracking active</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Pickup</span>
              <span className="font-semibold">OAU Main Gate</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Destination</span>
              <span className="font-semibold">Osogbo Mall</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Fare</span>
              <span className="font-semibold text-orange-600">₦500</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">ETA</span>
              <span className="font-semibold text-green-600">12 minutes</span>
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
              Track
            </Button>
          </div>

          <Button
            variant="outline"
            className="w-full border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
            onClick={() => setActiveScreen("home")}
          >
            Cancel Ride
          </Button>

          <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">Safety Features Active</span>
            </div>
            <div className="text-xs text-orange-700 mt-1">
              Emergency button, live tracking, and 24/7 support available
            </div>
          </div>
        </div>
      ),
    },
    wallet: {
      title: "My Wallet",
      subtitle: `Balance: ₦${walletBalance}`,
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => setActiveScreen("home")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          <Card className="bg-gradient-to-r from-orange-500 to-blue-600 text-white p-6 rounded-xl">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">₦{walletBalance}</div>
              <div className="text-orange-100">Available Balance</div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Button
              className="bg-green-500 hover:bg-green-600 h-12"
              onClick={() => setWalletBalance((prev) => prev + 1000)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Money
            </Button>
            <Button variant="outline" className="h-12 bg-transparent">
              <CreditCard className="h-4 w-4 mr-2" />
              Cards
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Recent Transactions</h3>
            {[
              { type: "Ride Payment", amount: "-₦500", date: "Today, 2:30 PM", status: "completed" },
              { type: "Wallet Top-up", amount: "+₦2000", date: "Yesterday, 10:15 AM", status: "completed" },
              { type: "Ride Payment", amount: "-₦300", date: "2 days ago", status: "completed" },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">{transaction.type}</div>
                  <div className="text-sm text-gray-600">{transaction.date}</div>
                </div>
                <div className="text-right">
                  <div
                    className={`font-semibold ${
                      transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount}
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-blue-800">Secure Payments</span>
            </div>
            <div className="text-sm text-blue-700">
              Your wallet is protected with bank-level security and government-approved payment systems.
            </div>
          </div>
        </div>
      ),
    },
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="relative bg-gradient-to-br from-orange-500 to-blue-600 rounded-3xl p-2 shadow-2xl">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Phone Header */}
          <div className="bg-gray-900 h-6 rounded-t-2xl flex items-center justify-center">
            <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
          </div>

          {/* Status Bar */}
          <div className="bg-white px-4 py-2 flex items-center justify-between text-sm">
            <span className="font-medium">9:41 AM</span>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
              </div>
              <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <div>
                <span className="font-bold text-gray-800">OsunRide</span>
                <div className="text-xs text-green-600">Online</div>
              </div>
            </div>
            <div className="flex space-x-1">
              {["home", "booking", "driver", "wallet"].map((screen) => (
                <button
                  key={screen}
                  onClick={() => setActiveScreen(screen)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeScreen === screen ? "bg-orange-500" : "bg-gray-300"
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
                { id: "home", icon: <MapPin className="h-5 w-5" />, label: "Home" },
                { id: "booking", icon: <Navigation className="h-5 w-5" />, label: "Rides" },
                { id: "wallet", icon: <Wallet className="h-5 w-5" />, label: "Wallet" },
                { id: "profile", icon: <User className="h-5 w-5" />, label: "Profile" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveScreen(item.id)}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                    activeScreen === item.id ? "text-orange-600 bg-orange-50" : "text-gray-500 hover:text-gray-700"
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
