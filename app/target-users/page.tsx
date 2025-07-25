"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Users,
  GraduationCap,
  Briefcase,
  Camera,
  Heart,
  ShoppingBag,
  Car,
  Bike,
  Star,
  TrendingUp,
  Shield,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TargetUsersPage() {
  const [activeTab, setActiveTab] = useState("passengers")

  const passengerSegments = [
    {
      title: "University Students",
      icon: <GraduationCap className="h-8 w-8" />,
      description: "Students from OAU, UNIOSUN, and other institutions",
      size: "40%",
      needs: ["Affordable rides", "Campus to city transport", "Late night safety", "Group bookings"],
      painPoints: ["Limited budget", "Irregular schedules", "Safety concerns", "Payment flexibility"],
      solutions: ["Student discounts", "Campus pickup points", "24/7 availability", "Multiple payment options"],
      demographics: {
        ageRange: "18-25 years",
        income: "₦20,000-50,000/month",
        techSavvy: "High",
        pricesensitivity: "Very High",
      },
      image: "🎓",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Professionals & Workers",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Government workers, business professionals, and office employees",
      size: "35%",
      needs: ["Reliable daily commute", "Professional service", "Time efficiency", "Corporate bookings"],
      painPoints: ["Traffic delays", "Parking issues", "Fuel costs", "Vehicle maintenance"],
      solutions: ["Priority booking", "Corporate accounts", "Route optimization", "Professional drivers"],
      demographics: {
        ageRange: "25-55 years",
        income: "₦80,000-300,000/month",
        techSavvy: "Medium-High",
        pricesensitivity: "Medium",
      },
      image: "💼",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Tourists & Festival Visitors",
      icon: <Camera className="h-8 w-8" />,
      description: "Visitors during Osun-Osogbo festival and other cultural events",
      size: "10%",
      needs: ["City navigation", "Cultural site access", "Language support", "Tourist packages"],
      painPoints: ["Unfamiliar routes", "Language barriers", "Overcharging", "Safety concerns"],
      solutions: ["Tourist guides", "Fixed pricing", "Multi-language support", "Cultural tour packages"],
      demographics: {
        ageRange: "20-60 years",
        income: "Variable",
        techSavvy: "Medium",
        pricesensitivity: "Low-Medium",
      },
      image: "📸",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Elderly & Mobility-Assisted",
      icon: <Heart className="h-8 w-8" />,
      description: "Senior citizens and people needing reliable, comfortable transport",
      size: "8%",
      needs: ["Comfortable vehicles", "Patient drivers", "Medical appointments", "Family assistance"],
      painPoints: ["Physical limitations", "Technology barriers", "Trust issues", "Emergency needs"],
      solutions: ["Assisted booking", "Family accounts", "Medical priority", "Comfort vehicles"],
      demographics: {
        ageRange: "60+ years",
        income: "₦30,000-100,000/month",
        techSavvy: "Low",
        pricesensitivity: "Low",
      },
      image: "❤️",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Market Traders & Commuters",
      icon: <ShoppingBag className="h-8 w-8" />,
      description: "Daily market traders, artisans, and regular commuters",
      size: "7%",
      needs: ["Early morning rides", "Cargo space", "Regular routes", "Bulk bookings"],
      painPoints: ["Early hours", "Heavy goods", "Cost accumulation", "Route familiarity"],
      solutions: ["Early bird service", "Cargo vehicles", "Loyalty programs", "Route subscriptions"],
      demographics: {
        ageRange: "25-50 years",
        income: "₦40,000-120,000/month",
        techSavvy: "Low-Medium",
        pricesensitivity: "High",
      },
      image: "🛒",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const driverSegments = [
    {
      title: "Car Owners (Phase 1)",
      icon: <Car className="h-8 w-8" />,
      description: "Owners of Corolla, Camry, Sienna, and similar vehicles",
      vehicles: ["Toyota Corolla", "Toyota Camry", "Toyota Sienna", "Honda Accord", "Hyundai Elantra"],
      requirements: ["Valid driver's license", "Vehicle registration", "Insurance", "Clean driving record"],
      earnings: "₦15,000-35,000/week",
      benefits: ["Flexible hours", "90% commission", "Fuel efficiency", "Professional image"],
      challenges: ["Vehicle maintenance", "Fuel costs", "Insurance", "Competition"],
      support: ["Maintenance partnerships", "Fuel discounts", "Insurance deals", "Driver training"],
      image: "🚗",
      color: "from-blue-500 to-indigo-500",
      phase: "Active",
    },
    {
      title: "Tricycle Operators (Phase 2)",
      icon: <Bike className="h-8 w-8" />,
      description: "Keke Napep operators for short-distance and congested area transport",
      vehicles: ["Bajaj RE", "TVS King", "Piaggio Ape", "Mahindra Alfa"],
      requirements: ["Commercial license", "Tricycle registration", "Route permit", "Safety training"],
      earnings: "₦8,000-18,000/week",
      benefits: ["Lower fuel costs", "Narrow road access", "Quick turnaround", "Local knowledge"],
      challenges: ["Weather exposure", "Limited capacity", "Regulatory issues", "Safety concerns"],
      support: ["Weather protection", "Safety gear", "Route optimization", "Regulatory assistance"],
      image: "🛺",
      color: "from-green-500 to-emerald-500",
      phase: "Coming Soon",
    },
    {
      title: "Motorcycle Riders (Phase 3)",
      icon: <Bike className="h-8 w-8" />,
      description: "Okada riders for remote areas and quick deliveries",
      vehicles: ["Honda CB", "Bajaj Boxer", "TVS Apache", "Yamaha Crux"],
      requirements: ["Motorcycle license", "Safety certification", "Helmet compliance", "Route training"],
      earnings: "₦5,000-12,000/week",
      benefits: ["Traffic navigation", "Remote area access", "Quick delivery", "Low operating cost"],
      challenges: ["Safety risks", "Weather conditions", "Limited capacity", "Regulatory restrictions"],
      support: ["Safety training", "Protective gear", "Weather alerts", "Emergency response"],
      image: "🏍️",
      color: "from-orange-500 to-yellow-500",
      phase: "Future",
    },
  ]

  const marketInsights = [
    {
      metric: "Total Addressable Market",
      value: "4.7M people",
      description: "Across Osun State urban areas",
      growth: "+3.2% annually",
    },
    {
      metric: "Daily Transport Demand",
      value: "850K trips",
      description: "Estimated daily transportation needs",
      growth: "+15% during festivals",
    },
    {
      metric: "Smartphone Penetration",
      value: "68%",
      description: "Among target demographics",
      growth: "+12% annually",
    },
    {
      metric: "Potential Drivers",
      value: "45K vehicles",
      description: "Eligible private vehicles in Osun",
      growth: "+8% annually",
    },
  ]

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
            Our Target Users
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Understanding the diverse transportation needs across Osun State - from university students to
            professionals, tourists to daily commuters
          </p>
        </motion.div>

        {/* Market Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {marketInsights.map((insight, index) => (
            <Card
              key={insight.metric}
              className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-orange-600">{insight.value}</CardTitle>
                <p className="font-semibold text-gray-800">{insight.metric}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-2">{insight.description}</p>
                <Badge className="bg-green-100 text-green-800">{insight.growth}</Badge>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* User Segments Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="passengers" className="text-lg">
              <Users className="h-5 w-5 mr-2" />
              Passengers
            </TabsTrigger>
            <TabsTrigger value="drivers" className="text-lg">
              <Car className="h-5 w-5 mr-2" />
              Drivers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="passengers" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Passenger Segments
              </h2>
              <p className="text-xl text-gray-600">
                Diverse user groups with unique transportation needs across Osun State
              </p>
            </div>

            <div className="space-y-12">
              {passengerSegments.map((segment, index) => (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${segment.color}`}></div>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Segment Overview */}
                        <div className="lg:col-span-1">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="text-6xl">{segment.image}</div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800">{segment.title}</h3>
                              <Badge className="bg-blue-100 text-blue-800 text-lg px-3 py-1">
                                {segment.size} of market
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed mb-6">{segment.description}</p>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-800">Demographics</h4>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div>
                                <span className="text-gray-500">Age:</span>
                                <div className="font-medium">{segment.demographics.ageRange}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Income:</span>
                                <div className="font-medium">{segment.demographics.income}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Tech Savvy:</span>
                                <div className="font-medium">{segment.demographics.techSavvy}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Price Sensitivity:</span>
                                <div className="font-medium">{segment.demographics.pricesensitivity}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Needs & Pain Points */}
                        <div className="lg:col-span-2">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                                <Star className="h-4 w-4 mr-2" />
                                Key Needs
                              </h4>
                              <div className="space-y-2">
                                {segment.needs.map((need, needIndex) => (
                                  <div
                                    key={needIndex}
                                    className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg"
                                  >
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-green-700">{need}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-red-600 mb-4 flex items-center">
                                <Shield className="h-4 w-4 mr-2" />
                                Pain Points
                              </h4>
                              <div className="space-y-2">
                                {segment.painPoints.map((pain, painIndex) => (
                                  <div key={painIndex} className="flex items-center space-x-2 p-2 bg-red-50 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-sm text-red-700">{pain}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-blue-600 mb-4 flex items-center">
                                <ArrowRight className="h-4 w-4 mr-2" />
                                Our Solutions
                              </h4>
                              <div className="space-y-2">
                                {segment.solutions.map((solution, solutionIndex) => (
                                  <div
                                    key={solutionIndex}
                                    className="flex items-center space-x-2 p-2 bg-blue-50 rounded-lg"
                                  >
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-blue-700">{solution}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="drivers" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Driver Categories
              </h2>
              <p className="text-xl text-gray-600">
                Multi-phase approach to onboard different vehicle types across Osun State
              </p>
            </div>

            <div className="space-y-8">
              {driverSegments.map((segment, index) => (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${segment.color}`}></div>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-4 gap-8">
                        {/* Segment Header */}
                        <div className="lg:col-span-1">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="text-6xl">{segment.image}</div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800">{segment.title}</h3>
                              <Badge
                                className={`text-lg px-3 py-1 ${
                                  segment.phase === "Active"
                                    ? "bg-green-100 text-green-800"
                                    : segment.phase === "Coming Soon"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {segment.phase}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed mb-6">{segment.description}</p>
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <div className="text-sm text-green-600 mb-1">Potential Earnings</div>
                            <div className="text-2xl font-bold text-green-700">{segment.earnings}</div>
                          </div>
                        </div>

                        {/* Vehicle Types */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                            <Car className="h-4 w-4 mr-2" />
                            Vehicle Types
                          </h4>
                          <div className="space-y-2">
                            {segment.vehicles.map((vehicle, vehicleIndex) => (
                              <div key={vehicleIndex} className="p-2 bg-gray-50 rounded-lg">
                                <span className="text-sm font-medium text-gray-700">{vehicle}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Requirements & Benefits */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                            <Shield className="h-4 w-4 mr-2" />
                            Requirements
                          </h4>
                          <div className="space-y-2 mb-6">
                            {segment.requirements.map((req, reqIndex) => (
                              <div key={reqIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">{req}</span>
                              </div>
                            ))}
                          </div>

                          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Benefits
                          </h4>
                          <div className="space-y-2">
                            {segment.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Challenges & Support */}
                        <div>
                          <h4 className="font-semibold text-red-600 mb-4">Challenges</h4>
                          <div className="space-y-2 mb-6">
                            {segment.challenges.map((challenge, challengeIndex) => (
                              <div key={challengeIndex} className="p-2 bg-red-50 rounded-lg">
                                <span className="text-sm text-red-700">{challenge}</span>
                              </div>
                            ))}
                          </div>

                          <h4 className="font-semibold text-blue-600 mb-4">Our Support</h4>
                          <div className="space-y-2">
                            {segment.support.map((support, supportIndex) => (
                              <div key={supportIndex} className="p-2 bg-blue-50 rounded-lg">
                                <span className="text-sm text-blue-700">{support}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Join OsunRide?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Whether you're looking for reliable transportation or want to earn as a driver, OsunRide has something for
            everyone in Osun State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
              Book Your First Ride
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 bg-transparent"
            >
              Become a Driver
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
