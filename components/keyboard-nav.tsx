"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

export interface KeyboardNavItem {
  keyboard: string
  description: string
  url: string
}

export default function KeyboardNav({ keyboardNavItems }: { keyboardNavItems: KeyboardNavItem[] }) {
  const router = useRouter()

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      const pressedKey = event.key.toLowerCase()
      const matchingItem = keyboardNavItems.find(
        item => item.keyboard.toLowerCase() === pressedKey
      )
      
      if (matchingItem) {
        if (matchingItem.url.includes('https')) {
          window.open(matchingItem.url, '_blank')
        } else {
          router.push(matchingItem.url)
        }
      } else if (pressedKey === "0") {
        router.push("/") // Assuming "0" should navigate to index/home
      } else if (pressedKey === "arrowleft") {
        router.back()
      } else if (pressedKey === "arrowright") {
        router.forward()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [keyboardNavItems, router])

  return (
    <div className="hidden lg:flex flex-row gap-12 mt-[128px]">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <button className="text-sm border-primary border border-b-2 px-[1px] py-[1px] w-[24px] h-[24px] hover:bg-primary hover:text-secondary">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="text-sm border-primary border border-b-2 px-[1px] py-[1px] w-[24px] h-[24px] hover:bg-primary hover:text-secondary">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm">Nav</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          {keyboardNavItems.map((item) => (
            <button key={item.keyboard} className="text-sm border-primary border border-b-2 px-[1px] py-[1px] w-[24px] h-[24px] hover:bg-primary hover:text-secondary">
              {item.keyboard}
            </button>
          ))}
        </div>
        <p className="text-sm">{keyboardNavItems[0].description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <button className="text-sm border-primary border border-b-2 px-[1px] py-[1px] w-[24px] h-[24px] hover:bg-primary hover:text-secondary">
          0
        </button>
        <p className="text-sm">Index</p>
      </div>

    </div>
  )
}