"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  type BaseError,
  useAccount,
  useChainId,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import {
  Binary,
  Loader2,
  Check,
  X,
  Hash,
  OctagonX,
} from "lucide-react";
import { erc6551RegistryV3Abi } from "@/components/abis";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BIOCHIP_CONTRACT_ADDRESS, ERC6551_ADDRESSES } from "@/components/contracts";
import { Address } from "viem";

export default function BioChipInitialize({ id }: { id: string }) {
  const account = useAccount();
  const chainId = useChainId();
  const defaultSalt = "0x0000000000000000000000000000000000000000000000000000000000000000";
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  function initializeBioChip() {
    setIsAlertActive(true);
    writeContract({
      abi: erc6551RegistryV3Abi,
      address: ERC6551_ADDRESSES.registryV3 as Address,
      functionName: "createAccount",
      args: [
        ERC6551_ADDRESSES.defaultImplementation as Address,
        defaultSalt,
        BigInt(chainId),
        getBioChipAddress(chainId),
        BigInt(id),
      ],
    });
  }

  function closeAlert() {
    setIsAlertActive(false);
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

  function truncateAddress(address: string) {
    return `${address.slice(0, 10)}...${address.slice(-10)}`;
  }

  return (
    <div className="flex flex-col gap-8 p-6 border-2 border-primary w-full lg:max-w-full h-full">
    <h2 className="text-xl font-semibold">initialize the biochip</h2>
    <p className="text-md">
      activate your biochip information storage. after activation, your biochip can be used to store your personal records. this action is irreversible.
    </p>
    {isPending ? (
      <Button className="w-[200px]" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        pending...
      </Button>
    ) : account.address ? (
      <Button className="w-[200px] text-lg px-6" onClick={initializeBioChip}>
        <Binary className="w-4 h-4 mr-2" />
        initialize
      </Button>
    ) : (
      <Button disabled className="w-[200px] text-lg px-6">
        <Binary className="w-4 h-4 mr-2" />
        initialize
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
