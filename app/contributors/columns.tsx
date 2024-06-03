"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Contributor = {
  id: number
  name: string
  role: string
  github: string | boolean
  twitter: string | boolean
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
    cell: ({ row }) => {
      if (row.getValue("github") === false) {
        return <span className="text-gray-500">n/a</span>
      } else {
        const githubLink: string = row.getValue("github")
        const handle = githubLink.split("/").pop()
        return <a className="underline underline-offset-2 text-blue-500" href={githubLink}>{handle}</a>
      }
    },
  },
  {
    accessorKey: "twitter",
    header: "Twitter",
    cell: ({ row }) => {
      if (row.getValue("twitter") === false) {
        return <span className="text-gray-500">n/a</span>
      } else {
        const twitterLink: string = row.getValue("twitter")
        const handle = twitterLink.split("/").pop()
        return <a className="underline underline-offset-2 text-blue-500" href={twitterLink}>{handle}</a>
      }
    },
  }
]
