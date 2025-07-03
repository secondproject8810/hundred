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

export default function ProfilePage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState("projects")
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    title: "Senior Software Engineer",
    company: "TechCorp Inc",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    phone: "(555) 123-4567",
    website: "alexjohnson.dev",
    bio: "Passionate software engineer with 7+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. I love solving complex problems and mentoring junior developers. Currently focused on building AI-powered solutions that make a positive impact on people's lives."
  })

  // Prevent hydration mismatches by only rendering client-specific content after hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleEditProfile = () => {
    router.push("/edit-profile")
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
              {/* Personal tagline overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                    Building Tomorrow's Technology
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 font-medium">
                    Full-Stack Developer & Tech Innovator
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
                {/* Profile Avatar */}
                <div className="relative mb-4 lg:mb-0 flex-shrink-0">
                  <Avatar className="w-32 h-32 lg:w-40 lg:h-40 border-4 border-white shadow-xl">
                    <AvatarImage src="/professional-user-avatar.png" alt={profileData.name} />
                    <AvatarFallback className="text-2xl lg:text-3xl font-heading bg-gradient-to-br from-primary-navy to-blue-600 text-white">
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

                {/* Profile Info */}
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
                        <span>{profileData.company}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {profileData.location}
                        </span>
                      </div>
                      <Badge className="bg-green-50 text-green-700 border-green-200 font-subheading text-xs w-fit">
                        Open to work
                      </Badge>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Connect
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
                <Badge className="bg-blue-50 text-blue-700 border-blue-200">React</Badge>
                <Badge className="bg-green-50 text-green-700 border-green-200">Node.js</Badge>
                <Badge className="bg-purple-50 text-purple-700 border-purple-200">TypeScript</Badge>
                <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">AWS</Badge>
                <Badge className="bg-red-50 text-red-700 border-red-200">Python</Badge>
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

          {/* Experience Section */}
          <Card className="shadow-sm">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Work Experience</h2>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Senior Software Engineer</h3>
                    <p className="text-blue-600 font-medium">TechCorp Inc</p>
                    <p className="text-gray-500 text-sm">Jan 2021 - Present • 3 years</p>
                    <p className="text-gray-600 mt-2">Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and driving technical decisions for the platform team.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">React</Badge>
                      <Badge variant="outline" className="text-xs">Node.js</Badge>
                      <Badge variant="outline" className="text-xs">AWS</Badge>
                      <Badge variant="outline" className="text-xs">Team Leadership</Badge>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Software Engineer</h3>
                    <p className="text-blue-600 font-medium">StartupXYZ</p>
                    <p className="text-gray-500 text-sm">Jun 2019 - Dec 2020 • 1 year 7 months</p>
                    <p className="text-gray-600 mt-2">Built full-stack applications using React and Python. Implemented CI/CD pipelines and improved application performance by 40%.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">React</Badge>
                      <Badge variant="outline" className="text-xs">Python</Badge>
                      <Badge variant="outline" className="text-xs">CI/CD</Badge>
                      <Badge variant="outline" className="text-xs">Performance Optimization</Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Junior Software Developer</h3>
                    <p className="text-blue-600 font-medium">DevSolutions LLC</p>
                    <p className="text-gray-500 text-sm">Aug 2018 - May 2019 • 10 months</p>
                    <p className="text-gray-600 mt-2">Developed responsive web applications and learned modern development practices. Collaborated with senior developers on multiple client projects.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">JavaScript</Badge>
                      <Badge variant="outline" className="text-xs">HTML/CSS</Badge>
                      <Badge variant="outline" className="text-xs">Git</Badge>
                      <Badge variant="outline" className="text-xs">Agile</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="shadow-sm">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Education</h2>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                    <p className="text-blue-600 font-medium">Stanford University</p>
                    <p className="text-gray-500 text-sm">2015 - 2019</p>
                    <p className="text-gray-600 mt-2">Graduated Magna Cum Laude. Specialized in Software Engineering and Machine Learning. Completed senior thesis on distributed systems optimization.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">Computer Science</Badge>
                      <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                      <Badge variant="outline" className="text-xs">Magna Cum Laude</Badge>
                      <Badge variant="outline" className="text-xs">GPA: 3.8</Badge>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Advanced Web Development Bootcamp</h3>
                    <p className="text-blue-600 font-medium">CodeAcademy Pro</p>
                    <p className="text-gray-500 text-sm">Summer 2018</p>
                    <p className="text-gray-600 mt-2">Intensive 12-week program focused on modern web technologies including React, Node.js, and database design.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">Full-Stack Development</Badge>
                      <Badge variant="outline" className="text-xs">React</Badge>
                      <Badge variant="outline" className="text-xs">Node.js</Badge>
                      <Badge variant="outline" className="text-xs">Certificate</Badge>
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
                  <TabsTrigger value="projects" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-green-500">
                    Projects
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-green-500">
                    Skills
                  </TabsTrigger>
                  <TabsTrigger value="activity" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-green-500">
                    Activity
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="projects" className="mt-0 p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Featured Projects</h3>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">E-commerce Platform</h4>
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include payment processing, inventory management, and analytics dashboard.</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">React</Badge>
                          <Badge variant="outline" className="text-xs">Node.js</Badge>
                          <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">AI Chat Assistant</h4>
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Intelligent chatbot using natural language processing. Deployed on AWS with scalable microservices architecture.</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Python</Badge>
                          <Badge variant="outline" className="text-xs">TensorFlow</Badge>
                          <Badge variant="outline" className="text-xs">AWS</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="mt-0 p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Frontend</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">React / Next.js</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">TypeScript</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Tailwind CSS</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Backend</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Node.js / Express</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Python / Django</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                              ))}
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">PostgreSQL / MongoDB</span>
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

                    {/* Certifications */}
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Certifications & Awards</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Award className="h-6 w-6 text-orange-600" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900">AWS Certified Solutions Architect</h5>
                            <p className="text-gray-500 text-sm">Amazon Web Services • 2023</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Target className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900">Employee of the Year</h5>
                            <p className="text-gray-500 text-sm">TechCorp Inc • 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="activity" className="mt-0 p-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Recent Activity</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-gray-900 font-medium">Completed AWS Certification</p>
                          <p className="text-gray-500 text-sm">1 week ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-gray-900 font-medium">Published article on React best practices</p>
                          <p className="text-gray-500 text-sm">2 weeks ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-gray-900 font-medium">Spoke at Tech Conference 2024</p>
                          <p className="text-gray-500 text-sm">1 month ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-gray-900 font-medium">Open sourced E-commerce Platform project</p>
                          <p className="text-gray-500 text-sm">2 months ago</p>
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
