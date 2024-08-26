"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import React, { useState } from "react";
import Data from "../../data.json";

export default function Crew() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const crewData = Data.crew;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <main className="min-h-screen pt-[88px] md:pt-[104px] lg:pt-[144px] bg-[url('/assets/crew/background-crew-mobile.jpg')] sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-cover flex justify-center overflow-hidden">
      <div className="p-6 sm:p-10 lg:p-12 sm:w-full lg:w-auto">
        <h5 className="text-center mb-6 sm:text-xl sm:text-left">
          <span className="font-bold text-white/40">02</span>
          {<>&nbsp;&nbsp;&nbsp;&nbsp;</>}MEET YOUR CREW
        </h5>
        <Carousel
          plugins={[Fade()]}
          setApi={setApi}
          opts={{
            loop: true,
          }}
          className="max-w-sm w-screen sm:max-w-lg sm:mx-auto lg:max-w-6xl lg:w-full"
        >
          <CarouselContent>
            {crewData.map((crew) => (
              <CarouselItem key={crew.name}>
                <div className="flex flex-col gap-8 px-6 sm:px-0 lg:grid lg:grid-cols-2">
                  <div className="grid lg:flex lg:flex-col lg:gap-10 gap-6 pt-10 lg:pt-0 text-center lg:text-left">
                    <div className="grid gap-6 lg:flex-grow lg:flex lg:flex-col lg:justify-center">
                      <div className="grid gap-2 lg:gap-4">
                        <h4 className="text-white/40 uppercase">{crew.role}</h4>
                        <h3 className="uppercase">{crew.name}</h3>
                      </div>
                      <p className="min-h-[164px] sm:min-h-[120px] text-pretty">
                        {crew.bio}
                      </p>
                    </div>
                    <div className="flex justify-center lg:justify-start gap-2 lg:gap-10 lg:mb-12">
                      {crewData.map((_, index) => (
                        <Button
                          key={_.name}
                          variant="ghost"
                          size="sm"
                          className={`w-2 h-2 lg:w-4 lg:h-4 p-0 rounded-full mx-1 ${
                            index === current
                              ? "bg-white hover:bg-white"
                              : "bg-white/15 hover:bg-white/15"
                          }`}
                          onClick={() => api?.scrollTo(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="h-[350px] sm:h-[450px] lg:h-[550px] relative lg:my-12">
                    <Image
                      alt="moon"
                      src={crew.images.webp.replace("./", "/")}
                      fill
                      className="object-scale-down object-bottom px-8 sm:px-0"
                      style={{
                        maskImage:
                          "linear-gradient(to top, rgba(0, 0, 0, 0), 10%, rgba(0, 0, 0, 1))",
                      }}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  );
}
