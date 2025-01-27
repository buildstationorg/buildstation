"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useReadContract,
  useAccount,
  useChainId,
  useReadContracts,
  useBytecode
} from "wagmi";
import { useMemo } from "react";
import Image from "next/image";
import { bioChipAbi } from "@/components/abis";
import { BIOCHIP_CONTRACT_ADDRESS } from "@/components/contracts";
import { Address, formatUnits } from "viem";
import { Button } from "@/components/ui/button";
import { RefreshCw, MoreHorizontal } from 'lucide-react';
import Link from "next/link";

type BioChip = {
  id: string;
  bioChipNumber: string;
  status: "uninitialized" | "initialized";
};

export default function BioChipStash() {
  const account = useAccount();
  const chainId = useChainId();

  function getBioChipAddress(chainId: number) {
    switch (chainId) {
      case 8217:
        return BIOCHIP_CONTRACT_ADDRESS.kaia;
      case 1001:
        return BIOCHIP_CONTRACT_ADDRESS.kaiaKairos;
      default:
        return BIOCHIP_CONTRACT_ADDRESS.default;
    }
  }

  function getBioChipImage(chainId: number) {
    switch (chainId) {
      case 8217:
        return "/biochips/BioChipKaia.svg";
      case 1001:
        return "/biochips/BioChipKaia.svg";
      default:
        return "/biochips/BioChipDefault.svg";
    }
  }

  const { data: bioChipBalance, refetch } = useReadContract({
    abi: bioChipAbi,
    address: getBioChipAddress(chainId),
    functionName: "balanceOf",
    args: [account.address as Address],
  });

  const contractCalls = useMemo(() => Array.from({
    length: Number(bioChipBalance ? formatUnits(bioChipBalance, 0) : "0"),
  }).map((_, index) => ({
    abi: bioChipAbi,
    address: getBioChipAddress(chainId),
    functionName: "tokenOfOwnerByIndex",
    args: [account.address as Address, index],
  })), [bioChipBalance, chainId, account.address]);
  
  const { data: bioChipData } = useReadContracts({
    contracts: contractCalls,
  });
  
  const data: BioChip[] = useMemo(() => bioChipData?.map((bioChipNumber, index) => ({
    id: (index + 1).toString(),
    bioChipNumber:
      typeof bioChipNumber.result === "bigint"
        ? formatUnits(bioChipNumber.result, 0)
        : "0",
    status: "uninitialized",
  })) || [], [bioChipData]);

  const columns: ColumnDef<BioChip>[] = [
    {
      accessorKey: "id",
      header: "No.",
    },
    {
      accessorKey: "bioChipNumber",
      header: "BioChip #",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const bioChip = row.original
   
        return (
          <Button variant="secondary" asChild>
            <Link href={`/biochip/${bioChip.bioChipNumber}`}>initialize</Link>
          </Button>
        )
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="text-xl font-semibold">stash</h2>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row w-fit relative">
          <Image
            src={
              account.address
                ? getBioChipImage(chainId)
                : "/biochips/BioChipDefault.svg"
            }
            alt="biochip"
            width={50}
            height={50}
            className="border-2 border-primary"
          />
          <p className="bg-primary rounded-md px-2 py-1 h-fit text-secondary absolute left-10 top-[-8px]">
            x{bioChipBalance ? formatUnits(bioChipBalance, 0) : "0"}
          </p>
        </div>
        <Button variant="outline" size="icon" onClick={() => refetch()}><RefreshCw className="w-6 h-6" /></Button>
      </div>
      <div className="border-2 border-primary">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
