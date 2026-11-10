import type { SVGProps } from "react";

/** Pictos au trait fin (1,4 px), dessinés pour le site : cintre, étoile, étiquette, pièces de vestiaire. */
type P = SVGProps<SVGSVGElement> & { className?: string };
const base = (className = "size-[1.05rem]"): SVGProps<SVGSVGElement> => ({
  className,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

export const HangerIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 48 48" {...base(className)} {...p}>
    <path d="M24 17.5v-2.2c2.6-.3 4.3-2.2 4.3-4.6A4.3 4.3 0 0 0 24 6.4a4.3 4.3 0 0 0-4.2 3.3" />
    <path d="M24 17.5 5.6 32.3c-1.5 1.2-.7 3.6 1.2 3.6h34.4c1.9 0 2.7-2.4 1.2-3.6L24 17.5Z" />
  </svg>
);

/** Étoile à quatre branches, au trait (le scintillement de la marque). */
export const SparkleIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 24 24" {...base(className)} {...p}>
    <path d="M12 2.5c.6 5.2 2.3 6.9 7.5 7.5-5.2.6-6.9 2.3-7.5 7.5-.6-5.2-2.3-6.9-7.5-7.5 5.2-.6 6.9-2.3 7.5-7.5Z" />
  </svg>
);

export const DressIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 48 48" {...base(className)} {...p}>
    <path d="M19 5.5v7.5M29 5.5v7.5" />
    <path d="M19 13c1.4 2 3 3 5 3s3.6-1 5-3l1.6 8.4H17.4L19 13Z" />
    <path d="M17.4 21.4 9.5 42.5h29l-7.9-21.1" />
    <path d="M15 34c3 1 6 1.5 9 1.5s6-.5 9-1.5" strokeDasharray="1.5 3" />
  </svg>
);

export const ShirtIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 48 48" {...base(className)} {...p}>
    <path d="M18.5 6.5 9 10.5 4.5 23l6 2.4 3-7.4v23.5h21V18l3 7.4 6-2.4L39 10.5l-9.5-4" />
    <path d="M18.5 6.5 24 13l5.5-6.5M24 13v28.5" />
    <path d="m18.5 6.5-1.7 6 3.7 3.5M29.5 6.5l1.7 6-3.7 3.5" />
    <circle cx="24" cy="20" r=".6" />
    <circle cx="24" cy="27" r=".6" />
    <circle cx="24" cy="34" r=".6" />
  </svg>
);

export const RingIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 48 48" {...base(className)} {...p}>
    <circle cx="24" cy="30" r="12" />
    <circle cx="24" cy="30" r="9" />
    <path d="M19 15.5 24 9l5 6.5-5 3-5-3Z" />
    <path d="M19 15.5h10M24 9v9.5" />
    <path d="M35 6.5v4M33 8.5h4M10.5 10v3M9 11.5h3" />
  </svg>
);

export const BagIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 48 48" {...base(className)} {...p}>
    <path d="M7.5 19.5h33l-2.6 20.3a3 3 0 0 1-3 2.6H13.1a3 3 0 0 1-3-2.6L7.5 19.5Z" />
    <path d="M16.5 19.5v-4.8a7.5 7.5 0 0 1 15 0v4.8" />
    <path d="M7.5 26h33" />
    <rect x="21.5" y="24" width="5" height="4" rx="1" />
  </svg>
);

/** Miroir à main : le vintage, les objets d'hier. */
export const MirrorIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 48 48" {...base(className)} {...p}>
    <ellipse cx="24" cy="17" rx="11" ry="12" />
    <ellipse cx="24" cy="17" rx="8" ry="9" />
    <path d="M21.5 29v13a2.5 2.5 0 0 0 5 0V29" />
    <path d="M19.5 13c.8-2 2.3-3.2 4-3.6" />
  </svg>
);

/** Étiquette de prix avec son œillet et sa ficelle. */
export const TagIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 48 48" {...base(className)} {...p}>
    <path d="M25.3 6.5H40a1.5 1.5 0 0 1 1.5 1.5v14.7a3 3 0 0 1-.9 2.1L24.4 41a3 3 0 0 1-4.2 0L7 27.8a3 3 0 0 1 0-4.2L23.2 7.4a3 3 0 0 1 2.1-.9Z" />
    <circle cx="34.5" cy="13.5" r="2.5" />
    <path d="M36.3 11.7c2.4-2.6 5.5-3.7 8-2.7" />
    <path d="m18 29.5 9-9M21 32.5l5-5" strokeDasharray="1.5 3" />
  </svg>
);

/** Portant : les arrivages de la semaine. */
export const RailIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 48 48" {...base(className)} {...p}>
    <path d="M6 9.5h36M8 9.5v33M40 9.5v33M5 42.5h6M37 42.5h6" />
    <path d="M15 9.5v3l-4 6h8l-4-6M24 9.5v3l-4 6h8l-4-6M33 9.5v3l-4 6h8l-4-6" />
    <path d="M11 18.5v12h8v-12M20 18.5v16h8v-16M29 18.5v10h8v-10" />
  </svg>
);

export const ChatIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 48 48" {...base(className)} {...p}>
    <path d="M24 6.5c-9.7 0-17.5 7.4-17.5 16.5 0 3.4 1.1 6.6 3 9.2L7.5 41.5l9.8-3.2c2.1.8 4.3 1.2 6.7 1.2 9.7 0 17.5-7.4 17.5-16.5S33.7 6.5 24 6.5Z" />
    <path d="M17 21h14M17 27h9" />
  </svg>
);

export const WhatsAppIcon = ({ className = "size-[1.05rem]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

export const FacebookIcon = ({ className = "size-[1.05rem]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.25-1.5 1.5-1.5H16.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
  </svg>
);

export const PhoneIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 24 24" {...base(className)} {...p}>
    <path d="M5.2 3.5h3l1.6 4.2-2.1 1.3a11 11 0 0 0 5.3 5.3l1.3-2.1 4.2 1.6v3A2 2 0 0 1 16.4 19 13.5 13.5 0 0 1 3.5 5.6 2 2 0 0 1 5.2 3.5Z" />
  </svg>
);

export const PinIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 24 24" {...base(className)} {...p}>
    <path d="M12 21s6.5-5.7 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15.3 12 21 12 21Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const ArrowIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 24 24" {...base(className)} {...p}>
    <path d="M4 12h15M14 7l5 5-5 5" />
  </svg>
);

export const ChevronIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 24 24" {...base(className)} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const CloseIcon = ({ className, ...p }: P) => (
  <svg viewBox="0 0 24 24" {...base(className)} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const MenuIcon = ({ className = "size-6", ...p }: P) => (
  <svg viewBox="0 0 24 24" {...base(className)} {...p}>
    <path d="M4 8h16M4 16h10" />
  </svg>
);

export const StarIcon = ({ className = "size-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8L12 3Z" />
  </svg>
);

/** Petit filet décoratif : un fil qui ondule, terminé par une étoile. */
export const Thread = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 10" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true" preserveAspectRatio="none">
    <path d="M1 5c6-4 10 4 16 0s10-4 16 0 10 4 16 0" />
    <path d="M58 1.5c.3 2.3 1.2 3.2 3.5 3.5-2.3.3-3.2 1.2-3.5 3.5-.3-2.3-1.2-3.2-3.5-3.5 2.3-.3 3.2-1.2 3.5-3.5Z" fill="currentColor" stroke="none" />
  </svg>
);
