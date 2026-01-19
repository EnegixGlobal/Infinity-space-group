import { Suspense } from "react";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <Contact />
    </Suspense>
  );
}
