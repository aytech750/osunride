"use client"

import React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  MapPin,
  Users,
  Shield,
  Smartphone,
  Phone,
  Mail,
  CheckCircle,
  Play,
  ChevronLeft,
  ChevronRight,
  Star,
  Car,
  Building,
  GraduationCap,
  UtensilsCrossed,
  Navigation,
  Zap,
  Heart,
  Globe,
  Menu,
  X,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function OsunRideLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [currentCategorySlide, setCurrentCategorySlide] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // 🎨 CREATIVELY CRAZY HERO SLIDESHOW
  const heroImages = [
    {
      src: "/images/infrastructure/osun-highway-interchange.jpg",
      alt: "Modern highway interchange in Osun State showcasing infrastructure development",
      title: "🚀 OSUN RIDES INTO THE FUTURE",
      subtitle: "Where Modern Infrastructure Meets Smart Transportation",
      accent: "from-blue-600 to-purple-600",
      particles: "🌟✨🚗💫",
    },
    {
      src: "/images/education/osun-state-university.jpg",
      alt: "Osun State University representing educational excellence",
      title: "🎓 CONNECTING BRILLIANT MINDS",
      subtitle: "Seamless Campus-to-City Transportation Solutions",
      accent: "from-green-600 to-teal-600",
      particles: "📚🎯🌱🔥",
    },
    {
      src: "/images/transportation/okada-riders-gathering.jpg",
      alt: "Community of motorcycle riders representing local transportation workforce",
      title: "👥 EMPOWERING LOCAL HEROES",
      subtitle: "From Traditional Riders to Digital Champions",
      accent: "from-orange-600 to-red-600",
      particles: "🏆⚡🤝💪",
    },
    {
      src: "/images/hospitality/circle-vip-lounge.jpg",
      alt: "Modern VIP lounge showcasing Osun's hospitality sector",
      title: "🍽️ TASTE THE GOOD LIFE",
      subtitle: "Ride to Osun's Finest Dining Destinations",
      accent: "from-purple-600 to-pink-600",
      particles: "🍷🎉🌺✨",
    },
  ]

  // 🌈 DYNAMIC CATEGORY SHOWCASE
  const categoryShowcase = [
    {
      category: "🏗️ INFRASTRUCTURE",
      title: "Building Tomorrow's Osun",
      images: [
        {
          src: "/images/infrastructure/oau-main-gate.jpg",
          title: "OAU Main Gate",
          desc: "Gateway to Excellence",
        },
        {
          src: "/images/infrastructure/osogbo-roundabout.jpg",
          title: "Osogbo Roundabout",
          desc: "Traffic Flow Mastery",
        },
        {
          src: "/images/infrastructure/osun-bridge-aerial.jpg",
          title: "Osun Bridge Network",
          desc: "Connecting Communities",
        },
      ],
      color: "from-blue-500 to-cyan-500",
      icon: Building,
    },
    {
      category: "🚗 TRANSPORTATION",
      title: "Mobility Revolution",
      images: [
        {
          src: "/images/transportation/local-taxis-osun.webp",
          title: "Local Taxi Fleet",
          desc: "Traditional Meets Modern",
        },
        {
          src: "/images/transportation/okada-riders-gathering.jpg",
          title: "Rider Community",
          desc: "United for Progress",
        },
        {
          src: "/images/abc-transport.png",
          title: "Premium Vehicles",
          desc: "Quality & Comfort",
        },
      ],
      color: "from-orange-500 to-red-500",
      icon: Car,
    },
    {
      category: "🎓 EDUCATION",
      title: "Academic Excellence",
      images: [
        {
          src: "/images/education/osun-state-university.jpg",
          title: "UNIOSUN Campus",
          desc: "Modern Learning Hub",
        },
        {
          src: "/images/infrastructure/oau-main-gate.jpg",
          title: "OAU Heritage",
          desc: "Legacy of Knowledge",
        },
        {
          src: "/images/osun-state-logo.png",
          title: "State Pride",
          desc: "Educational Leadership",
        },
      ],
      color: "from-green-500 to-emerald-500",
      icon: GraduationCap,
    },
    {
      category: "🍽️ HOSPITALITY",
      title: "Culinary Destinations",
      images: [
        {
          src: "/images/hospitality/circle-vip-lounge.jpg",
          title: "Circle VIP Lounge",
          desc: "Premium Dining Experience",
        },
        {
          src: "/images/hospitality/african-palace-restaurant.jpg",
          title: "African Palace",
          desc: "Authentic Local Cuisine",
        },
        {
          src: "/images/local-transport.jpeg",
          title: "Street Food Culture",
          desc: "Taste of Osun",
        },
      ],
      color: "from-purple-500 to-pink-500",
      icon: UtensilsCrossed,
    },
  ]

  const features = [
    {
      icon: Navigation,
      title: "Smart Route Optimization",
      description: "AI-powered navigation through Osun's road network, from OAU to downtown Osogbo",
      demo: "Experience live routing",
      image: "/images/navigation/osun-state-map.jpg",
      imageAlt: "Interactive map of Osun State showing all major routes and destinations",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Government-Verified Safety",
      description: "Partnership with Osun State Government for comprehensive driver verification and safety protocols",
      demo: "View safety features",
      image: "/images/osun-govt-seal.jpeg",
      imageAlt: "Osun State Government official seal representing safety and security",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Booking",
      description: "Book rides to universities, restaurants, and anywhere in Osun State in under 30 seconds",
      demo: "Try instant booking",
      image: "/images/infrastructure/osogbo-roundabout.jpg",
      imageAlt: "Modern infrastructure enabling fast and efficient transportation",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Heart,
      title: "Community-First Approach",
      description: "Supporting local drivers, connecting communities, and boosting Osun's economy",
      demo: "See community impact",
      image: "/images/transportation/okada-riders-gathering.jpg",
      imageAlt: "Community of local transportation workers united for progress",
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  const cities = [
    {
      name: "Osogbo",
      status: "Live",
      rides: "1,200+",
      drivers: "45",
      image: "/images/infrastructure/osogbo-roundabout.jpg",
      landmarks: ["Government House", "Osun Mall", "Central Market"],
    },
    {
      name: "Ile-Ife",
      status: "Beta",
      rides: "800+",
      drivers: "32",
      image: "/images/infrastructure/oau-main-gate.jpg",
      landmarks: ["OAU Campus", "Ife Palace", "Teaching Hospital"],
    },
    {
      name: "Ede",
      status: "Coming Soon",
      rides: "Pre-reg",
      drivers: "18",
      image: "/images/education/osun-state-university.jpg",
      landmarks: ["UNIOSUN", "Ede Market", "Railway Station"],
    },
    {
      name: "Iwo",
      status: "Coming Soon",
      rides: "Pre-reg",
      drivers: "12",
      image: "/images/infrastructure/osun-bridge-aerial.jpg",
      landmarks: ["Iwo Township", "Local Government", "Traditional Palace"],
    },
  ]

  const stats = [
    {
      number: "50K+",
      label: "Happy Passengers",
      icon: Users,
      trend: "+25% monthly",
      color: "text-blue-500",
    },
    {
      number: "2.5K+",
      label: "Verified Drivers",
      icon: Car,
      trend: "+40% growth",
      color: "text-green-500",
    },
    {
      number: "100K+",
      label: "Completed Rides",
      icon: MapPin,
      trend: "500+ daily",
      color: "text-orange-500",
    },
    {
      number: "4.9★",
      label: "Average Rating",
      icon: Star,
      trend: "98% satisfaction",
      color: "text-yellow-500",
    },
  ]

  const governmentEndorsements = [
    {
      title: "Official State Partnership",
      description: "Endorsed by Osun State Government as the premier digital transportation solution",
      image: "/images/osun-govt-seal.jpeg",
      badge: "Government Approved",
    },
    {
      title: "Governor's Innovation Initiative",
      description: "Senator Ademola Adeleke champions OsunRide as part of the state's digital transformation",
      image: "/images/senator-adeleke.jpeg",
      badge: "Leadership Support",
    },
  ]

  // 🎭 ANIMATION EFFECTS
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cities.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(heroTimer)
  }, [])

  useEffect(() => {
    const categoryTimer = setInterval(() => {
      setCurrentCategorySlide((prev) => (prev + 1) % categoryShowcase.length)
    }, 8000)
    return () => clearInterval(categoryTimer)
  }, [])

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const currentCategoryIcon = categoryShowcase[currentCategorySlide].icon
  const currentCategoryCategory = categoryShowcase[currentCategorySlide].category
  const currentCategoryTitle = categoryShowcase[currentCategorySlide].title

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-x-hidden">
      {/* 🚀 MOBILE-FIRST RESPONSIVE NAVIGATION */}
      <motion.nav
        className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-orange-100 shadow-lg z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Responsive sizing */}
            <motion.div
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative">
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <span className="text-white font-bold text-lg sm:text-xl">O</span>
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  OsunRide
                </span>
                <div className="text-xs text-gray-500 flex items-center">
                  <Zap className="w-3 h-3 mr-1 text-green-500" />
                  Government Approved
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {["Features", "Cities", "Drivers", "About", "Government", "Investors"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="outline" className="bg-transparent hover:bg-orange-50">
                <Smartphone className="w-4 h-4 mr-2" />
                Download App
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all">
                <Play className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-3 py-2"
              >
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-orange-100 shadow-xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 py-6 space-y-4">
                  {["Features", "Cities", "Drivers", "About", "Government", "Investors"].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors py-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 mb-3">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Download Passenger App
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Car className="w-4 h-4 mr-2" />
                      Become a Driver
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* 🎨 MOBILE-OPTIMIZED HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Particles - Reduced for mobile performance */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-orange-400 rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * 500],
                y: [0, Math.random() * 400],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>

        {/* Dynamic Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={heroImages[currentHeroSlide].src || "/placeholder.svg"}
              alt={heroImages[currentHeroSlide].alt}
              fill
              className="object-cover"
              priority
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${heroImages[currentHeroSlide].accent} opacity-80`} />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Mobile-Optimized Floating Emoji Particles */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          {heroImages[currentHeroSlide].particles.split("").map((emoji, i) => (
            <motion.div
              key={`${currentHeroSlide}-${i}`}
              className="absolute text-2xl sm:text-4xl"
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: -50,
                rotate: 180,
                x: Math.sin(i) * 50,
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
              }}
              style={{
                left: 10 + i * 15 + "%",
                top: "70%",
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        {/* Mobile-Friendly Hero Navigation */}
        <motion.button
          onClick={prevHeroSlide}
          className="absolute left-2 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-4 backdrop-blur-sm transition-all duration-300 group"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-orange-300" />
        </motion.button>
        <motion.button
          onClick={nextHeroSlide}
          className="absolute right-2 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-4 backdrop-blur-sm transition-all duration-300 group"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-orange-300" />
        </motion.button>

        {/* Mobile-First Hero Content */}
        <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            {/* Mobile-Optimized Badges */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Badge className="bg-green-100/90 text-green-800 hover:bg-green-200/90 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Government Approved
              </Badge>
              <Badge className="bg-blue-100/90 text-blue-800 hover:bg-blue-200/90 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Now Live in Osogbo
              </Badge>
            </motion.div>

            {/* Responsive Hero Title */}
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-white leading-tight drop-shadow-2xl px-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              {heroImages[currentHeroSlide].title}
            </motion.h1>

            {/* Responsive Hero Subtitle */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-medium px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {heroImages[currentHeroSlide].subtitle}
            </motion.p>

            {/* Mobile-First CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Book Your First Ride
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-800 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 bg-transparent shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
              >
                <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile-Optimized Government Partnership Showcase */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {governmentEndorsements.map((endorsement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-2 border-orange-200/50 hover:border-orange-400/70 transition-all duration-300 shadow-2xl hover:shadow-3xl bg-white/95 backdrop-blur-sm">
                  <CardHeader className="text-center pb-2 sm:pb-3 pt-3 sm:pt-4">
                    <motion.div
                      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden border-2 border-orange-200 shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Image
                        src={endorsement.image || "/placeholder.svg"}
                        alt={endorsement.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <Badge className="mb-2 sm:mb-3 bg-green-100 text-green-800 text-xs sm:text-sm">
                      {endorsement.badge}
                    </Badge>
                    <CardTitle className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                      {endorsement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 leading-relaxed text-xs sm:text-sm px-2">
                      {endorsement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentHeroSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentHeroSlide ? "bg-white shadow-lg" : "bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 🌈 MOBILE-OPTIMIZED CATEGORY SHOWCASE */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/navigation/osun-state-map.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              🎭 DISCOVER OSUN'S MAGIC
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              From ancient universities to modern infrastructure, experience the diverse beauty of Osun State
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategorySlide}
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center mb-8 sm:mb-12">
                <motion.div
                  className="inline-flex items-center space-x-3 sm:space-x-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  {React.createElement(currentCategoryIcon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                  <span className="text-lg sm:text-2xl font-bold text-white">{currentCategoryCategory}</span>
                </motion.div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 text-white px-4">
                  {currentCategoryTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {categoryShowcase[currentCategorySlide].images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                      <div className="relative h-48 sm:h-64 overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                          <h4 className="text-lg sm:text-xl font-bold mb-1">{image.title}</h4>
                          <p className="text-xs sm:text-sm opacity-90">{image.desc}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Category Navigation */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-3 sm:space-x-4">
            {categoryShowcase.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentCategorySlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentCategorySlide ? "bg-orange-400 shadow-lg" : "bg-white/30"
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 📊 MOBILE-OPTIMIZED STATS SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <Image
            src="/images/infrastructure/osun-highway-interchange.jpg"
            alt="Osun State Infrastructure"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              🚀 REAL IMPACT, REAL NUMBERS
            </h2>
            <p className="text-lg sm:text-xl text-orange-100">Growing stronger every day with our amazing community</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center text-white group"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="flex justify-center mb-3 sm:mb-4 p-3 sm:p-4 bg-white/20 rounded-full w-fit mx-auto backdrop-blur-sm group-hover:bg-white/30 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {React.createElement(stat.icon, { className: "h-5 w-5 sm:h-6 sm:w-6" })}
                </motion.div>
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold mb-1">{stat.label}</div>
                <Badge className="bg-white/20 text-white border-white/30 text-xs">{stat.trend}</Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 MOBILE-OPTIMIZED FEATURES SECTION */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-orange-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              ⚡ BUILT FOR OSUN, BY OSUN
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Every feature designed with deep understanding of local transportation needs, cultural values, and
              economic realities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-white">
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-80`} />
                    <div className="absolute inset-0 bg-black/30" />
                    <motion.div
                      className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 p-3 sm:p-4 bg-white/90 rounded-full text-gray-800 shadow-xl"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {React.createElement(feature.icon, { className: "h-6 w-6 sm:h-8 sm:w-8" })}
                    </motion.div>
                  </div>
                  <CardHeader className="text-center pb-4 sm:pb-6">
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                      {feature.description}
                    </CardDescription>
                    <Button
                      className={`w-full sm:w-auto bg-gradient-to-r ${feature.gradient} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      {feature.demo}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏙️ MOBILE-OPTIMIZED CITY SHOWCASE */}
      <section
        id="cities"
        className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white">
              🌟 LIVE ACROSS OSUN STATE
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Connecting every corner of the State of the Living Spring
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
              <div className="text-center mb-8 sm:mb-12">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring" }}
                  className="relative"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-3 sm:mb-4">
                    {cities[currentSlide].name}
                  </div>
                  <Badge
                    className={`text-sm sm:text-lg px-4 sm:px-6 py-2 ${
                      cities[currentSlide].status === "Live"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : cities[currentSlide].status === "Beta"
                          ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                          : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                    }`}
                  >
                    {cities[currentSlide].status}
                  </Badge>

                  {/* City Image */}
                  <div className="relative h-40 sm:h-48 mt-4 sm:mt-6 rounded-lg sm:rounded-xl overflow-hidden">
                    <Image
                      src={cities[currentSlide].image || "/placeholder.svg"}
                      alt={`${cities[currentSlide].name} cityscape`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Landmarks */}
                  <div className="mt-3 sm:mt-4">
                    <p className="text-xs sm:text-sm text-gray-300 mb-2">Popular Destinations:</p>
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                      {cities[currentSlide].landmarks.map((landmark, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-white/10 text-white border-white/20">
                          {landmark}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    className={`p-4 sm:p-6 rounded-lg sm:rounded-xl text-center transition-all duration-500 cursor-pointer ${
                      index === currentSlide
                        ? "bg-gradient-to-br from-orange-500/30 to-pink-500/30 border-2 border-orange-400/50 shadow-xl scale-105"
                        : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                    }`}
                    whileHover={{ scale: index === currentSlide ? 1.05 : 1.02 }}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{city.name}</div>
                    <div className="text-xs sm:text-sm text-gray-300 mb-1">{city.rides} rides</div>
                    <div className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">{city.drivers} drivers</div>
                    <Badge
                      className={`text-xs ${
                        city.status === "Live"
                          ? "bg-green-500/20 text-green-300"
                          : city.status === "Beta"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-gray-500/20 text-gray-300"
                      }`}
                    >
                      {city.status}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🎯 MOBILE-OPTIMIZED FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/navigation/osun-state-map.jpg')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <motion.div className="flex items-center space-x-3 mb-4 sm:mb-6" whileHover={{ scale: 1.05 }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-lg sm:text-xl">O</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    OsunRide
                  </span>
                  <div className="text-xs sm:text-sm text-gray-400 flex items-center">
                    <Zap className="w-3 h-3 mr-1 text-green-400" />
                    Government Approved
                  </div>
                </div>
              </motion.div>
              <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Revolutionizing transportation in Osun State through technology, community partnership, and government
                collaboration. Building the future of mobility, one ride at a time. 🚀✨
              </p>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Image
                  src="/images/osun-state-logo.png"
                  alt="Osun State"
                  width={32}
                  height={32}
                  className="rounded-full sm:w-10 sm:h-10"
                />
                <span className="text-xs sm:text-sm text-gray-400">Proudly partnered with Osun State Government</span>
              </div>
            </div>

            {/* Footer Links - Mobile Optimized */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg text-orange-400">Platform</h4>
              <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                {["Passenger App", "Driver App", "How It Works", "Safety", "Support"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg text-orange-400">For Drivers</h4>
              <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                {["Drive with Us", "Requirements", "Earnings", "Driver Support", "Training"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg text-orange-400">Contact</h4>
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                <motion.div className="flex items-center space-x-2 sm:space-x-3" whileHover={{ scale: 1.05 }}>
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 flex-shrink-0" />
                  <span className="break-all">hello@osunride.com.ng</span>
                </motion.div>
                <motion.div className="flex items-center space-x-2 sm:space-x-3" whileHover={{ scale: 1.05 }}>
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 flex-shrink-0" />
                  <span>+234 (0) 800 OSUN RIDE</span>
                </motion.div>
                <motion.div className="flex items-center space-x-2 sm:space-x-3" whileHover={{ scale: 1.05 }}>
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 flex-shrink-0" />
                  <span>Osogbo, Osun State, Nigeria</span>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                &copy; 2024 OsunRide Ltd. All rights reserved. Built with ❤️ in the State of the Living Spring. 🌟
              </p>
              <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                  <motion.span
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
