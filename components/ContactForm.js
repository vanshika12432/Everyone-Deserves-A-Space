// "use client";
// import { useState } from "react";
// import { Button, Input, Textarea } from "@heroui/react";

// export default function ContactForm() {
//   const [status, setStatus] = useState({ state: "idle", msg: "" });

//   async function onSubmit(e) {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.currentTarget));
//     setStatus({ state: "sending", msg: "" });
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       const json = await res.json();
//       if (!res.ok) throw new Error(json.error || "Something went wrong.");
//       e.currentTarget.reset();
//       setStatus({ state: "ok", msg: "Thank you. Your message has been sent and Vanshika will reply soon." });
//     } catch (err) {
//       setStatus({ state: "error", msg: err.message });
//     }
//   }

//   return (
//     <form onSubmit={onSubmit} className="space-y-4">
//       <Input name="name" label="Your name" isRequired />
//       <Input name="email" type="email" label="Your email" isRequired />
//       <Input name="subject" label="Subject (optional)" />
//       <Textarea name="message" label="How can I help?" minRows={5} isRequired />
//       <Button type="submit" color="primary" radius="full" size="lg" isLoading={status.state === "sending"}>
//         Send message
//       </Button>
//       {status.msg && (
//         <p role="status" className={status.state === "ok" ? "text-success" : "text-danger"}>{status.msg}</p>
//       )}
//     </form>
//   );
// }


"use client";
import { useState } from "react";
import { Button, Input, Textarea } from "@heroui/react";

const MAX = 500;

// Shared look: pill inputs with a soft border that picks up the theme colours
const inputClasses = {
  inputWrapper:
    "h-12 border-divider bg-transparent shadow-none data-[hover=true]:border-primary/50 group-data-[focus=true]:border-primary",
  input: "text-base",
};

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget; // keep a reference: currentTarget is null after an await
    const d = Object.fromEntries(new FormData(form));

    const payload = {
      name: `${d.firstName} ${d.lastName || ""}`.trim(),
      email: d.email,
      subject: `New message from ${d.firstName}`,
      message: d.phone ? `${d.message}\n\nPhone: +91 ${d.phone}` : d.message,
    };

    setStatus({ state: "sending", msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setMessage("");
      setStatus({ state: "ok", msg: "Thank you. Your message has been sent and Vanshika will reply soon." });
    } catch (err) {
      setStatus({ state: "error", msg: err.message });
    }
  }

  return (
    <div className="rounded-3xl border border-divider bg-content1 p-6 shadow-xl sm:p-8">
      <h2 className="text-3xl sm:text-4xl">Get in Touch</h2>
      <p className="mt-1 text-foreground/60">You can reach us anytime</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input name="firstName" placeholder="First name" aria-label="First name" variant="bordered" radius="full" isRequired classNames={inputClasses} />
          <Input name="lastName" placeholder="Last name" aria-label="Last name" variant="bordered" radius="full" classNames={inputClasses} />
        </div>

        <Input
          name="email"
          type="email"
          placeholder="Your email"
          aria-label="Your email"
          variant="bordered"
          radius="full"
          isRequired
          startContent={<MailIcon />}
          classNames={inputClasses}
        />

        <Input
          name="phone"
          type="tel"
          placeholder="Phone number (optional)"
          aria-label="Phone number"
          variant="bordered"
          radius="full"
          startContent={
            <span className="flex items-center gap-3 text-sm text-foreground/70">
              +91
              <span className="h-5 w-px bg-divider" />
            </span>
          }
          classNames={inputClasses}
        />

        <div className="relative">
          <Textarea
            name="message"
            placeholder="How can we help?"
            aria-label="How can we help?"
            variant="bordered"
            radius="lg"
            minRows={5}
            maxLength={MAX}
            isRequired
            value={message}
            onValueChange={setMessage}
            classNames={{
              inputWrapper: "border-divider bg-transparent pb-7 shadow-none data-[hover=true]:border-primary/50 group-data-[focus=true]:border-primary",
              input: "text-base",
            }}
          />
          <span className="pointer-events-none absolute bottom-3 right-4 text-xs text-foreground/50">
            {message.length}/{MAX}
          </span>
        </div>

        <Button type="submit" color="primary" radius="full" size="lg" fullWidth isLoading={status.state === "sending"}>
          Submit
        </Button>

        {status.msg && (
          <p role="status" className={`text-center text-sm ${status.state === "ok" ? "text-success" : "text-danger"}`}>
            {status.msg}
          </p>
        )}

        <p className="px-4 text-center text-xs text-foreground/60">
          By contacting us, you agree to be contacted back about your enquiry. Your details stay private.
        </p>
      </form>
    </div>
  );
}