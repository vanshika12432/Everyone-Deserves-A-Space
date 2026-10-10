// import NextLink from "next/link";
// import Image from "next/image";
// import { Card, CardBody, CardFooter, Chip } from "@heroui/react";

// export default function EventCard({ event }) {
//   return (
//     <Card as={NextLink} href={`/events/${event.slug}`} isPressable isHoverable shadow="sm" className="h-full text-left">
//       <div className="relative aspect-[16/10] w-full">
//         <Image src={event.image} alt={event.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
//       </div>
//       <CardBody className="gap-2 p-5">
//         <Chip size="sm" color="secondary" variant="flat">{event.type}</Chip>
//         <h3 className="text-2xl">{event.title}</h3>
//         <p className="text-foreground/70">{event.summary}</p>
//       </CardBody>
//       <CardFooter className="px-5 pb-5 pt-0 text-sm text-primary">{event.mode}. View details</CardFooter>
//     </Card>
//   );
// }
// import NextLink from "next/link";
// import Image from "next/image";
// import { Card, CardBody, CardFooter } from "@heroui/react";

// /*
//   Slim, polished event card using HeroUI's Card.
//   Colours come from your HeroUI theme (primary / secondary / content1), which your
//   globals.css already maps to the --c-* tokens.
// */

// function ArrowIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2.25"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <path d="M5 12h14" />
//       <path d="m13 6 6 6-6 6" />
//     </svg>
//   );
// }

// export default function EventCard({ event }) {
//   return (
//     <Card
//       as={NextLink}
//       href={`/events/${event.slug}`}
//       isPressable
//       shadow="none"
//       radius="lg"
//       className="group h-full text-left border border-foreground/10 bg-content1
//         transition-all duration-300 ease-out
//         hover:-translate-y-1.5 hover:border-primary/50
//         hover:shadow-xl hover:shadow-primary/25
//         active:translate-y-0 active:scale-[0.99]
//         motion-reduce:transition-none motion-reduce:hover:translate-y-0"
//     >
//       {/* Image */}
//       <div className="relative aspect-[2/1] w-full overflow-hidden">
//         <Image
//           src={event.image}
//           alt={event.title}
//           fill
//           sizes="(min-width:768px) 45vw, 100vw"
//           className="object-cover object-top transition-transform duration-700 ease-out
//             group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
//         />
//         <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-content1/55 to-transparent" />
//         <span
//           className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full
//             bg-content1/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider
//             text-foreground shadow-sm ring-1 ring-black/5 backdrop-blur-md"
//         >
//           <span className="h-1.5 w-1.5 rounded-full bg-primary" />
//           {event.type}
//         </span>
//       </div>

//       <CardBody className="gap-1.5 px-5 pb-4 pt-4">
//         <h3 className="text-xl leading-snug transition-colors duration-300 group-hover:text-primary">
//           {event.title}
//         </h3>
//         <p className="line-clamp-2 text-sm leading-relaxed text-foreground/65">{event.summary}</p>
//       </CardBody>

//       <CardFooter className="mx-5 w-auto justify-between border-t border-foreground/10 px-0 py-3 text-sm">
//         <span className="inline-flex items-center gap-2 font-medium text-foreground/60">
//           <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
//           {event.mode}
//         </span>
//         <span
//           className="grid h-8 w-8 place-items-center rounded-full border border-primary/35 text-primary
//             transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-transparent
//             group-hover:bg-primary group-hover:text-primary-foreground"
//         >
//           <ArrowIcon />
//           <span className="sr-only">View details</span>
//         </span>
//       </CardFooter>

//       <span
//         className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0
//           bg-gradient-to-r from-primary to-secondary transition-transform duration-500
//           group-hover:scale-x-100"
//       />
//     </Card>
//   );
// }


import Link from "next/link";
import Image from "next/image";

/*
  Slim, polished event card (plain Tailwind, themed with the --c-* tokens).
  - 2:1 image keeps the card short; object-top keeps the artwork's headline text visible
  - glass type pill, thin divider footer, circular arrow button that fills on hover
*/

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function EventCard({ event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl text-left
        border border-[hsl(var(--c-ink)/0.1)] bg-[hsl(var(--c-surface))]
        shadow-sm transition-all duration-300 ease-out
        hover:-translate-y-1.5 hover:border-[hsl(var(--c-primary)/0.5)]
        hover:shadow-[0_22px_45px_-18px_hsl(var(--c-primary)/0.45)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--c-primary))]
        focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--c-bg))]
        active:translate-y-0 active:scale-[0.99]
        motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/* Image */}
      <div className="relative aspect-[2/1] w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(min-width:768px) 45vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out
            group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {/* soft bottom fade so the image melts into the card */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3
            bg-gradient-to-t from-[hsl(var(--c-surface)/0.55)] to-transparent"
        />
        {/* glass type pill */}
        <span
          className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full
            bg-[hsl(var(--c-surface)/0.8)] px-2.5 py-1 text-[11px] font-semibold uppercase
            tracking-wider text-[hsl(var(--c-ink))] shadow-sm ring-1 ring-black/5 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--c-primary))]" />
          {event.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1.5 px-5 pb-4 pt-4">
        <h3
          className="text-xl leading-snug text-[hsl(var(--c-ink))] transition-colors duration-300
            group-hover:text-[hsl(var(--c-primary))]"
        >
          {event.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[hsl(var(--c-ink)/0.65)]">
          {event.summary}
        </p>
      </div>

      {/* Footer */}
      <div
        className="mx-5 flex items-center justify-between border-t border-[hsl(var(--c-ink)/0.08)]
          py-3 text-sm"
      >
        <span className="inline-flex items-center gap-2 font-medium text-[hsl(var(--c-ink)/0.6)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--c-accent))]" />
          {event.mode}
        </span>
        <span
          className="grid h-8 w-8 place-items-center rounded-full border border-[hsl(var(--c-primary)/0.35)]
            text-[hsl(var(--c-primary))] transition-all duration-300
            group-hover:translate-x-0.5 group-hover:border-transparent
            group-hover:bg-[hsl(var(--c-primary))] group-hover:text-[hsl(var(--c-primary-fg))]"
        >
          <ArrowIcon />
          <span className="sr-only">View details</span>
        </span>
      </div>

      {/* Bottom accent bar that sweeps in on hover */}
      <span
        className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0
          bg-gradient-to-r from-[hsl(var(--c-primary))] to-[hsl(var(--c-accent))]
          transition-transform duration-500 group-hover:scale-x-100"
      />
    </Link>
  );
}