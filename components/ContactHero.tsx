import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[40vh]">
      <div className="w-full h-full relative">
        <Image
          src='/contactHero.jpg'
          alt="Beach resort with palm trees and lounge chairs"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white fadeInUp">
        <h1 className="text-5xl font-bold mb-4 mt-16">Contact Us</h1>
        <h2 className="text-sm mb-2">Home &rarr; Contact</h2>
      </div>
    </section>
  );
}
