import { AccomodationLinks } from "@/constants";
import Image from "next/image";

export default function HomeAccommodation() {
  return (
    <section className="bg-background text-foreground py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-5">Hotel Accommodation</h2>
        <p className="text-gray-500 mb-8">
          We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-14">
          {AccomodationLinks.map((room, index) => (
            <div key={index} className="relative bg-card rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={room.src}
                alt={room.alt}
                width={500}
                height={200}
                className="w-full h-[17rem] object-cover rounded-b-md transform transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-75 text-primary-foreground py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white underline">
                BOOK NOW
              </button>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{room.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
