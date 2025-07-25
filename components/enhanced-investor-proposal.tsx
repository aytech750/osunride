"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  MapPin,
  DollarSign,
  Target,
  Award,
  Download,
  Calendar,
  Phone,
  Mail,
  Users,
  CheckCircle,
  BarChart3,
  PieChart,
  Globe,
  Smartphone,
  Car,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export function EnhancedInvestorProposal() {
  const [activeTab, setActiveTab] = useState("overview")

  const marketData = [
    {
      metric: "Total Addressable Market",
      value: "₦50B+",
      description: "Transportation market in Osun State",
      growth: "+15% annually",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      metric: "Target Population",
      value: "4.7M",
      description: "Residents across target cities",
      growth: "Growing urban population",
      icon: <Users className="h-6 w-6" />,
    },
    {
      metric: "Smartphone Penetration",
      value: "65%",
      description: "And growing at 15% annually",
      growth: "Rapid digital adoption",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      metric: "Current Competition",
      value: "Limited",
      description: "Major players focus on Lagos/Abuja",
      growth: "Blue ocean opportunity",
      icon: <Target className="h-6 w-6" />,
    },
  ]

  const financialProjections = [
    {
      year: "Year 1",
      revenue: "₦24M",
      rides: "48K",
      drivers: "150",
      cities: "2",
      marketShare: "2%",
      profitMargin: "-15%",
    },
    {
      year: "Year 2",
      revenue: "₦120M",
      rides: "240K",
      drivers: "500",
      cities: "4",
      marketShare: "8%",
      profitMargin: "5%",
    },
    {
      year: "Year 3",
      revenue: "₦360M",
      rides: "720K",
      drivers: "1,200",
      cities: "6",
      marketShare: "15%",
      profitMargin: "18%",
    },
    {
      year: "Year 4",
      revenue: "₦720M",
      rides: "1.44M",
      drivers: "2,000",
      cities: "8",
      marketShare: "25%",
      profitMargin: "25%",
    },
    {
      year: "Year 5",
      revenue: "₁.2B",
      rides: "2.4M",
      drivers: "3,000",
      cities: "10",
      marketShare: "35%",
      profitMargin: "30%",
    },
  ]

  const competitiveAdvantages = [
    {
      title: "Government Partnership",
      description: "Official endorsement and regulatory support from Osun State Government",
      icon: <Building className="h-8 w-8" />,
      impact: "Regulatory compliance, policy support, public sector contracts",
    },
    {
      title: "Hyper-Local Focus",
      description: "Deep understanding of Osun's unique transportation needs and cultural nuances",
      icon: <MapPin className="h-8 w-8" />,
      impact: "Higher driver retention, better route optimization, cultural alignment",
    },
    {
      title: "Multi-Modal Platform",
      description: "Cars, tricycles, motorcycles, and buses - comprehensive transport solutions",
      icon: <Car className="h-8 w-8" />,
      impact: "Broader market coverage, diverse revenue streams, inclusive mobility",
    },
    {
      title: "Financial Inclusion",
      description: "USSD, mobile money, bank transfer, and cash options for all economic segments",
      icon: <DollarSign className="h-8 w-8" />,
      impact: "Market penetration across all income levels, reduced payment friction",
    },
  ]

  const fundingBreakdown = [
    {
      category: "Technology Development",
      amount: "₦15M",
      percentage: 30,
      details: "App development, backend infrastructure, AI/ML integration",
    },
    {
      category: "Marketing & User Acquisition",
      amount: "₦12.5M",
      percentage: 25,
      details: "Digital marketing, partnerships, community outreach",
    },
    {
      category: "Operations & Staff",
      amount: "₦10M",
      percentage: 20,
      details: "Team expansion, customer support, local operations",
    },
    {
      category: "Regulatory & Legal",
      amount: "₦5M",
      percentage: 10,
      details: "Compliance, licensing, legal framework",
    },
    {
      category: "Working Capital",
      amount: "₦7.5M",
      percentage: 15,
      details: "Driver incentives, operational expenses, contingency",
    },
  ]

  const teamMembers = [
    {
      name: "Adebayo Ogundimu",
      role: "CEO & Co-Founder",
      background:
        "Former McKinsey consultant with 8+ years in mobility tech. Led digital transformation projects across West Africa.",
      image: "👨🏾‍💼",
      linkedin: "#",
      achievements: ["MBA from INSEAD", "Ex-Uber Nigeria Strategy Lead", "Built 3 successful startups"],
    },
    {
      name: "Folake Adeyemi",
      role: "CTO & Co-Founder",
      background: "Ex-Google engineer with expertise in scalable platforms. Built systems serving 100M+ users.",
      image: "👩🏾‍💻",
      linkedin: "#",
      achievements: ["MS Computer Science MIT", "10+ years at Google", "Expert in distributed systems"],
    },
    {
      name: "Dr. Kunle Ajayi",
      role: "Head of Operations",
      background: "Former Uber Nigeria operations lead with deep understanding of local transport dynamics.",
      image: "👨🏾‍🔬",
      linkedin: "#",
      achievements: [
        "PhD Transportation Engineering",
        "15+ years operations experience",
        "Built Uber's Nigeria operations",
      ],
    },
  ]

  const milestones = [
    { quarter: "Q1 2024", milestone: "Complete Series A funding", status: "current" },
    { quarter: "Q2 2024", milestone: "Launch in Osogbo and Ile-Ife", status: "upcoming" },
    { quarter: "Q3 2024", milestone: "Expand to Ede and Iwo", status: "upcoming" },
    { quarter: "Q4 2024", milestone: "Reach 10,000 active users", status: "upcoming" },
    { quarter: "Q1 2025", milestone: "Break-even in core markets", status: "upcoming" },
    { quarter: "Q2 2025", milestone: "Series B funding round", status: "upcoming" },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Executive Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-8">
          <Image src="/images/osun-state-logo.png" alt="Osun State Logo" width={80} height={80} className="mr-4" />
          <div className="text-left">
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-blue-100 text-orange-800 text-lg px-6 py-2">
              🚀 Government-Endorsed Investment Opportunity
            </Badge>
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          OsunRide Investment Proposal
        </h1>
        <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
          Join us in revolutionizing transportation across Osun State with Nigeria's first government-endorsed,
          hyper-local ride-hailing platform. A unique opportunity to invest in sustainable mobility solutions while
          generating exceptional returns in an underserved market.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "Funding Target",
              value: "₦50M",
              subtitle: "Series A Round",
              icon: <Target className="h-8 w-8" />,
            },
            {
              title: "Projected ROI",
              value: "400%+",
              subtitle: "5-year returns",
              icon: <TrendingUp className="h-8 w-8" />,
            },
            {
              title: "Break-even",
              value: "18 Months",
              subtitle: "To profitability",
              icon: <Award className="h-8 w-8" />,
            },
            {
              title: "Market Size",
              value: "₦50B+",
              subtitle: "TAM in Osun State",
              icon: <DollarSign className="h-8 w-8" />,
            },
          ].map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-3 p-3 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full text-orange-600">
                    {metric.icon}
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-800">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-gray-700">{metric.title}</div>
                  <div className="text-sm text-gray-500">{metric.subtitle}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tabbed Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="competitive">Competitive</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Government Partnership Showcase */}
          <Card className="border-2 border-green-100 bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Government Partnership Advantage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Official State Endorsement</h3>
                  <div className="space-y-3">
                    {[
                      "Recognized as key digital transformation initiative",
                      "Regulatory compliance and policy support",
                      "Access to government contracts and partnerships",
                      "Priority in state transportation planning",
                      "Support from Governor Ademola Adeleke's administration",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/senator-adeleke.jpeg"
                    alt="Governor Ademola Adeleke"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 border-4 border-green-200"
                  />
                  <p className="text-sm text-gray-600 italic">
                    "OsunRide represents the future of transportation in our state, combining technology with local
                    values to serve our people better."
                  </p>
                  <p className="text-sm font-semibold text-green-700 mt-2">- Governor Ademola Adeleke</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-100">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">The Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Limited reliable transportation options in Osun State",
                    "Existing ride-hailing platforms ignore smaller cities",
                    "High unemployment among potential drivers",
                    "Inefficient traditional transport systems",
                    "Safety concerns with unregulated transport",
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">{problem}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Our Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Government-endorsed, locally-focused ride-hailing platform",
                    "Multi-modal transport (cars, tricycles, motorcycles)",
                    "Job creation for local drivers and entrepreneurs",
                    "Technology-enabled efficient route optimization",
                    "Comprehensive safety and verification systems",
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{solution}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="market" className="space-y-8">
          <Card className="border-2 border-blue-100">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Market Opportunity Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {marketData.map((data, index) => (
                  <motion.div
                    key={data.metric}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200"
                  >
                    <div className="flex justify-center mb-4 text-blue-600">{data.icon}</div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{data.value}</div>
                    <div className="font-semibold text-gray-800 mb-2">{data.metric}</div>
                    <div className="text-sm text-gray-600 mb-2">{data.description}</div>
                    <Badge className="bg-green-100 text-green-800 text-xs">{data.growth}</Badge>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Market Segmentation</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      segment: "Urban Professionals",
                      size: "35%",
                      description: "University staff, government workers, business professionals",
                      value: "High-value, frequent users",
                    },
                    {
                      segment: "Students",
                      size: "40%",
                      description: "University students, secondary school students",
                      value: "Price-sensitive, high volume",
                    },
                    {
                      segment: "General Public",
                      size: "25%",
                      description: "Traders, artisans, general population",
                      value: "Occasional users, diverse needs",
                    },
                  ].map((segment, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="text-lg font-semibold text-blue-600 mb-2">{segment.segment}</div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">{segment.size}</div>
                      <div className="text-sm text-gray-600 mb-2">{segment.description}</div>
                      <div className="text-xs text-green-600 font-medium">{segment.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financials" className="space-y-8">
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                5-Year Financial Projections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-purple-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Metric</th>
                      {financialProjections.map((projection) => (
                        <th key={projection.year} className="text-left py-3 px-4 font-semibold text-gray-800">
                          {projection.year}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "Revenue", key: "revenue", color: "text-green-600" },
                      { label: "Total Rides", key: "rides", color: "text-blue-600" },
                      { label: "Active Drivers", key: "drivers", color: "text-orange-600" },
                      { label: "Cities", key: "cities", color: "text-purple-600" },
                      { label: "Market Share", key: "marketShare", color: "text-pink-600" },
                      { label: "Profit Margin", key: "profitMargin", color: "text-indigo-600" },
                    ].map((metric) => (
                      <tr
                        key={metric.label}
                        className="border-b border-purple-100 hover:bg-purple-50 transition-colors"
                      >
                        <td className="py-4 px-4 font-semibold text-gray-800">{metric.label}</td>
                        {financialProjections.map((projection) => (
                          <td key={projection.year} className={`py-4 px-4 font-semibold ${metric.color}`}>
                            {projection[metric.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                    Revenue Drivers
                  </h4>
                  <div className="space-y-3">
                    {[
                      { source: "Commission (10-15%)", percentage: "70%" },
                      { source: "Delivery Services", percentage: "15%" },
                      { source: "Advertising Revenue", percentage: "10%" },
                      { source: "Premium Features", percentage: "5%" },
                    ].map((driver, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700">{driver.source}</span>
                        <span className="font-semibold text-purple-600">{driver.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-green-600" />
                    Unit Economics
                  </h4>
                  <div className="space-y-3">
                    {[
                      { metric: "Average Ride Value", value: "₦650" },
                      { metric: "Platform Commission", value: "₦85" },
                      { metric: "Customer Acquisition Cost", value: "₦1,200" },
                      { metric: "Driver Acquisition Cost", value: "₦2,500" },
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700">{metric.metric}</span>
                        <span className="font-semibold text-green-600">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Use of Funds */}
          <Card className="border-2 border-orange-100">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Use of Funds (₦50M Series A)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {fundingBreakdown.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-orange-600 font-bold text-lg">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-lg">{item.category}</div>
                        <div className="text-2xl font-bold text-orange-600 mb-1">{item.amount}</div>
                        <div className="text-sm text-gray-600">{item.details}</div>
                      </div>
                    </div>
                    <div className="w-32 bg-gray-200 rounded-full h-4 ml-4">
                      <motion.div
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitive" className="space-y-8">
          <Card className="border-2 border-green-100">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Competitive Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {competitiveAdvantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-full text-green-600 shadow-md">{advantage.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{advantage.description}</p>
                        <div className="bg-white rounded-lg p-3 border border-green-200">
                          <div className="text-sm font-medium text-green-800 mb-1">Business Impact:</div>
                          <div className="text-sm text-green-700">{advantage.impact}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Competitive Landscape</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-blue-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-800">Feature</th>
                        <th className="text-center py-3 px-4 font-semibold text-green-600">OsunRide</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-600">Uber</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-600">Bolt</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-600">Local Operators</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Government Partnership", osunride: "✓", uber: "✗", bolt: "✗", local: "✗" },
                        { feature: "Local Focus", osunride: "✓", uber: "✗", bolt: "✗", local: "✓" },
                        {
                          feature: "Multi-modal Transport",
                          osunride: "✓",
                          uber: "Limited",
                          bolt: "Limited",
                          local: "✓",
                        },
                        {
                          feature: "Local Payment Methods",
                          osunride: "✓",
                          uber: "Limited",
                          bolt: "Limited",
                          local: "✓",
                        },
                        { feature: "Technology Platform", osunride: "✓", uber: "✓", bolt: "✓", local: "✗" },
                        { feature: "Safety Features", osunride: "✓", uber: "✓", bolt: "✓", local: "Limited" },
                        {
                          feature: "Driver Support",
                          osunride: "24/7 Local",
                          uber: "Limited",
                          bolt: "Limited",
                          local: "Basic",
                        },
                      ].map((row, index) => (
                        <tr key={row.feature} className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                          <td className="py-3 px-4 font-medium text-gray-800">{row.feature}</td>
                          <td className="py-3 px-4 text-center text-green-600 font-semibold">{row.osunride}</td>
                          <td className="py-3 px-4 text-center text-gray-600">{row.uber}</td>
                          <td className="py-3 px-4 text-center text-gray-600">{row.bolt}</td>
                          <td className="py-3 px-4 text-center text-gray-600">{row.local}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-8">
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Leadership Team
              </CardTitle>
              <p className="text-center text-gray-600 text-lg">
                World-class team with deep local knowledge and proven track record
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200"
                  >
                    <div className="text-8xl mb-4">{member.image}</div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h4>
                    <div className="text-purple-600 font-medium mb-4">{member.role}</div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.background}</p>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Advisory Board</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Prof. Adebayo Simeon",
                      role: "Former Vice-Chancellor, OAU",
                      expertise: "Education & Government Relations",
                    },
                    {
                      name: "Mrs. Funmi Iyanda",
                      role: "Former MD, Access Bank Nigeria",
                      expertise: "Financial Services & Strategy",
                    },
                    {
                      name: "Eng. Tunde Ogunbameru",
                      role: "Former Commissioner for Works, Osun State",
                      expertise: "Infrastructure & Transportation",
                    },
                    {
                      name: "Dr. Kemi Adeosun",
                      role: "Tech Entrepreneur & Investor",
                      expertise: "Technology & Venture Capital",
                    },
                  ].map((advisor, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="font-semibold text-gray-800">{advisor.name}</div>
                      <div className="text-sm text-blue-600 mb-1">{advisor.role}</div>
                      <div className="text-xs text-gray-600">{advisor.expertise}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-8">
          <Card className="border-2 border-indigo-100">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Roadmap & Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.quarter}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-4 p-6 rounded-xl border-2 transition-all duration-300 ${
                      milestone.status === "current"
                        ? "border-indigo-300 bg-indigo-50"
                        : "border-gray-200 bg-gray-50 hover:border-indigo-200"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-white ${
                        milestone.status === "current"
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {milestone.quarter.split(" ")[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 text-lg">{milestone.quarter}</div>
                      <div className="text-gray-600">{milestone.milestone}</div>
                    </div>
                    <div>
                      {milestone.status === "current" ? (
                        <Badge className="bg-indigo-100 text-indigo-800">In Progress</Badge>
                      ) : (
                        <Badge variant="secondary">Planned</Badge>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Success Metrics</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { metric: "User Acquisition", target: "50K users by Q4 2024", icon: <Users className="h-6 w-6" /> },
                    { metric: "Driver Network", target: "1,000 drivers by Q4 2024", icon: <Car className="h-6 w-6" /> },
                    {
                      metric: "Revenue Growth",
                      target: "₦10M monthly by Q4 2024",
                      icon: <TrendingUp className="h-6 w-6" />,
                    },
                    { metric: "Market Coverage", target: "4 cities by Q4 2024", icon: <MapPin className="h-6 w-6" /> },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg border border-green-200">
                      <div className="flex justify-center mb-3 text-green-600">{item.icon}</div>
                      <div className="font-semibold text-gray-800 mb-2">{item.metric}</div>
                      <div className="text-sm text-gray-600">{item.target}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Investment Terms */}
      <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-3xl text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Investment Terms & Opportunity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-gray-800">Series A Details</h4>
              <div className="space-y-4">
                {[
                  { label: "Funding Amount", value: "₦50,000,000" },
                  { label: "Equity Offered", value: "25%" },
                  { label: "Pre-money Valuation", value: "₦150,000,000" },
                  { label: "Post-money Valuation", value: "₦200,000,000" },
                  { label: "Minimum Investment", value: "₦5,000,000" },
                  { label: "Use of Funds Timeline", value: "18-24 months" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white rounded-lg border border-blue-200"
                  >
                    <span className="text-gray-600 font-medium">{item.label}:</span>
                    <span className="font-bold text-blue-600 text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-gray-800">Investor Benefits</h4>
              <div className="space-y-3">
                {[
                  "Board seat for lead investor (₦20M+)",
                  "Monthly financial and operational reporting",
                  "Anti-dilution protection (weighted average)",
                  "1x liquidation preference (non-participating)",
                  "Tag-along and drag-along rights",
                  "Information rights and inspection rights",
                  "Right of first refusal on future rounds",
                  "Government partnership benefits access",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-blue-200"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-16 text-white"
      >
        <h2 className="text-5xl font-bold mb-8">Ready to Transform Osun State?</h2>
        <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
          Join us in building Nigeria's most impactful government-endorsed mobility platform. Together, we can create
          sustainable transportation solutions, generate exceptional returns, and drive economic growth across the State
          of the Living Spring.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-xl px-12 py-6 shadow-xl">
            <Download className="mr-3 h-6 w-6" />
            Download Complete Pitch Deck
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-xl px-12 py-6 bg-transparent shadow-xl"
          >
            <Calendar className="mr-3 h-6 w-6" />
            Schedule Due Diligence Call
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <Phone className="h-8 w-8 mx-auto mb-3" />
            <div className="font-semibold mb-2">Direct Line</div>
            <div className="text-sm opacity-90">+234 (0) 800 INVEST OSUN</div>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <Mail className="h-8 w-8 mx-auto mb-3" />
            <div className="font-semibold mb-2">Investment Inquiries</div>
            <div className="text-sm opacity-90">investors@osunride.com.ng</div>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <MapPin className="h-8 w-8 mx-auto mb-3" />
            <div className="font-semibold mb-2">Headquarters</div>
            <div className="text-sm opacity-90">Osogbo, Osun State, Nigeria</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
