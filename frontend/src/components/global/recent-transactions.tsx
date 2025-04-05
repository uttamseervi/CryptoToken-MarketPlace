import { ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RecentTransactionsProps {
    connected: boolean
}

const transactions = [
    {
        id: "tx1",
        type: "buy",
        token: "ETH",
        amount: 0.5,
        price: 1802.45,
        time: "2 hours ago",
    },
    {
        id: "tx2",
        type: "sell",
        token: "SOL",
        amount: 2.5,
        price: 102.78,
        time: "5 hours ago",
    },
    {
        id: "tx3",
        type: "buy",
        token: "BTC",
        amount: 0.02,
        price: 34502.67,
        time: "1 day ago",
    },
    {
        id: "tx4",
        type: "sell",
        token: "ADA",
        amount: 100,
        price: 0.45,
        time: "2 days ago",
    },
]

export function RecentTransactions({ connected }: RecentTransactionsProps) {
    if (!connected) {
        return (
            <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-muted-foreground">Connect your wallet to view recent transactions</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {transactions.map((tx) => {
                const isBuy = tx.type === "buy"
                const total = tx.amount * tx.price

                return (
                    <div
                        key={tx.id}
                        className="flex items-center justify-between rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full ${isBuy ? "bg-green-500/10" : "bg-red-500/10"
                                    }`}
                            >
                                {isBuy ? (
                                    <ArrowDown className="h-4 w-4 text-green-500" />
                                ) : (
                                    <ArrowUp className="h-4 w-4 text-red-500" />
                                )}
                            </div>
                            <div>
                                <p className="font-medium">
                                    {isBuy ? "Bought" : "Sold"} {tx.amount} {tx.token}
                                </p>
                                <p className="text-xs text-muted-foreground">{tx.time}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-medium">${total.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">
                                ${tx.price.toLocaleString()} per token
                            </p>
                        </div>
                    </div>
                )
            })}
            <Button variant="outline" className="w-full">
                View All Transactions
            </Button>
        </div>
    )
}
