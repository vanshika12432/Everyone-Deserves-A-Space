// import EventCard from "@/components/EventCard";
// import { events, circleExplainer } from "@/lib/data";

// export const metadata = { title: "Events | Everyone Deserves A Space" };

// export default function Events() {
//   return (
//     <div className="mx-auto max-w-6xl px-6 py-16">
//       <h1 className="text-4xl sm:text-5xl">Events and workshops</h1>
//       <p className="mt-4 max-w-2xl text-foreground/75">{circleExplainer}</p>
//       <div className="mt-10 grid gap-6 md:grid-cols-2">
//         {events.map((e) => <EventCard key={e.slug} event={e} />)}
//       </div>
//     </div>
//   );
// }

import EventCard from "@/components/EventCard";
import { events, circleExplainer } from "@/lib/data";

export const metadata = { title: "Events | Everyone Deserves A Space" };

export default function Events() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl sm:text-5xl">Events and workshops</h1>
      <span className="mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-primary to-secondary" />
      <p className="mt-5 max-w-2xl leading-relaxed text-foreground/75">{circleExplainer}</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {events.map((e) => (
          <EventCard key={e.slug} event={e} />
        ))}
      </div>
    </div>
  );
}
