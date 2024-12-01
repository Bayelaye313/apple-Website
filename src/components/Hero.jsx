import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", { delay: 1.5, opacity: 1 });
    gsap.to("#cta", { delay: 1.5, opacity: 1, translateY: -50 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="w-full flex-center flex-col h-5/6 ">
        <p id="hero" className="hero-title">
          Iphone Ex
        </p>
        <div className="md:w-10/12 w-9/12 ">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/Month or $199</p>
      </div>
    </section>
  );
};

export default Hero;
