'use client'
import { useState, useEffect } from 'react';
import { UserTestimony } from "@/constants";
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % UserTestimony.length);
    }, 10000); // Auto scroll every 10 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground">Testimonials from our Clients</h2>
        <p className="mt-2 text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. eveniet ab quo. Consequatur, nisi?
        </p>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-7xl mx-auto relative px-8">
        {/* Display two testimonials */}
        {[currentIndex, (currentIndex + 1) % UserTestimony.length].map((index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-lg h-60">
            <div className="flex items-center">
              <Image className="w-16 h-16 rounded-full" src={UserTestimony[index].profilePic} width={20} height={30} alt="User" />
              <div className="ml-4 px-2">
                <p className="mt-2 font-bold text-foreground mb-3">{UserTestimony[index].name}</p>
                <p className="text-card-foreground mb-5">{UserTestimony[index].testimony}</p>
                <div className="flex mt-2">
                  {Array.from({ length: UserTestimony[index].stars }).map((_, starIndex) => (
                    <Image key={starIndex} src='/rating.svg' width={20} height={20} alt="star" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
