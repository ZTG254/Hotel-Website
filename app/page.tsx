import HomeAccommodation from "@/components/HomeAccomodation";
import Facilities from "@/components/Facilities";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero/>
      <HomeAccommodation/>
      <Facilities/>
      <Testimonials/>
    </div>
  )
}