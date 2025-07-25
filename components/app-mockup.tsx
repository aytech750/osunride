"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, User, Star, Phone, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AppMockup() {
  const [activeScreen, setActiveScreen] = useState("home")

  const screens = {
    home: (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Good morning, Adebayo!</h2>
            <p className="text-gray-600">Where would you like to go?</p>
          </div>
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-orange-600" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Current location</span>
          </div>
          <div className="p-4 bg-orange-50 rounded-xl flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-orange-600" />
            <span className="text-gray-700">Where to?</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800">Recent destinations</h3>
          {["OAU Campus", "Osogbo Mall", "Ife Grand Resort"].map((place) => (
            <div key={place} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-700">{place}</span>
            </div>
          ))}
        </div>

        <Button
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600"
          onClick={() => setActiveScreen("booking")}
        >
          Book a Ride
        </Button>
      </div>
    ),
    booking: (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Choose your ride</h2>
          <Badge className="bg-green-100 text-green-800">3 drivers nearby</Badge>
        </div>

        <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-2" />
            <p className="text-gray-600">Live map view</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { type: "OsunEconomy", time: "3 min", price: "₦500", icon: "🚗" },
            { type: "OsunComfort", time: "5 min", price: "₦750", icon: "🚙" },
            { type: "OsunKeke", time: "2 min", price: "₦300", icon: "🛺" },
          ].map((ride) => (
            <div
              key={ride.type}
              className="p-4 border-2 border-orange-200 rounded-xl hover:border-orange-400 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{ride.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-800">{ride.type}</div>
                    <div className="text-sm text-gray-600">{ride.time} away</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-orange-600">{ride.price}</div>
              </div>
            </div>
          ))}
        </div>

        <Button
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600"
          onClick={() => setActiveScreen("driver")}
        >
          Confirm Booking
        </Button>
      </div>
    ),
    driver: (
      <div className="p-6 space-y-6">
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
        </div>

        <div className="bg-blue-50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-gray-800">Toyota Corolla</span>
            <Badge className="bg-blue-100 text-blue-800">ABC 123 XY</Badge>
          </div>
          <div className="text-sm text-gray-600">Your driver is 2 minutes away and heading to your location</div>
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
        </div>

        <div className="flex space-x-3">
          <Button variant="outline" className="flex-1 bg-transparent">
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <MessageCircle className="h-4 w-4 mr-2" />
            Message
          </Button>
        </div>

        <Button className="w-full bg-red-500 hover:bg-red-600">Cancel Ride</Button>
      </div>
    ),
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="relative bg-gradient-to-br from-orange-500 to-blue-600 rounded-3xl p-2 shadow-2xl">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Phone Header */}
          <div className="bg-gray-900 h-6 rounded-t-2xl flex items-center justify-center">
            <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
          </div>

          {/* App Header */}
          <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-bold text-gray-800">OsunRide</span>
            </div>
            <div className="flex space-x-1">
              {["home", "booking", "driver"].map((screen) => (
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
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="h-96 overflow-y-auto"
          >
            {screens[activeScreen]}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
