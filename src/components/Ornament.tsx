interface OrnamentProps {
  className?: string;
  color?: string;
}

/** Subtle paisley + lotus divider used between sections for an Indian classical feel. */
export function Ornament({ className = "", color = "currentColor" }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center gap-4 text-gold ${className}`} aria-hidden>
      <span className="h-px w-16 sm:w-24 bg-current opacity-40" />
      <svg width="56" height="20" viewBox="0 0 56 20" fill="none" stroke={color} strokeWidth="1.2">
        <path d="M2 10 Q 10 2, 18 10 T 34 10 T 50 10" strokeLinecap="round" />
        <circle cx="28" cy="10" r="2.5" fill={color} stroke="none" />
        <circle cx="6" cy="10" r="1" fill={color} stroke="none" />
        <circle cx="50" cy="10" r="1" fill={color} stroke="none" />
      </svg>
      <span className="h-px w-16 sm:w-24 bg-current opacity-40" />
    </div>
  );
}

/** Decorative mandala background — place absolutely as a watermark. */
export function Mandala({ className = "", size = 320 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      aria-hidden
    >
      <g transform="translate(100 100)">
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5})`}>
            <path d="M0 -80 Q 8 -50, 0 -20 Q -8 -50, 0 -80 Z" />
            <circle cx="0" cy="-60" r="2" />
          </g>
        ))}
        <circle r="40" />
        <circle r="28" />
        <circle r="14" />
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 45})`}>
            <path d="M0 -14 Q 6 -7, 0 0 Q -6 -7, 0 -14 Z" />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Small Devanagari accent — "নৃত্য" (Nritya / Dance). */
export function SanskritAccent({ children = "নৃত্য", className = "" }: { children?: string; className?: string }) {
  return (
    <span className={`font-devanagari text-gold ${className}`} style={{ fontFamily: '"Tiro Bangla", serif' }}>
      {children}
    </span>
  );
}
