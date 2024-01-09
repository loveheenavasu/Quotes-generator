import Image from "next/image";
import QuoteCard from "@/components/QuoteCard";
import leftSideImg from "../../public/leftSide.png"

export default function Home() {

  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center justify-evenly p-4 md:p-24 text-white">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
          <Image
            src={leftSideImg}
            alt="Quote Generator"
            width={340}
            priority
            quality={100}
          />
      </div>
      <QuoteCard />
    </main>
  );
}
