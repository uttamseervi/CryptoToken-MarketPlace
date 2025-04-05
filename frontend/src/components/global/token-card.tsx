import { ArrowDown, ArrowUp } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TokenCardProps {
    name: string
    symbol: string
    price: number
    change: number
    image: string
}

export function TokenCard({ name, symbol, price, change, image }: TokenCardProps) {
    const isPositive = change > 0

    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
            <CardContent className="p-6">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={name}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <h4 className="font-medium text-foreground">{name}</h4>
                        <p className="text-sm text-muted-foreground">{symbol}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-2xl font-bold text-foreground">${price.toLocaleString()}</p>
                    <div className="flex items-center gap-1">
                        {isPositive ? (
                            <ArrowUp className="h-4 w-4 text-green-500" />
                        ) : (
                            <ArrowDown className="h-4 w-4 text-red-500" />
                        )}
                        <p className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
                            {isPositive ? "+" : ""}
                            {change}%
                        </p>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex gap-2 p-4 pt-0">
                <Button className="flex-1" variant="default">
                    Buy
                </Button>
                <Button variant="outline" className="flex-1">
                    Sell
                </Button>
            </CardFooter>
        </Card>
    )
}
