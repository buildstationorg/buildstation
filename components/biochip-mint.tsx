"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Binary,
  CircleAlert,
  Minus,
  Loader2,
  Check,
  X,
  Hash,
  OctagonX,
} from "lucide-react";
import {
  type BaseError,
  useAccount,
  useChainId,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { parseEther } from "viem";
import { bioChipAbi } from "@/components/abis";
import { BIOCHIP_CONTRACT_ADDRESS } from "@/components/contracts";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function BioChipMint() {
  const account = useAccount();
  const chainId = useChainId();
  const balance = useBalance({
    address: account.address,
  });
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);

  function getFee(chainId: number) {
    switch (chainId) {
      case 8217:
        return "1 KLAY";
      case 1001:
        return "1 KLAY";
      default:
        return "0.0001 Ξ";
    }
  }

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

  function mintBioChip() {
    setIsAlertActive(true);
    writeContract({
      abi: bioChipAbi,
      address: getBioChipAddress(chainId),
      functionName: "mint",
      value: parseEther("1"),
    });
  }

  function closeAlert() {
    setIsAlertActive(false);
  }

  function truncateAddress(address: string) {
    return `${address.slice(0, 10)}...${address.slice(-10)}`;
  }

  return (
    <div className="flex flex-col gap-8 p-6 border-2 border-primary w-full lg:max-w-full h-full">
      <h2 className="text-xl font-semibold">create your biochip</h2>
      <p className="text-md">
        all legends start somewhere. begin yours by minting this biochip and
        accumulate street creds. will cost you a small fee. depending on the
        connected chain, the biochip design will also change accordingly.
      </p>
      {account.address ? (
        <p className="flex flex-row items-center text-lg">
          <Minus className="w-6 h-6 mr-2" />
          {`${getFee(chainId)}`}
        </p>
      ) : (
        <p className="flex flex-row items-center text-lg text-red-500">
          <CircleAlert className="w-6 h-6 mr-2" />
          connect wallet to check fee
        </p>
      )}
      {isPending ? (
        <Button className="w-[150px]" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          pending...
        </Button>
      ) : account.address ? (
        <Button className="w-[150px] text-lg px-6" onClick={mintBioChip}>
          <Binary className="w-4 h-4 mr-2" />
          mint
        </Button>
      ) : (
        <Button disabled className="w-[150px] text-lg px-6">
          <Binary className="w-4 h-4 mr-2" />
          mint
        </Button>
      )}
      <Alert
        variant={`${error ? "destructive" : hash ? "default" : "default"}`}
        className={`${
          error && isAlertActive
            ? "fixed bottom-6 right-2 lg:bottom-6 lg:right-6 w-11/12 lg:w-[350px] bg-background h-fit border-2 z-[10]"
            : hash && isAlertActive
            ? "fixed bottom-6 right-2 lg:bottom-6 lg:right-6 w-11/12 lg:w-[350px] bg-background h-fit border-primary z-[10]"
            : "hidden"
        }`}
      >
        <AlertTitle className="flex flex-row items-center justify-between">
          <p className="text-lg font-semibold">transaction status</p>
          <Button size="icon" variant="ghost" onClick={closeAlert}>
            <X className="w-4 h-4" />
          </Button>
        </AlertTitle>
        <AlertDescription>
          {isConfirming && (
            <div className="flex flex-row gap-2 text-yellow-500 text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              confirming...
            </div>
          )}
          {isConfirmed && (
            <div className="flex flex-row gap-2 items-center text-green-500 text-sm">
              <Check className="h-4 w-4" />
              confirmed!
            </div>
          )}
          {
            // if there is an error, show the error message
            error && (
              <div className="flex flex-row gap-2 items-center text-sm text-red-500">
                <OctagonX className="h-4 w-4" />
                failed! {(error as BaseError).shortMessage || error.message}
              </div>
            )
          }
          {hash ? (
            <div className="flex flex-row gap-2 items-center text-sm">
              <Hash className="w-4 h-4" />
              <a
                target="_blank"
                className="text-blue-500 underline"
                href={
                  chainId === 1001
                    ? `https://baobab.klaytnfinder.io/tx/${hash}`
                    : `https://klaytnfinder.io/tx/${hash}`
                }
              >
                {truncateAddress(hash)}
              </a>
            </div>
          ) : null}
        </AlertDescription>
      </Alert>
    </div>
  );
}
