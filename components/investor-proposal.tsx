"use client"

import { motion } from "framer-motion"
import {
  TrendingUp,
  MapPin,
  DollarSign,
  Target,
  Zap,
  Shield,
  Award,
  Download,
  Calendar,
  Phone,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function InvestorProposal() {
  const marketData = [
    { metric: "Total Addressable Market", value: "₦50B+", description: "Transportation market in Osun State" },
    { metric: "Target Population", value: "4.7M", description: "Residents across target cities" },
    { metric: "Smartphone Penetration", value: "65%", description: "And growing at 15% annually" },
    { metric: "Current Competition", value: "Limited", description: "Major players focus on Lagos/Abuja" },
  ]

  const financialProjections = [
    { year: "Year 1", revenue: "₦24M", rides: "48K", drivers: "150" },
    { year: "Year 2", revenue: "₦120M", rides: "240K", drivers: "500" },
    { year: "Year 3", revenue: "₦360M", rides: "720K", drivers: "1,200" },
    { year: "Year 4", revenue: "₦720M", rides: "1.44M", drivers: "2,000" },
    { year: "Year 5", revenue: "₦1.2B", rides: "2.4M", drivers: "3,000" },
  ]

  const competitiveAdvantages = [
    {
      title: "Hyper-Local Focus",
      description: "Deep understanding of Osun's unique transportation needs and cultural nuances",
      icon: <MapPin className="h-8 w-8" />,
    },
    {
      title: "Government Partnership",
      description: "Aligned with Osun State's digital transformation and innovation agenda",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Multi-Modal Platform",
      description: "Cars, tricycles, and motorcycles - comprehensive transport solutions",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Local Payment Integration",
      description: "USSD, mobile money, and cash options for financial inclusion",
      icon: <DollarSign className="h-8 w-8" />,
    },
  ]

  const fundingBreakdown = [
    { category: "Technology Development", amount: "₦15M", percentage: 30 },
    { category: "Marketing & User Acquisition", amount: "₦12.5M", percentage: 25 },
    { category: "Operations & Staff", amount: "₦10M", percentage: 20 },
    { category: "Regulatory & Legal", amount: "₦5M", percentage: 10 },
    { category: "Working Capital", amount: "₦7.5M", percentage: 15 },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Executive Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-blue-100 text-orange-800 text-lg px-6 py-2">
          🚀 Investment Opportunity
        </Badge>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          OsunRide Investment Proposal
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Join us in revolutionizing transportation across Osun State with Nigeria's first hyper-local,
          culturally-rooted ride-hailing platform. A unique opportunity to invest in sustainable mobility solutions
          while generating exceptional returns.
        </p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Funding Target", value: "₦50M", subtitle: "Series A Round", icon: <Target className="h-8 w-8" /> },
          {
            title: "Projected ROI",
            value: "300%+",
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
            <Card className="text-center border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-3 p-3 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full text-orange-600">
                  {metric.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">{metric.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-gray-700">{metric.title}</div>
                <div className="text-sm text-gray-500">{metric.subtitle}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Market Opportunity */}
      <Card className="border-2 border-blue-100">
        <CardHeader>
          <CardTitle className="text-3xl text-center bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Market Opportunity
          </CardTitle>
          <p className="text-center text-gray-600">Osun State represents a massive underserved transportation market</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((data, index) => (
              <motion.div
                key={data.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{data.value}</div>
                <div className="font-semibold text-gray-800 mb-1">{data.metric}</div>
                <div className="text-sm text-gray-600">{data.description}</div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Advantages */}
      <Card className="border-2 border-green-100">
        <CardHeader>
          <CardTitle className="text-3xl text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Competitive Advantages
          </CardTitle>
          <p className="text-center text-gray-600">What sets OsunRide apart in the Nigerian mobility market</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl"
              >
                <div className="p-3 bg-white rounded-full text-green-600 shadow-md">{advantage.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financial Projections */}
      <Card className="border-2 border-purple-100">
        <CardHeader>
          <CardTitle className="text-3xl text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            5-Year Financial Projections
          </CardTitle>
          <p className="text-center text-gray-600">
            Conservative estimates based on market research and comparable platforms
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-purple-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Year</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Revenue</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Total Rides</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Active Drivers</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Growth Rate</th>
                </tr>
              </thead>
              <tbody>
                {financialProjections.map((projection, index) => (
                  <motion.tr
                    key={projection.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-purple-100 hover:bg-purple-50 transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-purple-600">{projection.year}</td>
                    <td className="py-4 px-4 text-gray-800">{projection.revenue}</td>
                    <td className="py-4 px-4 text-gray-800">{projection.rides}</td>
                    <td className="py-4 px-4 text-gray-800">{projection.drivers}</td>
                    <td className="py-4 px-4 text-green-600 font-semibold">
                      {index === 0 ? "Launch" : `${Math.round(400 - index * 50)}%`}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Assumptions</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>• Average fare: ₦500-800 per ride</div>
              <div>• Commission rate: 10-15% per ride</div>
              <div>• Driver retention: 80% annually</div>
              <div>• Market penetration: 5% by Year 5</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Funding Breakdown */}
      <Card className="border-2 border-orange-100">
        <CardHeader>
          <CardTitle className="text-3xl text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Use of Funds (₦50M)
          </CardTitle>
          <p className="text-center text-gray-600">Strategic allocation for maximum growth and market penetration</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fundingBreakdown.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-orange-600 font-bold">{item.percentage}%</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{item.category}</div>
                    <div className="text-2xl font-bold text-orange-600">{item.amount}</div>
                  </div>
                </div>
                <div className="w-32 bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full"
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

      {/* Investment Terms */}
      <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-3xl text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Investment Terms
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Series A Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Funding Amount:</span>
                  <span className="font-semibold">₦50,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Equity Offered:</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pre-money Valuation:</span>
                  <span className="font-semibold">₦150,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Post-money Valuation:</span>
                  <span className="font-semibold">₦200,000,000</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Investor Benefits</h4>
              <div className="space-y-2">
                {[
                  "Board seat for lead investor",
                  "Monthly financial reporting",
                  "Anti-dilution protection",
                  "Liquidation preference (1x)",
                  "Tag-along rights",
                  "Information rights",
                ].map((benefit, index) => (
                  <div key={benefit} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team & Advisory */}
      <Card className="border-2 border-green-100">
        <CardHeader>
          <CardTitle className="text-3xl text-center bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Leadership Team
          </CardTitle>
          <p className="text-center text-gray-600">
            Experienced professionals with deep local knowledge and tech expertise
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Adebayo Ogundimu",
                role: "CEO & Co-Founder",
                background: "Former McKinsey consultant, 8+ years in mobility tech",
                image: "👨🏾‍💼",
              },
              {
                name: "Folake Adeyemi",
                role: "CTO & Co-Founder",
                background: "Ex-Google engineer, expertise in scalable platforms",
                image: "👩🏾‍💻",
              },
              {
                name: "Dr. Kunle Ajayi",
                role: "Head of Operations",
                background: "Former Uber Nigeria operations lead, local transport expert",
                image: "👨🏾‍🔬",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                <div className="text-green-600 font-medium mb-2">{member.role}</div>
                <p className="text-sm text-gray-600">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-12 text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Transportation in Osun?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Join us in building Nigeria's most impactful local mobility platform. Together, we can create sustainable
          transportation solutions while generating exceptional returns.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
            <Download className="mr-2 h-5 w-5" />
            Download Full Pitch Deck
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 bg-transparent"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Due Diligence Call
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>investors@osunride.com.ng</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+234 (0) 800 INVEST OSUN</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
