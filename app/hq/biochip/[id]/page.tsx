"use client";

import BioChipInitialize from "@/components/biochip-initialize";
import BioChipImage from "@/components/biochip-image";
import BioChipInfo from "@/components/biochip-info";
import {
  getContractAddress,
  concat,
  encodeAbiParameters,
  pad,
  getAddress,
} from "viem";
import {
  useChainId,
  useBytecode,
} from "wagmi";
import {
  BIOCHIP_CONTRACT_ADDRESS,
  ERC6551_ADDRESSES,
} from "@/components/contracts";
import { Address } from "viem";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page({ params }: { params: { id: string } }) {
  const chainId = useChainId();
  const defaultSalt = 0;
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
  const tokenBoundV3AccountAddress = getTokenboundV3Account(
    getBioChipAddress(chainId),
    params.id,
    chainId,
    ERC6551_ADDRESSES.registryV3 as Address,
    ERC6551_ADDRESSES.defaultImplementation as Address,
    defaultSalt
  )

  const { data: tokenBoundV3AccountDeployed, refetch } = useBytecode({
    address: tokenBoundV3AccountAddress,
  });

  function getTokenboundV3Account(
    tokenContract: string,
    tokenId: string,
    chainId: number,
    implementationAddress?: `0x${string}`,
    registryAddress?: `0x${string}`,
    salt?: number
  ): `0x${string}` {
    salt = salt ?? 0;
    const erc6551implementation = ERC6551_ADDRESSES.defaultImplementation;
    const erc6551registry = ERC6551_ADDRESSES.registryV3;
    const types = [
      { type: "uint256" }, // salt
      { type: "uint256" }, // chainId
      { type: "address" }, // tokenContract
      { type: "uint256" }, // tokenId
    ];

    const values: (string | bigint)[] = [
      salt.toString(),
      BigInt(chainId),
      tokenContract,
      tokenId,
    ];
    const encodedABI = encodeAbiParameters(types, values);

    const hexCreationCode = concat([
      "0x3d60ad80600a3d3981f3363d3d373d3d3d363d73",
      getAddress(erc6551implementation),
      "0x5af43d82803e903d91602b57fd5bf3",
      encodedABI,
    ]);

    const creationCode = addressToUint8Array(hexCreationCode);
    const bigIntSalt = BigInt(salt).toString(16) as `0x${string}`;
    const saltHex = pad(bigIntSalt, { size: 32 });

    return getContractAddress({
      bytecode: creationCode,
      from: getAddress(erc6551registry),
      opcode: "CREATE2",
      salt: saltHex,
    });
  }

  function addressToUint8Array(address: `0x${string}`): Uint8Array {
    // Remove '0x' prefix
    const cleanAddress = address.slice(2);

    // Convert hex string to Uint8Array
    const array = new Uint8Array(cleanAddress.length / 2);

    for (let i = 0; i < cleanAddress.length; i += 2) {
      array[i / 2] = parseInt(cleanAddress.substr(i, 2), 16);
    }

    return array;
  }

  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center justify-between">
          <h1 className="text-3xl font-extrabold">BioChip #{params.id}</h1>
          <Button variant="outline" size="icon" onClick={() => refetch()}><RefreshCw className="w-6 h-6" /></Button>
        </div>
        <p className="text-md text-muted-foreground">
          your biochip information
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 mt-4 lg:h-full">
        <BioChipImage />
        {
          tokenBoundV3AccountDeployed?.length && tokenBoundV3AccountDeployed.length > 2 ? (
            <BioChipInfo address={tokenBoundV3AccountAddress} />
          ) : (
            <BioChipInitialize id={params.id} />
          )
        }   
      </div>
    </div>
  );
}
