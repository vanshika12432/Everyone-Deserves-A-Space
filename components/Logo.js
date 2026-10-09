// Arch = a doorway / a space; the dot inside = you, held within it.
export default function Logo({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M8 42V24C8 14.6 15.2 7 24 7s16 7.6 16 17v18" stroke="hsl(var(--c-primary))" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 42V25c0-5.5 4-10 9-10s9 4.500 9 10v17" stroke="hsl(var(--c-accent))" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="30" r="4" fill="hsl(var(--c-primary))" />
    </svg>
  );
}
