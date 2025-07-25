"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Smartphone,
  MapPin,
  CreditCard,
  Shield,
  Star,
  Car,
  TrendingUp,
  Navigation,
  Users,
  AlertTriangle,
  Zap,
  Calendar,
  Wallet,
  BarChart3,
  Package,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("passenger")

  const passengerFeatures = [
    {
      title: "One-Click Ride Booking",
      icon: <Zap className="h-8 w-8" />,
      description: "Book rides instantly or schedule for later with just one tap",
      details: [
        "Instant booking for immediate rides",
        "Schedule rides up to 7 days in advance",
        "Repeat booking for regular routes",
        "Group booking for multiple passengers",
        "Favorite locations for quick access",
      ],
      benefits: ["Save time", "Plan ahead", "Convenience", "Group travel"],
      demo: "Try booking simulation",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Real-Time Driver Tracking",
      icon: <MapPin className="h-8 w-8" />,
      description: "Track your driver's location and estimated arrival time in real-time",
      details: [
        "Live GPS tracking of driver location",
        "Accurate ETA calculations",
        "Route visualization on map",
        "Driver photo and vehicle details",
        "Share trip status with family/friends",
      ],
      benefits: ["Peace of mind", "Better planning", "Safety", "Transparency"],
      demo: "View live tracking",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Upfront Fare Estimation",
      icon: <CreditCard className="h-8 w-8" />,
      description: "Know your fare before booking with transparent pricing",
      details: [
        "Accurate fare calculation before booking",
        "No surge pricing surprises",
        "Distance and time-based pricing",
        "Special rates for students and seniors",
        "Promotional discounts and offers",
      ],
      benefits: ["Budget planning", "No surprises", "Fair pricing", "Savings"],
      demo: "Calculate fare",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Multi-Payment Wallet",
      icon: <Wallet className="h-8 w-8" />,
      description: "Flexible payment options including cards, USSD, transfers, and cash",
      details: [
        "In-app wallet with multiple funding options",
        "Credit/debit card payments",
        "USSD code for feature phones",
        "Bank transfer integration",
        "Cash payment option",
        "Transaction history and receipts",
      ],
      benefits: ["Flexibility", "Convenience", "Financial inclusion", "Security"],
      demo: "Explore payment options",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Emergency Support System",
      icon: <Shield className="h-8 w-8" />,
      description: "24/7 emergency button and support chat for your safety",
      details: [
        "One-tap emergency button",
        "Automatic location sharing with emergency contacts",
        "24/7 support chat in English and Yoruba",
        "Integration with local emergency services",
        "Trip sharing with trusted contacts",
      ],
      benefits: ["Safety first", "Peace of mind", "Quick response", "Local support"],
      demo: "Safety features tour",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Rating & Feedback System",
      icon: <Star className="h-8 w-8" />,
      description: "Rate drivers and provide feedback to maintain service quality",
      details: [
        "5-star rating system for drivers",
        "Detailed feedback categories",
        "Driver performance tracking",
        "Service improvement suggestions",
        "Reward system for good ratings",
      ],
      benefits: ["Quality assurance", "Service improvement", "Community building", "Recognition"],
      demo: "Rate a ride",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const driverFeatures = [
    {
      title: "Smart Ride Management",
      icon: <Car className="h-8 w-8" />,
      description: "Accept or decline rides with full passenger and trip information",
      details: [
        "Ride request notifications with passenger details",
        "Trip information before acceptance",
        "Passenger rating and ride history",
        "Estimated earnings per trip",
        "Route preview and distance",
      ],
      benefits: ["Informed decisions", "Better earnings", "Safety", "Efficiency"],
      demo: "Ride management demo",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Revenue Analytics Dashboard",
      icon: <BarChart3 className="h-8 w-8" />,
      description: "Track daily, weekly, and monthly earnings with detailed analytics",
      details: [
        "Real-time earnings tracking",
        "Daily, weekly, monthly reports",
        "Trip completion statistics",
        "Peak hour analysis",
        "Performance metrics and trends",
        "Tax-ready earning statements",
      ],
      benefits: ["Financial planning", "Performance tracking", "Tax compliance", "Growth insights"],
      demo: "View analytics",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Integrated Navigation",
      icon: <Navigation className="h-8 w-8" />,
      description: "Real-time route guidance powered by Google Maps",
      details: [
        "Turn-by-turn navigation",
        "Real-time traffic updates",
        "Alternative route suggestions",
        "Offline map capability",
        "Local landmark integration",
      ],
      benefits: ["Efficient routes", "Time saving", "Fuel efficiency", "Local knowledge"],
      demo: "Navigation preview",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Passenger Information System",
      icon: <Users className="h-8 w-8" />,
      description: "Access passenger details and preferences before pickup",
      details: [
        "Passenger name and photo",
        "Rating and ride history",
        "Special requests or notes",
        "Pickup and destination details",
        "Contact information",
      ],
      benefits: ["Better service", "Safety", "Personalization", "Preparation"],
      demo: "Passenger info view",
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Performance Dashboard",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "Monitor your driver performance and improvement areas",
      details: [
        "Driver rating and feedback",
        "Acceptance rate tracking",
        "Completion rate statistics",
        "Customer satisfaction scores",
        "Performance improvement tips",
      ],
      benefits: ["Self-improvement", "Higher earnings", "Better ratings", "Professional growth"],
      demo: "Performance metrics",
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Emergency & Safety Features",
      icon: <AlertTriangle className="h-8 w-8" />,
      description: "SOS button and panic alert system for driver safety",
      details: [
        "One-touch SOS button",
        "Automatic emergency contact notification",
        "Location sharing with support team",
        "Integration with local security",
        "Incident reporting system",
      ],
      benefits: ["Driver safety", "Quick response", "Peace of mind", "Support network"],
      demo: "Safety features",
      color: "from-red-500 to-pink-500",
    },
  ]

  const additionalFeatures = [
    {
      title: "Delivery & Parcel Service",
      icon: <Package className="h-8 w-8" />,
      description: "Motorcycle riders for quick parcel and document delivery",
      details: [
        "Same-day delivery service",
        "Document and small parcel transport",
        "Real-time delivery tracking",
        "Proof of delivery with photos",
        "Insurance coverage for items",
      ],
      phase: "Phase 3",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Corporate Booking Platform",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Business accounts for companies and organizations",
      details: [
        "Corporate account management",
        "Employee ride allocation",
        "Monthly billing and reports",
        "Priority booking for executives",
        "Expense management integration",
      ],
      phase: "Phase 2",
      color: "from-blue-500 to-teal-500",
    },
    {
      title: "Festival & Event Transport",
      icon: <Calendar className="h-8 w-8" />,
      description: "Special transport services during Osun-Osogbo and other festivals",
      details: [
        "Event-specific transport packages",
        "Group booking for tourists",
        "Cultural site tour integration",
        "Multi-language support",
        "Festival schedule coordination",
      ],
      phase: "Seasonal",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-12">
      <div className="container mx-auto px-4 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Platform Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive features designed for both passengers and drivers, built specifically for the Osun State
            transportation ecosystem
          </p>
        </motion.div>

        {/* Feature Categories */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="passenger" className="text-lg">
              <Smartphone className="h-5 w-5 mr-2" />
              Passenger App
            </TabsTrigger>
            <TabsTrigger value="driver" className="text-lg">
              <Car className="h-5 w-5 mr-2" />
              Driver App
            </TabsTrigger>
            <TabsTrigger value="additional" className="text-lg">
              <Package className="h-5 w-5 mr-2" />
              Additional Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="passenger" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Passenger App Features
              </h2>
              <p className="text-xl text-gray-600">
                Everything passengers need for a safe, convenient, and affordable ride experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {passengerFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                          {feature.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-800">{feature.title}</CardTitle>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <Badge key={benefitIndex} className="bg-green-100 text-green-800">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className={`w-full bg-gradient-to-r ${feature.color} text-white`}>{feature.demo}</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="driver" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Driver App Features
              </h2>
              <p className="text-xl text-gray-600">
                Professional tools to help drivers maximize earnings and provide excellent service
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {driverFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                          {feature.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-800">{feature.title}</CardTitle>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <Badge key={benefitIndex} className="bg-blue-100 text-blue-800">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className={`w-full bg-gradient-to-r ${feature.color} text-white`}>{feature.demo}</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="additional" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600">
                Expanding beyond ride-hailing to serve diverse transportation and delivery needs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                          {feature.icon}
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">{feature.phase}</Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</CardTitle>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Built with Modern Technology</h2>
            <p className="text-xl opacity-90">
              Leveraging cutting-edge technology to deliver reliable, scalable, and secure transportation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Mobile Apps",
                technologies: ["React Native", "Flutter", "iOS/Android", "Offline Capability"],
              },
              {
                category: "Backend",
                technologies: ["Node.js", "PostgreSQL", "Redis", "Microservices"],
              },
              {
                category: "Real-time",
                technologies: ["WebSocket", "GPS Tracking", "Push Notifications", "Live Updates"],
              },
              {
                category: "Payments",
                technologies: ["Paystack", "Flutterwave", "USSD Gateway", "Bank APIs"],
              },
            ].map((tech, index) => (
              <div key={tech.category} className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-orange-300">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.technologies.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/10 rounded-lg p-2 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
          <h2 className="text-4xl font-bold mb-6">Experience OsunRide Features</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Try our interactive prototypes to experience the full range of features designed for Osun State's
            transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
              Try Passenger App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 bg-transparent"
            >
              Try Driver App
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
