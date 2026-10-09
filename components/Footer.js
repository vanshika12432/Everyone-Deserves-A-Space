import NextLink from "next/link";
import Logo from "./Logo";
import { therapist as t } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-divider bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <div>
            <p className="font-display text-lg">{t.tagline}</p>
            <p className="text-sm text-foreground/60">© {new Date().getFullYear()} {t.name}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a href={`mailto:${t.email}`} className="hover:text-primary">{t.email}</a>
          <a href={t.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
          <a href={t.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <NextLink href="/contact" className="hover:text-primary">Contact</NextLink>
        </div>
      </div>
    </footer>
  );
}
