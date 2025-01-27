"use client";

import Image from "next/image";
import { useAccount, useChainId } from 'wagmi'

export default function BioChipImage() {
  const account = useAccount()
  const chainId = useChainId()

  function getBioChipImage(chainId: number) {
    switch (chainId) {
      case 8217:
        return "/biochips/BioChipKaia.svg"
      case 1001:
        return "/biochips/BioChipKaia.svg"
      default:
        return "/biochips/BioChipDefault.svg"
    }
  }

  return (
    <>
      <Image
        src={account.address ? getBioChipImage(chainId) : "/biochips/BioChipDefault.svg"}
        alt="biochip"
        width={400}
        height={400}
        className="border-2 border-primary"
      />
    </>
  );
}
