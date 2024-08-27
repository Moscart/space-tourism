import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs2";
import React from "react";
import Data from "../../data.json";
import Image from "next/image";

export default function Technology() {
  const technologyData = Data.technology;
  return (
    <main className="min-h-screen pt-[88px] md:pt-[104px] lg:pt-[144px] bg-[url('/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-cover flex justify-center overflow-hidden">
      <div className="p-6 sm:p-10 lg:p-12 sm:w-full lg:w-auto lg:pe-0">
        <h5 className="text-center mb-6 sm:text-xl sm:text-left">
          <span className="font-bold text-white/40">03</span>
          {<>&nbsp;&nbsp;&nbsp;&nbsp;</>}SPACE LAUNCH 101
        </h5>
        <Tabs
          defaultValue={technologyData[0].name}
          className="max-w-sm sm:max-w-lg mx-auto lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-[1200px]"
        >
          <div className="h-[258px] sm:h-[357px] mt-12 mb-8 lg:m-0 lg:relative lg:aspect-square lg:w-full lg:h-auto lg:my-16">
            {technologyData.map((technology) => (
              <TabsContent
                value={technology.name}
                key={technology.name}
                className="absolute w-screen left-0 h-[258px] sm:h-[357px] lg:w-full lg:h-full"
              >
                <div className="absolute h-full w-full lg:relative">
                  <Image
                    alt="moon"
                    src={technology.images.portrait.replace("./", "/")}
                    fill
                    className="object-cover object-bottom sm:object-center"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
          <div className="lg:col-start-1 lg:row-start-1 lg:flex lg:items-center">
            <div className="lg:flex lg:gap-16">
              <TabsList className="mb-10 lg:flex lg:flex-col lg:justify-start lg:mb-0">
                {technologyData.map((technology, index) => (
                  <TabsTrigger value={technology.name} key={technology.name}>
                    <h4>{index + 1}</h4>
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="text-center lg:text-left">
                <h4 className="text-white/40 mb-4">THE TERMINOLOGY...</h4>
                {technologyData.map((technology) => (
                  <TabsContent value={technology.name} key={technology.name}>
                    <h3 className="uppercase mb-4">{technology.name}</h3>
                    <p className="text-pretty">{technology.description}</p>
                  </TabsContent>
                ))}
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
