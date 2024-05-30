"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Bounty = {
  id: number
  amount: number
  title: string
  ticker: string
  status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Bounty>[] = [
  {
    accessorKey: "id",
    header: "No.",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "ticker",
    header: "Ticker",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
