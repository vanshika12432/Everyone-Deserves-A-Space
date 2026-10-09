"use client";
import { useState } from "react";
import { Button, Input, Textarea } from "@heroui/react";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus({ state: "sending", msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      e.currentTarget.reset();
      setStatus({ state: "ok", msg: "Thank you. Your message has been sent and Vanshika will reply soon." });
    } catch (err) {
      setStatus({ state: "error", msg: err.message });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input name="name" label="Your name" isRequired />
      <Input name="email" type="email" label="Your email" isRequired />
      <Input name="subject" label="Subject (optional)" />
      <Textarea name="message" label="How can I help?" minRows={5} isRequired />
      <Button type="submit" color="primary" radius="full" size="lg" isLoading={status.state === "sending"}>
        Send message
      </Button>
      {status.msg && (
        <p role="status" className={status.state === "ok" ? "text-success" : "text-danger"}>{status.msg}</p>
      )}
    </form>
  );
}
