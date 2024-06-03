"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Contributor = {
  id: number
  name: string
  role: string
  github: string
  twitter: string
}

export const columns: ColumnDef<Contributor>[] = [
  {
    accessorKey: "id",
    header: "No.",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "github",
    header: "Github",
  },
  {
    accessorKey: "twitter",
    header: "Twitter",
  }
]
