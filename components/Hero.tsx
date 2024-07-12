import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100vh]">
      <div className="w-full h-full relative">
        <Image
          src='/hero.png'
          alt="Beach resort with palm trees and lounge chairs"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4 fadeInUp">
        <h2 className="text-sm mb-2">AWAY FROM MONOTONOUS CITY LIFE</h2>
        <h1 className="text-6xl font-bold mb-4">Relax Your Mind</h1>
        <p className="mb-6 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi ut neque! Velit animi atque eligendi asperiores. Quam, corrupti necessitatibus aliquam et magnam enim ex, mollitia suscipit nostrum, delectus dicta?
        </p>
        <button className="bg-nav-100 text-white px-6 py-2 rounded-lg hover:bg-nav-200">BOOK NOW</button>
      </div>
    </section>
  );
}