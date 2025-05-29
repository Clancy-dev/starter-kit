"use client"

import {
  Building2,
  Users,
  Calendar,
  Settings,
  BarChart3,
  UserCheck,
  CreditCard,
  FileText,
  HelpCircle,
  LogOut,
  User,
  Bell,
  MessageSquare,
  Coffee,
  Utensils,
  Wifi,
  Phone,
  ShieldCheck,
  Briefcase,
  Bed,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  Sidebar,
  SidebarClose,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const adminItems = [
  {
    title: "Admin Dashboard",
    url: "/admin",
    icon: BarChart3,
  },
  {
    title: "Receptionist Dashboard",
    url: "/receptionist",
    icon: UserCheck,
  },
]

const managementItems = [
  {
    title: "Room Management",
    url: "/rooms",
    icon: Building2,
  },
  {
    title: "Staff Management",
    url: "/staff",
    icon: Users,
  },
  {
    title: "Reservations",
    url: "/reservations",
    icon: Calendar,
  },
  {
    title: "Billing & Payments",
    url: "/billing",
    icon: CreditCard,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
]

const hotelServicesItems = [
  {
    title: "Housekeeping",
    url: "/housekeeping",
    icon: Bed,
  },
  {
    title: "Room Service",
    url: "/room-service",
    icon: Coffee,
  },
  {
    title: "Restaurant",
    url: "/restaurant",
    icon: Utensils,
  },
  {
    title: "Concierge",
    url: "/concierge",
    icon: Bell,
  },
  {
    title: "Maintenance",
    url: "/maintenance",
    icon: ShieldCheck,
  },
  {
    title: "WiFi Management",
    url: "/wifi",
    icon: Wifi,
  },
  {
    title: "Guest Messages",
    url: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Phone Directory",
    url: "/directory",
    icon: Phone,
  },
  {
    title: "Business Center",
    url: "/business",
    icon: Briefcase,
  },
]

const systemItems = [
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    url: "/help",
    icon: HelpCircle,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  const isActiveRoute = (url: string) => {
    // Handle exact matches for main routes
    if (pathname === url) return true

    // Handle root path redirect to admin
    if (pathname === "/" && url === "/admin") return true

    return false
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between px-2 py-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="font-semibold text-lg">Hotel Manager</span>
          </div>
          <SidebarClose />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveRoute(item.url)}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveRoute(item.url)}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Hotel Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {hotelServicesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveRoute(item.url)}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveRoute(item.url)}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <div className="p-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>CJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Clancy Johnson</span>
                <span className="text-xs text-muted-foreground">Administrator</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="w-full">
              <User className="h-3.5 w-3.5 mr-1" />
              <span className="text-xs">Profile</span>
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <LogOut className="h-3.5 w-3.5 mr-1" />
              <span className="text-xs">Logout</span>
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
