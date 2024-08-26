import React from "react";
import Data from "../../data.json";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function Destination() {
  const destinationData = Data.destinations;

  return (
    <main className="min-h-screen pt-[88px] md:pt-[104px] lg:pt-[144px] bg-[url('/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-cover flex justify-center overflow-hidden">
      <div className="p-6 sm:p-10 lg:p-12 sm:w-full lg:w-auto">
        <h5 className="text-center mb-6 sm:text-xl sm:text-left">
          <span className="font-bold text-white/40">01</span>
          {<>&nbsp;&nbsp;&nbsp;&nbsp;</>}PICK YOUR DESTINATION
        </h5>
        <Tabs
          defaultValue="Moon"
          className="lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-6xl"
        >
          {destinationData.map((destination) => (
            <TabsContent
              key={destination.name}
              value={destination.name}
              className="hidden justify-center py-12 lg:items-center lg:py-[124px] lg:px-8 data-[state=active]:flex"
            >
              <Image
                alt="moon"
                src={destination.images.webp.replace("./", "/")}
                width={150}
                height={150}
                className="sm:w-[300px] sm:h-[300px] xl:w-[480px] xl:h-[480px]"
              />
            </TabsContent>
          ))}
          <div className="lg:px-10 lg:flex lg:flex-col lg:justify-center lg:py-[124px] sm:max-w-lg lg:max-w-none mx-auto">
            <TabsList className="pt-8 pb-6 lg:justify-start lg:pb-10 lg:pt-0">
              {destinationData.map((destination) => (
                <TabsTrigger value={destination.name} key={destination.name}>
                  {destination.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {destinationData.map((destination) => (
              <TabsContent
                key={destination.name}
                value={destination.name}
                className="text-center grid gap-6 lg:text-left lg:gap-10"
              >
                <div className="grid gap-4">
                  <h2 className="uppercase">{destination.name}</h2>
                  <p className="text-pretty">{destination.description}</p>
                </div>
                <Separator className="bg-white/15 h-[2px]" />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <div className="preset-7 text-secondary">AVG. DISTANCE</div>
                    <h6 className="text-white uppercase">
                      {destination.distance}
                    </h6>
                  </div>
                  <div className="grid gap-3">
                    <div className="preset-7 text-secondary">
                      EST. TRAVEL TIME
                    </div>
                    <h6 className="text-white uppercase">
                      {destination.travel}
                    </h6>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </main>
  );
}
