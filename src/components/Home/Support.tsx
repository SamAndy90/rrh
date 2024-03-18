import Image from "next/image";
import Link from "next/link";
import { MainUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

import BgIMG from "./static/support-bg.jpg";

export default function Support() {
  return (
    <Section size={"small"} className={"relative -z-0 bg-black"}>
      <Image
        src={BgIMG}
        alt={"Background Image"}
        fill
        className={"-z-0 object-cover opacity-40"}
      />
      <Container>
        <div
          className={
            "relative z-10 flex flex-col justify-between gap-x-4 gap-y-10 py-8 text-white sm:flex-row"
          }
        >
          <div className={"basis-1/2 drop-shadow-xl"}>
            <Title size={"6xl"} className={"mb-4 sm:mb-8"}>
              Advice and support
            </Title>
            <p className={"text-xl opacity-90 md:text-2xl"}>
              First class advice and support for agencies and candidates
            </p>
          </div>
          <div className={"basis-5/12"}>
            <p className={"mb-8 text-xl opacity-90 drop-shadow-xl md:text-2xl"}>
              Our dedicated team are available to support your business. We
              offer support for Human Resources issues and provide Insurance for
              workers and accountancy and finance.
            </p>
            <Link href={MainUrl.getContactUs()}>
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
