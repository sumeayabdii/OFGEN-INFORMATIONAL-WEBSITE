import Image from "next/image";

/**
 * Photo slot. Every photo on the site is a placeholder in /public/images —
 * replace the file (keep the same name) and it shows up here automatically.
 */
export default function Photo({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`photo ${className}`} />;
}
