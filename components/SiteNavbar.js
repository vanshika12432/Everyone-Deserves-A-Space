// "use client";
// import { useState, useEffect } from "react";
// import NextLink from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Navbar, NavbarBrand, NavbarContent, NavbarItem,
//   NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Button,
// } from "@heroui/react";
// import Logo from "./Logo";
// import ThemeToggle from "./ThemeToggle";

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/events", label: "Events" },
//   { href: "/testimonials", label: "Comments" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function SiteNavbar() {
//   const path = usePathname() ?? "/";
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const isActive = (h) => (h === "/" ? path === "/" : path.startsWith(h));

//   // Close the mobile menu whenever the route changes (fixes menu staying open)
//   useEffect(() => {
//     setOpen(false);
//   }, [path]);

//   // Add shadow / stronger blur once the page is scrolled
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <Navbar
//       maxWidth="full"
//       height="4.25rem"
//       classNames={{ wrapper: "w-full px-4 sm:px-6 lg:px-10" }}
//       isBlurred
//       isMenuOpen={open}
//       onMenuOpenChange={setOpen}
//       className={`pt-[5px] transition-all duration-300 border-b ${
//         scrolled
//           ? "bg-background/80 border-divider shadow-md shadow-black/5"
//           : "bg-background/40 border-transparent"
//       }`}
//     >
//       {/* Left: toggle + brand */}
//       <NavbarContent justify="start" className="flex-1 basis-0 justify-start gap-2">
//         <NavbarMenuToggle
//           aria-label={open ? "Close menu" : "Open menu"}
//           className="md:hidden"
//         />
//         <NavbarBrand
//           as={NextLink}
//           href="/"
//           className="group gap-2 max-w-fit shrink-0 grow-0 whitespace-nowrap"
//           aria-label="Everyone Deserves A Space - Home"
//         >
//           <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
//             <Logo />
//           </span>
//           <span className="whitespace-nowrap font-display text-base sm:text-lg leading-tight transition-colors group-hover:text-primary">
//             Everyone Deserves A Space
//           </span>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Center: desktop links */}
//       <NavbarContent className="hidden md:flex flex-none grow-0 justify-center gap-1" justify="center">
//         {links.map((l) => {
//           const active = isActive(l.href);
//           return (
//             <NavbarItem key={l.href} isActive={active}>
//               <NextLink
//                 href={l.href}
//                 aria-current={active ? "page" : undefined}
//                 className={`group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium
//                   transition-all duration-200 hover:bg-primary/10 hover:-translate-y-0.5
//                   ${active ? "text-primary bg-primary/10" : "text-foreground/70 hover:text-primary"}`}
//               >
//                 {l.label}
//                 {/* Animated underline: grows from center on hover, stays on active */}
//                 <span
//                   className={`pointer-events-none absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary
//                     transition-all duration-300 ease-out
//                     ${active ? "w-5" : "w-0 group-hover:w-5"}`}
//                 />
//               </NextLink>
//             </NavbarItem>
//           );
//         })}
//       </NavbarContent>

//       {/* Right: theme + CTA */}
//       <NavbarContent justify="end" className="ml-auto flex-1 basis-0 justify-end gap-2 sm:gap-3">
//         <NavbarItem>
//           <ThemeToggle />
//         </NavbarItem>
//         <NavbarItem className="hidden sm:flex">
//           <Button
//             as={NextLink}
//             href="/contact"
//             color="primary"
//             radius="full"
//             className="font-semibold shadow-md shadow-primary/30 transition-all duration-200
//               hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
//           >
//             Book a session
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Mobile menu */}
//       <NavbarMenu className="gap-1 pt-6 bg-background/90 backdrop-blur-xl">
//         {links.map((l) => {
//           const active = isActive(l.href);
//           return (
//             <NavbarMenuItem key={l.href} isActive={active}>
//               <NextLink
//                 href={l.href}
//                 onClick={() => setOpen(false)}
//                 aria-current={active ? "page" : undefined}
//                 className={`flex w-full items-center rounded-xl px-4 py-3 text-lg transition-all duration-200
//                   ${
//                     active
//                       ? "bg-primary/10 font-semibold text-primary border-l-4 border-primary"
//                       : "text-foreground/80 hover:bg-default-100 hover:pl-6 hover:text-primary"
//                   }`}
//               >
//                 {l.label}
//               </NextLink>
//             </NavbarMenuItem>
//           );
//         })}
//         {/* CTA was hidden on mobile before; now it lives in the menu */}
//         <NavbarMenuItem className="mt-4">
//           <Button
//             as={NextLink}
//             href="/contact"
//             color="primary"
//             radius="full"
//             fullWidth
//             size="lg"
//             onPress={() => setOpen(false)}
//             className="font-semibold"
//           >
//             Book a session
//           </Button>
//         </NavbarMenuItem>
//       </NavbarMenu>
//     </Navbar>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Button,
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

  // Close the mobile drawer whenever the route changes
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

  // Lock page scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <Navbar
        maxWidth="full"
        height="4.25rem"
        classNames={{ wrapper: "w-full px-4 sm:px-6 lg:px-10" }}
        isBlurred
        className={`pt-[5px] transition-all duration-300 border-b ${
          scrolled
            ? "bg-background/80 border-divider shadow-md shadow-black/5"
            : "bg-background/40 border-transparent"
        }`}
      >
        {/* Left: hamburger (mobile) + brand */}
        <NavbarContent justify="start" className="flex-1 basis-0 justify-start gap-2">
          <Button
            isIconOnly
            variant="light"
            radius="full"
            className="md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onPress={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </Button>

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
      </Navbar>

      {/* Mobile side drawer: sits OUTSIDE <Navbar> so the navbar's blur can't clip it */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* panel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-background p-5 shadow-2xl
            transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="flex items-center gap-2 font-display text-lg">
              <Logo className="h-8 w-8" /> Menu
            </span>
            <Button
              isIconOnly
              variant="light"
              radius="full"
              aria-label="Close menu"
              onPress={() => setOpen(false)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </Button>
          </div>

          <nav className="flex flex-col gap-1">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <NextLink
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-lg transition-colors ${
                    active
                      ? "border-l-4 border-primary bg-primary/10 font-semibold text-primary"
                      : "text-foreground/80 hover:bg-default-100 hover:text-primary"
                  }`}
                >
                  {l.label}
                </NextLink>
              );
            })}
          </nav>

          <Button
            as={NextLink}
            href="/contact"
            color="primary"
            radius="full"
            size="lg"
            fullWidth
            className="mt-auto font-semibold"
            onPress={() => setOpen(false)}
          >
            Book a session
          </Button>
        </aside>
      </div>
    </>
  );
}