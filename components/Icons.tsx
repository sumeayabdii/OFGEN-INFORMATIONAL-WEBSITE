import type { SVGProps } from "react";
import { outlinePath } from "@/lib/africa";

type P = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: P) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
export const ChevronLeft = (p: P) => (
  <Base {...p}>
    <path d="M15 6l-6 6 6 6" />
  </Base>
);
export const ChevronRight = (p: P) => (
  <Base {...p}>
    <path d="M9 6l6 6-6 6" />
  </Base>
);
export const ChevronDown = (p: P) => (
  <Base {...p}>
    <path d="M6 9l6 6 6-6" />
  </Base>
);
export const Menu = (p: P) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);
export const Close = (p: P) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);

/** Simplified outline of the African continent. */
const africaIcon = outlinePath(20);
export const Africa = (p: P) => (
  <Base {...p}>
    <path d={africaIcon.d} transform={`translate(2 ${(24 - africaIcon.height) / 2})`} />
  </Base>
);
export const BoltCircle = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12.8 5.5L8.5 13h3.4l-.7 5.5 4.3-7.5h-3.4z" />
  </Base>
);
export const Handshake = (p: P) => (
  <Base {...p}>
    <path d="M2 8.5l3-2.5 3.5 1.2M22 8.5L19 6l-4.5.6-4.2 3.2a1.4 1.4 0 001.8 2.1l2.4-1.6 4.5 4.2" />
    <path d="M5 6v8l5.2 4.5a1.3 1.3 0 001.8-1.8M19 14.5l-4.7 3.6a1.3 1.3 0 01-1.9-1.7M8.6 15.6l1.4 1.2M14 13l1.9 1.8M2 14h3M22 14.5h-3" />
  </Base>
);
export const HandPlant = (p: P) => (
  <Base {...p}>
    <path d="M12 12V7M12 7c0-2.5 1.8-4 4.5-4 0 2.6-1.8 4-4.5 4zM12 9c0-2-1.5-3.3-3.8-3.3 0 2.1 1.5 3.3 3.8 3.3z" />
    <path d="M3 15.5h3.2l3.5 1.3h3.1a1.2 1.2 0 010 2.4H9.5M6.2 20.5l3.3.9 7.8-2.8 3.2-3.3a1.2 1.2 0 00-1.7-1.7l-3.6 2.4" />
  </Base>
);
export const People = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="7.5" r="2.8" />
    <circle cx="5.5" cy="9.5" r="2.2" />
    <circle cx="18.5" cy="9.5" r="2.2" />
    <path d="M7 19.5v-1.2a5 5 0 0110 0v1.2M1.8 18.5v-.6a3.7 3.7 0 015-3.4M22.2 18.5v-.6a3.7 3.7 0 00-5-3.4" />
  </Base>
);
export const SolarSun = (p: P) => (
  <Base {...p}>
    <circle cx="17.5" cy="5.5" r="2.2" />
    <path d="M17.5 1.5v.8M21.5 5.5h-.8M20.3 2.7l-.6.6M14.7 2.7l.6.6M20.3 8.3l-.6-.6" />
    <path d="M3.5 11h11l3 8h-17zM9.2 11l-.7 8M2 15h14.2M5 19v2.5M12 19v2.5" />
  </Base>
);
export const Coins = (p: P) => (
  <Base {...p}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
    <path d="M5 5.5v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4M5 9.5v4.5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V9.5M5 14v4.5C5 19.9 8.1 21 12 21s7-1.1 7-2.5V14" />
  </Base>
);
export const HardHat = (p: P) => (
  <Base {...p}>
    <path d="M2.5 18h19M4 18v-2.5a8 8 0 0116 0V18M9.5 8.3V5.5a1 1 0 011-1h3a1 1 0 011 1v2.8M9.5 8.3v4M14.5 8.3v4" />
  </Base>
);
export const Gear = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M10.3 2.5h3.4l.5 2.4 1.7.9 2.3-.9 1.7 2.9-1.8 1.6v1.9l1.8 1.6-1.7 2.9-2.3-.9-1.7.9-.5 2.4h-3.4l-.5-2.4-1.7-.9-2.3.9-1.7-2.9 1.8-1.6v-1.9L3.6 7.8l1.7-2.9 2.3.9 1.7-.9z" />
  </Base>
);
export const Tower = (p: P) => (
  <Base {...p}>
    <path d="M12 8L8 21.5M12 8l4 13.5M9.2 17h5.6M10.2 13h3.6M12 8V6" />
    <circle cx="12" cy="5" r="1" />
    <path d="M8.5 2.5a5 5 0 000 5M15.5 2.5a5 5 0 010 5M6 1a8 8 0 000 8M18 1a8 8 0 010 8" />
  </Base>
);
export const Factory = (p: P) => (
  <Base {...p}>
    <path d="M2.5 21.5V11l5 3V11l5 3V11l5 3V3.5h3v18zM2.5 21.5h19" />
    <path d="M6 17.5h2M11 17.5h2M16 17.5h2" />
  </Base>
);
export const Pylon = (p: P) => (
  <Base {...p}>
    <path d="M12 2l-4.5 19.5M12 2l4.5 19.5M5 6.5h14M6 10.5h12M10.8 6.5l3.4 4M13.2 6.5l-3.4 4M9 15.5h6M9.3 15.5l5.4 6M14.7 15.5l-5.4 6M5 6.5v2M19 6.5v2M6 10.5v2M18 10.5v2" />
  </Base>
);
export const Buildings = (p: P) => (
  <Base {...p}>
    <path d="M3 21.5V9h6v12.5M9 21.5V3h8v18.5M17 21.5V11h4v10.5M2 21.5h20" />
    <path d="M11.5 6.5h3M11.5 10h3M11.5 13.5h3M11.5 17h3M5 12.5h2M5 16h2M19 14h0M19 17h0" />
  </Base>
);
export const Seedling = (p: P) => (
  <Base {...p}>
    <path d="M12 21v-9M12 12c0-3.6 2.5-6 6.5-6 0 3.8-2.5 6-6.5 6zM12 14c0-3-2.2-5-5.5-5 0 3.1 2.2 5 5.5 5zM7 21h10" />
  </Base>
);
export const Leaf = (p: P) => (
  <Base {...p}>
    <path d="M5 19C5 10 10 4.5 20 4c.5 10-5 15-13 15M5 19l8-8M3 21l2-2" />
  </Base>
);
export const MapPin = (p: P) => (
  <Base {...p}>
    <path d="M12 21.5s7-6.2 7-11.5a7 7 0 00-14 0c0 5.3 7 11.5 7 11.5z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);
export const Mail = (p: P) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6l8.5 7 8.5-7" />
  </Base>
);
export const Phone = (p: P) => (
  <Base {...p}>
    <path d="M5 3.5h3.2l1.6 4-2 1.3a10.5 10.5 0 005.4 5.4l1.3-2 4 1.6V17a2 2 0 01-2 2A15.5 15.5 0 013 5.5a2 2 0 012-2z" />
  </Base>
);

/* Filled brand marks */
export const LinkedIn = ({ size = 20, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4z" />
  </svg>
);
export const XLogo = ({ size = 18, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.17h1.7L7.4 4.73H5.58z" />
  </svg>
);
export const YouTube = ({ size = 20, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M23 7.2a3 3 0 00-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 001 7.2 31 31 0 00.5 12 31 31 0 001 16.8a3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM9.75 15.02V8.98L15.5 12z" />
  </svg>
);
export const Quote = ({ size = 34, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M4 26v-8.5C4 11 7.4 6.6 13 5l1.3 2.7C11 9 9.4 11.4 9.2 14.8H14V26zm14 0v-8.5C18 11 21.4 6.6 27 5l1.3 2.7c-3.3 1.3-4.9 3.7-5.1 7.1H28V26z" />
  </svg>
);
