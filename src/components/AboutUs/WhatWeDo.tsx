import Image, { StaticImageData } from "next/image";

import { Container, Section, Title } from "common/ui";

import CardIMG4 from "./static/advice-and-support.jpg";
import CardIMG from "./static/business-growth.jpg";
import CardIMG2 from "./static/candidate-recruitment.jpg";
import CardIMG3 from "./static/staff-retention.jpg";

export default function WhatWeDo() {
  return (
    <Section size={"default"}>
      <Container>
        <div>
          <Title
            size={"6xl"}
            className={"mb-8 text-center font-garamond text-hub_green-700"}
          >
            What we do
          </Title>
          <div
            className={"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"}
          >
            {aboutCards.map((card) => {
              return (
                <Card key={card.title} title={card.title} image={card.image} />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export const aboutCards = [
  {
    image: CardIMG,
    title: "Business Growth",
  },
  {
    image: CardIMG2,
    title: "Recruitment",
  },
  {
    image: CardIMG3,
    title: "Staff Retention",
  },
  {
    image: CardIMG4,
    title: "Advice & Support",
  },
];

type CardProps = {
  image: StaticImageData;
  title: string;
};
export const Card = ({ image, title }: CardProps) => {
  return (
    <div
      className={
        "flex flex-col gap-4 rounded-lg px-3 py-4 transition-shadow duration-200 hover:shadow"
      }
    >
      <div className={"relative overflow-hidden rounded-lg pb-[50%]"}>
        <Image
          src={image}
          alt={"About Card Image"}
          fill
          className={"object-cover object-top"}
        />
      </div>
      <Title size={"2xl"} className={"text-center"}>
        {title}
      </Title>
    </div>
  );
};
