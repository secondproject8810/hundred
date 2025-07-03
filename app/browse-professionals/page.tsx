"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Search,
  Filter,
  Star,
  MapPin,
  Briefcase,
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  Award,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Eye,
  Heart,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  X,
  Settings,
  BookmarkPlus,
  GraduationCap,
  Building,
  ArrowLeft,
  UserPlus,
  Send,
  Globe,
  FileText,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function BrowseProfessionals() {
  const [browseMode, setBrowseMode] = useState<"professionals" | "freelancers">("professionals")
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    location: "all",
    experience: "all",
    availability: "all",
    skills: [] as string[],
    hourlyRateRange: [0, 200],
    salaryRange: [50000, 200000],
    rating: 0,
    topRated: false
  })
  const [showFilters, setShowFilters] = useState(true)
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [messageData, setMessageData] = useState({
    subject: "",
    message: "",
    priority: "normal"
  })
  const [followedUsers, setFollowedUsers] = useState<number[]>([])
  const [bookmarkedUsers, setBookmarkedUsers] = useState<number[]>([])

  // Combined data: Freelancers + Job Applicants
  const allProfessionals = [
    // Freelancers
    {
      id: 1,
      type: "freelancer",
      name: "Sarah Chen",
      title: "Full-Stack Developer",
      location: "San Francisco, CA",
      rating: 4.9,
      totalProjects: 47,
      hourlyRate: 85,
      avatar: "SC",
      initials: "SC",
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
      bio: "Senior developer with 8+ years experience building scalable web applications. Specialized in React ecosystem and cloud architecture.",
      availability: "Available",
      responseTime: "2 hours",
      successRate: "98%",
      totalEarnings: "$124k",
      topRated: true,
      experience: "8+ years",
      company: "Freelance",
      recentWork: [
        "E-commerce Platform Redesign",
        "Mobile Banking App",
        "SaaS Dashboard Development"
      ],
      education: "BS Computer Science, UC Berkeley",
      certifications: ["AWS Solutions Architect", "React Developer Certification"],
      languages: ["English (Native)", "Mandarin (Fluent)"],
      contact: {
        email: "sarah.chen@email.com",
        linkedin: "linkedin.com/in/sarahchen",
        website: "sarahchen.dev"
      },
      interests: ["Open Source", "Machine Learning", "Rock Climbing", "Photography"],
      openToOpportunities: true
    },
    {
      id: 2,
      type: "freelancer",
      name: "Marcus Rodriguez", 
      title: "UI/UX Designer",
      location: "Austin, TX",
      rating: 4.8,
      totalProjects: 35,
      hourlyRate: 65,
      avatar: "MR",
      initials: "MR",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Wireframing"],
      bio: "Creative designer focused on user-centered design and conversion optimization. 5+ years in fintech and healthcare.",
      availability: "Available",
      responseTime: "1 hour",
      successRate: "96%",
      totalEarnings: "$89k",
      topRated: true,
      experience: "5+ years",
      company: "Freelance",
      recentWork: [
        "Healthcare App Redesign",
        "Financial Dashboard UI",
        "Mobile Banking Experience"
      ],
      education: "BFA Design, Art Institute of Austin",
      certifications: ["Adobe Certified Expert", "Google UX Design Certificate"],
      languages: ["English (Native)", "Spanish (Native)"],
      contact: {
        email: "marcus.rodriguez@email.com",
        linkedin: "linkedin.com/in/marcusrodriguez",
        website: "marcusdesigns.com"
      },
      interests: ["Design Systems", "Accessibility", "Cycling", "Photography"],
      openToOpportunities: true
    },
    {
      id: 3,
      type: "freelancer",
      name: "Priya Patel",
      title: "Data Scientist",
      location: "New York, NY", 
      rating: 5.0,
      totalProjects: 28,
      hourlyRate: 95,
      avatar: "PP",
      initials: "PP",
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Tableau"],
      bio: "PhD in Computer Science with expertise in ML/AI solutions for business intelligence and predictive analytics.",
      availability: "Busy until Feb 15",
      responseTime: "4 hours",
      successRate: "100%",
      totalEarnings: "$156k",
      topRated: true,
      experience: "8+ years",
      company: "Freelance",
      recentWork: [
        "Customer Churn Prediction Model",
        "Fraud Detection System",
        "Recommendation Engine"
      ],
      education: "PhD Computer Science, MIT",
      certifications: ["TensorFlow Developer Certificate", "AWS Machine Learning"],
      languages: ["English (Fluent)", "Hindi (Native)", "Python (Expert)"],
      contact: {
        email: "priya.patel@email.com",
        linkedin: "linkedin.com/in/priyapatel",
        website: "priyapatel.ai"
      },
      interests: ["AI Ethics", "Data Visualization", "Yoga", "Travel"],
      openToOpportunities: false
    },
    {
      id: 4,
      type: "freelancer",
      name: "David Kim",
      title: "Blockchain Developer",
      location: "Miami, FL",
      rating: 4.8,
      totalProjects: 19,
      hourlyRate: 120,
      avatar: "DK",
      initials: "DK",
      skills: ["Solidity", "Web3", "Smart Contracts", "Ethereum", "DeFi"],
      bio: "Blockchain architect building decentralized applications and smart contract systems for fintech and gaming.",
      availability: "Available",
      responseTime: "1 hour", 
      successRate: "95%",
      totalEarnings: "$78k",
      topRated: true,
      experience: "6+ years",
      company: "Freelance",
      recentWork: [
        "DeFi Trading Platform",
        "NFT Marketplace",
        "DAO Governance System"
      ],
      education: "MS Blockchain Technology, Stanford",
      certifications: ["Certified Ethereum Developer", "Hyperledger Fabric"],
      languages: ["English (Fluent)", "Korean (Native)"],
      contact: {
        email: "david.kim@email.com",
        linkedin: "linkedin.com/in/davidkim",
        website: "davidkim.blockchain"
      },
      interests: ["DeFi", "Cryptocurrency", "Gaming", "Martial Arts"],
      openToOpportunities: true
    },
    // Job Applicants
    {
      id: 5,
      type: "job_applicant",
      name: "Alexandra Thompson",
      title: "Senior Software Engineer",
      location: "San Francisco, CA",
      experience: "7 years",
      currentRole: "Lead Developer at TechCorp",
      avatar: "AT",
      initials: "AT",
      skills: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Redis"],
      bio: "Passionate full-stack engineer with expertise in enterprise software development and system architecture.",
      availability: "2 weeks notice",
      salaryRange: 150000,
      education: "MS Computer Science, Stanford",
      applications: 3,
      interviewsCompleted: 8,
      jobMatch: 92,
      rating: 4.8,
      topRated: false,
      company: "TechCorp",
      responseTime: "1 day",
      recentWork: [
        "Senior Full-Stack Engineer at TechStart",
        "Lead Developer at FinanceFlow", 
        "Principal Engineer at DataCorp"
      ],
      certifications: ["AWS Solutions Architect", "Scrum Master"],
      languages: ["English (Native)", "French (Conversational)"],
      contact: {
        email: "alexandra.thompson@email.com",
        linkedin: "linkedin.com/in/alexandrathompson",
        website: "alexthompson.dev"
      },
      interests: ["Open Source", "Mentoring", "Running", "Travel"],
      openToOpportunities: true
    },
    {
      id: 6,
      type: "job_applicant",
      name: "Michael Foster",
      title: "Product Manager",
      location: "New York, NY",
      experience: "5 years",
      currentRole: "PM at StartupXYZ",
      avatar: "MF",
      initials: "MF",
      skills: ["Product Strategy", "User Research", "Analytics", "A/B Testing", "Roadmapping"],
      bio: "Results-driven PM with track record of launching successful B2B and B2C products. Led 3 successful product launches.",
      availability: "1 month notice",
      salaryRange: 130000,
      education: "MBA, Wharton",
      applications: 5,
      interviewsCompleted: 12,
      jobMatch: 88,
      rating: 4.7,
      topRated: false,
      company: "StartupXYZ",
      responseTime: "2 days",
      recentWork: [
        "Senior PM at GrowthTech",
        "Product Lead at SaasCorp",
        "VP Product at HealthTech"
      ],
      certifications: ["Product Management Certificate", "Agile Certified"],
      languages: ["English (Native)", "Spanish (Conversational)"],
      contact: {
        email: "michael.foster@email.com",
        linkedin: "linkedin.com/in/michaelfoster",
        website: "michaelfoster.pm"
      },
      interests: ["Product Strategy", "Startups", "Tennis", "Reading"],
      openToOpportunities: true
    },
    {
      id: 7,
      type: "job_applicant",
      name: "Jennifer Liu",
      title: "UX Designer", 
      location: "Austin, TX",
      experience: "4 years",
      currentRole: "Senior UX Designer at DesignHub",
      avatar: "JL",
      initials: "JL",
      skills: ["User Research", "Prototyping", "Design Systems", "Accessibility", "Usability Testing"],
      bio: "Human-centered designer creating intuitive experiences for web and mobile. Award-winning portfolio with 99% user satisfaction.",
      availability: "3 weeks notice",
      salaryRange: 105000,
      education: "BFA Design, Art Center",
      applications: 4,
      interviewsCompleted: 6,
      jobMatch: 94,
      rating: 4.9,
      topRated: false,
      company: "DesignHub",
      responseTime: "1 day",
      recentWork: [
        "Lead UX Designer at TechFlow",
        "Senior Designer at AppCorp",
        "UX Lead at FinanceApp"
      ],
      certifications: ["Google UX Design Certificate", "Adobe Certified"],
      languages: ["English (Native)", "Mandarin (Fluent)"],
      contact: {
        email: "jennifer.liu@email.com",
        linkedin: "linkedin.com/in/jenniferliu",
        website: "jenniferliu.design"
      },
      interests: ["Design Thinking", "Accessibility", "Photography", "Hiking"],
      openToOpportunities: true
    },
    {
      id: 8,
      type: "job_applicant",
      name: "Robert Chen",
      title: "Data Engineer",
      location: "Seattle, WA", 
      experience: "6 years",
      currentRole: "Senior Data Engineer at DataFlow",
      avatar: "RC",
      initials: "RC",
      skills: ["Python", "Apache Spark", "Kafka", "Snowflake", "dbt"],
      bio: "Data pipeline expert building scalable ETL systems processing millions of events daily. Cloud-native data architecture specialist.",
      availability: "Available immediately",
      salaryRange: 140000,
      education: "MS Data Science, CMU",
      applications: 2,
      interviewsCompleted: 4,
      jobMatch: 96,
      rating: 4.8,
      topRated: false,
      company: "DataFlow",
      responseTime: "4 hours",
      recentWork: [
        "Principal Data Engineer at CloudCorp",
        "Staff Engineer at BigDataInc"
      ],
      certifications: ["AWS Data Engineer", "Snowflake Certified"],
      languages: ["English (Native)", "Mandarin (Conversational)"],
      contact: {
        email: "robert.chen@email.com",
        linkedin: "linkedin.com/in/robertchen",
        website: "robertchen.data"
      },
      interests: ["Big Data", "Cloud Architecture", "Basketball", "Cooking"],
      openToOpportunities: true
    }
  ]

  const availableSkills = Array.from(new Set(allProfessionals.flatMap(p => p.skills))).sort()
  const locations = Array.from(new Set(allProfessionals.map(p => p.location))).sort()

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes("Available")) return "bg-green-50 text-green-600 border-green-200"
    if (availability.includes("Busy")) return "bg-red-50 text-red-600 border-red-200"
    return "bg-yellow-50 text-yellow-600 border-yellow-200"
  }

  const handleSkillToggle = (skill: string) => {
    setFilters(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }))
  }

  const clearFilters = () => {
    setFilters({
      location: "all",
      experience: "all",
      availability: "all",
      skills: [],
      hourlyRateRange: [0, 200],
      salaryRange: [50000, 200000],
      rating: 0,
      topRated: false
    })
  }

  const handleProfessionalClick = (professional: any) => {
    setSelectedProfessional(professional)
  }

  const handleContactClick = () => {
    setShowMessageModal(true)
  }

  const handleFollowClick = (professionalId: number) => {
    setFollowedUsers(prev => 
      prev.includes(professionalId) 
        ? prev.filter(id => id !== professionalId)
        : [...prev, professionalId]
    )
  }

  const handleBookmarkClick = (professionalId: number) => {
    setBookmarkedUsers(prev => 
      prev.includes(professionalId) 
        ? prev.filter(id => id !== professionalId)
        : [...prev, professionalId]
    )
  }

  const handleSendMessage = () => {
    // Handle message sending here
    console.log("Message sent:", { person: selectedProfessional?.name, ...messageData })
    setShowMessageModal(false)
    setMessageData({ subject: "", message: "", priority: "normal" })
  }

  const isFollowed = (professionalId: number) => followedUsers.includes(professionalId)
  const isBookmarked = (professionalId: number) => bookmarkedUsers.includes(professionalId)

  const filteredProfessionals = allProfessionals.filter(professional => {
    // Browse mode filter (main toggle)
    const matchesBrowseMode = browseMode === "freelancers" ? professional.type === "freelancer" : professional.type !== "freelancer"

    // Search query filter
    const matchesSearch = 
      professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    // Location filter
    const matchesLocation = filters.location === "all" || professional.location === filters.location

    // Experience filter
    const matchesExperience = filters.experience === "all" || 
      (filters.experience === "entry" && (professional.experience?.includes("1-2") || professional.experience?.includes("2-3"))) ||
      (filters.experience === "mid" && (professional.experience?.includes("3-5") || professional.experience?.includes("4") || professional.experience?.includes("5"))) ||
      (filters.experience === "senior" && (professional.experience?.includes("6+") || professional.experience?.includes("7") || professional.experience?.includes("8+")))

    // Availability filter
    const matchesAvailability = filters.availability === "all" ||
      (filters.availability === "available" && professional.availability?.includes("Available")) ||
      (filters.availability === "busy" && professional.availability?.includes("Busy")) ||
      (filters.availability === "notice" && professional.availability?.includes("notice"))

    // Skills filter
    const matchesSkills = filters.skills.length === 0 || 
      filters.skills.some(skill => professional.skills.includes(skill))

    // Rate/Salary filter
    const matchesRate = professional.type === "freelancer" 
      ? (professional.hourlyRate || 0) >= filters.hourlyRateRange[0] && (professional.hourlyRate || 0) <= filters.hourlyRateRange[1]
      : (professional.salaryRange || 0) >= filters.salaryRange[0] && (professional.salaryRange || 0) <= filters.salaryRange[1]

    // Rating filter
    const matchesRating = (professional.rating || 0) >= filters.rating

    // Top rated filter
    const matchesTopRated = !filters.topRated || professional.topRated

    return matchesBrowseMode && matchesSearch && matchesLocation && matchesExperience && 
           matchesAvailability && matchesSkills && matchesRate && matchesRating && matchesTopRated
  })

  return (
    <>
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary-navy mb-1 sm:mb-2">
              Browse {browseMode === "freelancers" ? "Freelancers" : "Professionals"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-subheading text-slate-600">
              Find the perfect talent for your next project or position. Browse {filteredProfessionals.length} verified {browseMode === "freelancers" ? "freelancers" : "professionals"}.
            </p>
          </div>
        </div>
        
        {/* Browse Mode Toggle */}
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="bg-slate-100 p-1 rounded-xl">
              <Button
                onClick={() => setBrowseMode("professionals")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  browseMode === "professionals"
                    ? "bg-primary-navy text-white shadow-sm"
                    : "bg-transparent text-slate-600 hover:text-slate-800"
                }`}
              >
                <Users className="h-4 w-4 mr-2" />
                Professionals
              </Button>
              <Button
                onClick={() => setBrowseMode("freelancers")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  browseMode === "freelancers"
                    ? "bg-primary-navy text-white shadow-sm"
                    : "bg-transparent text-slate-600 hover:text-slate-800"
                }`}
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Freelancers
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden">
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center space-x-2 border-slate-200 rounded-lg"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
        </div>

        {/* Minimized Sidebar - Reduced width */}
        <div className={`w-full lg:w-56 lg:flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="space-y-3">
            {/* Talent Management - Compact */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2 px-3">
                <CardTitle className="text-sm font-heading text-primary-navy flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Talent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 px-3 pb-3">
                <div className="text-xs text-slate-500 font-subheading space-y-1">
                  <div className="flex justify-between">
                    <span>Available:</span>
                    <span className="font-medium">847</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verified:</span>
                    <span className="font-medium">156</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full h-7 text-xs border-slate-200 hover:border-primary-navy hover:text-primary-navy"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Saved (12)
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Filters - Compact */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2 px-3">
                <CardTitle className="text-sm font-heading text-primary-navy flex items-center justify-between">
                  <span className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-3 pb-3">
                {/* Compact Search */}
                <div className="relative">
                  <Search className="h-3 w-3 absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-7 h-8 rounded text-xs"
                  />
                </div>

                {/* Experience Level - Compact */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-1 text-xs">Experience</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <Checkbox id="entry-level" className="h-3 w-3" />
                      <label htmlFor="entry-level" className="text-xs font-subheading text-slate-600">Entry (1-3y)</label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Checkbox id="mid-level" className="h-3 w-3" />
                      <label htmlFor="mid-level" className="text-xs font-subheading text-slate-600">Mid (3-6y)</label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Checkbox id="senior-level" className="h-3 w-3" />
                      <label htmlFor="senior-level" className="text-xs font-subheading text-slate-600">Senior (6y+)</label>
                    </div>
                  </div>
                </div>

                {/* Location - Compact */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-1 text-xs">Location</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <Checkbox id="remote" className="h-3 w-3" />
                      <label htmlFor="remote" className="text-xs font-subheading text-slate-600">Remote</label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Checkbox id="us-only" className="h-3 w-3" />
                      <label htmlFor="us-only" className="text-xs font-subheading text-slate-600">US Only</label>
                    </div>
                  </div>
                </div>

                {/* Availability - Compact */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-1 text-xs">Availability</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <Checkbox id="available-now" className="h-3 w-3" />
                      <label htmlFor="available-now" className="text-xs font-subheading text-slate-600">Available</label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Checkbox id="top-rated" className="h-3 w-3" />
                      <label htmlFor="top-rated" className="text-xs font-subheading text-slate-600">Top Rated</label>
                    </div>
                  </div>
                </div>

                {/* Hourly Rate - Compact */}
                <div>
                  <h4 className="font-heading text-primary-navy mb-1 text-xs">
                    {browseMode === "freelancers" ? "Rate Range" : "Salary Range"}
                  </h4>
                  <div className="px-1">
                    <Slider
                      value={browseMode === "freelancers" ? filters.hourlyRateRange : filters.salaryRange}
                      onValueChange={(value) => setFilters(prev => ({
                        ...prev, 
                        [browseMode === "freelancers" ? "hourlyRateRange" : "salaryRange"]: value
                      }))}
                      max={browseMode === "freelancers" ? 200 : 200000}
                      min={browseMode === "freelancers" ? 0 : 50000}
                      step={browseMode === "freelancers" ? 5 : 5000}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs font-subheading text-slate-500">
                      <span>
                        {browseMode === "freelancers" 
                          ? `$${filters.hourlyRateRange[0]}/hr` 
                          : `$${(filters.salaryRange[0]/1000).toFixed(0)}k`
                        }
                      </span>
                      <span>
                        {browseMode === "freelancers" 
                          ? `$${filters.hourlyRateRange[1]}/hr` 
                          : `$${(filters.salaryRange[1]/1000).toFixed(0)}k`
                        }
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={clearFilters}
                  className="w-full h-7 text-xs border-slate-200 hover:border-primary-navy hover:text-primary-navy"
                >
                  Clear All
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-6 lg:mt-0">
          {/* Sort Options */}
          <div className="flex flex-col sm:flex-row sm:justify-end mb-4 lg:mb-6">
            <Select defaultValue="rating">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
                <SelectItem value="recent">Recently Active</SelectItem>
                <SelectItem value="rate">Hourly Rate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Professional Cards */}
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            {filteredProfessionals.map((professional) => (
              <Card key={professional.id} className="border border-slate-200 rounded-lg hover:shadow-lg transition-all cursor-pointer" onClick={() => handleProfessionalClick(professional)}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-navy text-white rounded-full flex items-center justify-center font-heading text-sm">
                        {professional.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                          <h3 className="text-base sm:text-lg font-heading text-primary-navy">{professional.name}</h3>
                          <div className="flex items-center space-x-2">
                            {professional.topRated && (
                              <Badge className="bg-yellow-50 text-yellow-600 border-yellow-200 text-xs font-subheading px-2 py-1">
                                <Award className="h-3 w-3 mr-1" />
                                Top Rated
                              </Badge>
                            )}
                            <Badge className={professional.type === "freelancer" 
                              ? "bg-blue-50 text-blue-600 border-blue-200 text-xs font-subheading px-2 py-1"
                              : "bg-purple-50 text-purple-600 border-purple-200 text-xs font-subheading px-2 py-1"
                            }>
                              {professional.type === "freelancer" ? "Freelancer" : "Job Applicant"}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm font-subheading text-slate-600 mt-1">{professional.title}</p>
                        <div className="flex items-center text-xs font-subheading text-slate-500 mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {professional.location}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`${isBookmarked(professional.id) ? 'text-red-600' : 'text-red-500'} hover:text-red-600 self-start sm:self-auto`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleBookmarkClick(professional.id)
                      }}
                    >
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-sm font-subheading text-slate-600 mb-4 line-clamp-2">{professional.bio}</p>

                  {/* Professional Type Specific Info */}
                  {professional.type === "freelancer" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-heading text-slate-900">{professional.rating}</span>
                        <span className="text-xs font-subheading text-slate-500">({professional.totalProjects} projects)</span>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-lg font-heading text-primary-navy">${professional.hourlyRate}/hr</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-slate-500" />
                        <span className="text-sm font-subheading text-slate-600">{professional.experience} exp.</span>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-lg font-heading text-primary-navy">${(professional.salaryRange! / 1000).toFixed(0)}k</span>
                      </div>
                    </div>
                  )}

                  {/* Key Metrics */}
                  {professional.type === "freelancer" ? (
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-xs sm:text-sm font-heading text-slate-900">{professional.successRate}</div>
                        <div className="text-xs font-subheading text-slate-500">Success Rate</div>
                      </div>
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-xs sm:text-sm font-heading text-slate-900">{professional.responseTime}</div>
                        <div className="text-xs font-subheading text-slate-500">Response Time</div>
                      </div>
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-xs sm:text-sm font-heading text-slate-900">{professional.totalEarnings}</div>
                        <div className="text-xs font-subheading text-slate-500">Total Earned</div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-xs sm:text-sm font-heading text-slate-900">{professional.applications}</div>
                        <div className="text-xs font-subheading text-slate-500">Applications</div>
                      </div>
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-xs sm:text-sm font-heading text-slate-900">{professional.interviewsCompleted}</div>
                        <div className="text-xs font-subheading text-slate-500">Interviews</div>
                      </div>
                      <div className="text-center p-2 bg-slate-50 rounded">
                        <div className="text-xs sm:text-sm font-heading text-slate-900">{professional.jobMatch}%</div>
                        <div className="text-xs font-subheading text-slate-500">Job Match</div>
                      </div>
                    </div>
                  )}

                  {/* Availability */}
                  <div className="mb-4">
                    <Badge className={`${getAvailabilityColor(professional.availability)} text-xs font-subheading px-2 py-1`}>
                      <Clock className="h-3 w-3 mr-1" />
                      {professional.availability}
                    </Badge>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {professional.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs font-subheading border-slate-300">
                          {skill}
                        </Badge>
                      ))}
                      {professional.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs font-subheading border-slate-300">
                          +{professional.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <Button 
                      className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProfessional(professional)
                        setShowMessageModal(true)
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProfessionalClick(professional)
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProfessionals.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <Users className="h-12 w-12 sm:h-16 sm:w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-heading text-slate-600 mb-2">No professionals found</h3>
              <p className="text-slate-500 font-subheading">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Detailed Profile Modal */}
    {selectedProfessional && !showMessageModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
        <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProfessional(null)}
                  className="rounded-xl"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <h1 className="text-lg sm:text-2xl font-heading text-primary-navy">Professional Profile</h1>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProfessional(null)}
                className="rounded-xl"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Profile Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Basic Info */}
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Avatar className="h-20 w-20 sm:h-24 sm:w-24 mx-auto sm:mx-0">
                  <AvatarImage src={selectedProfessional.avatar} alt={selectedProfessional.name} />
                  <AvatarFallback className="bg-primary-navy text-white font-heading text-lg sm:text-xl">
                    {selectedProfessional.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                    <h2 className="text-xl sm:text-3xl font-heading text-primary-navy">{selectedProfessional.name}</h2>
                    {selectedProfessional.topRated && (
                      <Badge className="bg-yellow-50 text-yellow-600 border-yellow-200 font-subheading mx-auto sm:mx-0 w-fit">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Top Rated
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg sm:text-xl font-subheading text-slate-600 mb-2">{selectedProfessional.title}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                    <div className="flex items-center justify-center sm:justify-start space-x-1">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <span className="font-subheading text-slate-600">{selectedProfessional.location}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-subheading text-slate-900">{selectedProfessional.rating}</span>
                    </div>
                  </div>
                  <p className="font-subheading text-slate-700 leading-relaxed">{selectedProfessional.bio}</p>
                </div>
              </div>

              {/* Professional Type Badge */}
              <div className="text-center sm:text-left">
                <Badge className={selectedProfessional.type === "freelancer" 
                  ? "bg-blue-50 text-blue-600 border-blue-200 font-subheading"
                  : "bg-purple-50 text-purple-600 border-purple-200 font-subheading"
                }>
                  {selectedProfessional.type === "freelancer" ? "Freelancer" : "Job Applicant"}
                </Badge>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {selectedProfessional.type === "freelancer" ? (
                  <>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-heading text-primary-navy">${selectedProfessional.hourlyRate}</div>
                      <div className="text-sm font-subheading text-slate-500">per hour</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-heading text-primary-navy">{selectedProfessional.successRate}</div>
                      <div className="text-sm font-subheading text-slate-500">success rate</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-heading text-primary-navy">{selectedProfessional.responseTime}</div>
                      <div className="text-sm font-subheading text-slate-500">response time</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-heading text-primary-navy">{selectedProfessional.totalEarnings}</div>
                      <div className="text-sm font-subheading text-slate-500">total earned</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-heading text-primary-navy">${(selectedProfessional.salaryRange! / 1000).toFixed(0)}k</div>
                      <div className="text-sm font-subheading text-slate-500">salary range</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-heading text-primary-navy">{selectedProfessional.applications}</div>
                      <div className="text-sm font-subheading text-slate-500">applications</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-heading text-primary-navy">{selectedProfessional.interviewsCompleted}</div>
                      <div className="text-sm font-subheading text-slate-500">interviews</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-heading text-primary-navy">{selectedProfessional.jobMatch}%</div>
                      <div className="text-sm font-subheading text-slate-500">job match</div>
                    </div>
                  </>
                )}
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProfessional.skills.map((skill: string, index: number) => (
                    <Badge key={index} className="bg-[#0056B3]/10 text-[#0056B3] font-subheading">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Education */}
              {selectedProfessional.education && (
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Education</h3>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-slate-500" />
                    <span className="font-subheading text-slate-700">{selectedProfessional.education}</span>
                  </div>
                </div>
              )}

              {/* Recent Work */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">Recent Work</h3>
                <div className="space-y-2">
                  {selectedProfessional.recentWork.map((work: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-slate-500" />
                      <span className="font-subheading text-slate-700">{work}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {selectedProfessional.certifications && selectedProfessional.certifications.length > 0 && (
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfessional.certifications.map((cert: string, index: number) => (
                      <Badge key={index} className="bg-[#0056B3]/10 text-[#0056B3] font-subheading">
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              {selectedProfessional.languages && selectedProfessional.languages.length > 0 && (
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfessional.languages.map((lang: string, index: number) => (
                      <Badge key={index} className="bg-slate-100 text-slate-700 font-subheading">
                        <Globe className="h-3 w-3 mr-1" />
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              {selectedProfessional.contact && (
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Contact Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {selectedProfessional.contact.email && (
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600 font-subheading text-sm sm:text-base">{selectedProfessional.contact.email}</span>
                      </div>
                    )}
                    {selectedProfessional.contact.linkedin && (
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600 font-subheading text-sm sm:text-base">{selectedProfessional.contact.linkedin}</span>
                      </div>
                    )}
                    {selectedProfessional.contact.website && (
                      <div className="flex items-center space-x-2 sm:col-span-2">
                        <Globe className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600 font-subheading text-sm sm:text-base">{selectedProfessional.contact.website}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Interests */}
              {selectedProfessional.interests && selectedProfessional.interests.length > 0 && (
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfessional.interests.map((interest: string, index: number) => (
                      <Badge key={index} className="bg-blue-50 text-blue-700 font-subheading">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-slate-200">
                <Button 
                  className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading"
                  onClick={handleContactClick}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFollowClick(selectedProfessional.id)
                  }}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  {isFollowed(selectedProfessional.id) ? 'Following' : 'Follow'}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg font-subheading"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBookmarkClick(selectedProfessional.id)
                  }}
                >
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  {isBookmarked(selectedProfessional.id) ? 'Saved' : 'Save'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Message Modal */}
    <Dialog open={showMessageModal} onOpenChange={setShowMessageModal}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-primary-navy">
            Send Message to {selectedProfessional?.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Recipient Info */}
          {selectedProfessional && (
            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={selectedProfessional.avatar} alt={selectedProfessional.name} />
                    <AvatarFallback className="bg-primary-navy text-white font-heading">
                      {selectedProfessional.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-heading text-primary-navy">{selectedProfessional.name}</h4>
                    <p className="text-slate-600 font-subheading text-sm">{selectedProfessional.title} at {selectedProfessional.company}</p>
                    <p className="text-slate-500 font-subheading text-xs">Response time: {selectedProfessional.responseTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Subject */}
          <div>
            <Label htmlFor="subject" className="font-subheading text-primary-navy">Subject</Label>
            <Input
              id="subject"
              placeholder="What's this message about?"
              value={messageData.subject}
              onChange={(e) => setMessageData({...messageData, subject: e.target.value})}
              className="mt-2 rounded-xl font-subheading"
            />
          </div>

          {/* Priority */}
          <div>
            <Label htmlFor="priority" className="font-subheading text-primary-navy">Priority</Label>
            <Select value={messageData.priority} onValueChange={(value) => setMessageData({...messageData, priority: value})}>
              <SelectTrigger className="mt-2 rounded-xl font-subheading">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="low" className="font-subheading">Low</SelectItem>
                <SelectItem value="normal" className="font-subheading">Normal</SelectItem>
                <SelectItem value="high" className="font-subheading">High</SelectItem>
                <SelectItem value="urgent" className="font-subheading">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="font-subheading text-primary-navy">Message</Label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              value={messageData.message}
              onChange={(e) => setMessageData({...messageData, message: e.target.value})}
              className="mt-2 min-h-[120px] rounded-xl font-subheading"
            />
          </div>

          {/* Message Tips */}
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <h5 className="font-subheading font-medium text-blue-900 mb-2">💡 Message Tips</h5>
              <ul className="text-blue-800 font-subheading text-sm space-y-1">
                <li>• Be clear and specific about your purpose</li>
                <li>• Mention any mutual connections or interests</li>
                <li>• Keep it professional and concise</li>
                <li>• Include a clear call-to-action if needed</li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button 
              variant="outline" 
              className="flex-1 rounded-xl font-subheading"
              onClick={() => setShowMessageModal(false)}
            >
              Cancel
            </Button>
            <Button 
              className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading"
              onClick={handleSendMessage}
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
} 