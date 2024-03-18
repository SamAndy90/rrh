"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";

import { Button, Container, Section, Title } from "common/ui";

import BG1 from "./static/hero-bg1.webp";
import BG2 from "./static/hero-bg2.jpeg";

import "keen-slider/keen-slider.min.css";

const bg_images = [
  {
    url: BG1,
    alt: "Background Image",
  },
  {
    url: BG2,
    alt: "Background Image",
  },
];

export default function Hero() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      drag: false,
      defaultAnimation: {
        duration: 1500,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        slider.on("created", () => {
          timeout = setInterval(() => {
            slider.next();
          }, 5000);
        });
        slider.on("destroyed", () => {
          clearTimeout(timeout);
        });
      },
    ],
  );

  return (
    <Section className={"relative min-h-screen"}>
      <div
        ref={sliderRef}
        className={"keen-slider !absolute -z-10 h-full w-full bg-black"}
      >
        {bg_images.map((image) => {
          return (
            <div
              key={image.url.toString()}
              className={`keen-slider__slide relative h-full`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className={"aria-hidden object-cover opacity-50"}
              />
            </div>
          );
        })}
      </div>
      <Container>
        <div
          className={
            "flex min-h-screen flex-col items-center justify-center gap-6 py-20 text-white md:gap-10"
          }
        >
          <Title component={"h1"} size={"8xl"} className={"font-medium"}>
            <div
              className={
                "text-base font-light uppercase sm:text-xl md:text-2xl"
              }
            >
              THE
            </div>
            <div className={"px-3 drop-shadow-xl"}>
              <div
                className={
                  "relative leading-[0.78] before:absolute before:-left-2 before:top-0 before:block before:h-full before:w-1 before:bg-hub_green-500 sm:before:-left-4 sm:before:w-2 md:before:w-3"
                }
              >
                Recruitment
              </div>
              <div className={"leading-tight "}>
                Resource{" "}
                <span
                  className={
                    "relative before:absolute before:bottom-1 before:left-0 before:block before:h-1 before:w-full before:bg-hub_green-500 sm:before:h-2 md:before:h-3"
                  }
                >
                  Hub
                </span>
              </div>
            </div>
          </Title>
          <p
            className={
              "mb-4 text-xl drop-shadow-xl sm:mb-6 sm:text-2xl md:mb-8 md:text-4xl md:font-medium"
            }
          >
            Recruit, Retain and Grow
          </p>
          <Link href={"/sign-up"} className={"w-full md:w-auto"}>
            <Button
              fullWidth
              className={{ button: "md:w-auto md:px-24" }}
              size={"large"}
            >
              Registration
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
