"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookmarkIcon, Filter, Search, Clock, CheckCircle, XCircle, Calendar, Briefcase, MapPin, DollarSign, Building, FileText, ChevronRight, Star, Users, Award, TrendingUp, Zap, Globe, ArrowLeft, X, Send, Upload, GraduationCap } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const appliedInternships = [
  {
    id: "1",
    title: "Software Engineering Intern",
    company: "TechVision",
    logo: "/abstract-tech-logo.png",
    location: "San Francisco, CA",
    stipend: "₹25K/month",
    type: "Summer Internship",
    remote: "Hybrid",
    appliedDate: "3 days ago",
    status: "under_review",
    statusText: "Under Review",
    description: "Join our engineering team to work on real-world projects and gain hands-on experience.",
    skills: ["JavaScript", "React", "Python", "Student"],
  },
  {
    id: "4",
    title: "Marketing Intern",
    company: "GrowthBoost",
    logo: "/marketing-agency-logo.png",
    location: "New York, NY",
    stipend: "₹18K/month",
    type: "Summer Internship",
    remote: "On-site",
    appliedDate: "1 week ago",
    status: "interview_scheduled",
    statusText: "Interview Scheduled",
    description: "Help create marketing campaigns and learn digital marketing strategies.",
    skills: ["Marketing", "Social Media", "Analytics", "Student"],
  },
  {
    id: "6",
    title: "UX Design Intern",
    company: "DesignCorp",
    logo: "/design-agency-logo.png",
    location: "Austin, TX",
    stipend: "₹20K/month",
    type: "Summer Internship",
    remote: "Remote",
    appliedDate: "2 weeks ago",
    status: "rejected",
    statusText: "Not Selected",
    description: "Learn user experience design principles working on real client projects.",
    skills: ["Figma", "User Research", "Prototyping", "Student"],
  },
  {
    id: "7",
    title: "Data Analytics Intern",
    company: "DataCorp",
    logo: "/tech-startup-logo.png",
    location: "Seattle, WA",
    stipend: "₹22K/month",
    type: "Summer Internship",
    remote: "Hybrid",
    appliedDate: "3 weeks ago",
    status: "applied",
    statusText: "Application Submitted",
    description: "Analyze data to derive business insights and learn analytics tools.",
    skills: ["Python", "SQL", "Analytics", "Excel"],
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "applied":
      return <Clock className="h-4 w-4 text-primary-navy" />
    case "under_review":
      return <Clock className="h-4 w-4 text-orange-500" />
    case "interview_scheduled":
      return <Calendar className="h-4 w-4 text-green-500" />
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "accepted":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    default:
      return <Clock className="h-4 w-4 text-slate-400" />
  }
}

const getStatusBadge = (status: string, statusText: string) => {
  const variants = {
    applied: "bg-primary-navy/10 text-primary-navy border-primary-navy/20",
    under_review: "bg-orange-50 text-orange-600 border-orange-200",
    interview_scheduled: "bg-green-50 text-green-600 border-green-200",
    rejected: "bg-red-50 text-red-600 border-red-200",
    accepted: "bg-green-50 text-green-600 border-green-200",
  }

  return <Badge className={`${variants[status as keyof typeof variants]} font-body-medium`}>{statusText}</Badge>
}

export default function InternshipsPage() {
  const [showFilters, setShowFilters] = useState(true)
  const [stipendRange, setStipendRange] = useState([15000, 50000])
  const [experienceRange, setExperienceRange] = useState([0, 2])
  const [selectedInternship, setSelectedInternship] = useState<any>(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    expectedStipend: "",
    availableStartDate: "",
    resume: null,
    transcript: null
  })
  
  const statusCounts = {
    total: appliedInternships.length,
    pending: appliedInternships.filter(internship => internship.status === "applied" || internship.status === "under_review").length,
    interviews: appliedInternships.filter(internship => internship.status === "interview_scheduled").length,
    accepted: appliedInternships.filter(internship => internship.status === "accepted").length,
  }

  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechVision",
      logo: "/abstract-tech-logo.png",
      location: "San Francisco, CA",
      stipend: "₹25K - ₹30K/month",
      type: "Summer Internship",
      remote: "Hybrid",
      posted: "3 days ago",
      description: "Join our engineering team to work on real-world projects and gain hands-on experience with modern web technologies.",
      fullDescription: "This summer internship program at TechVision offers students the opportunity to work alongside experienced engineers on meaningful projects. You'll contribute to our web applications, learn about software development best practices, and gain exposure to the entire software development lifecycle. This is a 12-week paid internship with potential for full-time conversion.",
      skills: ["JavaScript", "React", "Python", "Student"],
      requirements: [
        "Currently pursuing Computer Science or related degree",
        "Basic knowledge of JavaScript and web development",
        "Familiarity with React or similar frameworks",
        "Strong problem-solving skills",
        "Excellent communication and teamwork abilities",
        "Available for 12-week summer program"
      ],
      responsibilities: [
        "Develop features for web applications under mentor guidance",
        "Participate in code reviews and team meetings",
        "Learn and apply software development best practices",
        "Collaborate with cross-functional teams",
        "Complete assigned projects and present results",
        "Attend technical workshops and training sessions"
      ],
      companyInfo: {
        name: "TechVision",
        size: "100-500 employees",
        industry: "Technology",
        founded: "2018",
        description: "TechVision is a fast-growing technology company that develops innovative software solutions for businesses worldwide.",
        benefits: ["Mentorship Program", "Learning Budget", "Free Lunch", "Networking Events", "Conversion Opportunity"],
        culture: "Innovation-driven, collaborative, and learning-focused environment for interns"
      },
      applicationDeadline: "2024-03-15",
      programStart: "June 2024",
      mentor: "Sarah Chen, Senior Engineer"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Flexbone",
      logo: "/flexbone-logo.png",
      location: "Atlanta, GA",
      stipend: "₹22K - ₹28K/month",
      type: "Summer Internship",
      remote: "On-site",
      posted: "1 week ago",
      description: "Work with our data science team to analyze healthcare data and develop machine learning models for real-world applications.",
      fullDescription: "Join Flexbone's data science team for an exciting summer internship where you'll work on healthcare analytics projects. You'll learn about machine learning applications in healthcare, data preprocessing techniques, and how to derive actionable insights from complex datasets. This 10-week program includes structured learning and hands-on project work.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Student"],
      requirements: [
        "Currently pursuing degree in Data Science, Statistics, or related field",
        "Proficiency in Python and data analysis libraries",
        "Basic understanding of machine learning concepts",
        "Experience with SQL and database queries",
        "Strong analytical and mathematical skills",
        "Interest in healthcare applications"
      ],
      responsibilities: [
        "Analyze healthcare datasets to identify trends and patterns",
        "Develop and test machine learning models",
        "Create data visualizations and reports",
        "Collaborate with data scientists on research projects",
        "Present findings to stakeholders",
        "Participate in data science team meetings"
      ],
      companyInfo: {
        name: "Flexbone",
        size: "50-100 employees",
        industry: "Healthcare Technology",
        founded: "2020",
        description: "Flexbone develops AI-powered solutions for healthcare providers to improve patient care and operational efficiency.",
        benefits: ["Health Insurance", "Flexible Hours", "Professional Development", "Research Opportunities"],
        culture: "Mission-driven team focused on improving healthcare through technology and innovation"
      },
      applicationDeadline: "2024-03-20",
      programStart: "June 2024",
      mentor: "Dr. Michael Torres, Lead Data Scientist"
    },
    {
      id: 3,
      title: "Product Management Intern",
      company: "Source",
      logo: "/generic-company-logo.png",
      location: "Chicago, IL",
      stipend: "₹20K - ₹25K/month",
      type: "Summer Internship",
      remote: "Hybrid",
      posted: "2 weeks ago",
      description: "Learn product management fundamentals by working on real product features and conducting user research for construction industry applications.",
      fullDescription: "Source is seeking a Product Management Intern to join our product team and gain hands-on experience in product development for the construction industry. You'll work closely with senior product managers to understand user needs, define product requirements, and support feature development from conception to launch.",
      skills: ["Product Management", "User Research", "Analytics", "Student"],
      requirements: [
        "Currently pursuing degree in Business, Engineering, or related field",
        "Strong analytical and problem-solving skills",
        "Interest in product management and user experience",
        "Excellent communication and presentation skills",
        "Basic understanding of technology and software development",
        "Available for 12-week program"
      ],
      responsibilities: [
        "Assist in product discovery and user research activities",
        "Help define product requirements and user stories",
        "Support feature development and testing processes",
        "Analyze user data and product metrics",
        "Participate in product planning and review meetings",
        "Create documentation and presentations"
      ],
      companyInfo: {
        name: "Source",
        size: "20-50 employees",
        industry: "Construction Technology",
        founded: "2015",
        description: "Source provides technology solutions to construction companies, helping them streamline operations and improve project management.",
        benefits: ["Mentorship", "Professional Development", "Team Events", "Industry Exposure"],
        culture: "Close-knit team with strong focus on learning and professional growth"
      },
      applicationDeadline: "2024-03-25",
      programStart: "June 2024",
      mentor: "Jennifer Kim, Senior Product Manager"
    },
    {
      id: 4,
      title: "Digital Marketing Intern",
      company: "GrowthBoost",
      logo: "/marketing-agency-logo.png",
      location: "New York, NY",
      stipend: "₹18K - ₹22K/month",
      type: "Summer Internship",
      remote: "On-site",
      posted: "5 days ago",
      description: "Learn digital marketing strategies by working on real B2B campaigns and gaining exposure to various marketing channels and tools.",
      fullDescription: "GrowthBoost is offering a comprehensive Digital Marketing Internship that provides hands-on experience in B2B marketing. You'll work across multiple marketing channels including SEO, social media, content creation, and analytics while learning from experienced marketing professionals.",
      skills: ["Digital Marketing", "Social Media", "Content Creation", "Student"],
      requirements: [
        "Currently pursuing degree in Marketing, Communications, or related field",
        "Strong written and verbal communication skills",
        "Interest in digital marketing and social media",
        "Basic understanding of marketing principles",
        "Creative mindset and attention to detail",
        "Available for 10-week summer program"
      ],
      responsibilities: [
        "Assist in creating and managing social media content",
        "Support SEO and content marketing initiatives",
        "Help with email marketing campaigns",
        "Conduct market research and competitive analysis",
        "Track and analyze marketing campaign performance",
        "Participate in client meetings and presentations"
      ],
      companyInfo: {
        name: "GrowthBoost",
        size: "30-75 employees",
        industry: "Digital Marketing",
        founded: "2017",
        description: "GrowthBoost is a digital marketing agency specializing in B2B growth strategies and lead generation.",
        benefits: ["Flexible Work", "Professional Development", "Performance Bonuses", "Agency Exposure"],
        culture: "Creative, data-driven team focused on delivering exceptional results and fostering growth"
      },
      applicationDeadline: "2024-03-18",
      programStart: "June 2024",
      mentor: "Alex Rodriguez, Marketing Manager"
    },
    {
      id: 5,
      title: "UX Design Intern",
      company: "FinTech Solutions",
      logo: "/finance-company-logo.png",
      location: "Boston, MA",
      stipend: "₹24K - ₹28K/month",
      type: "Summer Internship",
      remote: "Hybrid",
      posted: "1 week ago",
      description: "Gain experience in fintech UX design by working on user interface improvements and conducting usability research for financial applications.",
      fullDescription: "FinTech Solutions is seeking a UX Design Intern to join our design team and contribute to creating intuitive financial technology products. You'll work on user research, wireframing, prototyping, and user testing while learning about design thinking in the fintech industry.",
      skills: ["UX Design", "Figma", "User Research", "Student"],
      requirements: [
        "Currently pursuing degree in Design, HCI, or related field",
        "Proficiency in design tools like Figma or Sketch",
        "Basic understanding of UX design principles",
        "Portfolio demonstrating design thinking and process",
        "Strong attention to detail and visual design skills",
        "Available for 12-week summer program"
      ],
      responsibilities: [
        "Assist in user research and usability testing",
        "Create wireframes and interactive prototypes",
        "Support design system development and maintenance",
        "Collaborate with product and engineering teams",
        "Participate in design reviews and critiques",
        "Help with visual design and user interface improvements"
      ],
      companyInfo: {
        name: "FinTech Solutions",
        size: "200-500 employees",
        industry: "Financial Technology",
        founded: "2016",
        description: "FinTech Solutions provides innovative financial technology products that help businesses manage their finances more effectively.",
        benefits: ["Health Insurance", "Learning Budget", "Design Conference", "Mentorship", "Conversion Potential"],
        culture: "Design-focused environment with emphasis on user-centered thinking and innovation"
      },
      applicationDeadline: "2024-03-22",
      programStart: "June 2024",
      mentor: "David Park, Senior UX Designer"
    }
  ]

  const handleInternshipClick = (internship: any) => {
    setSelectedInternship(internship)
  }

  const handleApplyClick = () => {
    setShowApplicationModal(true)
  }

  const handleSubmitApplication = () => {
    // Handle application submission here
    console.log("Application submitted:", { internship: selectedInternship?.title, ...applicationData })
    setShowApplicationModal(false)
    setApplicationData({ 
      coverLetter: "", 
      expectedStipend: "", 
      availableStartDate: "", 
      resume: null, 
      transcript: null 
    })
  }

  // Sorting function
  const sortInternships = (internships: any[], sortOption: string) => {
    const sortedInternships = [...internships]
    switch (sortOption) {
      case "newest":
        return sortedInternships.sort((a, b) => {
          const aDate = new Date(a.posted.replace(' ago', ''))
          const bDate = new Date(b.posted.replace(' ago', ''))
          return bDate.getTime() - aDate.getTime()
        })
      case "stipend-high":
        return sortedInternships.sort((a, b) => {
          const aStipend = parseInt(a.stipend.replace(/[₹K,-]/g, ''))
          const bStipend = parseInt(b.stipend.replace(/[₹K,-]/g, ''))
          return bStipend - aStipend
        })
      case "company":
        return sortedInternships.sort((a, b) => a.company.localeCompare(b.company))
      case "title":
        return sortedInternships.sort((a, b) => a.title.localeCompare(b.title))
      case "relevance":
      default:
        return sortedInternships
    }
  }

  const sortedInternships = sortInternships(internships, sortBy)
  
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading-bold text-primary-navy mb-2">Internship Opportunities</h1>
        <p className="text-slate-600 font-body text-lg sm:text-xl">Launch your career with hands-on experience at leading companies</p>
            </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Enhanced Sidebar for Internships */}
        <div className="w-full lg:w-64 lg:flex-shrink-0">
          {/* Mobile Horizontal Buttons - Only on Mobile */}
          <div className="lg:hidden mb-6">
            <div className="flex gap-2">
              {/* Applied Internships Button - Mobile */}
              <Link href="/internships/applied" className="flex-1">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading text-xs h-8"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Applied ({statusCounts.total})
                </Button>
              </Link>
            </div>
          </div>

          {/* My Applications - Desktop Only */}
          <div className="mb-6 hidden lg:block">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg lg:text-xl font-heading text-primary-navy flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  My Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/internships/applied">
                  <Button 
                    variant="outline" 
                    className="w-full justify-between border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-sm"
                  >
                    <span className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Applied Internships
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-500 font-body">
                  <div className="text-center">
                    <p className="font-heading text-primary-navy">{statusCounts.total}</p>
                    <p className="text-xs font-body">Total Applied</p>
                    </div>
                  <div className="text-center">
                    <p className="font-heading text-blue-600">{statusCounts.interviews}</p>
                    <p className="text-xs font-body">Interviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Filters */}
          <div className="block">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg lg:text-xl font-heading text-primary-navy flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Advanced Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Internship Type */}
                <div>
                  <h4 className="font-subheading-semibold text-primary-navy mb-3">Internship Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="summer" />
                      <label htmlFor="summer" className="text-sm font-body text-slate-600">Summer Internship</label>
                  </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="winter" />
                      <label htmlFor="winter" className="text-sm font-body text-slate-600">Winter Internship</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="part-time" />
                      <label htmlFor="part-time" className="text-sm font-body text-slate-600">Part-time</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="virtual" />
                      <label htmlFor="virtual" className="text-sm font-body text-slate-600">Virtual Internship</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Year of Study */}
                <div>
                  <h4 className="font-subheading-semibold text-primary-navy mb-3">Year of Study</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="first-year" />
                      <label htmlFor="first-year" className="text-sm font-body text-slate-600">1st Year</label>
                  </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="second-year" />
                      <label htmlFor="second-year" className="text-sm font-body text-slate-600">2nd Year</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="third-year" />
                      <label htmlFor="third-year" className="text-sm font-body text-slate-600">3rd Year</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="final-year" />
                      <label htmlFor="final-year" className="text-sm font-body text-slate-600">Final Year</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="graduate" />
                      <label htmlFor="graduate" className="text-sm font-body text-slate-600">Graduate Student</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Stipend Range */}
                <div>
                  <h4 className="font-subheading-semibold text-primary-navy mb-3">Stipend Range</h4>
                  <div className="px-2">
                    <Slider
                      value={stipendRange}
                      onValueChange={setStipendRange}
                      max={50000}
                      min={10000}
                      step={2000}
                      className="mb-3"
                    />
                    <div className="flex justify-between text-sm font-body text-slate-500">
                      <span>₹{stipendRange[0].toLocaleString()}</span>
                      <span>₹{stipendRange[1].toLocaleString()}</span>
                  </div>
                  </div>
                </div>

                <Separator />

                {/* Work Mode */}
                <div>
                  <h4 className="font-subheading-semibold text-primary-navy mb-3">Work Mode</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remote" />
                      <label htmlFor="remote" className="text-sm font-body text-slate-600">Remote</label>
                  </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hybrid" />
                      <label htmlFor="hybrid" className="text-sm font-body text-slate-600">Hybrid</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="on-site" />
                      <label htmlFor="on-site" className="text-sm font-body text-slate-600">On-site</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Field of Study */}
                <div>
                  <h4 className="font-subheading-semibold text-primary-navy mb-3">Field of Study</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="computer-science" />
                      <label htmlFor="computer-science" className="text-sm font-body text-slate-600">Computer Science</label>
                  </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="business" />
                      <label htmlFor="business" className="text-sm font-body text-slate-600">Business</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <label htmlFor="marketing" className="text-sm font-body text-slate-600">Marketing</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="design" />
                      <label htmlFor="design" className="text-sm font-body text-slate-600">Design</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="engineering" />
                      <label htmlFor="engineering" className="text-sm font-body text-slate-600">Engineering</label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Duration */}
                <div>
                  <h4 className="font-subheading-semibold text-primary-navy mb-3">Duration</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="6-weeks" />
                      <label htmlFor="6-weeks" className="text-sm font-body text-slate-600">6 weeks</label>
                  </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="8-weeks" />
                      <label htmlFor="8-weeks" className="text-sm font-body text-slate-600">8 weeks</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="10-weeks" />
                      <label htmlFor="10-weeks" className="text-sm font-body text-slate-600">10 weeks</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="12-weeks" />
                      <label htmlFor="12-weeks" className="text-sm font-body text-slate-600">12 weeks</label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
                    </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          {/* Search and Filters */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="space-y-3 sm:space-y-4">
                {/* Main Search Input */}
                <div className="relative w-full">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                  <Input 
                    placeholder="Search internships, companies..." 
                    className="pl-10 sm:pl-12 h-12 sm:h-12 lg:h-12 border-slate-200 focus:border-slate-300 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-body rounded-xl w-full text-base sm:text-base lg:text-base"
                  />
                    </div>
                
                {/* Mobile Quick Filters */}
                <div className="flex gap-2 lg:hidden overflow-x-auto pb-1">
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0 font-body">
                    Remote
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0 font-body">
                    Summer
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0 font-body">
                    ₹20K+
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0 font-body">
                    Tech
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs whitespace-nowrap flex-shrink-0 font-body">
                    Student
                  </Button>
                    </div>
                
                {/* Results Summary - Mobile Only */}
                <div className="lg:hidden">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600 font-body">
                      Showing {sortedInternships.length} internships
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-slate-600 font-body">Sort by:</span>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-auto h-8 text-sm border-none bg-transparent p-0 font-subheading text-primary-navy">
                          <SelectValue />
                  </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="relevance">Relevance</SelectItem>
                          <SelectItem value="newest">Newest First</SelectItem>
                          <SelectItem value="stipend-high">Stipend (High to Low)</SelectItem>
                          <SelectItem value="company">Company (A-Z)</SelectItem>
                          <SelectItem value="title">Title (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
            </div>
          </div>
        </div>

                {/* Desktop Sort Options */}
                <div className="hidden lg:flex items-center justify-between">
                  <p className="text-sm text-slate-600 font-body">
                    Showing {sortedInternships.length} internship opportunities
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-600 font-body">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40 h-9 text-sm font-subheading">
                    <SelectValue />
                  </SelectTrigger>
                      <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="stipend-high">Stipend (High to Low)</SelectItem>
                        <SelectItem value="company">Company (A-Z)</SelectItem>
                        <SelectItem value="title">Title (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
              </div>
            </CardContent>
          </Card>

          {/* Internship Listings */}
            <div className="space-y-4">
            {sortedInternships.map((internship) => {
              const getRemoteColor = (remote: string) => {
                switch (remote) {
                  case "Remote":
                    return "bg-green-100 text-green-700"
                  case "Hybrid":
                    return "bg-blue-100 text-blue-700"
                  case "On-site":
                    return "bg-red-100 text-red-700"
                  default:
                    return "bg-slate-100 text-slate-700"
                }
              }

              return (
                <Card 
                  key={internship.id}
                  className="border-slate-200 hover:shadow-lg hover:border-primary-navy/30 transition-all duration-200 group cursor-pointer"
                  onClick={() => handleInternshipClick(internship)}
                >
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                      <div className="flex-1 min-w-0 w-full">
                        <div className="flex items-start space-x-3 lg:space-x-4 mb-4">
                          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0">
                            <img src={internship.logo} alt={internship.company} className="w-full h-full object-cover" />
                          </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg lg:text-xl font-heading text-primary-navy group-hover:text-primary-navy transition-colors line-clamp-2">{internship.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-slate-600 mt-1 text-sm lg:text-base space-y-1 sm:space-y-0">
                              <div className="flex items-center space-x-1">
                                <Building className="h-4 w-4 flex-shrink-0" />
                                <span className="font-subheading truncate">{internship.company}</span>
                            </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span className="font-subheading truncate">{internship.location}</span>
                            </div>
                            </div>
                          </div>
                          </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {internship.skills.slice(0, 3).map((skill, index) => (
                                <span 
                                  key={index}
                              className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-body-medium ${
                                skill.includes('Student') 
                                  ? 'bg-primary-navy/10 text-primary-navy' 
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                                >
                                  {skill}
                                </span>
                              ))}
                          {internship.skills.length > 3 && (
                            <span className="px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-body-medium bg-slate-100 text-slate-700">
                              +{internship.skills.length - 3} more
                                </span>
                              )}
                            </div>
                        
                        <p className="text-slate-600 font-body leading-relaxed mb-4 text-sm lg:text-base line-clamp-2 lg:line-clamp-3">
                          {internship.description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm lg:text-base space-y-2 sm:space-y-0">
                          <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-slate-500">
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span className="font-heading text-primary-navy">{internship.stipend}</span>
                          </div>
                            <div className="flex items-center space-x-1">
                              <GraduationCap className="h-4 w-4" />
                              <span className="font-body">{internship.type}</span>
                        </div>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-body-medium ${getRemoteColor(internship.remote)}`}>
                              {internship.remote}
                            </span>
                      </div>
                          <div className="flex items-center space-x-1 text-xs text-slate-400">
                            <Clock className="h-3 w-3" />
                            <span className="font-body">Posted {internship.posted}</span>
                          </div>
                      </div>
                    </div>

                      <div className="flex-shrink-0 w-full sm:w-auto">
                      <Button 
                        variant="outline" 
                          size="icon"
                          className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg w-full sm:w-10 h-10"
                          onClick={(e) => {
                            e.stopPropagation()
                            // Handle save internship functionality here
                            console.log("Internship saved:", internship.title)
                          }}
                        >
                          <BookmarkIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>

      {/* Internship Details Modal */}
      {selectedInternship && !showApplicationModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 lg:p-4"
          onClick={() => setSelectedInternship(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] lg:max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Header */}
            <div className="flex-shrink-0 sticky top-0 bg-white z-10 p-4 lg:p-6 border-b border-slate-200 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 lg:space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedInternship(null)}
                    className="rounded-xl"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <h1 className="text-lg lg:text-2xl font-heading text-primary-navy">Internship Details</h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedInternship(null)}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-6 pt-0">
              {/* Internship Content */}
              <div className="space-y-4 lg:space-y-6">
                {/* Basic Info */}
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                    <img src={selectedInternship.logo} alt={selectedInternship.company} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                      <h2 className="text-xl lg:text-2xl font-heading-bold text-primary-navy">{selectedInternship.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-body-medium self-start ${
                        selectedInternship.remote === "Remote" ? "bg-green-100 text-green-700" :
                        selectedInternship.remote === "Hybrid" ? "bg-blue-100 text-blue-700" :
                        selectedInternship.remote === "On-site" ? "bg-red-100 text-red-700" :
                        "bg-slate-100 text-slate-700"
                      }`}>
                        {selectedInternship.remote}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-slate-600 font-body mb-3 space-y-2 sm:space-y-0 text-sm lg:text-base">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span className="font-subheading">{selectedInternship.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span className="font-subheading">{selectedInternship.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-heading text-primary-navy">{selectedInternship.stipend}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-slate-500 font-body text-sm">
                      <span className="font-body-medium">{selectedInternship.type}</span>
                      <span>•</span>
                      <span>Posted {selectedInternship.posted}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="sm:inline block">Apply by {selectedInternship.applicationDeadline}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="sm:inline block">Starts {selectedInternship.programStart}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Internship Description */}
                <div>
                  <h3 className="text-base lg:text-lg font-subheading-semibold text-primary-navy mb-3">Program Description</h3>
                  <p className="text-slate-600 font-body leading-relaxed text-sm lg:text-base">{selectedInternship.fullDescription}</p>
                </div>
                
                {/* Skills Required */}
                <div>
                  <h3 className="text-base lg:text-lg font-subheading-semibold text-primary-navy mb-3">Skills & Requirements</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedInternship.skills.map((skill: string, index: number) => (
                      <Badge key={index} className={`font-body-medium text-xs lg:text-sm ${
                        skill.includes('Student') 
                          ? 'bg-[#0056B3]/10 text-[#0056B3]' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>{skill}</Badge>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-base lg:text-lg font-subheading-semibold text-primary-navy mb-3">Eligibility Requirements</h3>
                  <ul className="space-y-2">
                    {selectedInternship.requirements.map((requirement: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 font-body text-sm lg:text-base">{requirement}</span>
                      </li>
                    ))}
                  </ul>
              </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-base lg:text-lg font-subheading-semibold text-primary-navy mb-3">What You'll Do</h3>
                  <ul className="space-y-2">
                    {selectedInternship.responsibilities.map((responsibility: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-navy mt-1 flex-shrink-0" />
                        <span className="text-slate-600 font-body text-sm lg:text-base">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
            </div>

                {/* Company Information */}
                <div>
                  <h3 className="text-base lg:text-lg font-subheading-semibold text-primary-navy mb-3">About the Company</h3>
                  <Card className="border-slate-200">
                    <CardContent className="p-3 lg:p-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-heading text-primary-navy text-sm lg:text-base">{selectedInternship.companyInfo.name}</h4>
                          <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-1 text-xs lg:text-sm text-slate-500 font-body">
                            <span>{selectedInternship.companyInfo.size}</span>
                            <span>•</span>
                            <span>{selectedInternship.companyInfo.industry}</span>
                            <span>•</span>
                            <span>Founded {selectedInternship.companyInfo.founded}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 font-body text-sm lg:text-base">{selectedInternship.companyInfo.description}</p>
                        <div>
                          <h5 className="font-subheading text-primary-navy mb-2 text-sm lg:text-base">Program Benefits</h5>
                          <div className="flex flex-wrap gap-2">
                            {selectedInternship.companyInfo.benefits.map((benefit: string, index: number) => (
                              <Badge key={index} className="bg-green-50 text-green-700 font-body text-xs">{benefit}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-subheading text-primary-navy mb-2 text-sm lg:text-base">Intern Culture</h5>
                          <p className="text-slate-600 font-body text-sm lg:text-base">{selectedInternship.companyInfo.culture}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Mentor Information */}
                <div>
                  <h3 className="text-base lg:text-lg font-subheading-semibold text-primary-navy mb-3">Your Mentor</h3>
                  <p className="text-slate-600 font-body text-sm lg:text-base">{selectedInternship.mentor}</p>
                </div>
              </div>
            </div>

            {/* Fixed Action Buttons */}
            <div className="flex-shrink-0 sticky bottom-0 bg-white p-4 lg:p-6 pt-4 border-t border-slate-200 rounded-b-2xl">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button 
                  className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading h-12"
                  onClick={handleApplyClick}
                >
                  Apply for this Internship
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 sm:flex-none sm:min-w-[140px] border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-12"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Handle save internship functionality here
                    console.log("Internship saved:", selectedInternship?.title)
                  }}
                >
                  <BookmarkIcon className="h-4 w-4 mr-2" />
                  Save Internship
                </Button>
              </div>
              
              {/* Quick Close Instructions */}
              <div className="text-center mt-4 pt-2 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-body">
                  Click outside this window or press the X button to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-lg lg:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col [&>button]:hidden">
          <DialogHeader className="flex-shrink-0 bg-white z-10 pb-4 border-b border-slate-200 relative">
            <div className="flex items-center justify-between pr-2">
              <DialogTitle className="font-heading-bold text-primary-navy text-base lg:text-lg">
                Apply for: {selectedInternship?.title}
              </DialogTitle>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="flex-shrink-0 p-1.5 rounded-full hover:bg-slate-100 transition-colors z-20"
              >
                <X className="h-4 w-4 text-slate-600 hover:text-slate-900" />
              </button>
            </div>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto space-y-4 mt-4 px-1 pb-4">
            {/* Cover Letter */}
            <div>
              <Label htmlFor="coverLetter" className="font-subheading text-primary-navy text-sm">Cover Letter</Label>
              <Textarea
                id="coverLetter"
                placeholder="Tell us why you're interested in this internship and what you hope to learn..."
                value={applicationData.coverLetter}
                onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                className="mt-2 min-h-[100px] rounded-xl font-body text-sm"
              />
            </div>

            {/* Expected Stipend */}
            <div>
              <Label htmlFor="expectedStipend" className="font-subheading text-primary-navy text-sm">Expected Stipend</Label>
              <Input
                id="expectedStipend"
                placeholder="e.g., ₹25,000/month or As per company policy"
                value={applicationData.expectedStipend}
                onChange={(e) => setApplicationData({...applicationData, expectedStipend: e.target.value})}
                className="mt-2 rounded-xl font-body text-sm"
              />
            </div>

            {/* Available Start Date */}
            <div>
              <Label htmlFor="availableStartDate" className="font-subheading text-primary-navy text-sm">Available Start Date</Label>
              <Input
                id="availableStartDate"
                placeholder="e.g., June 1, 2024 or After semester ends"
                value={applicationData.availableStartDate}
                onChange={(e) => setApplicationData({...applicationData, availableStartDate: e.target.value})}
                className="mt-2 rounded-xl font-body text-sm"
              />
          </div>

            {/* Resume Upload */}
            <div>
              <Label htmlFor="resume" className="font-subheading text-primary-navy text-sm">Resume/CV</Label>
              <div className="mt-2 border-2 border-dashed border-slate-300 rounded-xl p-4 text-center">
                <Upload className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600 font-body">
                  Upload your resume or CV
                </p>
                <p className="text-xs text-slate-500 font-body mt-1">
                  PDF, DOC, or DOCX files up to 5MB
                </p>
              </div>
            </div>

            {/* Academic Transcript */}
            <div>
              <Label htmlFor="transcript" className="font-subheading text-primary-navy text-sm">Academic Transcript (Optional)</Label>
              <div className="mt-2 border-2 border-dashed border-slate-300 rounded-xl p-4 text-center">
                <Upload className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600 font-body">
                  Upload your academic transcript
                </p>
                <p className="text-xs text-slate-500 font-body mt-1">
                  PDF files up to 5MB
                </p>
              </div>
            </div>

            {/* Internship Information Summary */}
            {selectedInternship && (
              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="p-3">
                  <h4 className="font-subheading-semibold text-primary-navy mb-2 text-sm">Internship Summary</h4>
                  <div className="text-xs text-slate-600 font-body space-y-1">
                    <p><strong className="font-body-medium">Company:</strong> {selectedInternship.company}</p>
                    <p><strong className="font-body-medium">Location:</strong> {selectedInternship.location}</p>
                    <p><strong className="font-body-medium">Stipend:</strong> {selectedInternship.stipend}</p>
                    <p><strong className="font-body-medium">Type:</strong> {selectedInternship.type} • {selectedInternship.remote}</p>
                    <p><strong className="font-body-medium">Application Deadline:</strong> {selectedInternship.applicationDeadline}</p>
                    <p><strong className="font-body-medium">Program Start:</strong> {selectedInternship.programStart}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Action Buttons - Fixed at bottom */}
          <div className="flex-shrink-0 sticky bottom-0 bg-white pt-3 border-t border-slate-200">
            <div className="flex space-x-3">
            <Button 
              variant="outline" 
                className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-sm"
              onClick={() => setShowApplicationModal(false)}
            >
              Cancel
            </Button>
            <Button 
                className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading text-sm"
              onClick={handleSubmitApplication}
            >
                <Send className="h-4 w-4 mr-2" />
              Submit Application
            </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 