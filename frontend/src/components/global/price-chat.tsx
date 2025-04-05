"use client"

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"

const data = [
    { name: "Jan", price: 1200 },
    { name: "Feb", price: 1100 },
    { name: "Mar", price: 1300 },
    { name: "Apr", price: 1400 },
    { name: "May", price: 1380 },
    { name: "Jun", price: 1500 },
    { name: "Jul", price: 1600 },
    { name: "Aug", price: 1750 },
    { name: "Sep", price: 1800 },
    { name: "Oct", price: 1850 },
    { name: "Nov", price: 1900 },
    { name: "Dec", price: 2000 },
]

export function PriceChart() {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="#2c2f35" vertical={false} />

                    <XAxis
                        dataKey="name"
                        stroke="hsl(var(--muted-foreground))"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                    />

                    <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => `$${value}`}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "0.5rem",
                            fontSize: "0.875rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        }}
                        itemStyle={{ color: "hsl(var(--foreground))" }}
                        labelStyle={{ color: "hsl(var(--muted-foreground))" }}
                        formatter={(value: number) => [`$${value}`, "Price"]}
                    />

                    <Area
                        type="monotone"
                        dataKey="price"
                        stroke="hsl(var(--primary))"
                        fill="url(#colorPrice)"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
