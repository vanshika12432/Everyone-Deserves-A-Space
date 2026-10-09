import NextLink from "next/link";
import Image from "next/image";
import { Card, CardBody, CardFooter, Chip } from "@heroui/react";

export default function EventCard({ event }) {
  return (
    <Card as={NextLink} href={`/events/${event.slug}`} isPressable isHoverable shadow="sm" className="h-full text-left">
      <div className="relative aspect-[16/10] w-full">
        <Image src={event.image} alt={event.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
      </div>
      <CardBody className="gap-2 p-5">
        <Chip size="sm" color="secondary" variant="flat">{event.type}</Chip>
        <h3 className="text-2xl">{event.title}</h3>
        <p className="text-foreground/70">{event.summary}</p>
      </CardBody>
      <CardFooter className="px-5 pb-5 pt-0 text-sm text-primary">{event.mode}. View details</CardFooter>
    </Card>
  );
}
