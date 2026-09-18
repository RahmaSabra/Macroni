import { useState } from "react";
import { useEffect } from "react";
import whiteLogo from "../assets/Logo-white.svg";
import blackLogo from "../assets/Logo-black.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(0);
  useEffect(() => {
    const handleIsScrolled = () => {
      setIsScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleIsScrolled);

    return () => window.removeEventListener("scroll", handleIsScrolled);
  }, []);

  let logo;
  if (isScrolled >= 470 && isScrolled <= 790) {
    logo = blackLogo;
  } else {
    logo = whiteLogo;
  }

  return (
    <header className="px-4 py-3 fixed top-0 z-10 md:px-52 w-full">
      <img src={logo} alt="Macroni logo" width={80} />
    </header>
  );
}
