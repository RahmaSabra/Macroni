import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "../components/Header";
import heroImage from "../assets/Hero-image.jpg";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#train",
      {
        duration: 0.6,
        x: -300,
        ease: "power2.inOut",
      },
      {
        duration: 0.6,
        x: 20,
        ease: "power2.inOut",
      },
    )
      .fromTo(
        "#track",
        {
          duration: 0.6,
          x: -300,
          ease: "power2.inOut",
        },
        {
          duration: 0.6,
          x: 20,
          ease: "power2.inOut",
        },
      )
      .fromTo(
        "#transform",
        {
          duration: 0.8,
          x: -420,
          ease: "power2.inOut",
        },
        {
          duration: 0.8,
          x: 20,
          ease: "power2.inOut",
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
            className="font-[Inter] font-bold uppercase pl-8 text-3xl md:text-5xl pt-36 md:pl-24"
          >
            train,
          </h1>

          <h1
            id="track"
            className="font-[Inter] font-bold uppercase pl-8 text-3xl md:text-5xl md:pl-24"
          >
            track,
          </h1>

          <h1
            id="transform"
            className="font-[Inter] font-bold text-[#ffe900] uppercase pl-8 text-3xl md:text-5xl md:pl-24"
          >
            transform.
          </h1>
        </section>
        <section className="bg-[#d3d3d3] h-80"></section>
        <section className="bg-black h-800"></section>
      </main>
    </>
  );
}
