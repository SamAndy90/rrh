import Image from "next/image";
import Link from "next/link";

import { Container, LinkButton, Section, Title } from "common/ui";

import RewardsIMG from "./static/rewards.jpg";

export default function Rewards() {
  return (
    <Section size={"small"}>
      <Container>
        <div className={"flex gap-4"}>
          <div className={"relative hidden shrink-0 basis-1/3 sm:block"}>
            <Image
              src={RewardsIMG}
              alt={"Rewards Image"}
              fill
              className={"object-cover"}
            />
          </div>
          <div className={"flex flex-col gap-4 py-4"}>
            <Title className={"text-hub_green-700"}>
              Recruitment Resource Hub
            </Title>
            <Link
              href={"http://rewards.recruitmentresourcehub.co.uk"}
              target={"_blank"}
            >
              <LinkButton
                className={{
                  button: "inline text-xl font-medium text-hub_green-500",
                }}
              >
                Rewards
              </LinkButton>
            </Link>
            <p>
              The Recruitment Resource Hub Rewards scheme is free to all workers
              who are registered and in employment. The scheme offers discounts
              and loyalty points at thousands of retailers and offers one of the
              best memberships available at no cost.
            </p>
            <p className={"text-xl font-medium"}>
              Enjoy all these great features below
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
