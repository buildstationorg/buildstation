"use client";
 
import { useState } from "react";
import { ClipboardList, Check } from 'lucide-react';
 
export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);
 
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
 
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
 
  return (
    <button disabled={isCopied} onClick={copy}>
      {isCopied ?
        <div className="flex flex-row gap-2 items-center">
          <Check className="h-6 w-6" />
        </div> 
        
        : 
        <div className="flex flex-row gap-2 items-center">
          <ClipboardList className="h-6 w-6" />
        </div>
      }
    </button>
  );
};