type Bounty = {
  id: number
  title: string
  amount: number
  ticker: string
  status: "pending" | "processing" | "success" | "failed"
}
 
export const data: Bounty[] = [
  {
    id: 1,
    title: "test bounty 1",
    amount: 10,
    ticker: "USDT",
    status: "pending",

  },
  {
    id: 2,
    title: "test bounty 2",
    amount: 20,
    ticker: "USDT",
    status: "processing",
  },
]

