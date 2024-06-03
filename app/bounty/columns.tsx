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
    header: () => <div className="font-bold text-primary text-lg">no.</div>,
  },
  {
    accessorKey: "title",
    header: () => <div className="font-bold text-primary text-lg">title</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="font-bold text-primary text-lg">amount</div>,
  },
  {
    accessorKey: "ticker",
    header: () => <div className="font-bold text-primary text-lg">ticker</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="font-bold text-primary text-lg">status</div>,
  },
]
