"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Briefcase, Globe, Inbox, LayoutDashboard, MessageSquare, Users, Building2, Settings, Menu, X, ChevronDown, GraduationCap, MessageCircle, Target } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Dashboard",
    href: "/company-dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Feed",
    href: "/company-feed",
    icon: MessageSquare,
  },
  {
    name: "Messages",
    href: "/company-messages",
    icon: Inbox,
  },
  {
    name: "Browse",
    href: "/browse-professionals",
    icon: Users,
  },
]

// Find Talent dropdown items
const findTalentItems = [
  {
    name: "Jobs",
    href: "/company-jobs",
    icon: Briefcase,
  },
  {
    name: "Internships",
    href: "/company-internships",
    icon: GraduationCap,
  },
]

export default function CompanyHeader() {
  const [notifications, setNotifications] = useState(3)
  const pathname = usePathname()

  // Check if we're on find talent pages for active styling
  const isFindTalentActive = pathname === "/company-jobs" || pathname === "/company-internships"
  const isFreelanceActive = pathname === "/company-freelance"

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/company-dashboard" className="flex items-center">
            <span className="font-logo text-xl md:text-2xl font-bold">
              100<span className="text-[#0056B3]">Networks</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors relative",
                pathname === item.href
                  ? "bg-primary-navy text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-primary-navy",
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span className="hidden xl:block">{item.name}</span>
            </Link>
          ))}
          
          {/* Find Talent Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors relative",
                  isFindTalentActive
                    ? "bg-primary-navy text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-primary-navy",
                )}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                <span className="hidden xl:block">Find Talent</span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {findTalentItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="flex items-center font-subheading">
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Standalone Freelance Button */}
          <Link
            href="/company-freelance"
            className={cn(
              "flex items-center px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors relative",
              isFreelanceActive
                ? "bg-primary-navy text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-primary-navy",
            )}
          >
            <Globe className="mr-2 h-4 w-4" />
            <span className="hidden xl:block">Freelance</span>
          </Link>
        </nav>

        {/* Right side - Notifications, Profile and Settings */}
        <div className="flex items-center space-x-1">
          <Link 
            href="/notifications"
            className={cn(
              "flex items-center px-2 md:px-3 py-2 text-sm font-medium rounded-lg transition-colors relative",
              pathname === "/notifications"
                ? "bg-primary-navy text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-primary-navy",
            )}
          >
            <Bell className="h-4 w-4" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                {notifications}
              </span>
            )}
          </Link>
          
          <Link 
            href="/company-profile"
            className={cn(
              "flex items-center space-x-2 px-2 md:px-3 py-2 text-sm font-medium rounded-lg transition-colors",
              pathname === "/company-profile"
                ? "bg-primary-navy text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-primary-navy",
            )}
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="/company-logo.png" alt="Company" />
              <AvatarFallback className="text-xs">TC</AvatarFallback>
            </Avatar>
            <div className="text-left hidden md:block">
              <p className="text-xs font-medium">Company Profile</p>
            </div>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center px-2 md:px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === "/settings"
                    ? "bg-primary-navy text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-primary-navy",
                )}
              >
                <Settings className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/settings" className="font-subheading">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/company-billing" className="font-subheading">Billing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile" className="font-subheading">Switch to Personal Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/help" className="font-subheading">Help center</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/terms" className="font-subheading">Terms of Service</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/logout" className="font-subheading">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Messages Icon */}
          <Link
            href="/company-messages"
            className={cn(
              "flex items-center px-2 md:px-3 py-2 text-sm font-medium rounded-lg transition-colors lg:hidden",
              pathname === "/company-messages"
                ? "bg-primary-navy text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-primary-navy",
            )}
          >
            <MessageCircle className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  )
} 