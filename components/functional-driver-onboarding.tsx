"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle,
  Upload,
  User,
  Car,
  Shield,
  Star,
  ArrowRight,
  FileText,
  AlertCircle,
  Phone,
  Mail,
  Calendar,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FunctionalDriverOnboarding() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    personal: {},
    vehicle: {},
    documents: {},
    verification: {},
    training: {},
  })
  const [uploadedFiles, setUploadedFiles] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRefs = useRef({})

  const steps = [
    {
      title: "Personal Information",
      icon: <User className="h-6 w-6" />,
      description: "Tell us about yourself",
      fields: ["firstName", "lastName", "phone", "email", "address", "dateOfBirth", "nin"],
    },
    {
      title: "Vehicle Details",
      icon: <Car className="h-6 w-6" />,
      description: "Add your vehicle information",
      fields: ["vehicleType", "make", "model", "year", "plateNumber", "color", "seats"],
    },
    {
      title: "Documents Upload",
      icon: <FileText className="h-6 w-6" />,
      description: "Upload required documents",
      fields: ["driversLicense", "vehicleRegistration", "insurance", "passportPhoto"],
    },
    {
      title: "Background Verification",
      icon: <Shield className="h-6 w-6" />,
      description: "Security verification process",
      fields: ["policeReport", "references", "emergencyContact"],
    },
    {
      title: "Training & Certification",
      icon: <Star className="h-6 w-6" />,
      description: "Complete driver training",
      fields: ["trainingModules", "safetyQuiz", "customerService"],
    },
  ]

  const requirements = [
    { item: "Valid Nigerian Driver's License", status: "required", uploaded: uploadedFiles.driversLicense },
    { item: "Vehicle Registration Papers", status: "required", uploaded: uploadedFiles.vehicleRegistration },
    { item: "Insurance Certificate", status: "required", uploaded: uploadedFiles.insurance },
    { item: "Police Character Certificate", status: "required", uploaded: uploadedFiles.policeReport },
    { item: "Passport Photograph", status: "required", uploaded: uploadedFiles.passportPhoto },
    { item: "Bank Account Details", status: "required", uploaded: formData.personal.bankAccount },
    { item: "Smartphone (Android 8+ or iOS 12+)", status: "required", uploaded: true },
    { item: "Vehicle Inspection Certificate", status: "recommended", uploaded: uploadedFiles.inspection },
  ]

  const handleFileUpload = (documentType, event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedFiles((prev) => ({
        ...prev,
        [documentType]: {
          name: file.name,
          size: file.size,
          type: file.type,
          uploadedAt: new Date().toISOString(),
        },
      }))
    }
  }

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const validateStep = (stepIndex) => {
    const step = steps[stepIndex]
    const requiredFields = step.fields
    const sectionData = formData[Object.keys(formData)[stepIndex]] || {}

    return requiredFields.every((field) => {
      if (stepIndex === 2) {
        // Documents step
        return uploadedFiles[field]
      }
      return sectionData[field]
    })
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsSubmitting(false)
    // Show success message or redirect
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Personal Information
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formData.personal.firstName || ""}
                  onChange={(e) => handleInputChange("personal", "firstName", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formData.personal.lastName || ""}
                  onChange={(e) => handleInputChange("personal", "lastName", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  placeholder="+234 xxx xxx xxxx"
                  value={formData.personal.phone || ""}
                  onChange={(e) => handleInputChange("personal", "phone", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.personal.email || ""}
                  onChange={(e) => handleInputChange("personal", "email", e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Home Address *</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your full address"
                  value={formData.personal.address || ""}
                  onChange={(e) => handleInputChange("personal", "address", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.personal.dateOfBirth || ""}
                  onChange={(e) => handleInputChange("personal", "dateOfBirth", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="nin">NIN (National ID) *</Label>
                <Input
                  id="nin"
                  placeholder="Enter your NIN"
                  value={formData.personal.nin || ""}
                  onChange={(e) => handleInputChange("personal", "nin", e.target.value)}
                />
              </div>
            </div>
          </div>
        )

      case 1: // Vehicle Details
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vehicleType">Vehicle Type *</Label>
                <Select onValueChange={(value) => handleInputChange("vehicle", "vehicleType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="tricycle">Tricycle (Keke)</SelectItem>
                    <SelectItem value="motorcycle">Motorcycle</SelectItem>
                    <SelectItem value="bus">Bus/Mini-bus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="make">Vehicle Make *</Label>
                <Input
                  id="make"
                  placeholder="e.g., Toyota, Honda"
                  value={formData.vehicle.make || ""}
                  onChange={(e) => handleInputChange("vehicle", "make", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="model">Vehicle Model *</Label>
                <Input
                  id="model"
                  placeholder="e.g., Corolla, Camry"
                  value={formData.vehicle.model || ""}
                  onChange={(e) => handleInputChange("vehicle", "model", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="year">Year *</Label>
                <Input
                  id="year"
                  placeholder="e.g., 2018"
                  value={formData.vehicle.year || ""}
                  onChange={(e) => handleInputChange("vehicle", "year", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="plateNumber">License Plate *</Label>
                <Input
                  id="plateNumber"
                  placeholder="e.g., ABC 123 XY"
                  value={formData.vehicle.plateNumber || ""}
                  onChange={(e) => handleInputChange("vehicle", "plateNumber", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="color">Vehicle Color *</Label>
                <Input
                  id="color"
                  placeholder="e.g., Silver, Black"
                  value={formData.vehicle.color || ""}
                  onChange={(e) => handleInputChange("vehicle", "color", e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="seats">Number of Passenger Seats *</Label>
                <Select onValueChange={(value) => handleInputChange("vehicle", "seats", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of seats" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 seat</SelectItem>
                    <SelectItem value="2">2 seats</SelectItem>
                    <SelectItem value="3">3 seats</SelectItem>
                    <SelectItem value="4">4 seats</SelectItem>
                    <SelectItem value="5+">5+ seats</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 2: // Documents Upload
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { key: "driversLicense", label: "Driver's License", required: true },
                { key: "vehicleRegistration", label: "Vehicle Registration", required: true },
                { key: "insurance", label: "Insurance Certificate", required: true },
                { key: "passportPhoto", label: "Passport Photo", required: true },
                { key: "policeReport", label: "Police Character Certificate", required: true },
                { key: "inspection", label: "Vehicle Inspection", required: false },
              ].map((doc) => (
                <div
                  key={doc.key}
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 ${
                    uploadedFiles[doc.key]
                      ? "border-green-300 bg-green-50"
                      : "border-gray-300 hover:border-orange-400 hover:bg-orange-50"
                  }`}
                >
                  <input
                    type="file"
                    ref={(el) => (fileInputRefs.current[doc.key] = el)}
                    onChange={(e) => handleFileUpload(doc.key, e)}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                  />

                  {uploadedFiles[doc.key] ? (
                    <div className="space-y-2">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                      <div className="text-sm font-medium text-green-800">{doc.label}</div>
                      <div className="text-xs text-green-600">{uploadedFiles[doc.key].name}</div>
                      <Button size="sm" variant="outline" onClick={() => fileInputRefs.current[doc.key]?.click()}>
                        Replace File
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2 cursor-pointer" onClick={() => fileInputRefs.current[doc.key]?.click()}>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                      <div className="text-sm font-medium">{doc.label}</div>
                      {doc.required && (
                        <Badge variant="destructive" className="text-xs">
                          Required
                        </Badge>
                      )}
                      <div className="text-xs text-gray-500">Click to upload</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-blue-800">Document Requirements</div>
                  <div className="text-xs text-blue-700 mt-1">
                    • All documents must be clear and readable
                    <br />• Accepted formats: PDF, JPG, PNG
                    <br />• Maximum file size: 5MB per document
                    <br />• Documents must be valid and not expired
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 3: // Background Verification
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Background Verification</h3>
              <p className="text-gray-600">
                We'll verify your documents and run a comprehensive background check. This process usually takes 24-48
                hours.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="emergencyContact">Emergency Contact *</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="Contact Name"
                    value={formData.verification.emergencyContactName || ""}
                    onChange={(e) => handleInputChange("verification", "emergencyContactName", e.target.value)}
                  />
                  <Input
                    placeholder="Phone Number"
                    value={formData.verification.emergencyContactPhone || ""}
                    onChange={(e) => handleInputChange("verification", "emergencyContactPhone", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="references">Professional References</Label>
                <Textarea
                  placeholder="Provide 2 professional references with their contact information"
                  value={formData.verification.references || ""}
                  onChange={(e) => handleInputChange("verification", "references", e.target.value)}
                />
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="space-y-3">
                <div className="text-sm font-medium text-green-800">Verification Process Includes:</div>
                <div className="space-y-2">
                  {[
                    "Criminal background check",
                    "Driving record verification",
                    "Document authenticity check",
                    "Reference verification",
                    "Vehicle safety inspection",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Verification Support</span>
              </div>
              <div className="text-xs text-blue-700">
                You'll receive SMS and email notifications throughout the verification process. For questions, contact
                our support team at +234 (0) 800 OSUN RIDE.
              </div>
            </div>
          </div>
        )

      case 4: // Training & Certification
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Star className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Driver Training Program</h3>
              <p className="text-gray-600">
                Complete our comprehensive training program to become a certified OsunRide driver.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Training Modules</h4>
              <div className="space-y-3">
                {[
                  { title: "OsunRide App Features", duration: "15 mins", completed: false },
                  { title: "Customer Service Excellence", duration: "20 mins", completed: false },
                  { title: "Safety Protocols & Emergency Procedures", duration: "25 mins", completed: false },
                  { title: "Navigation & Route Optimization", duration: "15 mins", completed: false },
                  { title: "Payment Processing & Earnings", duration: "10 mins", completed: false },
                  { title: "Local Traffic Rules & Regulations", duration: "20 mins", completed: false },
                ].map((module, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          module.completed ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        {module.completed ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{module.title}</div>
                        <div className="text-sm text-gray-600">{module.duration}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      {module.completed ? "Review" : "Start"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Certification Requirements</span>
              </div>
              <div className="text-xs text-yellow-700">
                • Complete all training modules with 80% score
                <br />• Pass the final safety and customer service quiz
                <br />• Attend virtual orientation session
                <br />• Sign driver agreement and code of conduct
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Driver Handbook
              </Button>
              <Button variant="outline" className="h-12 bg-transparent">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Orientation
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Become an OsunRide Driver
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete your application in 5 simple steps and start earning today
          </p>
          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">🚗 Government Approved Platform</Badge>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <Card className="border-2 border-blue-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1 relative">
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
                    className={`absolute top-6 left-1/2 w-full h-1 transition-all duration-300 ${
                      index < currentStep ? "bg-gradient-to-r from-orange-500 to-blue-500" : "bg-gray-200"
                    }`}
                    style={{ transform: "translateX(50%)" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6">{steps[currentStep].title}</h3>
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-8 bg-transparent"
            >
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-orange-500 to-blue-500 px-8"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!validateStep(currentStep)}
                className="bg-gradient-to-r from-orange-500 to-blue-500 px-8"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Requirements Checklist */}
      <Card className="border-2 border-green-100">
        <CardHeader>
          <CardTitle className="text-2xl">Requirements Checklist</CardTitle>
          <p className="text-gray-600">Track your progress and ensure you have everything needed</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {requirements.map((req, index) => (
              <motion.div
                key={req.item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  req.uploaded ? "bg-green-50 border border-green-200" : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    req.uploaded ? "bg-green-500" : req.status === "required" ? "bg-red-100" : "bg-yellow-100"
                  }`}
                >
                  {req.uploaded ? (
                    <CheckCircle className="w-4 h-4 text-white" />
                  ) : (
                    <div
                      className={`w-3 h-3 rounded-full ${req.status === "required" ? "bg-red-500" : "bg-yellow-500"}`}
                    />
                  )}
                </div>
                <span className="text-sm flex-1">{req.item}</span>
                <Badge variant={req.status === "required" ? "destructive" : "secondary"} className="ml-auto">
                  {req.status}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Support Information */}
      <Card className="border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-orange-50">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              Our driver support team is here to help you through the onboarding process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Phone className="h-4 w-4" />
                <span>+234 (0) 800 OSUN RIDE</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Mail className="h-4 w-4" />
                <span>drivers@osunride.com.ng</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
