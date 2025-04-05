"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, Download, Filter } from "lucide-react"
import { Layout } from "@/components/global/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function TransactionHistory() {
    const [filter, setFilter] = useState("all")

    const transactions = [
        {
            id: "tx1",
            type: "buy",
            token: "ETH",
            amount: 0.5,
            price: 1802.45,
            total: 901.23,
            from: "0x1a2...3b4c",
            to: "You",
            time: "2023-03-15 14:30:45",
            status: "completed",
        },
        {
            id: "tx2",
            type: "sell",
            token: "SOL",
            amount: 10,
            price: 102.78,
            total: 1027.8,
            from: "You",
            to: "0x5d6...7e8f",
            time: "2023-03-14 09:15:22",
            status: "completed",
        },
        {
            id: "tx3",
            type: "buy",
            token: "BTC",
            amount: 0.02,
            price: 34502.67,
            total: 690.05,
            from: "0x9g0...1h2i",
            to: "You",
            time: "2023-03-10 18:45:33",
            status: "completed",
        },
        {
            id: "tx4",
            type: "sell",
            token: "ADA",
            amount: 500,
            price: 0.45,
            total: 225.0,
            from: "You",
            to: "0x3j4...5k6l",
            time: "2023-03-05 11:20:17",
            status: "completed",
        },
        {
            id: "tx5",
            type: "buy",
            token: "DOT",
            amount: 25,
            price: 6.78,
            total: 169.5,
            from: "0x7m8...9n0p",
            to: "You",
            time: "2023-03-01 16:55:42",
            status: "completed",
        },
        {
            id: "tx6",
            type: "sell",
            token: "ETH",
            amount: 0.25,
            price: 1795.3,
            total: 448.83,
            from: "You",
            to: "0x1q2...3r4s",
            time: "2023-02-28 08:10:36",
            status: "completed",
        },
    ]

    const filteredTransactions = filter === "all" ? transactions : transactions.filter((tx) => tx.type === filter)

    return (
        <Layout>
            <div className="grid gap-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Transaction History</h1>
                    <p className="text-muted-foreground">View and filter your transaction history</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>A complete history of your token transactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                                <div className="flex gap-4">
                                    <Select value={filter} onValueChange={setFilter}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Filter by type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Transactions</SelectItem>
                                            <SelectItem value="buy">Buy Only</SelectItem>
                                            <SelectItem value="sell">Sell Only</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <div className="relative">
                                        <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input type="search" placeholder="Search transactions..." className="pl-8 w-[250px]" />
                                    </div>
                                </div>
                                <Button variant="outline" size="icon">
                                    <Download className="h-4 w-4" />
                                    <span className="sr-only">Download CSV</span>
                                </Button>
                            </div>

                            <div className="rounded-lg border border-border">
                                <div className="grid grid-cols-12 gap-4 p-4 font-medium text-muted-foreground border-b border-border">
                                    <div className="col-span-2">Type</div>
                                    <div className="col-span-2">Token</div>
                                    <div className="col-span-2 text-right">Amount</div>
                                    <div className="col-span-2 text-right">Price</div>
                                    <div className="col-span-2 text-right">Total</div>
                                    <div className="col-span-2 text-right">Date</div>
                                </div>

                                {filteredTransactions.map((tx) => (
                                    <div
                                        key={tx.id}
                                        className="grid grid-cols-12 gap-4 p-4 items-center border-b border-border last:border-0 hover:bg-card/60"
                                    >
                                        <div className="col-span-2">
                                            <div
                                                className={`flex items-center gap-2 ${tx.type === "buy" ? "text-green-500" : "text-red-500"}`}
                                            >
                                                {tx.type === "buy" ? <ArrowDown className="h-4 w-4" /> : <ArrowUp className="h-4 w-4" />}
                                                <span className="capitalize">{tx.type}</span>
                                            </div>
                                        </div>
                                        <div className="col-span-2 font-medium">{tx.token}</div>
                                        <div className="col-span-2 text-right">
                                            {tx.amount} {tx.token}
                                        </div>
                                        <div className="col-span-2 text-right">${tx.price.toLocaleString()}</div>
                                        <div className="col-span-2 text-right">${tx.total.toLocaleString()}</div>
                                        <div className="col-span-2 text-right text-sm">{tx.time.split(" ")[0]}</div>
                                    </div>
                                ))}
                            </div>

                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}

