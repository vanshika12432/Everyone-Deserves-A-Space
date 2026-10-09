"use client";
import { useState } from "react";
import { Avatar, Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { testimonials as seed } from "@/lib/data";

const STEP = 3;

export default function Testimonials({ limit }) {
  const [items, setItems] = useState(seed);
  const [shown, setShown] = useState(STEP);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const visible = items.slice(0, limit ?? shown);

  function submit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    // Demo only: stored in React state. Swap for an API/database call later.
    setItems([{ name: name.trim(), text: text.trim() }, ...items]);
    setName(""); setText("");
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-5 md:grid-cols-3">
        {visible.map((c, i) => (
          <Card key={i} shadow="sm" className="h-full">
            <CardBody className="gap-4 p-6">
              <p className="text-foreground/85">“{c.text}”</p>
              <div className="mt-auto flex items-center gap-3">
                <Avatar name={c.name[0]} color="primary" size="sm" />
                <span className="text-sm font-medium">{c.name}</span>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {!limit && shown < items.length && (
        <div className="text-center">
          <Button variant="flat" color="primary" radius="full" onPress={() => setShown(shown + STEP)}>
            Show 3 more
          </Button>
        </div>
      )}

      {!limit && (
        <Card shadow="sm" className="mx-auto max-w-2xl">
          <CardBody className="p-6">
            <h3 className="mb-4 text-2xl">Share your experience</h3>
            <form onSubmit={submit} className="space-y-4">
              <Input label="Your name" value={name} onValueChange={setName} isRequired />
              <Textarea label="Your comment" minRows={3} value={text} onValueChange={setText} isRequired />
              <Button type="submit" color="primary" radius="full">Post comment</Button>
            </form>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
