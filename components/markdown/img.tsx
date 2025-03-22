'use client'

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Img({ src, alt }: { src?: string; alt?: string }) {
  return (
    <Zoom>
      <Image 
        src={src || ""} 
        alt={alt || ""}
        width={1200}
        height={630}
        />
    </Zoom>

  )
}
