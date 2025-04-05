"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, MoreHorizontal, Plus, Trash } from "lucide-react"
import Image from "next/image"
import { Layout } from "@/components/global/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function MyTokens() {
    const [tokens, setTokens] = useState([
        {
            id: "token1",
            name: "Ethereum",
            symbol: "ETH",
            balance: 2.5,
            price: 1802.45,
            value: 4506.13,
            change: 2.34,
            listed: true,
            image: "",
        },
        {
            id: "token2",
            name: "Bitcoin",
            symbol: "BTC",
            balance: 0.15,
            price: 34502.67,
            value: 5175.4,
            change: -1.23,
            listed: false,
            image: "",
        },
        {
            id: "token3",
            name: "Solana",
            symbol: "SOL",
            balance: 25,
            price: 102.78,
            value: 2569.5,
            change: 5.67,
            listed: true,
            image: "",
        },
        {
            id: "token4",
            name: "Cardano",
            symbol: "ADA",
            balance: 500,
            price: 0.45,
            value: 225.0,
            change: -0.89,
            listed: false,
            image: "",
        },
    ])

    const toggleListing = (id: string) => {
        setTokens(tokens.map((token) => (token.id === id ? { ...token, listed: !token.listed } : token)))
    }

    return (
        <Layout>
            <div className="grid gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">My Tokens</h1>
                        <p className="text-muted-foreground">Manage your token portfolio and listings</p>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                <Plus className="mr-2 h-4 w-4" /> Add Token
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add New Token</DialogTitle>
                                <DialogDescription>Enter the token details to add it to your portfolio</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="token" className="text-right">
                                        Token
                                    </Label>
                                    <Input id="token" placeholder="ETH, BTC, etc." className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="amount" className="text-right">
                                        Amount
                                    </Label>
                                    <Input id="amount" type="number" placeholder="0.0" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="price" className="text-right">
                                        Price ($)
                                    </Label>
                                    <Input id="price" type="number" placeholder="0.00" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                    Add Token
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="grid gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="rounded-lg border border-border">
                                <div className="grid grid-cols-12 gap-4 p-4 font-medium text-muted-foreground border-b border-border">
                                    <div className="col-span-4 flex items-center">Token</div>
                                    <div className="col-span-2 text-right">Balance</div>
                                    <div className="col-span-2 text-right">Price</div>
                                    <div className="col-span-2 text-right">Value</div>
                                    <div className="col-span-1 text-center">Listed</div>
                                    <div className="col-span-1 text-right">Actions</div>
                                </div>

                                {tokens.map((token) => (
                                    <div
                                        key={token.id}
                                        className="grid grid-cols-12 gap-4 p-4 items-center border-b border-border last:border-0 hover:bg-card/60"
                                    >
                                        <div className="col-span-4 flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Image
                                                    src={token.image || "/placeholder.svg"}
                                                    alt={token.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-medium">{token.name}</div>
                                                <div className="text-sm text-muted-foreground">{token.symbol}</div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 text-right">
                                            <div className="font-medium">{token.balance}</div>
                                            <div className="text-sm text-muted-foreground">{token.symbol}</div>
                                        </div>
                                        <div className="col-span-2 text-right">
                                            <div className="font-medium">${token.price.toLocaleString()}</div>
                                            <div className="flex items-center justify-end gap-1">
                                                {token.change > 0 ? (
                                                    <>
                                                        <ArrowUp className="h-3 w-3 text-green-500" />
                                                        <span className="text-xs text-green-500">+{token.change}%</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <ArrowDown className="h-3 w-3 text-red-500" />
                                                        <span className="text-xs text-red-500">{token.change}%</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-span-2 text-right">
                                            <div className="font-medium">${token.value.toLocaleString()}</div>
                                            <div className="text-sm text-muted-foreground">USD</div>
                                        </div>
                                        <div className="col-span-1 flex justify-center">
                                            <Switch checked={token.listed} onCheckedChange={() => toggleListing(token.id)} />
                                        </div>
                                        <div className="col-span-1 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Open menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>Edit Token</DropdownMenuItem>
                                                    <DropdownMenuItem>Transfer</DropdownMenuItem>
                                                    <DropdownMenuItem className="text-red-500">
                                                        <Trash className="mr-2 h-4 w-4" /> Remove
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}

