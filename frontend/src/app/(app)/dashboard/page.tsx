"use client"

import {
    BarChart3,
    Coins,
    WalletIcon,
} from "lucide-react"

import { TokenCard } from "@/components/global/token-card"
import { PriceChart } from "@/components/global/price-chat"
import { RecentTransactions } from "@/components/global/recent-transactions"
import { Layout } from "@/components/global/layout"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
    return (
        <Layout>
            <div className="grid gap-6">
                {/* Heading */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Welcome to your token marketplace dashboard
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border bg-card p-6 shadow-sm">
                        <div className="flex items-center gap-2">
                            <WalletIcon className="h-5 w-5 text-primary" />
                            <h3 className="font-medium text-foreground">Wallet Balance</h3>
                        </div>
                        <div className="mt-4">
                            <p className="text-3xl font-bold text-foreground">3.45 ETH</p>
                            <p className="text-sm text-muted-foreground">≈ $6,245.30 USD</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-6 shadow-sm">
                        <div className="flex items-center gap-2">
                            <Coins className="h-5 w-5 text-primary" />
                            <h3 className="font-medium text-foreground">Token Value</h3>
                        </div>
                        <div className="mt-4">
                            <p className="text-3xl font-bold text-foreground">12 Tokens</p>
                            <p className="text-sm text-muted-foreground">≈ $8,320.50 USD</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            <h3 className="font-medium text-foreground">Market Trend</h3>
                        </div>
                        <div className="mt-4">
                            <p className="text-3xl font-bold text-green-500">+5.23%</p>
                            <p className="text-sm text-muted-foreground">Last 24 hours</p>
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border bg-card shadow-sm">
                        <div className="p-6">
                            <h3 className="font-medium text-foreground">Price Trends</h3>
                            <div className="mt-4 h-[240px]">
                                <PriceChart />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card shadow-sm">
                        <div className="p-6">
                            <h3 className="font-medium text-foreground">Recent Transactions</h3>
                            <div className="mt-4">
                                <RecentTransactions connected={true} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Tokens */}
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="font-medium text-foreground">Featured Tokens</h3>
                        <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
                            View All
                        </Button>
                    </div>

                    <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <TokenCard
                            name="Ethereum"
                            symbol="ETH"
                            price={1802.45}
                            change={2.34}
                            image=""
                        />
                        <TokenCard
                            name="Bitcoin"
                            symbol="BTC"
                            price={34502.67}
                            change={-1.23}
                            image=""
                        />
                        <TokenCard
                            name="Solana"
                            symbol="SOL"
                            price={102.78}
                            change={5.67}
                            image=""
                        />
                        <TokenCard
                            name="Cardano"
                            symbol="ADA"
                            price={0.45}
                            change={-0.89}
                            image=""
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
