import NextLink from "next/link";
import { Button } from "@heroui/react";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Testimonials from "@/components/Testimonials";
import { events, therapist as t } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl">Therapy is not about fixing what feels broken</h2>
        <p className="mt-5 text-lg text-foreground/75">{t.philosophy}</p>
        <Button as={NextLink} href="/about" variant="flat" color="primary" radius="full" className="mt-8">
          Meet Vanshika
        </Button>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl sm:text-4xl">Events and workshops</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((e) => <EventCard key={e.slug} event={e} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl sm:text-4xl">Kind words</h2>
        <Testimonials limit={3} />
        <div className="mt-8 text-center">
          <Button as={NextLink} href="/testimonials" variant="bordered" color="primary" radius="full">Read more and leave a comment</Button>
        </div>
      </section>
    </>
  );
}
