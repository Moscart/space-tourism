import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-[88px] md:pt-[104px] lg:pt-[144px] bg-[url('/assets/home/background-home-mobile.jpg')] sm:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] bg-cover flex justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-grow lg:justify-end p-6 sm:px-32 sm:py-32">
        <div className="flex flex-col flex-grow lg:max-w-7xl lg:mx-auto lg:flex-grow-0 lg:flex-row lg:justify-between w-full sm:gap-16">
          <div className="grid gap-6 lg:flex lg:flex-col lg:text-left text-center sm:max-w-xl mx-auto lg:mx-0">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className="">SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="relative z-10 group flex-grow lg:flex-grow-0 flex lg:justify-end">
            <div className="lg:flex lg:flex-col lg:justify-center relative flex-grow lg:flex-grow-0">
              <Link
                href={"/destination"}
                className="h-36 w-36 sm:h-64 sm:w-64 bg-white rounded-full text-primary relative flex justify-center items-center peer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0"
              >
                <h4>EXPLORE</h4>
              </Link>
              <div className="absolute h-72 w-72 sm:h-[450px] sm:w-[450px] bg-white/10 rounded-full -z-10 opacity-0 peer-hover:opacity-100 transition-opacity duration-1000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
