import { Section } from "@/components/section";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center container">
        <h2 className="text-2xl font-bold">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </Section>
  );
}
