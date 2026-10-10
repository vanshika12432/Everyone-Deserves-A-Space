import NextLink from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { therapist as t, events } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="orb -left-20 top-10 h-80 w-80 bg-primary" />
      <div className="orb right-0 top-40 h-96 w-96 bg-secondary" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-5xl leading-[1.05] sm:text-6xl">{t.tagline}</h1>
          <p className="mt-6 max-w-md text-lg text-foreground/75">
            A calm, private place to be heard. Individual therapy and small reflective circles with{" "}
            {t.name}, online and in New Delhi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as={NextLink} href="/contact" className="font-semibold shadow-md shadow-primary/30 transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 active:scale-95" color="primary" size="lg" radius="full">Book a session</Button>
            <Button as={NextLink} href="/events" className="font-semibold shadow-md shadow-primary/30 transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 active:scale-95" color="primary" variant="ghost" size="lg" radius="full">See upcoming events</Button>
          </div>
        </div>

        {/* 3D collage */}
        <div className="stage relative mx-auto h-[420px] w-full max-w-md sm:h-[480px]">
          <div className="plane relative h-full w-full">
            <div className="card3d c1 left-0 top-4 h-[300px] w-[230px] rounded-t-[120px] rounded-b-3xl sm:h-[340px] sm:w-[260px]">
              <Image src={t.photo} alt={t.name} fill sizes="260px" className="object-cover" priority />
            </div>
            <div className="card3d c2 right-0 top-0 h-[150px] w-[150px] rounded-full border-4 border-background">
              <Image src={events[0].image} alt="" fill sizes="150px" className="object-cover" />
            </div>
            <div className="card3d c3 bottom-2 right-2 h-[170px] w-[210px] rounded-3xl border-4 border-background sm:w-[240px]">
              <Image src={events[1].image} alt="" fill sizes="240px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-3 gap-4 px-6 pb-4 text-center">
        {[
          [t.stats.rating, "client rating"],
          [t.stats.clients, "clients supported"],
          [t.stats.years, "years of practice"],
        ].map(([n, l]) => (
          <div key={l}>
            <p className="font-display text-3xl text-primary">{n}</p>
            <p className="text-sm text-foreground/60">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
