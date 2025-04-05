"use client"

import { Layout } from "@/components/global/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ListToken() {
    return (
        <Layout>
            <div className="grid gap-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">List Token</h1>
                    <p className="text-muted-foreground">Create a new token listing or manage existing listings</p>
                </div>

                <Tabs defaultValue="new" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="new">New Listing</TabsTrigger>
                        <TabsTrigger value="manage">Manage Listings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="new">
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Token Details</CardTitle>
                                    <CardDescription>Enter the details of the token you want to list</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="token-name">Token Name</Label>
                                        <Input id="token-name" placeholder="e.g. Ethereum" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="token-symbol">Token Symbol</Label>
                                        <Input id="token-symbol" placeholder="e.g. ETH" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="token-contract">Contract Address</Label>
                                        <Input id="token-contract" placeholder="0x..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="token-network">Network</Label>
                                        <Select>
                                            <SelectTrigger id="token-network">
                                                <SelectValue placeholder="Select network" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ethereum">Ethereum</SelectItem>
                                                <SelectItem value="polygon">Polygon</SelectItem>
                                                <SelectItem value="bsc">Binance Smart Chain</SelectItem>
                                                <SelectItem value="solana">Solana</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="token-description">Description</Label>
                                        <Textarea id="token-description" placeholder="Describe your token..." />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Listing Details</CardTitle>
                                    <CardDescription>Set the price and quantity for your listing</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="token-quantity">Quantity</Label>
                                        <Input id="token-quantity" type="number" placeholder="0.0" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="token-price">Price per Token (USD)</Label>
                                        <Input id="token-price" type="number" placeholder="0.00" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="token-min">Minimum Purchase</Label>
                                        <Input id="token-min" type="number" placeholder="0.0" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="token-duration">Listing Duration</Label>
                                        <Select>
                                            <SelectTrigger id="token-duration">
                                                <SelectValue placeholder="Select duration" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1d">1 Day</SelectItem>
                                                <SelectItem value="7d">7 Days</SelectItem>
                                                <SelectItem value="30d">30 Days</SelectItem>
                                                <SelectItem value="90d">90 Days</SelectItem>
                                                <SelectItem value="unlimited">Unlimited</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="token-image">Token Image URL</Label>
                                        <Input id="token-image" placeholder="https://" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Listing</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="manage">
                        <Card>
                            <CardHeader>
                                <CardTitle>Your Active Listings</CardTitle>
                                <CardDescription>Manage your current token listings</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="rounded-lg border border-border">
                                    <div className="grid grid-cols-12 gap-4 p-4 font-medium text-muted-foreground border-b border-border">
                                        <div className="col-span-3">Token</div>
                                        <div className="col-span-2 text-right">Quantity</div>
                                        <div className="col-span-2 text-right">Price</div>
                                        <div className="col-span-2 text-right">Total Value</div>
                                        <div className="col-span-2 text-right">Expiration</div>
                                        <div className="col-span-1 text-right">Actions</div>
                                    </div>

                                    <div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-border hover:bg-card/60">
                                        <div className="col-span-3">
                                            <div className="font-medium">Ethereum</div>
                                            <div className="text-sm text-muted-foreground">ETH</div>
                                        </div>
                                        <div className="col-span-2 text-right">1.5 ETH</div>
                                        <div className="col-span-2 text-right">$1,802.45</div>
                                        <div className="col-span-2 text-right">$2,703.68</div>
                                        <div className="col-span-2 text-right">7 days</div>
                                        <div className="col-span-1 text-right">
                                            <Button variant="destructive" size="sm">
                                                Unlist
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-card/60">
                                        <div className="col-span-3">
                                            <div className="font-medium">Solana</div>
                                            <div className="text-sm text-muted-foreground">SOL</div>
                                        </div>
                                        <div className="col-span-2 text-right">15 SOL</div>
                                        <div className="col-span-2 text-right">$102.78</div>
                                        <div className="col-span-2 text-right">$1,541.70</div>
                                        <div className="col-span-2 text-right">30 days</div>
                                        <div className="col-span-1 text-right">
                                            <Button variant="destructive" size="sm">
                                                Unlist
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    )
}

