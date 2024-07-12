import Image from "next/image";
import { FacilitiyPics } from "@/constants";

export default function Facilities(){
  return(
    <section className="bg-background text-foreground py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-5">Our Facilities</h2>
        <p className="text-gray-500 mb-8">Who are in extremely love with eco friendly system.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-14">
          {FacilitiyPics.map((facility, index) => (
            <div key={index} className="relative bg-card rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={facility.src}
                alt={facility.alt}
                width={500}
                height={200}
                className="w-full h-[17rem] object-cover rounded-b-md transform transition-transform duration-300 group-hover:scale-105"
              />
              <h2 className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-75 text-primary-foreground py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold text-2xl">
              {facility.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}