"use client"

import type React from "react"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { BarChart3, Coins, History, Home, ListPlus, LogOut, Settings } from "lucide-react"
import { ConnectButton } from "thirdweb/react"
import { client } from "@/app/client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { Separator } from "@radix-ui/react-separator"

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    const [connected, setConnected] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const menuItems = [
        { path: "/", label: "Dashboard", icon: Home },
        { path: "/my-tokens", label: "My Tokens", icon: Coins },
        { path: "/list-token", label: "List Token", icon: ListPlus },
        { path: "/history", label: "History", icon: History },
        { path: "/analytics", label: "Analytics", icon: BarChart3 },
    ]

    return (
        <SidebarProvider defaultOpen={true}>
            <div className="flex h-screen overflow-hidden bg-background w-full">
                <Sidebar className="border-r border-border bg-card">
                    <SidebarHeader className="flex h-14 items-center border-b border-border px-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                            <Coins className="h-6 w-6 text-primary" />
                            <span>TokenMarket</span>
                        </Link>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.path} className="p-2">
                                    <SidebarMenuButton isActive={pathname === item.path} tooltip={item.label} asChild>
                                        <Link href={item.path}>
                                            <item.icon className="h-5 w-5 " />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                    {/* <Separator /> */}
                                    <div className="border-b-2 border-l-2  border-neutral-800" />
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                    <SidebarFooter className="border-t border-border p-4">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton tooltip="Settings">
                                    <Settings className="h-5 w-5" />
                                    <span>Settings</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            {connected && (
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip="Disconnect">
                                        <LogOut className="h-5 w-5" />
                                        <span>Disconnect</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )}
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>

                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex h-14 items-center gap-4 border-b border-border bg-card px-4 lg:px-6">
                        <SidebarTrigger />
                        <div className="flex-1" />
                        <div className="p-6">
                            {/* <Button > */}
                                <ConnectButton client={client} />
                            {/* </Button> */}
                        </div>
                    </header>
                    <main className="flex-1 overflow-auto p-4 lg:p-6">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    )
}

