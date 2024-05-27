type Bounty = {
  id: number
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  title: string
}
 
export const data: Bounty[] = [
  {
    id: 1,
    title: "test bounty 1",
    amount: 100,
    status: "pending",

  },
  {
    id: 2,
    title: "test bounty 2",
    amount: 125,
    status: "processing",
  },
]

