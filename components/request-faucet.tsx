"use client";

import { Button } from "@/components/ui/button";
import { Droplets } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAccount } from "wagmi";
import { useToast } from "@/hooks/use-toast";

export default function RequestFaucet() {
  const account = useAccount();
  const { toast } = useToast();
  function requestFaucet() {
    fetch(
      "https://api-baobab.wallet.klaytn.com/faucet/run?address=" +
        account.address,
      { method: "POST" }
    )
      .then((res: any) => res.json())
      .then((data: any) => {
        if (data.result === "SUCCESS") {
          toast({
            description: "Request faucet success",
          });
        } else {
          toast({
            variant: "destructive",
            description: "Already requested faucet",
          });
        }
      })
      .catch((error) =>
        toast({
          variant: "destructive",
          description: `There was a problem with your request. Log: ${error}`,
        })
      );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Droplets className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>request faucet</DialogTitle>
          <DialogDescription>
            You will request native token from the faucet to your address
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={requestFaucet}>request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
