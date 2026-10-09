import Testimonials from "@/components/Testimonials";

export const metadata = { title: "Comments | Everyone Deserves A Space" };

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl sm:text-5xl">What people are saying</h1>
      <p className="mb-10 mt-3 text-foreground/70">Words from people who have found a space here. You are welcome to add yours.</p>
      <Testimonials />
    </div>
  );
}
