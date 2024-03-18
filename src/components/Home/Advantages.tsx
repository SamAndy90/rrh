import Image from "next/image";

import { Container, Section, Title } from "common/ui";

import GrowIMG from "./static/advantages-icons/icon-grow.svg";
import RecruitIMG from "./static/advantages-icons/icon-recruit.svg";
import RetentionIMG from "./static/advantages-icons/icon-retention.svg";

export default function Advantages() {
  return (
    <Section size={"default"} className={"pt-0 md:pt-0"}>
      <Container>
        <div className={"flex flex-wrap gap-x-2 gap-y-4"}>
          <div
            className={
              "flex min-w-[290px] flex-1 flex-col items-center gap-3 rounded-lg px-3 py-4 text-center transition-shadow duration-200 hover:shadow"
            }
          >
            <div className={"relative h-[50px] w-[50px]"}>
              <Image
                src={RecruitIMG}
                alt={"Advantage Icon"}
                fill
                className={"object-contain"}
              />
            </div>
            <Title component={"h4"} size={"2xl"}>
              Candidate Recruitment
            </Title>
            <div
              className={
                "flex flex-col items-center gap-1 text-center opacity-90"
              }
            >
              <p>
                The Recruitment Resource Hub provide access to a range of
                leading job boards and candidate databases.
              </p>
              <p>
                This allows our clients to find the very best candidates
                available to fill the vacancies they have in a quick,
                professional and timely manner.
              </p>
              <p>
                We also provide dedicated staff to ensure your search for the
                right candidate is maximised.
              </p>
            </div>
          </div>
          <div
            className={
              "flex min-w-[290px] flex-1 flex-col items-center gap-3 rounded-lg px-3 py-4 text-center transition-shadow duration-200 hover:shadow"
            }
          >
            <div className={"relative h-[50px] w-[50px]"}>
              <Image
                src={RetentionIMG}
                alt={"Advantage Icon"}
                fill
                className={"object-contain"}
              />
            </div>
            <Title component={"h4"} size={"2xl"}>
              Staff Retention
            </Title>
            <div
              className={
                "flex flex-col items-center gap-1 text-center opacity-90"
              }
            >
              <p>
                The Recruitment Resource Hub Rewards scheme is free to all
                workers who are registered and in employment. They will still
                have free access to the rewards scheme even after they leave and
                find work elsewhere.
              </p>
              <p>
                The Rewards scheme offers discounts and loyalty points at
                thousands of retailers and offers one of the best memberships
                available at no cost.
              </p>
              <p>
                Our enhanced premium package is also available to certain
                workers who qualify and includes accident at work cover of up to{" "}
                <span className={"font-medium"}>£20,000</span>.
              </p>
            </div>
          </div>
          <div
            className={
              "flex min-w-[290px] flex-1 flex-col items-center gap-3 rounded-lg px-3 py-4 text-center transition-shadow duration-200 hover:shadow"
            }
          >
            <div className={"relative h-[50px] w-[50px]"}>
              <Image
                src={GrowIMG}
                alt={"Advantage Icon"}
                fill
                className={"object-contain"}
              />
            </div>
            <Title component={"h4"} size={"2xl"}>
              Grow Your Business
            </Title>
            <div
              className={
                "flex flex-col items-center gap-1 text-center opacity-90"
              }
            >
              <p>
                The Recruitment Resource Hub provide a range of services for our
                clients to utilise which enhance their opportunities to grow
                their business.
              </p>
              <p>
                Our resources help our clients become more competitive in their
                local area and also attract the best candidates.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
