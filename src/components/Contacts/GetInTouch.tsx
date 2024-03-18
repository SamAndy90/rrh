import Image from "next/image";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";

import { Container, Section, Title } from "common/ui";

import GeoIcon from "./static/geo-icon.svg";
import MailIcon from "./static/mail-icon.svg";

export default function GetInTouch() {
  return (
    <Section size={"default"}>
      <Container>
        <div>
          <Title
            size={"7xl"}
            className={"mb-16 text-center font-garamond text-hub_green-800"}
          >
            Get in touch
          </Title>
          <div
            className={
              "mx-auto grid max-w-[1120px] grid-cols-1 gap-y-6 lg:grid-cols-3"
            }
          >
            <div className={"flex flex-col items-center gap-4 px-3"}>
              <div
                className={
                  "flex h-20 w-20 items-center justify-center rounded-full bg-hub_green-50"
                }
              >
                <Image src={GeoIcon} alt={"Icon"} />
              </div>
              <Title size={"2xl"}>Our Address</Title>
              <div
                className={
                  "flex flex-col items-center gap-0.5 text-center opacity-60"
                }
              >
                <p className={""}>6 Perth House</p>
                <p>Corby Gate Business Park</p>
                <p>Priors Haw Road</p>
                <p>Corby</p>
                <p>NN17 5JG</p>
              </div>
            </div>
            <div className={"flex flex-col items-center gap-4 px-3"}>
              <div
                className={
                  "flex h-20 w-20 items-center justify-center rounded-full bg-hub_green-50"
                }
              >
                <FiPhone className={"h-8 w-8 text-hub_green-600"} />
              </div>
              <Title size={"2xl"}>Phone number</Title>
              <div className={"flex flex-col items-center gap-0.5 text-center"}>
                <p className={"opacity-60"}>Give us call at</p>
                <Link
                  className={"text-hub_green-700 hover:underline sm:text-lg"}
                  href={"tel:01536850332"}
                >
                  01536 850 332
                </Link>
              </div>
            </div>
            <div className={"flex flex-col items-center gap-4 px-3"}>
              <div
                className={
                  "flex h-20 w-20 items-center justify-center rounded-full bg-hub_green-50"
                }
              >
                <Image src={MailIcon} alt={"Icon"} />
              </div>
              <Title size={"2xl"}>Email address</Title>
              <div className={"flex flex-col items-center gap-0.5 text-center"}>
                <p className={"opacity-60"}>Write to us by mail</p>
                <Link
                  href={"mailto:admin@recruitmentresourcehub.co.uk"}
                  className={"text-hub_green-700 hover:underline sm:text-lg"}
                >
                  admin@recruitmentresourcehub.co.uk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
