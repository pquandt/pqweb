import React, { useRef, useEffect } from "react";
import Skills from "./Skills";
import avatar from "../img/patrick_business_1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".about"),

      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,

        scrollTrigger: {
          trigger: element.querySelector(".about"),
          start: "top top",
          end: "+=60%",
          markers: false,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
  }, []);
  return (
    <div>
      <div ref={ref}>
        <section className="about">
          <div className="about-headline">
            <h1>Hello, I am Patrick Quandt and</h1>
            <span className="about-span">
              I am a <span className="about-blue-span">frontend developer</span>
            </span>
          </div>

          <div className="about-text-wrapper">
            <div className="vLine">1</div>
            <div className="about-text">
              <h2>Overall experience</h2>

              <p className="linebreakSpan">
                <span className="linebreakSpan">
                  Through my experience in the areas of video, audio and
                </span>
                corporate identity, I have a broad understanding of media
                <span className="linebreakSpan">
                  projects from which my customers benefit.
                </span>
              </p>
            </div>
            <div className="about-img">
              <div className="about-img--side about-img--front">
                <img src={avatar} alt="Patrick Quandt" />
              </div>
              <div className="about-img--side about-img--back">
                <div className="about-text about-text-img">
                  <h1>Gude!</h1>
                  <p> aus Frankfurt am Main.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Skills />
    </div>
  );
}
