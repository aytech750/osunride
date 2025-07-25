"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Smartphone, Car, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PassengerAppPrototype } from "@/components/passenger-app-prototype"
import { DriverAppPrototype } from "@/components/driver-app-prototype"

export default function PrototypesPage() {
  const [activeTab, setActiveTab] = useState("passenger")

  const prototypeFeatures = {
    passenger: [
      "Interactive ride booking flow",
      "Real-time driver tracking simulation",
      "Dynamic fare calculation",
      "Wallet management system",
      "Driver rating and feedback",
      "Emergency safety features",
    ],
    driver: [
      "Online/offline status toggle",
      "Ride request notifications",
      "Earnings tracking dashboard",
      "Performance metrics",
      "Navigation integration",
      "Safety and emergency features",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Interactive Prototypes
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the full OsunRide platform with our functional prototypes. Click, interact, and explore all
            features designed for Osun State's transportation needs.
          </p>
        </motion.div>

        {/* Prototype Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="passenger" className="text-lg">
              <Smartphone className="h-5 w-5 mr-2" />
              Passenger App
            </TabsTrigger>
            <TabsTrigger value="driver" className="text-lg">
              <Car className="h-5 w-5 mr-2" />
              Driver App
            </TabsTrigger>
          </TabsList>

          <TabsContent value="passenger" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Prototype Description */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Passenger App Experience
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Explore the complete passenger journey from booking to payment. This interactive prototype
                    demonstrates all key features designed for Osun State users.
                  </p>
                </div>

                <Card className="border-2 border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">Key Features to Try</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {prototypeFeatures.passenger.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">How to Use</h3>
                  <div className="space-y-2 text-blue-700">
                    <p>• Click the navigation dots to switch between screens</p>
                    <p>• Tap buttons and interactive elements to explore features</p>
                    <p>• Try booking a ride and managing your wallet</p>
                    <p>• Experience the complete user journey</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                    <Users className="h-4 w-4 mr-2" />
                    View Target Users
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    See All Features
                  </Button>
                </div>
              </motion.div>

              {/* Passenger App Prototype */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <PassengerAppPrototype />
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="driver" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Prototype Description */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Driver App Experience
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Experience the driver's perspective with our comprehensive prototype. See how drivers manage rides,
                    track earnings, and navigate efficiently across Osun State.
                  </p>
                </div>

                <Card className="border-2 border-green-100">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-600">Key Features to Try</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {prototypeFeatures.driver.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">How to Use</h3>
                  <div className="space-y-2 text-green-700">
                    <p>• Toggle online/offline status to receive ride requests</p>
                    <p>• Accept or decline incoming ride requests</p>
                    <p>• View earnings dashboard and performance metrics</p>
                    <p>• Experience the complete driver workflow</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-green-500 to-blue-500">
                    <Car className="h-4 w-4 mr-2" />
                    Driver Onboarding
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    See All Features
                  </Button>
                </div>
              </motion.div>

              {/* Driver App Prototype */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <DriverAppPrototype />
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Prototype Specifications</h2>
            <p className="text-xl opacity-90">
              These prototypes demonstrate real functionality and user experience design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Interactive Design</h3>
              <p className="text-white/80">Fully clickable interfaces with realistic user flows and state management</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">Real-time Simulation</h3>
              <p className="text-white/80">
                Simulated real-time features like ride requests, tracking, and earnings updates
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-300">User-Centered</h3>
              <p className="text-white/80">
                Designed based on actual user research and Osun State transportation needs
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Build OsunRide?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            These prototypes represent the foundation of a comprehensive transportation platform. Let's bring this
            vision to life for Osun State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
              View Investment Proposal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 bg-transparent"
            >
              Contact Development Team
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
