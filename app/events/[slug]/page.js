import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@heroui/react";
import { events, circleExplainer } from "@/lib/data";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }) {
  const e = events.find((x) => x.slug === params.slug);
  return { title: e ? `${e.title} | Everyone Deserves A Space` : "Event" };
}

export default function EventPage({ params }) {
  const e = events.find((x) => x.slug === params.slug);
  if (!e) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lg">
        <Image src={e.image} alt={e.title} fill sizes="768px" className="object-cover" priority />
      </div>
      <p className="mt-8 text-sm text-primary">{e.type} · {e.mode}</p>
      <h1 className="mt-2 text-4xl sm:text-5xl">{e.title}</h1>
      <div className="mt-6 space-y-4 text-lg text-foreground/80">
        {e.body.map((p, i) => <p key={i}>{p}</p>)}
        <p>{circleExplainer}</p>
      </div>
      <Button as="a" href={e.bookingUrl} target="_blank" rel="noreferrer" color="primary" size="lg" radius="full" className="mt-10">
        Book your spot
      </Button>
    </article>
  );
}
