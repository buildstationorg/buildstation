import Image from "next/image";
import { Cpu } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

export default function BioChipInfo({ address }: { address: string }) {

  function truncateAddress(address: string) {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  }

  return (
    <div>
      <div className="flex flex-row gap-2 px-4 py-2 items-center justify-between bg-primary text-secondary">
        <h1 className="flex flex-row gap-2 items-center text-xl font-semibold">
          <Cpu className="w-6 h-6" />
          {truncateAddress(address)}
        </h1>
        <CopyButton text={address} />
      </div>
      <div className="flex flex-col gap-8 p-6 border-2 border-primary w-full lg:max-w-full h-full">
        <h2 className="text-xl font-semibold">information</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Image
            src="/placeholders/pudgy.jpeg"
            width={400}
            height={400}
            alt="pudgy"
            className="border-2 border-primary"
          />
          <Image
            src="/placeholders/noun.svg"
            width={400}
            height={400}
            alt="nouns"
            className="border-2 border-primary"
          />
          <Image
            src="/placeholders/kemonokaki.jpg"
            width={400}
            height={400}
            alt="kemonokaki"
            className="border-2 border-primary"
          />
          <Image
            src="/placeholders/milady.jpg"
            width={400}
            height={400}
            alt="milady"
            className="border-2 border-primary"
          />
        </div>
      </div>
    </div>
  );
}
