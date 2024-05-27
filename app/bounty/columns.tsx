"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Bounty = {
  id: number
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  title: string
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
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
