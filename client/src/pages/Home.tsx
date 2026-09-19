import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "../components/Header";
import heroImage from "../assets/Hero-image.jpg";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#train", {
      clipPath: "inset(0 100% 0 0)",
      duration: 1.2,
      ease: "none",
    })
      .from(
        "#track",
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.2,
          ease: "none",
        },
        "-=0.8",
      )
      .from(
        "#transform",
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.2,
          ease: "none",
        },
        "-=0.8",
      )
      .fromTo(
        "#p",
        {
          opacity: 0,
        },
        {
          delay: 0.2,
          opacity: 1,
          duration: 0.4,
        },
      );
    tl.fromTo(
      "#cta-btn",
      {
        opacity: 0,
      },
      {
        delay: 0.2,
        opacity: 1,
        duration: 0.4,
      },
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

          <p
            id="p"
            className="ml-8 pr-8 text-[8px] font-[Inter] font-extralight max-w-xs mt-2.5 md:ml-24 md:pr-0 "
          >
            Take control of your nutrition with Macroni. Easily log your meals,
            track calories and macros, monitor your progress, and stay on top of
            your goals without letting numbers get in the way.
          </p>

          <button
            id="cta-btn"
            className="cursor-pointer mt-4 ml-8 px-6 py-3 bg-transparent border-2 border-[#ffe900] text-[#ffe900] text-xs font-[Inter] uppercase rounded-full  shadow-[0_0_15px_rgba(34,211,238,0.5)] duration-200 hover:bg-[#ffe900] hover:text-black md:ml-24"
          >
            Start Your Journey
          </button>
        </section>
        <section className="bg-[#d3d3d3] h-80 flex flex-col items-center justify-center">
          <h1 className="font-[Inter] font-bold text-[black] uppercase">
            The body achieves what the mind believes.
            <div className="flex flex-row items-center justify-center"></div>
          </h1>
        </section>
        <section className="bg-black h-800"></section>
      </main>
    </>
  );
}
