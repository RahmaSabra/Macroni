import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "../components/Header";
import heroImage from "../assets/Hero-image.jpg";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#train", {
      clipPath: "inset(0 100% 0 0)",
      duration: 1,
      ease: "none",
    })
      .from(
        "#track",
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 1,
          ease: "none",
        },
        "-=0.5",
      )
      .from(
        "#transform",
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 1,
          ease: "none",
        },
        "-=0.5",
      );
  });
  return (
    <>
      <Header />
      <main>
        <section
          className="h-120 bg-cover bg-center  text-white"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <h1
            id="train"
            className="font-[Inter] font-bold uppercase ml-8 text-4xl md:text-5xl pt-36 md:ml-24"
          >
            train,
          </h1>

          <h1
            id="track"
            className="font-[Inter] font-bold uppercase ml-8 text-4xl md:text-5xl md:ml-24"
          >
            track,
          </h1>

          <h1
            id="transform"
            className="font-[Inter] font-bold text-[#ffe900] uppercase ml-8 text-4xl md:text-5xl md:ml-24"
          >
            transform.
          </h1>

          <p className="ml-8 pr-8 text-[8px] font-[Inter] font-extralight max-w-xs mt-2.5 md:ml-24 md:pr-0 ">
            Take control of your nutrition with Macroni. Easily log your meals,
            track calories and macros, monitor your progress, and stay on top of
            your goals without letting numbers get in the way.
          </p>

          <button className="cursor-pointer mt-4 ml-8 px-6 py-3 bg-transparent border-2 border-[#ffe900] text-[#ffe900] text-xs font-[Inter] uppercase rounded-full  shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-200 hover:bg-[#ffe900] hover:text-black md:ml-24">
            Start Your Journey
          </button>
        </section>
        <section className="bg-[#d3d3d3] h-80"></section>
        <section className="bg-black h-800"></section>
      </main>
    </>
  );
}
