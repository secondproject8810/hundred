"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  ArrowLeft,
  Eye,
  Users,
  Target,
  Clock,
  DollarSign,
  Calendar,
  MapPin,
  Star,
  MessageCircle,
  UserCheck,
  UserX,
  Download,
  ExternalLink,
  Briefcase,
  Award,
  Globe,
  Mail,
  Phone,
  XCircle,
  Building2,
  Edit,
  Zap,
  Filter,
  BarChart3,
  Brain
} from "lucide-react"

export default function JobDetails() {
  const router = useRouter()
  const params = useParams()
  const jobId = params.id as string
  const [selectedApplicant, setSelectedApplicant] = useState<any>(null)
  const [showApplicantDetails, setShowApplicantDetails] = useState(false)
  const [showCompanyProfilePopup, setShowCompanyProfilePopup] = useState(false)

  // Mock job data - in real app, this would be fetched based on jobId
  const job = {
    id: parseInt(jobId),
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    experience: "Senior Level (5+ years)",
    status: "Active",
    applicants: 45,
    views: 892,
    posted: "5 days ago",
    deadline: "December 15, 2024",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Jest", "Cypress"],
    description: `We are looking for a skilled Frontend Developer to join our engineering team. You will be responsible for developing user-facing features, ensuring cross-browser compatibility, and collaborating with designers and backend developers.

Key Responsibilities:
• Develop and maintain user-facing features using React and TypeScript
• Optimize applications for maximum speed and scalability
• Collaborate with cross-functional teams including design and backend
• Participate in code reviews and technical discussions
• Mentor junior developers and contribute to team growth
• Implement responsive designs with pixel-perfect precision
• Write comprehensive tests using Jest and Cypress

Requirements:
• 5+ years of experience with React and TypeScript
• Strong understanding of modern frontend technologies and best practices
• Experience with state management libraries (Redux, Zustand)
• Knowledge of testing frameworks (Jest, Cypress)
• Excellent communication skills and ability to work in a team environment
• Bachelor's degree in Computer Science or equivalent experience

Nice to Have:
• Experience with Next.js and SSR/SSG
• Knowledge of GraphQL and Apollo Client
• Familiarity with design systems and component libraries
• Experience with CI/CD pipelines
• Previous experience in a startup environment`,
    company: "TechCorp Inc.",
    postedBy: "Sarah Johnson",
    applications: [
      {
        id: 1,
        name: "Michael Chen",
        title: "Senior Frontend Developer",
        currentCompany: "Meta",
        rating: 4.9,
        reviews: 156,
        experience: "6+ years",
        expectedSalary: "$130K",
        location: "San Francisco, CA",
        profileImage: "/api/placeholder/64/64",
        status: "new",
        appliedDate: "2 days ago",
        availability: "2 weeks notice",
        responseTime: "1 hour",
        coverLetter: "I'm excited about the opportunity to join TechCorp as a Senior Frontend Developer. With 6+ years of experience at Meta, I've led the development of several high-traffic web applications using React and TypeScript. I'm particularly drawn to your focus on innovation and would love to contribute to your team's success.",
        skills: ["React", "TypeScript", "Next.js", "GraphQL", "Redux", "Testing"],
        currentRole: "Senior Software Engineer at Meta",
        education: "M.S. Computer Science, Stanford University",
        languages: ["English (Native)", "Mandarin (Fluent)"],
        certifications: ["React Certified Developer", "AWS Solutions Architect"],
        portfolio: [
          { title: "E-commerce Platform", description: "React/TypeScript application", link: "#" },
          { title: "Data Visualization Dashboard", description: "D3.js and React", link: "#" },
        ],
        email: "michael.chen@email.com",
        phone: "+1 (555) 123-4567"
      },
      {
        id: 2,
        name: "Emily Rodriguez",
        title: "Frontend Developer",
        currentCompany: "Airbnb",
        rating: 4.8,
        reviews: 134,
        experience: "5+ years",
        expectedSalary: "$125K",
        location: "San Francisco, CA",
        profileImage: "/api/placeholder/64/64",
        status: "reviewing",
        appliedDate: "3 days ago",
        availability: "Immediately",
        responseTime: "2 hours",
        coverLetter: "As a Frontend Developer at Airbnb with 5+ years of experience, I've been responsible for building and maintaining user-facing features that serve millions of users. I'm passionate about creating exceptional user experiences and would love to bring my expertise to TechCorp.",
        skills: ["React", "TypeScript", "Sass", "Webpack", "Jest", "Cypress"],
        currentRole: "Frontend Developer at Airbnb",
        education: "B.S. Computer Science, UC Berkeley",
        languages: ["English (Native)", "Spanish (Native)"],
        certifications: ["Google Frontend Developer", "React Certified"],
        portfolio: [
          { title: "Booking Interface", description: "Complex React application", link: "#" },
          { title: "Component Library", description: "Design system implementation", link: "#" },
        ],
        email: "emily.rodriguez@email.com",
        phone: "+1 (555) 234-5678"
      },
      {
        id: 3,
        name: "David Kim",
        title: "Senior React Developer",
        currentCompany: "Netflix",
        rating: 5.0,
        reviews: 89,
        experience: "7+ years",
        expectedSalary: "$140K",
        location: "Los Gatos, CA",
        profileImage: "/api/placeholder/64/64",
        status: "shortlisted",
        appliedDate: "4 days ago",
        availability: "3 weeks notice",
        responseTime: "30 minutes",
        coverLetter: "I'm a Senior React Developer at Netflix with 7+ years of experience building scalable frontend applications. I've led multiple projects from conception to deployment and am excited about the opportunity to contribute to TechCorp's innovative products.",
        skills: ["React", "TypeScript", "Next.js", "GraphQL", "Redux Toolkit", "Microservices"],
        currentRole: "Senior Software Engineer at Netflix",
        education: "B.S. Software Engineering, University of Washington",
        languages: ["English (Native)", "Korean (Fluent)"],
        certifications: ["React Expert", "AWS Certified Developer"],
        portfolio: [
          { title: "Streaming Platform UI", description: "High-performance React app", link: "#" },
          { title: "Admin Dashboard", description: "Complex data visualization", link: "#" },
        ],
        email: "david.kim@email.com",
        phone: "+1 (555) 345-6789"
      },
      {
        id: 4,
        name: "Sarah Kim",
        title: "Frontend Developer",
        currentCompany: "Spotify",
        rating: 4.9,
        reviews: 78,
        experience: "4+ years",
        expectedSalary: "$115K",
        location: "New York, NY",
        profileImage: "/api/placeholder/64/64",
        status: "interviewed",
        appliedDate: "6 days ago",
        availability: "1 month notice",
        responseTime: "45 minutes",
        coverLetter: "I'm a Frontend Developer at Spotify with 4+ years of experience building user interfaces for millions of users. I specialize in React, TypeScript, and modern frontend technologies. I'm excited about the opportunity to bring my skills to TechCorp.",
        skills: ["React", "TypeScript", "Redux", "GraphQL", "Styled Components", "Jest"],
        currentRole: "Frontend Developer at Spotify",
        education: "B.S. Computer Science, NYU",
        languages: ["English (Fluent)", "Korean (Native)"],
        certifications: ["React Certified", "TypeScript Expert"],
        portfolio: [
          { title: "Music Player Interface", description: "React music application", link: "#" },
          { title: "Analytics Dashboard", description: "Data visualization project", link: "#" },
        ],
        email: "sarah.kim@email.com",
        phone: "+1 (555) 456-7890"
      },
      {
        id: 5,
        name: "John Smith",
        title: "Frontend Engineer",
        currentCompany: "Google",
        rating: 4.7,
        reviews: 234,
        experience: "8+ years",
        expectedSalary: "$150K",
        location: "Mountain View, CA",
        profileImage: "/api/placeholder/64/64",
        status: "new",
        appliedDate: "1 day ago",
        availability: "4 weeks notice",
        responseTime: "2 hours",
        coverLetter: "I'm a Frontend Engineer at Google with 8+ years of experience building large-scale web applications. I have deep expertise in React, TypeScript, and modern frontend architecture. I'm interested in joining TechCorp to work on innovative products.",
        skills: ["React", "TypeScript", "Angular", "Vue.js", "Node.js", "Docker"],
        currentRole: "Senior Frontend Engineer at Google",
        education: "M.S. Computer Science, MIT",
        languages: ["English (Native)", "French (Fluent)"],
        certifications: ["Google Cloud Certified", "React Expert"],
        portfolio: [
          { title: "Search Interface", description: "High-performance search UI", link: "#" },
          { title: "Developer Tools", description: "Chrome DevTools extension", link: "#" },
        ],
        email: "john.smith@email.com",
        phone: "+1 (555) 567-8901"
      }
    ]
  }

  const handleAction = (applicantId: number, action: 'interview' | 'reject' | 'message') => {
    const applicant = job.applications.find(a => a.id === applicantId)
    console.log(`${action} applicant:`, applicant?.name)
    // Here you would implement the actual action logic
  }

  const openApplicantDetails = (applicant: any) => {
    setSelectedApplicant(applicant)
    setShowApplicantDetails(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-50 text-blue-600 border-blue-200"
      case "reviewing":
        return "bg-yellow-50 text-yellow-600 border-yellow-200"
      case "shortlisted":
        return "bg-green-50 text-green-600 border-green-200"
      case "interviewed":
        return "bg-purple-50 text-purple-600 border-purple-200"
      default:
        return "bg-slate-50 text-slate-600 border-slate-200"
    }
  }

  const getJobStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-600 border-green-200"
      case "Draft":
        return "bg-yellow-50 text-yellow-600 border-yellow-200"
      case "Closed":
        return "bg-red-50 text-red-600 border-red-200"
      case "Paused":
        return "bg-orange-50 text-orange-600 border-orange-200"
      default:
        return "bg-slate-50 text-slate-600 border-slate-200"
    }
  }

  return (
    <div className="w-[65%] mx-auto py-8">
      {/* Header with Back Button */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-4 font-subheading text-primary-navy hover:bg-primary-navy/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Button>
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <h1 className="text-3xl font-heading text-primary-navy">{job.title}</h1>
              <Badge className={`${getJobStatusColor(job.status)} font-subheading px-3 py-1`}>
                {job.status}
              </Badge>
            </div>
            <div className="flex items-center space-x-4 text-lg font-subheading text-slate-600 mb-4">
              <span className="flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                {job.department}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {job.location}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                <span className="font-heading text-green-600">{job.salary}</span>
              </span>
            </div>
            <div className="flex items-center space-x-4 text-base font-subheading text-slate-500">
              <span>Posted by {job.postedBy}</span>
              <span>•</span>
              <span>{job.posted}</span>
              <span>•</span>
              <span>{job.experience}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading">
              Edit Job
            </Button>
            <Button className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading">
              Promote Job
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-2xl font-heading text-slate-900">{job.applicants}</span>
            </div>
            <p className="font-subheading text-slate-600">Total Applications</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Eye className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-2xl font-heading text-slate-900">{job.views}</span>
            </div>
            <p className="font-subheading text-slate-600">Job Views</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Target className="h-6 w-6 text-purple-600 mr-2" />
              <span className="text-2xl font-heading text-slate-900">{((job.applicants / job.views) * 100).toFixed(1)}%</span>
            </div>
            <p className="font-subheading text-slate-600">Application Rate</p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Calendar className="h-6 w-6 text-orange-600 mr-2" />
              <span className="text-2xl font-heading text-slate-900">10</span>
            </div>
            <p className="font-subheading text-slate-600">Days Left</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview" className="font-subheading">Overview</TabsTrigger>
          <TabsTrigger value="applicants" className="font-subheading">Applicants ({job.applications.length})</TabsTrigger>
          <TabsTrigger value="analytics" className="font-subheading">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Job Description */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="font-heading text-primary-navy">Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line font-subheading text-slate-700 leading-relaxed">
                      {job.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Job Details Sidebar */}
            <div className="space-y-6">
              {/* Skills Required */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="font-heading text-primary-navy">Skills Required</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="font-subheading border-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="font-heading text-primary-navy">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-subheading">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message All Applicants
                  </Button>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-subheading">
                    <Download className="h-4 w-4 mr-2" />
                    Export Applications
                  </Button>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-subheading">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Share Job
                  </Button>
                </CardContent>
              </Card>

              {/* Job Timeline */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="font-heading text-primary-navy">Job Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 font-subheading">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Posted</span>
                      <span className="font-heading text-slate-900">{job.posted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Job Type</span>
                      <span className="font-heading text-slate-900">{job.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Application Deadline</span>
                      <span className="font-heading text-slate-900">{job.deadline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Salary Range</span>
                      <span className="font-heading text-green-600">{job.salary}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="applicants" className="space-y-6">
          <div className="space-y-4">
            {job.applications.map((applicant) => (
              <Card key={applicant.id} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4 flex-1">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={applicant.profileImage} />
                        <AvatarFallback className="bg-primary-navy text-white font-heading">
                          {applicant.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-heading text-primary-navy">{applicant.name}</h3>
                          <div className="flex items-center space-x-2">
                            <Badge className={`${getStatusColor(applicant.status)} font-subheading px-3 py-1`}>
                              {applicant.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="font-subheading text-slate-600 mb-2">{applicant.title}</p>
                        
                        <div className="flex items-center space-x-4 text-sm font-subheading text-slate-500 mb-3">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="font-heading">{applicant.rating}</span>
                            <span className="ml-1">({applicant.reviews} reviews)</span>
                          </div>
                          <span>•</span>
                          <span>{applicant.experience}</span>
                          <span>•</span>
                          <span>{applicant.currentCompany}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {applicant.location}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 mb-4">
                          <div>
                            <span className="text-sm font-subheading text-slate-500">Expected Salary</span>
                            <p className="text-lg font-heading text-green-600">{applicant.expectedSalary}</p>
                          </div>
                          <div>
                            <span className="text-sm font-subheading text-slate-500">Experience</span>
                            <p className="text-lg font-heading text-slate-900">{applicant.experience}</p>
                          </div>
                          <div>
                            <span className="text-sm font-subheading text-slate-500">Response Time</span>
                            <p className="text-lg font-heading text-slate-900">{applicant.responseTime}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-heading text-slate-900 mb-2">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {applicant.skills.slice(0, 4).map((skill, index) => (
                              <Badge key={index} variant="outline" className="font-subheading text-xs border-slate-300">
                                {skill}
                              </Badge>
                            ))}
                            {applicant.skills.length > 4 && (
                              <Badge variant="outline" className="font-subheading text-xs border-slate-300">
                                +{applicant.skills.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button 
                            className="bg-green-600 hover:bg-green-700 text-white rounded-lg font-subheading"
                            onClick={() => handleAction(applicant.id, 'interview')}
                          >
                            <UserCheck className="h-4 w-4 mr-2" />
                            Interview
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-red-300 text-red-600 hover:bg-red-50 rounded-lg font-subheading"
                            onClick={() => handleAction(applicant.id, 'reject')}
                          >
                            <UserX className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-lg font-subheading"
                            onClick={() => handleAction(applicant.id, 'message')}
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-subheading"
                            onClick={() => openApplicantDetails(applicant)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="font-heading text-primary-navy">Application Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Total Applications</span>
                    <span className="font-heading text-2xl text-slate-900">{job.applicants}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Average Experience</span>
                    <span className="font-heading text-2xl text-green-600">5.8 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Salary Range</span>
                    <span className="font-heading text-lg text-slate-900">$115K - $150K</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="font-heading text-primary-navy">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Views</span>
                    <span className="font-heading text-2xl text-slate-900">{job.views}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Application Rate</span>
                    <span className="font-heading text-2xl text-blue-600">{((job.applicants / job.views) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-subheading text-slate-600">Response Time</span>
                    <span className="font-heading text-lg text-slate-900">1.2 hours avg</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Applicant Details Modal */}
      {showApplicantDetails && selectedApplicant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading text-primary-navy">Applicant Details</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowApplicantDetails(false)}
                  className="rounded-xl"
                >
                  <XCircle className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Profile Info */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={selectedApplicant.profileImage} />
                      <AvatarFallback className="bg-primary-navy text-white font-heading text-2xl">
                        {selectedApplicant.name.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-2xl font-heading text-primary-navy">{selectedApplicant.name}</h3>
                    <p className="font-subheading text-slate-600 mb-2">{selectedApplicant.title}</p>
                    <div className="flex items-center justify-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="font-heading text-lg">{selectedApplicant.rating}</span>
                      <span className="font-subheading text-slate-500 ml-1">({selectedApplicant.reviews} reviews)</span>
                    </div>
                  </div>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy text-lg">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-slate-500 mr-3" />
                        <span className="font-subheading text-slate-700">{selectedApplicant.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-slate-500 mr-3" />
                        <span className="font-subheading text-slate-700">{selectedApplicant.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-slate-500 mr-3" />
                        <span className="font-subheading text-slate-700">{selectedApplicant.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-slate-500 mr-3" />
                        <span className="font-subheading text-slate-700">{selectedApplicant.availability}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy text-lg">Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-subheading text-slate-600">Experience</span>
                        <span className="font-heading text-slate-900">{selectedApplicant.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-subheading text-slate-600">Current Company</span>
                        <span className="font-heading text-slate-900">{selectedApplicant.currentCompany}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-subheading text-slate-600">Response Time</span>
                        <span className="font-heading text-slate-900">{selectedApplicant.responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-subheading text-slate-600">Expected Salary</span>
                        <span className="font-heading text-green-600">{selectedApplicant.expectedSalary}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Detailed Info */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Cover Letter</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-subheading text-slate-700 leading-relaxed">{selectedApplicant.coverLetter}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Skills & Expertise</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {selectedApplicant.skills.map((skill: string, index: number) => (
                          <Badge key={index} variant="outline" className="font-subheading border-slate-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Portfolio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedApplicant.portfolio.map((item: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                            <div>
                              <h4 className="font-heading text-slate-900">{item.title}</h4>
                              <p className="font-subheading text-slate-600 text-sm">{item.description}</p>
                            </div>
                            <Button variant="outline" size="sm" className="font-subheading">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-slate-200">
                      <CardHeader>
                        <CardTitle className="font-heading text-primary-navy">Education</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-subheading text-slate-700">{selectedApplicant.education}</p>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-200">
                      <CardHeader>
                        <CardTitle className="font-heading text-primary-navy">Current Role</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-subheading text-slate-700">{selectedApplicant.currentRole}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {selectedApplicant.languages.map((language: string, index: number) => (
                          <Badge key={index} variant="outline" className="font-subheading border-slate-300">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="font-heading text-primary-navy">Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedApplicant.certifications.map((cert: string, index: number) => (
                          <div key={index} className="flex items-center">
                            <Award className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="font-subheading text-slate-700">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-slate-200">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white rounded-lg font-subheading px-8 py-3"
                  onClick={() => {
                    handleAction(selectedApplicant.id, 'interview')
                    setShowApplicantDetails(false)
                  }}
                >
                  <UserCheck className="h-4 w-4 mr-2" />
                  Interview {selectedApplicant.name}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-lg font-subheading px-8 py-3"
                  onClick={() => {
                    handleAction(selectedApplicant.id, 'message')
                    setShowApplicantDetails(false)
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  className="border-red-300 text-red-600 hover:bg-red-50 rounded-lg font-subheading px-8 py-3"
                  onClick={() => {
                    handleAction(selectedApplicant.id, 'reject')
                    setShowApplicantDetails(false)
                  }}
                >
                  <UserX className="h-4 w-4 mr-2" />
                  Reject Application
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 