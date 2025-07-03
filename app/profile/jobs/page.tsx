"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookmarkIcon, Filter, Search, Clock, CheckCircle, XCircle, Calendar, Briefcase, MapPin, DollarSign, Building, FileText, ChevronRight, Star, Users, Award, TrendingUp, Zap, Globe, ArrowLeft, X, Send, Upload, Eye, MoreHorizontal, ChevronDown, Heart, Share2, Bookmark } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

const myJobs = [
  {
    id: "1",
    title: "Staff Product Designer",
    company: "HackerRank",
    logo: "/hackrank-logo.png",
    location: "Hybrid - Bengaluru",
    type: "Full time Permanent Position",
    experience: "7 Years Exp",
    salary: "Confidential",
    posted: "2 days ago",
    status: "not_interested",
    skills: ["Visual Design", "UI Design", "Prototyping", "User Experience", "Interaction Design", "AI-powered"],
    description: "We're looking for a Staff Product Designer to lead design initiatives across our platform and create exceptional user experiences.",
    isBookmarked: true,
    isApplied: false,
    urgent: true,
    verified: true,
    rating: 4.8,
    employees: "1k-5k",
    founded: "2009"
  },
  {
    id: "2",
    title: "Data Scientist II",
    company: "CommerceIQ",
    logo: "/commerceiq-logo.png",
    location: "Remote",
    type: "Full time Permanent Position",
    experience: "5 Years Exp",
    salary: "$120K - $150K",
    posted: "1 week ago",
    status: "applied",
    skills: ["Python", "Machine Learning", "Data Analysis", "SQL", "TensorFlow", "AWS"],
    description: "Join our data science team to build cutting-edge ML models that drive business insights and automation.",
    isBookmarked: true,
    isApplied: true,
    urgent: false,
    verified: true,
    rating: 4.9,
    employees: "500-1k",
    founded: "2012"
  },
  {
    id: "3",
    title: "Senior Frontend Engineer",
    company: "Stripe",
    logo: "/stripe-logo.png",
    location: "San Francisco, CA",
    type: "Full time Permanent Position",
    experience: "6 Years Exp",
    salary: "$150K - $200K",
    posted: "3 days ago",
    status: "interview_scheduled",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "Next.js", "Tailwind CSS"],
    description: "Build the future of online payments with our world-class engineering team.",
    isBookmarked: false,
    isApplied: true,
    urgent: true,
    verified: true,
    rating: 4.9,
    employees: "5k+",
    founded: "2010"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "applied":
    case "under_review":
      return <Clock className="h-4 w-4 text-orange-500" />
    case "interview_scheduled":
      return <Calendar className="h-4 w-4 text-green-500" />
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "accepted":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "interested":
      return <Star className="h-4 w-4 text-blue-500" />
    case "not_interested":
      return <X className="h-4 w-4 text-gray-400" />
    default:
      return <Clock className="h-4 w-4 text-gray-400" />
  }
}

const getStatusBadge = (status: string, statusText?: string) => {
  const variants = {
    applied: "bg-blue-50 text-blue-600 border-blue-200",
    under_review: "bg-orange-50 text-orange-600 border-orange-200",
    interview_scheduled: "bg-green-50 text-green-600 border-green-200",
    rejected: "bg-red-50 text-red-600 border-red-200",
    accepted: "bg-green-50 text-green-600 border-green-200",
    interested: "bg-blue-50 text-blue-600 border-blue-200",
    not_interested: "bg-gray-50 text-gray-600 border-gray-200",
  }

  const text = statusText || status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
  return <Badge className={`${variants[status as keyof typeof variants]} font-subheading border`}>{text}</Badge>
}

export default function ProfileJobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [showJobDetails, setShowJobDetails] = useState(false)

  const handleJobClick = (job: any) => {
    setSelectedJob(job)
    setShowJobDetails(true)
  }

  const handleBookmarkToggle = (jobId: string) => {
    console.log("Toggle bookmark for job:", jobId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Modern Header with Gradient */}
      <div className="bg-gradient-to-r from-primary-navy via-blue-600 to-indigo-600 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-6">
              <Link href="/profile" className="flex items-center text-white/80 hover:text-white transition-colors group">
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Profile</span>
              </Link>
              <div className="h-6 w-px bg-white/20"></div>
              <div>
                <h1 className="text-2xl font-bold text-white">My Dream Jobs</h1>
                <p className="text-blue-100 text-sm">Discover opportunities that match your passion</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="hidden sm:flex border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Resume
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm">
                <Search className="h-4 w-4 mr-2" />
                Browse Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Jobs</p>
                  <p className="text-3xl font-bold">1,247</p>
                </div>
                <Briefcase className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-0 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Applied</p>
                  <p className="text-3xl font-bold">23</p>
                </div>
                <Send className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Bookmarked</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <Bookmark className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500 to-red-500 border-0 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Interviews</p>
                  <p className="text-3xl font-bold">5</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Search Section */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-6">
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for your dream job..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl px-6">
                  Search
                </Button>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {['Remote', 'Hybrid', 'On-site', 'Full-time', 'Part-time', 'Contract'].map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    className="rounded-full border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
            <div className="flex items-center space-x-4">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-40 border-gray-200 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="date">Latest</SelectItem>
                  <SelectItem value="salary">Highest Salary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Enhanced Job Cards */}
          <div className="space-y-6">
            {myJobs.map((job, index) => (
              <Card 
                key={job.id} 
                className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:scale-[1.02] hover:-translate-y-1"
                onClick={() => handleJobClick(job)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    
                    {/* Enhanced Company Logo */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {job.company === "HackerRank" ? (
                          <div className="flex items-center">
                            <span className="text-white font-bold text-2xl">H</span>
                            <div className="w-3 h-3 bg-green-500 rounded-sm ml-1 animate-pulse"></div>
                          </div>
                        ) : job.company === "CommerceIQ" ? (
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">Q</span>
                          </div>
                        ) : job.company === "Stripe" ? (
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">S</span>
                          </div>
                        ) : (
                          <span className="text-white font-bold text-2xl">
                            {job.company.charAt(0)}
                          </span>
                        )}
                      </div>
                      
                      {/* Verification Badge */}
                      {job.verified && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Job Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          {/* Job Title */}
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {job.title}
                            </h3>
                            {job.urgent && (
                              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 animate-pulse">
                                <Zap className="h-3 w-3 mr-1" />
                                Urgent
                              </Badge>
                            )}
                          </div>
                          
                          {/* Company Info */}
                          <div className="flex items-center gap-4 mb-3">
                            <p className="text-xl font-semibold text-gray-700">
                              {job.company}
                            </p>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-medium text-gray-600">{job.rating}</span>
                              <span className="text-sm text-gray-500">({job.employees} employees)</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                            onClick={(e) => {e.stopPropagation()}}
                          >
                            <Heart className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`transition-colors duration-300 ${
                              job.isBookmarked ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
                            }`}
                            onClick={(e) => {e.stopPropagation(); handleBookmarkToggle(job.id)}}
                          >
                            <Bookmark className={`h-5 w-5 ${job.isBookmarked ? 'fill-current' : ''}`} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                            onClick={(e) => {e.stopPropagation()}}
                          >
                            <Share2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl">
                          <DollarSign className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="text-sm text-green-600 font-medium">Salary</p>
                            <p className="text-lg font-bold text-green-700">{job.salary}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl">
                          <MapPin className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm text-blue-600 font-medium">Location</p>
                            <p className="text-lg font-bold text-blue-700">{job.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-xl">
                          <Users className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="text-sm text-purple-600 font-medium">Experience</p>
                            <p className="text-lg font-bold text-purple-700">{job.experience}</p>
                          </div>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-700 mb-3">Required Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 4).map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 border-0 px-3 py-1 rounded-full hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 4 && (
                            <Badge className="bg-gray-100 text-gray-600 border-0 px-3 py-1 rounded-full">
                              +{job.skills.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Bottom Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Posted {job.posted}
                          </span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            className="border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 rounded-xl"
                            onClick={(e) => {e.stopPropagation(); handleJobClick(job)}}
                          >
                            View Details
                            <Eye className="h-4 w-4 ml-2" />
                          </Button>
                          <Button
                            className={`rounded-xl transition-all duration-300 ${
                              job.isApplied 
                                ? 'bg-green-500 hover:bg-green-600 text-white' 
                                : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
                            }`}
                            onClick={(e) => {e.stopPropagation()}}
                          >
                            {job.isApplied ? (
                              <>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Applied
                              </>
                            ) : (
                              <>
                                Apply Now
                                <Send className="h-4 w-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 rounded-xl px-8 py-3"
          >
            Load More Jobs
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Job Details Modal */}
      <Dialog open={showJobDetails} onOpenChange={setShowJobDetails}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {selectedJob?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedJob && (
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Building className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{selectedJob.company}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Job Description</h4>
                <p className="text-gray-600">{selectedJob.description}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills?.map((skill: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 