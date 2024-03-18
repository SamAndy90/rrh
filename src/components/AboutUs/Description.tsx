import Image from "next/image";

import { Container, Section } from "common/ui";

import DescriptionIMG from "./static/about-us-main-image.png";

export default function Description() {
  return (
    <Section size={"default"}>
      <Container>
        <div
          className={
            "flex flex-col-reverse items-center gap-x-8 gap-y-4 sm:gap-y-6 md:flex-row lg:items-stretch"
          }
        >
          <p className={"leading-normal sm:text-lg md:py-4 lg:py-8 lg:text-xl"}>
            With over 25 years of experience in the Recruitment sector, The
            Recruitment Resource Hub brings together a host of resources that a
            recruitment business of any size can utilise to enhance their
            business. Specialising in candidate sourcing, candidate retention
            and business growth. The Recruitment Resource Hub work closely with
            each client and will tailor a package to suit each agencies needs.
          </p>
          <div className={"relative shrink-0 basis-full md:basis-1/2"}>
            <Image
              src={DescriptionIMG}
              alt={"About us main Image"}
              className={"w-full"}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
