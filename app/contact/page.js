// import ContactForm from "@/components/ContactForm";
// import { therapist as t } from "@/lib/data";

// export const metadata = { title: "Contact | Everyone Deserves A Space" };

// export default function Contact() {
//   return (
//     <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2">
//       <div>
//         <h1 className="text-4xl sm:text-5xl">Let’s talk</h1>
//         <p className="mt-4 text-foreground/75">
//           Send a message and Vanshika will get back to you. You can also write directly to{" "}
//           <a href={`mailto:${t.email}`} className="text-primary underline">{t.email}</a>.
//         </p>
//         <p className="mt-4 text-foreground/60">{t.location} · Sessions online and in person</p>
//       </div>
//       <ContactForm />
//     </div>
//   );
// }



import NextLink from "next/link";
import ContactForm from "@/components/ContactForm";
import { therapist as t } from "@/lib/data";

export const metadata = { title: "Contact | Everyone Deserves A Space" };

const info = [
  {
    title: "Individual Therapy",
    text: "Sessions are available online and in person in New Delhi, in Hindi and English.",
  },
  {
    title: "Reflective Circles",
    text: "Small, supportive group spaces. Browse upcoming circles and workshops on the events page.",
  },
  {
    title: "Collaborations",
    text: "Interested in a workshop or a collaboration? Write to us by email and we will get back to you.",
  },
];

export default function Contact() {
  return (
    <div className="bg-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_480px]">
        {/* Left: details */}
        <div>
          <h1 className="text-5xl sm:text-6xl">Contact Us</h1>
          <p className="mt-6 max-w-md text-foreground/75">
            Email us or fill in the form to find out how therapy with {t.name} could help you.
          </p>

          <div className="mt-6 space-y-3 text-foreground/80">
            <p>
              <a href={`mailto:${t.email}`} className="hover:text-primary">{t.email}</a>
            </p>
            <p>{t.location}</p>
            <NextLink href="/events" className="inline-block text-sm font-medium underline underline-offset-4 hover:text-primary">
              See upcoming events
            </NextLink>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {info.map((i) => (
              <div key={i.title}>
                <h3 className="font-sans text-sm font-semibold">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{i.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form card */}
        <ContactForm />
      </div>
    </div>
  );
}