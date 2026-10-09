import Image from "next/image";
import { Chip, Card, CardBody } from "@heroui/react";
import { therapist as t } from "@/lib/data";

export const metadata = { title: "About | Vanshika Aggarwal" };

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-12 md:grid-cols-[320px_1fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-t-[160px] rounded-b-3xl shadow-xl">
          <Image src={t.photo} alt={t.name} fill sizes="320px" className="object-cover" priority />
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl">{t.name}</h1>
          <p className="mt-2 text-foreground/60">Therapist · {t.location}</p>
          <p className="mt-6 text-lg text-foreground/80">{t.intro}</p>
          <p className="mt-4 text-foreground/75">{t.philosophy}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.expertise.map((x) => <Chip key={x} color="primary" variant="flat">{x}</Chip>)}
            {t.languages.map((x) => <Chip key={x} color="secondary" variant="flat">{x}</Chip>)}
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl">Education</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {t.education.map((e) => (
            <Card key={e.degree} shadow="sm">
              <CardBody className="p-6">
                <h3 className="text-xl">{e.degree}</h3>
                <p className="mt-1 text-foreground/70">{e.school}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
