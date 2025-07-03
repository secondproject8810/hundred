"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Edit,
  Plus,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Eye,
  MessageCircle,
  Star,
  Calendar,
  ExternalLink,
  Download,
  Camera,
  Verified,
  X,
  Settings,
  Share2,
  TrendingUp,
  FileText,
  LinkIcon,
  History,
  Send,
  UserPlus,
  MoreHorizontal,
  Code,
  Zap,
  Target,
  Building2
} from "lucide-react"

export default function CompanyProfilePage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState("products")
  const [profileData, setProfileData] = useState({
    name: "TechCorp Inc",
    title: "Leading Technology Solutions Provider",
    location: "San Francisco, CA",
    email: "contact@techcorp.com",
    phone: "(555) 987-6543",
    website: "techcorp.com",
    bio: "TechCorp Inc is a leading technology solutions provider specializing in enterprise software development, cloud infrastructure, and AI-powered solutions. We serve Fortune 500 companies worldwide, helping them transform their digital capabilities and achieve sustainable growth. Founded in 2015, we've grown from a small startup to a globally recognized technology company with offices in San Francisco, New York, and London."
  })

  // Prevent hydration mismatches by only rendering client-specific content after hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleEditProfile = () => {
    router.push("/edit-company-profile")
  }

  // Helper function to get initials safely
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  // Show loading state until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* LinkedIn-style Header Section */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cover Photo Section */}
          <div className="relative">
            <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-r from-primary-navy via-blue-600 to-primary-navy relative overflow-hidden rounded-lg">
              {/* Company tagline overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                    Transforming Enterprise Technology
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 font-medium">
                    AI-Powered Solutions & Cloud Infrastructure
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 rounded-lg shadow-md"
              >
                <Camera className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Edit Cover</span>
              </Button>
            </div>

            {/* Profile Info Section */}
            <div className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-6 -mt-16 lg:-mt-20">
                {/* Company Logo */}
                <div className="relative mb-4 lg:mb-0 flex-shrink-0">
                  <Avatar className="w-32 h-32 lg:w-40 lg:h-40 border-4 border-white shadow-xl">
                    <AvatarImage src="/company-logo.png" alt={profileData.name} />
                    <AvatarFallback className="text-2xl lg:text-3xl font-bold bg-gradient-to-br from-primary-navy to-blue-600 text-white">
                      {getInitials(profileData.name)}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-gray-100"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                {/* Company Info */}
                <div className="flex-1 pt-4 lg:pt-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {profileData.name}
                        </h1>
                        <Verified className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex flex-wrap items-center gap-1 text-sm text-gray-500 mb-2">
                        <span>{profileData.title}</span>
                        <span>•</span>
                        <span>Founded 2015</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {profileData.location}
                        </span>
                      </div>
                      <Badge className="bg-green-50 text-green-700 border-green-200 text-xs w-fit">
                        Actively hiring
                      </Badge>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Follow
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-6">
                        <Send className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full" onClick={handleEditProfile}>
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Main Content */}
      <div className="w-full py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* About Section */}
          <Card className="shadow-sm">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">About</h2>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                {profileData.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200">Enterprise Software</Badge>
                <Badge className="bg-green-50 text-green-700 border-green-200">Cloud Infrastructure</Badge>
                <Badge className="bg-purple-50 text-purple-700 border-purple-200">AI Solutions</Badge>
                <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">Fortune 500</Badge>
                <Badge className="bg-red-50 text-red-700 border-red-200">Global Offices</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-sm">
            <CardHeader className="border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">{profileData.email}</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">{profileData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Website</p>
                    <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      {profileData.website}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">{profileData.location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company History Section */}
          <Card className="shadow-sm">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Company History</h2>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Series C Funding</h3>
                    <p className="text-blue-600 font-medium">$50M Series C Round</p>
                    <p className="text-gray-500 text-sm">March 2024 • Global Expansion</p>
                    <p className="text-gray-600 mt-2">Raised $50M in Series C funding to accelerate global expansion and AI product development. Valued at $500M with plans to double headcount and expand into European markets.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">Global Expansion</Badge>
                      <Badge variant="outline" className="text-xs">AI Development</Badge>
                      <Badge variant="outline" className="text-xs">Team Growth</Badge>
                      <Badge variant="outline" className="text-xs">$500M Valuation</Badge>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Company Founded</h3>
                    <p className="text-blue-600 font-medium">TechCorp Inc Established</p>
                    <p className="text-gray-500 text-sm">January 2015 • San Francisco, CA</p>
                    <p className="text-gray-600 mt-2">Founded by a team of seasoned engineers with a vision to democratize enterprise technology. Started with 5 employees in a small San Francisco office, focusing on cloud solutions.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">Startup</Badge>
                      <Badge variant="outline" className="text-xs">Cloud Solutions</Badge>
                      <Badge variant="outline" className="text-xs">Enterprise Focus</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership Section */}
          <Card className="shadow-sm">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Leadership Team</h2>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Executive Leadership</h3>
                    <p className="text-blue-600 font-medium">CEO, CTO, and Senior Management Team</p>
                    <p className="text-gray-500 text-sm">Experienced leaders from Google, Apple, and Microsoft</p>
                    <p className="text-gray-600 mt-2">Our leadership team brings decades of experience from top tech companies, combining technical expertise with business acumen to drive innovation and growth.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">Executive Team</Badge>
                      <Badge variant="outline" className="text-xs">Tech Industry Veterans</Badge>
                      <Badge variant="outline" className="text-xs">Innovation Leaders</Badge>
                      <Badge variant="outline" className="text-xs">Growth Strategy</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Sections with Tabs */}
          <Card className="shadow-sm">
            <CardHeader className="border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Additional Information</h2>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 rounded-none border-b">
                  <TabsTrigger value="products" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-green-500">
                    Products
                  </TabsTrigger>
                  <TabsTrigger value="technologies" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-green-500">
                    Technologies
                  </TabsTrigger>
                  <TabsTrigger value="awards" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-green-500">
                    Awards
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="products" className="mt-0 p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Featured Products</h3>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">TechCorp AI Platform</h4>
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Revolutionary AI platform that helps Fortune 500 companies automate complex business processes. Features machine learning models, natural language processing, and predictive analytics.</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">AI/ML</Badge>
                          <Badge variant="outline" className="text-xs">Enterprise</Badge>
                          <Badge variant="outline" className="text-xs">Cloud Native</Badge>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">Cloud Infrastructure Suite</h4>
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Comprehensive cloud infrastructure platform with automated scaling, monitoring, and security. Trusted by over 1,000 companies worldwide for mission-critical applications.</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Cloud</Badge>
                          <Badge variant="outline" className="text-xs">Kubernetes</Badge>
                          <Badge variant="outline" className="text-xs">Security</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="technologies" className="mt-0 p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Programming Languages</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">JavaScript / TypeScript</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Python</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Java / Go</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Cloud & Infrastructure</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">AWS / Azure</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Kubernetes / Docker</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Terraform / Ansible</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Core Technologies */}
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Core Technologies</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Code className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900">Full-Stack Development</h5>
                            <p className="text-gray-500 text-sm">React, Node.js, Python, Cloud Architecture</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Zap className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900">AI & Machine Learning</h5>
                            <p className="text-gray-500 text-sm">TensorFlow, PyTorch, NLP, Computer Vision</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="awards" className="mt-0 p-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Recent Awards & Recognition</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-gray-900 font-medium">Best AI Company 2024</p>
                          <p className="text-gray-500 text-sm">TechCrunch Disrupt Awards • September 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-gray-900 font-medium">Fast Company Most Innovative</p>
                          <p className="text-gray-500 text-sm">Fast Company Magazine • March 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-gray-900 font-medium">B Corp Certification</p>
                          <p className="text-gray-500 text-sm">B Corporation • January 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-gray-900 font-medium">Forbes Cloud 100</p>
                          <p className="text-gray-500 text-sm">Forbes Magazine • August 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 