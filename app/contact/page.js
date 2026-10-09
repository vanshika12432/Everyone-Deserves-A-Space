import ContactForm from "@/components/ContactForm";
import { therapist as t } from "@/lib/data";

export const metadata = { title: "Contact | Everyone Deserves A Space" };

export default function Contact() {
  return (
    <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2">
      <div>
        <h1 className="text-4xl sm:text-5xl">Let’s talk</h1>
        <p className="mt-4 text-foreground/75">
          Send a message and Vanshika will get back to you. You can also write directly to{" "}
          <a href={`mailto:${t.email}`} className="text-primary underline">{t.email}</a>.
        </p>
        <p className="mt-4 text-foreground/60">{t.location} · Sessions online and in person</p>
      </div>
      <ContactForm />
    </div>
  );
}
