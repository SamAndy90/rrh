import Image from "next/image";

import { Container, Section, Title } from "common/ui";

import LineDecor from "./static/shape_line.svg";
import SquareDecor from "./static/shape_square.svg";

export default function AboutTitle() {
  return (
    <Section className={"relative bg-hub_green-800"}>
      <Container>
        <div className={"pb-20 pt-28 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36"}>
          <Title
            size={"7xl"}
            className={"text-center font-garamond font-medium text-white"}
          >
            About us
          </Title>
        </div>
      </Container>
      <Image
        src={LineDecor}
        alt={"Decor"}
        className={"absolute left-[60%] top-3"}
      />{" "}
      <Image
        src={SquareDecor}
        alt={"Decor"}
        className={"absolute bottom-0 left-0"}
      />
    </Section>
  );
}
