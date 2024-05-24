import Image from "next/image"

export default function LivestreamsPlaylist() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <a href="https://www.youtube.com/live/lAMDQU8L1G4?si=roOjWZ0j7UADRAm3">
        <div className="flex flex-col gap-2">
          <Image src="/video-thumbnails/tbn2.png" width={1200} height={630} alt="youtube thumbnail image" />
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">how to make money contributing to open source ft. klaytn and dorahacks</h3>
        </div>
      </a>
      <a href="https://www.youtube.com/live/kjKoAJ8RTaI?si=KkE8rAslpqG9E28N">
        <div className="flex flex-col gap-2">
          <Image src="/video-thumbnails/tbn1.png" width={1200} height={630} alt="youtube thumbnail image" />
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">what is buildstation?</h3>
        </div>
      </a>
    </div>
  )
}