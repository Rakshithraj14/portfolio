"use client"

import { useEffect, useState } from "react"
import { PeekPal } from "peekpal/react"

import { musicPlayer } from "@/lib/soundcn/music-player"

const DANCE_SRC = "/pals/lloyd-dance.webp"
const DANCE_COLS = 5
const DANCE_ROWS = 4
const DANCE_FRAMES = DANCE_COLS * DANCE_ROWS
const DANCE_FPS = 8
/** width / height of one cell in the dance sheet. */
const DANCE_ASPECT = 1396 / 5 / (994 / 4)

function LloydDance({ size }: { size: number }) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setFrame((f) => (f + 1) % DANCE_FRAMES),
      1000 / DANCE_FPS
    )
    return () => clearInterval(id)
  }, [])

  const col = frame % DANCE_COLS
  const row = Math.floor(frame / DANCE_COLS)

  return (
    <span
      aria-hidden
      className="relative block rounded-2xl"
      style={{
        width: size,
        height: size / DANCE_ASPECT,
        backgroundImage: `url(${DANCE_SRC})`,
        backgroundSize: `${DANCE_COLS * 100}% ${DANCE_ROWS * 100}%`,
        backgroundPosition: `${(col / (DANCE_COLS - 1)) * 100}% ${(row / (DANCE_ROWS - 1)) * 100}%`,
        backgroundRepeat: "no-repeat",
      }}
    />
  )
}

/** Lloyd, the site mascot: the usual cursor-following pal, or dancing while the header's music plays. */
export function MascotCover({ size = 120 }: { size?: number }) {
  const [dancing, setDancing] = useState(() => musicPlayer.isPlaying)

  useEffect(() => musicPlayer.subscribe(setDancing), [])

  if (dancing) {
    return <LloydDance size={size} />
  }

  return (
    <PeekPal
      poses="/pals/lloyd-poses.webp"
      moods="/pals/lloyd-moods.webp"
      label="Lloyd"
      size={size}
      // The element itself sets this same inline style from `size` once it
      // upgrades client-side; matching it here avoids a hydration mismatch.
      style={{ width: size, height: size }}
      className="relative"
    />
  )
}
