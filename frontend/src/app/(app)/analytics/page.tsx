"use client"

import { Layout } from "@/components/global/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Line, LineChart } from 'recharts'

export default function Analytics() {
    // Market volume data
    const volumeData = [
        { name: "Jan", volume: 12500 },
        { name: "Feb", volume: 14200 },
        { name: "Mar", volume: 15800 },
        { name: "Apr", volume: 16500 },
        { name: "May", volume: 17200 },
        { name: "Jun", volume: 19500 },
        { name: "Jul", volume: 20100 },
        { name: "Aug", volume: 22000 },
        { name: "Sep", volume: 24500 },
        { name: "Oct", volume: 26800 },
        { name: "Nov", volume: 29000 },
        { name: "Dec", volume: 31500 },
    ]

    // Token comparison data
    const tokenData = [
        { name: "Jan", ETH: 1200, BTC: 28000, SOL: 80 },
        { name: "Feb", ETH: 1300, BTC: 32000, SOL: 95 },
        { name: "Mar", ETH: 1450, BTC: 35000, SOL: 110 },
        { name: "Apr", ETH: 1600, BTC: 38000, SOL: 105 },
        { name: "May", ETH: 1550, BTC: 36000, SOL: 90 },
        { name: "Jun", ETH: 1700, BTC: 39000, SOL: 120 },
        { name: "Jul", ETH: 1850, BTC: 42000, SOL: 130 },
    ]

    // Portfolio distribution data
    const portfolioData = [
        { name: "ETH", value: 45 },
        { name: "BTC", value: 30 },
        { name: "SOL", value: 15 },
        { name: "ADA", value: 5 },
        { name: "DOT", value: 5 },
    ]

    return (
        <Layout>
            <div className="grid gap-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
                    <p className="text-muted-foreground">Detailed analytics and insights for your token portfolio</p>
                </div>

                <Tabs defaultValue="market" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                        <TabsTrigger value="market">Market Overview</TabsTrigger>
                        <TabsTrigger value="tokens">Token Comparison</TabsTrigger>
                        <TabsTrigger value="portfolio">Portfolio Analysis</TabsTrigger>
                    </TabsList>

                    <TabsContent value="market">
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="md:col-span-2">
                                <CardHeader>
                                    <CardTitle>Market Volume</CardTitle>
                                    <CardDescription>Total market volume over the past year</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[350px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart
                                                data={volumeData}
                                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                                <XAxis
                                                    dataKey="name"
                                                    stroke="#6b7280"
                                                    tickLine={false}
                                                    axisLine={false}
                                                    tick={{ fontSize: 12 }}
                                                />
                                                <YAxis
                                                    stroke="#6b7280"
                                                    tickLine={false}
                                                    axisLine={false}
                                                    tick={{ fontSize: 12 }}
                                                    tickFormatter={(value) => `$${value / 1000}k`}
                                                />
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: "#1f2937",
                                                        borderColor: "#374151",
                                                        borderRadius: "0.5rem",
                                                        fontSize: "0.875rem",
                                                    }}
                                                    itemStyle={{ color: "#f3f4f6" }}
                                                    formatter={(value) => [`$${value.toLocaleString()}`, "Volume"]}
                                                    labelStyle={{ color: "#9ca3af" }}
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="volume"
                                                    stroke="#e11d48"
                                                    fill="#e11d48"
                                                    fillOpacity={0.2}
                                                    strokeWidth={2}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Market Sentiment</CardTitle>
                                    <CardDescription>Current market sentiment indicators</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart
                                                data={[{ name: "Fear", value: 25 }, { name: "Neutral", value: 40 }, { name: "Greed", value: 35 }]}
                                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                                <XAxis dataKey="name" stroke="#6b7280" />
                                                <YAxis stroke="#6b7280" />
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: "#1f2937",
                                                        borderColor: "#374151",
                                                        borderRadius: "0.5rem",
                                                        fontSize: "0.875rem",
                                                    }}
                                                />
                                                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Trading Volume by Token</CardTitle>
                                    <CardDescription>Distribution of trading volume across tokens</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart
                                                data={[{ name: "BTC", value: 45 }, { name: "ETH", value: 30 }, { name: "SOL", value: 15 }, { name: "ADA", value: 5 }, { name: "DOT", value: 5 }]}
                                                layout="vertical"
                                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
                                                <XAxis type="number" stroke="#6b7280" />
                                                <YAxis dataKey="name" type="category" stroke="#6b7280" />
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: "#1f2937",
                                                        borderColor: "#374151",
                                                        borderRadius: "0.5rem",
                                                        fontSize: "0.875rem",
                                                    }}
                                                    formatter={(value) => [`${value}%`, "Volume"]}
                                                />
                                                <Bar dataKey="value" fill="#e11d48" radius={[0, 4, 4, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="tokens">
                        <Card>
                            <CardHeader>
                                <CardTitle>Token Price Comparison</CardTitle>
                                <CardDescription>Compare price trends of major tokens</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[400px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart
                                            data={tokenData}
                                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                            <XAxis dataKey="name" stroke="#6b7280" />
                                            <YAxis stroke="#6b7280" />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: "#1f2937",
                                                    borderColor: "#374151",
                                                    borderRadius: "0.5rem",
                                                    fontSize: "0.875rem",
                                                }}
                                            />
                                            <Legend />
                                            <Line type="monotone" dataKey="ETH" stroke="#3b82f6" strokeWidth={2} dot={false} />
                                            <Line type="monotone" dataKey="BTC" stroke="#e11d48" strokeWidth={2} dot={false} />
                                            <Line type="monotone" dataKey="SOL" stroke="#10b981" strokeWidth={2} dot={false} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="portfolio">
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Portfolio Distribution</CardTitle>
                                    <CardDescription>Breakdown of your token holdings</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart
                                                data={portfolioData}
                                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                                <XAxis dataKey="name" stroke="#6b7280" />
                                                <YAxis stroke="#6b7280" />
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: "#1f2937",
                                                        borderColor: "#374151",
                                                        borderRadius: "0.5rem",
                                                        fontSize: "0.875rem",
                                                    }}
                                                    formatter={(value) => [`${value}%`, "Allocation"]}
                                                />
                                                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Portfolio Performance</CardTitle>
                                    <CardDescription>Your portfolio value over time</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart
                                                data={[
                                                    { name: "Jan", value: 5000 },
                                                    { name: "Feb", value: 5200 },
                                                    { name: "Mar", value: 5800 },
                                                    { name: "Apr", value: 6500 },
                                                    { name: "May", value: 6200 },
                                                    { name: "Jun", value: 7000 },
                                                    { name: "Jul", value: 8500 },
                                                ]}
                                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                                <XAxis dataKey="name" stroke="#6b7280" tickLine={false} axisLine={false} />
                                                <YAxis
                                                    stroke="#6b7280"
                                                    tickLine={false}
                                                    axisLine={false}
                                                    tickFormatter={(value) => `$${value}`}
                                                />
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: "#1f2937",
                                                        borderColor: "#374151",
                                                        borderRadius: "0.5rem",
                                                        fontSize: "0.875rem",
                                                    }}
                                                    formatter={(value) => [`$${value.toLocaleString()}`, "Value"]}
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="value"
                                                    stroke="#3b82f6"
                                                    fill="#3b82f6"
                                                    fillOpacity={0.2}
                                                    strokeWidth={2}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    )
}
