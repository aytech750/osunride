"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Upload, User, Car, Shield, Star, ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DriverOnboarding() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Personal Information",
      icon: <User className="h-6 w-6" />,
      description: "Tell us about yourself",
    },
    {
      title: "Vehicle Details",
      icon: <Car className="h-6 w-6" />,
      description: "Add your vehicle information",
    },
    {
      title: "Documents Upload",
      icon: <FileText className="h-6 w-6" />,
      description: "Upload required documents",
    },
    {
      title: "Background Check",
      icon: <Shield className="h-6 w-6" />,
      description: "Security verification",
    },
    {
      title: "Training & Certification",
      icon: <Star className="h-6 w-6" />,
      description: "Complete driver training",
    },
  ]

  const requirements = [
    { item: "Valid Nigerian Driver's License", status: "required" },
    { item: "Vehicle Registration Papers", status: "required" },
    { item: "Insurance Certificate", status: "required" },
    { item: "Police Character Certificate", status: "required" },
    { item: "Passport Photograph", status: "required" },
    { item: "Bank Account Details", status: "required" },
    { item: "Smartphone (Android 8+ or iOS 12+)", status: "required" },
    { item: "Vehicle Inspection Certificate", status: "recommended" },
  ]

  const benefits = [
    { title: "Flexible Schedule", desc: "Work when you want", icon: "⏰" },
    { title: "Competitive Earnings", desc: "Keep 85-90% of fares", icon: "💰" },
    { title: "Weekly Payouts", desc: "Get paid every week", icon: "📅" },
    { title: "24/7 Support", desc: "Help when you need it", icon: "🆘" },
    { title: "Insurance Coverage", desc: "Protected while driving", icon: "🛡️" },
    { title: "Training Provided", desc: "Free driver training", icon: "🎓" },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Become an OsunRide Driver
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of drivers earning with OsunRide across Osun State
          </p>
          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">🚗 Now Hiring in All Cities</Badge>
        </motion.div>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="text-center border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Onboarding Process */}
      <Card className="border-2 border-blue-100">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Driver Onboarding Process</CardTitle>
          <p className="text-center text-gray-600">Complete these 5 simple steps to start driving</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      index <= currentStep
                        ? "bg-gradient-to-r from-orange-500 to-blue-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index < currentStep ? <CheckCircle className="h-6 w-6" /> : step.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 w-full mt-4 transition-all duration-300 ${
                        index < currentStep ? "bg-gradient-to-r from-orange-500 to-blue-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Current Step Content */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              {currentStep === 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+234 xxx xxx xxxx" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Vehicle Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="make">Vehicle Make</Label>
                      <Input id="make" placeholder="e.g., Toyota" />
                    </div>
                    <div>
                      <Label htmlFor="model">Vehicle Model</Label>
                      <Input id="model" placeholder="e.g., Corolla" />
                    </div>
                    <div>
                      <Label htmlFor="year">Year</Label>
                      <Input id="year" placeholder="e.g., 2018" />
                    </div>
                    <div>
                      <Label htmlFor="plate">License Plate</Label>
                      <Input id="plate" placeholder="e.g., ABC 123 XY" />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Document Upload</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {["Driver's License", "Vehicle Registration", "Insurance Certificate", "Passport Photo"].map(
                      (doc) => (
                        <div
                          key={doc}
                          className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange-400 transition-colors"
                        >
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <div className="text-sm font-medium">{doc}</div>
                          <div className="text-xs text-gray-500">Click to upload</div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="text-center space-y-4">
                  <Shield className="h-16 w-16 text-blue-500 mx-auto" />
                  <h3 className="text-xl font-semibold">Background Verification</h3>
                  <p className="text-gray-600">
                    We'll verify your documents and run a background check. This usually takes 24-48 hours.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      You'll receive an SMS and email notification once verification is complete.
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center space-y-4">
                  <Star className="h-16 w-16 text-yellow-500 mx-auto" />
                  <h3 className="text-xl font-semibold">Driver Training</h3>
                  <p className="text-gray-600">Complete our online training course to learn about:</p>
                  <div className="grid md:grid-cols-2 gap-3 text-left">
                    {[
                      "OsunRide app features",
                      "Customer service excellence",
                      "Safety protocols",
                      "Navigation best practices",
                      "Payment processing",
                      "Emergency procedures",
                    ].map((topic) => (
                      <div key={topic} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                className="bg-gradient-to-r from-orange-500 to-blue-500"
                disabled={currentStep === steps.length - 1}
              >
                {currentStep === steps.length - 1 ? "Complete" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Requirements Checklist */}
      <Card className="border-2 border-green-100">
        <CardHeader>
          <CardTitle className="text-2xl">Requirements Checklist</CardTitle>
          <p className="text-gray-600">Make sure you have these before applying</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {requirements.map((req, index) => (
              <motion.div
                key={req.item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    req.status === "required" ? "bg-red-100" : "bg-yellow-100"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${req.status === "required" ? "bg-red-500" : "bg-yellow-500"}`}
                  />
                </div>
                <span className="text-sm">{req.item}</span>
                <Badge variant={req.status === "required" ? "destructive" : "secondary"} className="ml-auto">
                  {req.status}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-orange-500 to-blue-500 text-lg px-12 py-4">
          Start Your Application
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-gray-500 mt-4">
          Questions? Contact our driver support team at +234 (0) 800 OSUN RIDE
        </p>
      </div>
    </div>
  )
}
