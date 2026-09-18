import { cn } from "@/lib/utils"

/**
 * The IBM bee — wings flap continuously while shown. Rendered only next to
 * the IBM/Rooman experience entry, faded in on hover of that row.
 */
export function IBMBee({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={cn("size-6", className)} aria-hidden>
      <path
        d="M12,14h8a4,4,0,0,0-8,0Zm8,6V16H12v4Zm-4,6a4,4,0,0,0,4-4H12A4,4,0,0,0,16,26ZM16,8a6,6,0,0,1,6,6v8a6,6,0,0,1-12,0V14A6,6,0,0,1,16,8Z"
        fill="#0062FF"
        fillRule="evenodd"
      />
      <path
        d="M11.5,2A1.5,1.5,0,1,0,13,3.5,1.5,1.5,0,0,0,11.5,2Zm0-2A3.5,3.5,0,1,1,8,3.5,3.5,3.5,0,0,1,11.5,0Z"
        fill="#0062FF"
        fillRule="evenodd"
      />
      <path
        d="M20.5,2A1.5,1.5,0,1,0,22,3.5,1.5,1.5,0,0,0,20.5,2Zm0-2A3.5,3.5,0,1,1,17,3.5,3.5,3.5,0,0,1,20.5,0Z"
        fill="#0062FF"
        fillRule="evenodd"
      />
      <path
        className="[transform-origin:7px_10px] [animation:fly-left_0.7s_ease-in-out_infinite_alternate]"
        d="M2.66,18.71A1.87,1.87,0,0,0,2,20.1a2,2,0,0,0,4,0V15.6ZM0,20.1a3.83,3.83,0,0,1,1.34-2.89L8,11v9.1a4,4,0,0,1-8,0Z"
        fill="#0062FF"
        fillRule="evenodd"
      />
      <path
        className="[transform-origin:25px_10px] [animation:fly-right_0.7s_ease-in-out_infinite_alternate]"
        d="M28,22a2,2,0,0,0,2-1.9,1.86,1.86,0,0,0-.7-1.43L26,15.6v4.5A2,2,0,0,0,28,22Zm2.66-4.79A3.83,3.83,0,0,1,32,20.1a4,4,0,0,1-8,0V11Z"
        fill="#0062FF"
        fillRule="evenodd"
      />
    </svg>
  )
}
