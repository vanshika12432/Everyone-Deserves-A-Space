"use client";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Button,
} from "@heroui/react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/testimonials", label: "Comments" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNavbar() {
  const path = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (h) => (h === "/" ? path === "/" : path.startsWith(h));

  // Close the mobile menu whenever the route changes (fixes menu staying open)
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Add shadow / stronger blur once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      maxWidth="full"
      height="4.25rem"
      classNames={{ wrapper: "w-full px-4 sm:px-6 lg:px-10" }}
      isBlurred
      isMenuOpen={open}
      onMenuOpenChange={setOpen}
      className={`pt-[5px] transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 border-divider shadow-md shadow-black/5"
          : "bg-background/40 border-transparent"
      }`}
    >
      {/* Left: toggle + brand */}
      <NavbarContent justify="start" className="flex-1 basis-0 justify-start gap-2">
        <NavbarMenuToggle
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand
          as={NextLink}
          href="/"
          className="group gap-2 max-w-fit shrink-0 grow-0 whitespace-nowrap"
          aria-label="Everyone Deserves A Space - Home"
        >
          <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            <Logo />
          </span>
          <span className="whitespace-nowrap font-display text-base sm:text-lg leading-tight transition-colors group-hover:text-primary">
            Everyone Deserves A Space
          </span>
        </NavbarBrand>
      </NavbarContent>

      {/* Center: desktop links */}
      <NavbarContent className="hidden md:flex flex-none grow-0 justify-center gap-1" justify="center">
        {links.map((l) => {
          const active = isActive(l.href);
          return (
            <NavbarItem key={l.href} isActive={active}>
              <NextLink
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium
                  transition-all duration-200 hover:bg-primary/10 hover:-translate-y-0.5
                  ${active ? "text-primary bg-primary/10" : "text-foreground/70 hover:text-primary"}`}
              >
                {l.label}
                {/* Animated underline: grows from center on hover, stays on active */}
                <span
                  className={`pointer-events-none absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary
                    transition-all duration-300 ease-out
                    ${active ? "w-5" : "w-0 group-hover:w-5"}`}
                />
              </NextLink>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* Right: theme + CTA */}
      <NavbarContent justify="end" className="ml-auto flex-1 basis-0 justify-end gap-2 sm:gap-3">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={NextLink}
            href="/contact"
            color="primary"
            radius="full"
            className="font-semibold shadow-md shadow-primary/30 transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
          >
            Book a session
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="gap-1 pt-6 bg-background/90 backdrop-blur-xl">
        {links.map((l) => {
          const active = isActive(l.href);
          return (
            <NavbarMenuItem key={l.href} isActive={active}>
              <NextLink
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex w-full items-center rounded-xl px-4 py-3 text-lg transition-all duration-200
                  ${
                    active
                      ? "bg-primary/10 font-semibold text-primary border-l-4 border-primary"
                      : "text-foreground/80 hover:bg-default-100 hover:pl-6 hover:text-primary"
                  }`}
              >
                {l.label}
              </NextLink>
            </NavbarMenuItem>
          );
        })}
        {/* CTA was hidden on mobile before; now it lives in the menu */}
        <NavbarMenuItem className="mt-4">
          <Button
            as={NextLink}
            href="/contact"
            color="primary"
            radius="full"
            fullWidth
            size="lg"
            onPress={() => setOpen(false)}
            className="font-semibold"
          >
            Book a session
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}