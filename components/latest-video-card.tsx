import Image from "next/image"

export default function LatestVideoCard() {
  return (
    <a href="https://www.youtube.com/live/3TVwVlngzG0?si=gT9R0EwLMi2U4-Bq">
      <div className="grid md:grid-cols-2 gap-4">
        <Image src="/video-thumbnails/tbn3.png" width={1200} height={630} alt="youtube thumbnail image" />
        <div>
          <h3 className="scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight">what&apos;s next for buildstation!? an update on something new</h3>
        </div>
      </div>
    </a>
  )
}