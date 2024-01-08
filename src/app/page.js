import Image from "next/image";
import QuoteCard from "@/components/QuoteCard";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center justify-evenly p-4 md:p-24 text-white">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        <Image
          src="/leftSide.png"
          alt="Quote Generator"
          className="transparent"
          width={400}
          height={200}
          loading="lazy"
        />
      </div>
      <QuoteCard />
    </main>
  );
}
